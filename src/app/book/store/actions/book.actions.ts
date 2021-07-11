import { createAction, props } from '@ngrx/store';
import { BookModel } from '../../../core/models/book';

export const FetchBooks = createAction (
  '[Book] Get Books',
);

export const FetchBooksSuccess = createAction (
  '[Book] Get Books Success',
  props<{ books: BookModel[] }>(),
);

export const FetchBooksError = createAction (
  '[Books] Get Books Error',
);

export const FetchBook = createAction (
  '[Book] Get Book',
  props<{ id: number }>(),
);

export const FetchBookSuccess = createAction (
  '[Book] Get Book Success',
  props<{ selectedBook: BookModel }>(),
);

export const FetchBookError = createAction (
  '[Book] Get Book Error',
);
