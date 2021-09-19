import { createReducer, on } from '@ngrx/store';

import { initialBookState } from '../state/book.state';
import * as BookPageActions from '../actions/book.actions';

export const booksReducers = createReducer (
  initialBookState,
  on(BookPageActions.FetchBooksSuccess, (state, { books }) => ({ ...state, books })),
  on(BookPageActions.FetchBooksError, (state) => ({ ...state, books: [] })),
  on(BookPageActions.FetchBookSuccess, (state, { selectedBook }) => {
    return ({ ...state, selectedBook });
  }),
  on(BookPageActions.FetchBookError, (state) => ({ ...state, selectedBook: null })),
);
