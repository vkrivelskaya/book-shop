import { initialBookState } from '../state/book.state';
import * as BookPageActions from '../actions/book.actions';
import { createReducer, on } from '@ngrx/store';


export const booksReducers = createReducer (
  initialBookState,
  on(BookPageActions.GetBooksSuccess,
    (state, { books }) => ({ ...state, books })),
  on(BookPageActions.GetBooksError,
    (state) => ({ ...state, books: [] })),
  on(BookPageActions.GetBookSuccess,
    (state, { selectedBook }) => ({ ...state, selectedBook })),
  on(BookPageActions.GetBookError,
    (state) => ({ ...state, selectedBook: null })),
);
