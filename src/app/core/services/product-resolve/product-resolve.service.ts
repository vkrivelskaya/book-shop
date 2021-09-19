import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ActionsSubject, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {  take, map } from 'rxjs/operators';
import { ofType } from '@ngrx/effects';

import { FetchBook } from '../../../book/store/actions/book.actions';
import { AppState } from '../../../store/state/app.state';
import * as BooksActions from '../../../book/store/actions/book.actions';

import { BookModel } from '../../models/book';

@Injectable()
export class ProductResolveService implements Resolve<BookModel> {
  constructor(
    private store: Store<AppState>,
    private actionListener$: ActionsSubject,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<BookModel>|Promise<any>|any  {
    this.store.dispatch(FetchBook({ id: Number(route.paramMap.get('id')) }));
    return this.actionListener$.pipe(
      ofType(BooksActions.FetchBookSuccess),
      map(action => action.selectedBook),
      take(1),
    );
  }
}
