import { Injectable } from '@angular/core';
import { BOOKS } from '../constants';
import { BookModel } from '../models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks() : Observable<BookModel[]> {
    const books = of(BOOKS);
    return books;
  }
}