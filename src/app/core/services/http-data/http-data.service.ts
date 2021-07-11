import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BookModel } from '../../models/book';
import { OrderModel } from '../../../shared/models/order';
import { booksUrl, ordersUrl } from '../../constants/urls';

@Injectable()
export class HttpDataService {
  private booksUrl = booksUrl;
  private ordersUrl = ordersUrl;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
  ) { }

  getBooks(): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(this.booksUrl);
  }

  getBook(id: number): Observable<BookModel> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<BookModel>(url);
  }

  updateBook(book: BookModel): Observable<BookModel> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put<BookModel>(url, book, this.httpOptions);
  }

  addBook(book: BookModel): Observable<BookModel> {
    return this.http.post<BookModel>(this.booksUrl, book, this.httpOptions);
  }

  addOrder(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this.ordersUrl, order, this.httpOptions);
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.ordersUrl);
  }
}
