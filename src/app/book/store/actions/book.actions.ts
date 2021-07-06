import { createAction, props } from '@ngrx/store';
import { BookModel } from '../../../core/models/book';

export const GetBooks = createAction (
  '[Book] Get Books',
);

export const GetBooksSuccess = createAction (
  '[Book] Get Books Success',
  props<{ books: BookModel[] }>(),
);

export const GetBooksError = createAction (
  '[Books] Get Books Error',
);

export const GetBook = createAction (
  '[Book] Get Book',
  props<{ id: number }>(),
);

export const GetBookSuccess = createAction (
  '[Book] Get Book Success',
  props<{ selectedBook: BookModel }>(),
);

export const GetBookError = createAction (
  '[Book] Get Book Error',
);
