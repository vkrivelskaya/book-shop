import { BookModel } from 'src/app/core/models/book';

export class CartItem {
  book: BookModel;
  count: number;
  total: number;

  constructor(book: BookModel, count: number, total: number) {
    this.book = book;
    this.count = count;
    this.total = total;
  }

  static clone(other: CartItem) {
    return new CartItem(other.book, other.count, other.total);
  }

  get bookPrice(): number {
    return this.book.price;
  }

  get bookName(): string {
    return this.book.name;
  }
}
