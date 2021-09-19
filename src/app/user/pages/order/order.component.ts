import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';

import { CartItem } from '../../../core/models/cart-item';
import { OrderModel } from '../../../shared/models/order';

import { CartService } from '../../../core/services/cart/cart.service';
import { Payment } from '../../../shared/constants/payment';

import { AppState } from 'src/app/store/state/app.state';
import { AddOrderRequest } from '../../store/actions/order.actions';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent  implements OnInit {
  payments = Payment;
  order: OrderModel;
  checkoutForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private location: Location,
    private store: Store<AppState>,
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

  ngOnInit(): void {
    this.cartService.getCartItems();
    this.cartService.getTotalCount();
    this.cartService.getTotalSum();
    this.checkoutForm = this.formBuilder.group({
      address: '',
      payment: 'Payment.Cash',
      comments: '',
      orderID: 0,
    });
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
    this.store.dispatch(AddOrderRequest({ selectedOrder: this.order }));
    this.cartService.removeAllBooks();
  }
}
