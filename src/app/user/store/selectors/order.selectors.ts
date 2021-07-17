import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from 'src/app/store/state/app.state';
import { OrdersState } from '../state/order.state';

export const selectOrders = createFeatureSelector<AppState, OrdersState>('orders');

export const selectOrdersList = createSelector (
  selectOrders,
  (ordersState: OrdersState) => ordersState.orders,
);

export const selectSelectedOrder = createSelector (
  selectOrders,
  (ordersState: OrdersState) => ordersState.selectedOrder,
);
