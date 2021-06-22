import { Component, OnInit } from '@angular/core';
import { CartItemModel } from 'src/app/core/models/cart-item';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  title = 'Cart';
  orderedBy = 'bookPrice';
  orderingDirection = 'Descending';

  constructor(private cartService: CartService) { }

  get items(): CartItemModel[] {
    return this.cartService.getCartItems();
  }

  get totalSum(): number {
    return this.cartService.getTotalSum();
  }

  get totalCount(): number {
    return this.cartService.getTotalCount();
  }

  ngOnInit(): void {
    this.cartService.getTotalCount();
    this.cartService.getTotalSum();
  }

  onCartItemDelete(cartItem: CartItemModel) {
    this.cartService.removeBook(cartItem);
  }

  onCartItemCountChange(cartItem: CartItemModel) {
    this.cartService.changeItemTotalSum(cartItem);
    this.cartService.updateCartData();
  }

  onDeleteButtonClick() {
    this.cartService.removeAllBooks();
  }

  onIncreaseQuantity(cartItem: CartItemModel) {
    this.cartService.increaseQuantity(cartItem);
  }

  onDecreaseQuantity(cartItem: CartItemModel) {
    this.cartService.decreaseQuantity(cartItem);
  }
}
