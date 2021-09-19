import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { BookState } from '../state/book.state';

export const selectBooks = createFeatureSelector<AppState, BookState>('books');

export const selectBooksList = createSelector (
  selectBooks,
  (bookState: BookState) => bookState.books,
);

export const selectSelectedBook = createSelector (
  selectBooks,
  (bookState: BookState) => bookState.selectedBook,
);
