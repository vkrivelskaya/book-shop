import { createAction, props } from '@ngrx/store';

import { BookModel } from 'src/app/core/models/book';

export const AddBookRequest = createAction (
  '[Create/Edit Book] Add Book Request',
  props<{ selectedBook: BookModel }>(),
);

export const BookAddedSuccess = createAction (
  '[Create/Edit Book] Book Added Success',
  props<{ selectedBook: BookModel }>(),
);

export const BookAddedError = createAction (
  '[Create/Edit Book] Book Added Error',
);

export const UpdateBookRequest = createAction (
  '[Create/Edit Book] Update Book Request',
  props<{ selectedBook: BookModel }>(),
);

export const BookUpdatedSuccess = createAction (
  '[Create/Edit Book] Book Updated Success',
  props< { selectedBook: BookModel }>(),
);

export const BookUpdatedError = createAction (
  '[Create/Edit Book] Book Updated Error',
);
