import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { BookModel } from "src/app/core/models/book";
import { HttpDataService } from "src/app/core/services/http-data/http-data.service";
import { AppState } from "src/app/store/state/app.state";
import { GetBooks, GetBooksError, GetBooksSuccess, BookActionsEnum, GetBook, GetBookError, GetBookSuccess } from "../actions/book.actions";

@Injectable ()
export class BookEffects {
  constructor (
    private httpService: HttpDataService,
    private actions$: Actions,
    private store: Store<AppState>,
  ) {}

  getBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetBooks>(BookActionsEnum.GetBooks),
      switchMap(() =>
        this.httpService.getBooks().pipe(
          map(
            (books) => new GetBooksSuccess(books)
          ),
          catchError(() => of(new GetBooksError()))
        )
      )
    )
  )

  getBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType<GetBook>(BookActionsEnum.GetBook),
      switchMap((action: GetBook) =>
      this.httpService.getBook(action.payload.id).pipe(
        map(
          (book: BookModel) => new GetBookSuccess(book)
        ),
        catchError((e) => of(new GetBookError()))
      )
    )
    )
  )
}