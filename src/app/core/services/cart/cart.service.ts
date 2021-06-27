import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BookModel } from '../../models/book';
import { CartItem } from '../../models/cart-item';

@Injectable()
export class CartService {
  items: CartItem[] = [];
  totalQuantity = 0;
  totalSum = 0;

  constructor() { }

  addBook(book: BookModel) {
    const existingItemIndex = this.items.findIndex((el) => el.book === book);

    if(existingItemIndex >= 0) {
      const item = this.items[existingItemIndex];
      const newItem = CartItem.clone(item);
      newItem.count++;
      newItem.total += item.book.price;
      this.items[existingItemIndex] = newItem;
    } else {
      this.items = [...this.items, new CartItem(book, 1, book.price)];
    }

    this.updateCartData();
  }

  removeBook(cartItem: CartItem) {
    this.items = this.items.reduce((acc: CartItem[], el) => {
      return el !== cartItem ? [...acc, el]: acc;
    }, []);
    this.updateCartData();
  }

  increaseQuantity(cartItem: CartItem) {
    cartItem.count += 1;
    this.changeItemTotalSum(cartItem);
    this.updateCartData();
  }

  decreaseQuantity(cartItem: CartItem) {
    cartItem.count -= 1;
    this.changeItemTotalSum(cartItem);
    this.updateCartData();
  }

  removeAllBooks() {
    this.items.length = 0;
    this.updateCartData();
  }

  updateCartData() {
    this.totalQuantity = this.items.reduce((acc, el) =>  (acc + el.count), 0);
    this.totalSum = this.items.reduce((acc, el) =>  (acc + el.total), 0);
  }

  changeItemTotalSum(cartItem: CartItem) {
    cartItem.total = cartItem.count * cartItem.book.price;
  }

  getTotalSum() {
    return this.totalSum;
  }

  getTotalCount() {
    return this.totalQuantity;
  }

  getCartItems() {
    return this.items;
  }
}
