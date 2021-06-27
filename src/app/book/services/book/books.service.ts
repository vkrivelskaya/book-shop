import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { BookModel } from 'src/app/core/models/book';
import { BookCategories, BOOKS } from '../../constants/books';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(): Observable<BookModel[]> {
    const books = of(BOOKS);
    return books;
  }

  getBook(id: number): Observable<BookModel> {
    let book = BOOKS.find(item => item.id === id);
    if (!book) {
      book = {
        name: '',
        description: '',
        price: 0,
        category: BookCategories.Fantasy,
        createDate: 0,
        isAvailable: false,
        id: 0,
      };
    }
    return of(book);
  }
}
