import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/book/services/books.service';
import { CartService } from 'src/app/services/cart.service';
import { BookModel } from '../../../models/models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books!:  Observable<BookModel[]>;

  constructor(private booksService: BooksService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.booksService.getBooks();
  }

  onBookOrdered(book: BookModel): void {
    this.cartService.addBook(book);
  }
}
