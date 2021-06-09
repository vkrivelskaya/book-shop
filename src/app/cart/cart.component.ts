import { Component, OnInit, Input } from '@angular/core';
import { Cart, CartItem } from '../models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart!: Cart;
  title:string = 'Cart';
  
  constructor() { }

  ngOnInit(): void {
  }

  onCartItemDelete(cartItem: CartItem) {
    this.cart.delete(cartItem);
  }
}
