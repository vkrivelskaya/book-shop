import { Component, OnInit, Input } from '@angular/core';
import { BOOKS } from '../constants';
import { BookModel, Cart } from '../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books = BOOKS;
  @Input() cart!: Cart;

  constructor() { }

  ngOnInit(): void {
  }

  onBookOrdered(book: BookModel): void {
    this.cart.add(book);
  }

}
