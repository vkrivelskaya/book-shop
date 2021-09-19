import { Action, combineReducers } from '@ngrx/store';

import * as adminOrder from './admin-order.reducer';
import * as adminBook from './admin-books.reducer';
import { AdminOrdersState, initialAdminOrdersState } from '../state/admin-orders.state';
import { AdminBookState, initialAdminBookState } from '../state/admin-books.state';

export interface State {
  order: AdminOrdersState;
  book: AdminBookState;
}

export const initialAdminState: State = {
  order: initialAdminOrdersState,
  book: initialAdminBookState,
};

export function reducers(state: State, action: Action) {
  return combineReducers({
    order: adminOrder.adminOrdersReducers,
    book: adminBook.adminBooksReducers,
  })(state, action);
}

export {
  adminOrder,
  adminBook,
};
