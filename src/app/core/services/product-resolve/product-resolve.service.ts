import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksService } from 'src/app/book/services/book/books.service';

import { BookModel } from '../../models/book';

@Injectable()
export class ProductResolveService implements Resolve<BookModel> {

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<BookModel>|Promise<any>|any  {
    return this.bookService.getBook(Number(route.paramMap.get('id')));
  }
}


