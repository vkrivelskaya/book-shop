import { Injectable } from '@angular/core';
import { BookModel } from '../../core/models/book';
import { Observable, of } from 'rxjs';
import { BookCategories, BOOKS } from '../constants/books';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(): Observable<BookModel[]> {
    const books = of(BOOKS);
    return books;
  }

  getBook(id: number): Observable<BookModel> {
    let book = BOOKS.find(book => book.id === id);
    if (!book) {
      book = {
        name: '',
        description: '',
        price: 0,
        category: BookCategories.Fantasy,
        createDate: 0,
        isAvailable: false,
        id: 0
      };
    }
    return of(book);
  }
}
