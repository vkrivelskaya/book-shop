import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { BookModel } from 'src/app/core/models/book';
import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit {

  books!:  Observable<BookModel[]>;

  constructor(
    private httpDataService: HttpDataService,
    ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.httpDataService.getBooks();
  }

  addBook(book: BookModel): void {

    // this.httpDataService.addBook(book)
    //   .subscribe(book => {
    //     this.books.push(book);
    //   });
  }

  onAddBookClick() {

  }
}
