import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BookModel } from '../../../core/models/book';
import { HttpDataService } from '../../../core/services/http-data/http-data.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {
  books:  Observable<BookModel[]>;

  constructor(
    private httpDataService: HttpDataService,
  ) { }

  ngOnInit(): void {
    this.books = this.getBooks();
  }

  getBooks(): Observable<BookModel[]> {
    return this.httpDataService.getBooks();
  }
}
