import { createReducer, on } from '@ngrx/store';

import * as AdminPageOrderActions from '../actions/admin-order.actions';
import { initialAdminOrdersState } from '../state/admin-orders.state';

export const adminOrdersReducers = createReducer (
  initialAdminOrdersState,
  on(AdminPageOrderActions.FetchOrdersSuccess, (state, { orders }) => ({ ...state, orders })),
  on(AdminPageOrderActions.FetchOrdersError, (state) => ({ ...state, orders: [] })),
);
