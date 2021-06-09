import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})

export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Output() deleted = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButton(): void {
    this.deleted.emit(this.cartItem);
  }

  onCountChange(): void {
    this.cartItem.total = this.cartItem.count * this.cartItem.book.price;
  }
}