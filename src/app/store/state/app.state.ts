import { RouterReducerState } from '@ngrx/router-store';
import { initialAdminState, State } from 'src/app/admin/store/reducers';
import { BookState, initialBookState } from 'src/app/book/store/state/book.state';

export interface AppState {
  router?: RouterReducerState;
  books: BookState;
  admin: State;
}

export const initialAppState = {
  books: initialBookState,
  admin: initialAdminState,
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
