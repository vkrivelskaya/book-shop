import { Injectable } from '@angular/core';
import { BOOKS } from '../constants';
import { BookModel } from '../models';



@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }
  getBooks() : BookModel[] {
    return BOOKS;
  }
}