import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';

import { CartItem } from 'src/app/core/models/cart-item';
import { OrderModel } from '../../models/order';

import { CartService } from 'src/app/core/services/cart/cart.service';
import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';

import { Payment } from 'src/app/shared/constants/payment';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent  implements OnInit {
  payments = Payment;
  order!: OrderModel;

  checkoutForm = this.formBuilder.group({
    address: '',
    payment: 'Payment.Cash',
    comments: '',
    orderID: 0,
  });
  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private httpDataService: HttpDataService,
    private location: Location,
  ) { }

  get items(): CartItem[] {
    return this.cartService.getCartItems();
  }

  get totalSum(): number {
    return this.cartService.getTotalSum();
  }

  get totalCount(): number {
    return this.cartService.getTotalCount();
  }

  ngOnInit() {
    this.cartService.getCartItems();
    this.cartService.getTotalCount();
    this.cartService.getTotalSum();
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    alert('Your order has been submitted');
    this.order = {
      items: this.items,
      sum: this.totalSum,
      quantity: this.totalCount,
      address: this.checkoutForm.value.address,
      payment: this.checkoutForm.value.payment,
      comments: this.checkoutForm.value.comments,
      id: this.checkoutForm.value.orderID,
    };
    this.httpDataService.addOrder(this.order)
      .subscribe(() => {
        this.goBack();
        this.cartService.removeAllBooks();
      });
  }
}
