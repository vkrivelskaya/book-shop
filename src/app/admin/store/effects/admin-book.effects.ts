import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { BookModel } from 'src/app/core/models/book';

import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';
import { BookAddedError, BookAddedSuccess, BookUpdatedError, BookUpdatedSuccess } from '../actions/admin-books.actions';
import * as AdminActions from '../actions/admin-books.actions';
@Injectable ()
export class AdminBookEffects {
  constructor(
    private httpService: HttpDataService,
    private actions$: Actions,
  ) {}

  addBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.AddBookRequest),
      switchMap(({selectedBook}: {selectedBook: BookModel}) =>
        this.httpService.addBook(selectedBook).pipe(
          map(
            (book: BookModel) => BookAddedSuccess({ selectedBook: book }),
          ),
          catchError(() => of(BookAddedError())),
        ),
      ),
    ),
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.UpdateBookRequest),
      switchMap(({selectedBook}: {selectedBook: BookModel}) =>
        this.httpService.updateBook(selectedBook).pipe(
          map(
            (book: BookModel) => BookUpdatedSuccess({ selectedBook: book }),
          ),
          catchError(() => of(BookUpdatedError())),
        ),
      ),
    ),
  );
}
