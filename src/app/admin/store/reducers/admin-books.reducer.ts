import { createReducer, on } from '@ngrx/store';

import * as AdminPageActions from '../actions/admin-books.actions';
import { initialAdminBookState } from '../state/admin-books.state';

export const adminBooksReducers = createReducer (
  initialAdminBookState,
  on(AdminPageActions.BookAddedSuccess,
    (state, { selectedBook }) => ({ ...state, selectedBook })),
  on(AdminPageActions.BookAddedError,
    (state) => ({ ...state })),
  on(AdminPageActions.BookUpdatedSuccess,
    (state, { selectedBook }) => ({ ...state, selectedBook })),
  on(AdminPageActions.BookUpdatedError,
    (state) => ({ ...state })),
);
