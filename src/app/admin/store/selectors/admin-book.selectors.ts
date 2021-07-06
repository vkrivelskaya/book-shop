import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { State } from '../reducers';
import { AdminBookState } from '../state/admin-books.state';

export const selectAdmin = createFeatureSelector<AppState, State>('admin');
export const selectBooks = createSelector (
  selectAdmin,
  (adminState: State) => adminState.book,
);
export const selectBookList = createSelector (
  selectBooks,
  (adminBookState: AdminBookState) => adminBookState.books,
);

export const selectSelectedBook = createSelector (
  selectBooks,
  (adminBookState: AdminBookState) => adminBookState.selectedBook,
);
