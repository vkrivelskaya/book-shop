import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BookModel } from '../../models/book';
import { Observable } from 'rxjs';
import { OrderModel } from 'src/app/shared/models/order';

@Injectable()
export class HttpDataService {
  private booksUrl = 'http://localhost:3000/books';
  private ordersUrl = 'http://localhost:3000/orders';
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

  updateBook(book: BookModel): Observable<any> {
    const url = `${this.booksUrl}/${book.id}`;
    return this.http.put(url, book, this.httpOptions);
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
