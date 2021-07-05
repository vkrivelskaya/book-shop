import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { GetBook } from '../../../book/store/actions/book.actions';
import { selectSelectedBook } from '../../../book/store/selectors/book.selector';
import { AppState } from '../../../store/state/app.state';

import { BookModel } from '../../models/book';

@Injectable()
export class ProductResolveService implements Resolve<BookModel> {

  constructor(
    private store: Store<AppState>,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<BookModel>|Promise<any>|any  {
    this.store.dispatch(GetBook({ id: Number(route.paramMap.get('id')) }));
    return this.store.pipe(
      select(selectSelectedBook),
      filter(data => !!data),
      take(1),
    );
  }
}


