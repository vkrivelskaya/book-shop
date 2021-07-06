import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BookModel } from '../../../core/models/book';
import { HttpDataService } from '../../../core/services/http-data/http-data.service';
import { GetBooksError, GetBooksSuccess } from '../actions/book.actions';
import { GetBookError, GetBookSuccess } from '../actions/book.actions';
import * as BookActions from '../actions/book.actions';

@Injectable ()
export class BookEffects {
  constructor(
    private httpService: HttpDataService,
    private actions$: Actions,
  ) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.GetBooks),
      switchMap(() =>
        this.httpService.getBooks().pipe(
          map(
            (books) => GetBooksSuccess({ books: books }),
          ),
          catchError(() => of(GetBooksError())),
        ),
      ),
    ),
  );

  getBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.GetBook),
      switchMap((action: any) =>
        this.httpService.getBook(action.id).pipe(
          map(
            (book: BookModel) => GetBookSuccess({ selectedBook: book }),
          ),
          catchError(() => of(GetBookError())),
        ),
      ),
    ),
  );
}
