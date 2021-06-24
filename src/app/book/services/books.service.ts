import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookModel } from '../../core/models/book';
import { Observable, of } from 'rxjs';
import { BookCategories, BOOKS } from '../constants/books';

@Injectable()
export class BooksService {

  private booksUrl = 'api/books';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
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
