import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BookModel } from '../../../core/models/book';
import { HttpDataService } from '../../../core/services/http-data/http-data.service';
import { FetchBooksError, FetchBooksSuccess } from '../actions/book.actions';
import { FetchBookError, FetchBookSuccess } from '../actions/book.actions';
import * as BookActions from '../actions/book.actions';

@Injectable ()
export class BookEffects {
  constructor(
    private httpService: HttpDataService,
    private actions$: Actions,
  ) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.FetchBooks),
      switchMap(() =>
        this.httpService.getBooks().pipe(
          map(
            (books) => FetchBooksSuccess({ books: books }),
          ),
          catchError(() => of(FetchBooksError())),
        ),
      ),
    ),
  );

  getBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.FetchBook),
      switchMap((action: {id: number}) =>
        this.httpService.getBook(action.id).pipe(
          map(
            (book: BookModel) => FetchBookSuccess({ selectedBook: book }),
          ),
          catchError(() => of(FetchBookError())),
        ),
      ),
    ),
  );
}
