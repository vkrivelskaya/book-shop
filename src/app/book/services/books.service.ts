import { Injectable } from '@angular/core';
import { BookModel } from '../../core/models/book';
import { Observable, of } from 'rxjs';
import { BOOKS } from '../constants/books';

@Injectable()
export class BooksService {

  constructor() { }
  getBooks(): Observable<BookModel[]> {
    const books = of(BOOKS);
    return books;
  }
}
