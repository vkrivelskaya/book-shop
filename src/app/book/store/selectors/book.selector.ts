import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { BookState } from '../state/book.state';

export const selectBooks = (state: AppState) => state.books;
export const selectBooksList = createSelector (
  selectBooks,
  (bookState: BookState) => bookState.books,
);

export const selectSelectedBook = createSelector (
  selectBooks,
  (bookState: BookState) => bookState.selectedBook,
);
