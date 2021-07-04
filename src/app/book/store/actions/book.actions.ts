import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { BookModel } from '../../../core/models/book';

export enum BookActionsEnum {
  GetBooks = '[Book] Get Books',
  GetBooksSuccess = '[Book] Get Books Success',
  GetBooksError = '[Books] Get Books Error',

  GetBook = '[Book] Get Book',
  GetBookSuccess = '[Book] Get Book Success',
  GetBookError = '[Book] Get Book Error',

  AddBookRequest = '[Create/Edit Book] Add Book Request',
  BookAddedSuccess = '[Create/Edit Book] Book Added Success',
  BookAddedError = '[Create/Edit Book] Book Added Error',

  UpdateBookRequest = '[Create/Edit Book] Update Book Request',
  BookUpdatedSuccess = '[Create/Edit Book] Book Updated Success',
  BookUpdatedError = '[Create/Edit Book] Book Updated Error'
}

export class GetBooks implements Action {
  readonly type = BookActionsEnum.GetBooks;
}

export class GetBooksSuccess implements Action {
  readonly type = BookActionsEnum.GetBooksSuccess;
  constructor(public payload: BookModel[]) {}
}

export class GetBooksError implements Action {
  readonly type = BookActionsEnum.GetBooksError;
}

export class GetBook implements Action {
  readonly type = BookActionsEnum.GetBook;
  constructor(public payload: { id: number }) {}
}

export class GetBookSuccess implements Action {
  readonly type = BookActionsEnum.GetBookSuccess;
  constructor(public payload: BookModel) {}
}

export class GetBookError implements Action {
  readonly type = BookActionsEnum.GetBookError;
}

export class AddBookRequest implements Action {
  readonly type = BookActionsEnum.AddBookRequest;

  constructor(public payload: { book: BookModel }) {}
}

export class BookAddedSuccess implements Action {
  readonly type = BookActionsEnum.BookAddedSuccess;

  constructor(public payload: { book: BookModel }) {}
}

export class BookAddedError implements Action {
  readonly type = BookActionsEnum.BookAddedError;
}

export class UpdateBookRequest implements Action {
  readonly type = BookActionsEnum.UpdateBookRequest;

  constructor(public payload: { book: BookModel }) {}
}

export class BookUpdatedSuccess implements Action {
  readonly type = BookActionsEnum.BookUpdatedSuccess;

  constructor(public payload: { book: Update<BookModel> }) {}
}

export class BookUpdatedError implements Action {
  readonly type = BookActionsEnum.BookUpdatedError;
}


export type BookActions = GetBook | GetBookSuccess | GetBookError | GetBooks | GetBooksSuccess | GetBooksError;
