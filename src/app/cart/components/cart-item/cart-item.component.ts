import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '../../../models/models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Output() deleted = new EventEmitter<CartItem>();
  @Output() countChanged = new EventEmitter<CartItem>();
  @Output() increaseQuantity = new EventEmitter<CartItem>();
  @Output() decreaseQuantity = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.cartItem);
  }

  onDeleteButton(): void {
    this.deleted.emit(this.cartItem);
  }

  onCountChange(): void {
    this.countChanged.emit(this.cartItem);
  }

  onIncreaseQuantity(): void {
    this.increaseQuantity.emit(this.cartItem);
  }

  onDecreaseQuantity(): void {
    this.decreaseQuantity.emit(this.cartItem);
  }
}