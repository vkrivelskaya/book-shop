import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { BookModel } from '../../models/book';
import { HttpDataService } from '../http-data/http-data.service';

@Injectable()
export class ProductResolveService implements Resolve<BookModel> {

  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataService,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<BookModel>|Promise<any>|any  {
    return this.httpDataService.getBook(Number(route.paramMap.get('id')));
  }
}


