import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { AdminBookState } from '../state/admin-books.state';

export const selectAdminBooks = createFeatureSelector<AppState, AdminBookState>('adminBooks');
export const selectBooksList = createSelector (
  selectAdminBooks,
  (AdminBookState: AdminBookState) => AdminBookState.books,
);

export const selectSelectedAdminBook = createSelector (
  selectAdminBooks,
  (AdminBookState: AdminBookState) => AdminBookState.selectedBook,
);