import { RouterReducerState } from '@ngrx/router-store';

import { initialAdminState, State } from 'src/app/admin/store/reducers';
import { BookState, initialBookState } from 'src/app/book/store/state/book.state';
import { initialOrdersState, OrdersState } from 'src/app/shared/store/state/order.state';

export interface AppState {
  router?: RouterReducerState;
  books: BookState;
  admin: State;
  orders: OrdersState;
}

export const initialAppState = {
  books: initialBookState,
  admin: initialAdminState,
  orders: initialOrdersState,
};

export function getInitialAppState(): AppState {
  return initialAppState;
}
