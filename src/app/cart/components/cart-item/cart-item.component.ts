import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { CartItem } from '../../../core/models/cart-item';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() itemDelete = new EventEmitter<CartItem>();
  @Output() countChange = new EventEmitter<CartItem>();
  @Output() quantityIncrease = new EventEmitter<CartItem>();
  @Output() quantityDecrease = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cartItem);
  }

  onDeleteButton(): void {
    this.itemDelete.emit(this.cartItem);
  }

  onCountChange(): void {
    this.countChange.emit(this.cartItem);
  }

  onIncreaseQuantity(): void {
    this.quantityIncrease.emit(this.cartItem);
  }

  onDecreaseQuantity(): void {
    this.quantityDecrease.emit(this.cartItem);
  }
}
