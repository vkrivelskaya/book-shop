import { Injectable } from '@angular/core';
import { BookModel } from '../models/book';
import { CartItemModel } from '../models/cart-item';

@Injectable()
export class CartService {
  items: CartItemModel[] = [];
  totalQuantity = 0;
  totalSum = 0;

  constructor() { }

  addBook(book: BookModel) {
    const existingItemIndex = this.items.findIndex((el) => el.book === book);

    if(existingItemIndex >= 0) {
      const item = this.items[existingItemIndex];
      // const newItem = CartItem.clone(item);
      const newItem = { ...item };
      newItem.count++;
      newItem.total += item.book.price;
      this.items[existingItemIndex] = newItem;
    } else {
      //this.items = [...this.items, new CartItem(book, 1, book.price)];
      this.items = [...this.items, { book, count: 1, total: book.price }];
    }

    this.updateCartData();
  }

  removeBook(cartItem: CartItemModel) {
    this.items = this.items.reduce((acc: CartItemModel[], el) => {
      return el !== cartItem ? [...acc, el]: acc;
    }, []);
    this.updateCartData();
  }

  increaseQuantity(cartItem: CartItemModel) {
    cartItem.count += 1;
    this.changeItemTotalSum(cartItem);
    this.updateCartData();
  }

  decreaseQuantity(cartItem: CartItemModel) {
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

  changeItemTotalSum(cartItem: CartItemModel) {
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
