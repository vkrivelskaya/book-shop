import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/core/services/cart.service';

import { Payment } from 'src/app/shared/constants/payment';
import { Order } from '../../models/order';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  payments = Payment;
  order!: Order;

  checkoutForm = this.formBuilder.group({
    address: '',
    payment: 'Payment.Cash',
    comments: '',
  });
  constructor(
    private orderService: OrderService,
    private formBuilder: FormBuilder,
    private cartService: CartService,
  ) { }

  onSubmit(): void {
    this.cartService.removeAllBooks();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.order = {
      address: this.checkoutForm.value.address,
      payment: this.checkoutForm.value.payment,
      comments: this.checkoutForm.value.comments,
    };
    this.checkoutForm.reset();
    this.orderService.addOrder(this.order);
  }
}
