import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/core/services/cart/cart.service';
import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';
import { BookModel } from '../../../core/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books!:  Observable<BookModel[]>;

  constructor(
    private cartService: CartService,
    private httpDataService: HttpDataService,
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.httpDataService.getBooks();
  }

  onBookOrdered(book: BookModel): void {
    this.cartService.addBook(book);
  }
}
