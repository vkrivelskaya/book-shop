import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { BookModel } from '../../../core/models/book';

export const GetBooks = createAction (
  '[Book] Get Books',
)

export const GetBooksSuccess = createAction (
  '[Book] Get Books Success',
  props<{ books: BookModel[] }>()
)

export const GetBooksError = createAction (
  '[Books] Get Books Error',
)

export const GetBook = createAction (
  '[Book] Get Book',
  props<{ id: number }>()
)

export const GetBookSuccess = createAction (
  '[Book] Get Book Success',
  props<{ selectedBook: BookModel }>()
)

export const GetBookError = createAction (
  '[Book] Get Book Error',
)

export const AddBookRequest = createAction (
  '[Create/Edit Book] Add Book Request',
  props<{ selectedBook: BookModel }>()
)

export const BookAddedSuccess = createAction (
  '[Create/Edit Book] Book Added Success',
  props<{ selectedBook: BookModel }>()
)

export const BookAddedError = createAction (
  '[Create/Edit Book] Book Added Error',
)

export const UpdateBookRequest = createAction (
  '[Create/Edit Book] Update Book Request',
  props<{ selectedBook: BookModel }>()
)

export const BookUpdatedSuccess = createAction (
  '[Create/Edit Book] Book Updated Success',
  props< { selectedBook: Update<BookModel> }>()
)

export const BookUpdatedError = createAction (
  '[Create/Edit Book] Book Updated Error',
)
