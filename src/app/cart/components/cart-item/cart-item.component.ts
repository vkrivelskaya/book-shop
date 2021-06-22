import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItemModel } from 'src/app/core/models/cart-item';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItemModel;
  @Output() itemDelete = new EventEmitter<CartItemModel>();
  @Output() countChange = new EventEmitter<CartItemModel>();
  @Output() quantityIncrease = new EventEmitter<CartItemModel>();
  @Output() quantityDecrease = new EventEmitter<CartItemModel>();

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
