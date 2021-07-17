import { createReducer, on } from '@ngrx/store';

import { initialOrdersState } from '../state/order.state';
import * as OrderPageActions from '../actions/order.actions';

export const orderReducers = createReducer (
  initialOrdersState,
  on(OrderPageActions.OrderAddedSuccess, (state, { selectedOrder }) => {
    return ({ ...state, selectedOrder });
  }),
);
