import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { State } from '../reducers';
import { AdminOrdersState } from '../state/admin-orders.state';

export const selectAdmin = createFeatureSelector<AppState, State>('admin');
export const selectOrders = createSelector (
  selectAdmin,
  (adminState: State) => adminState.order,
);
export const selectOrdersList = createSelector (
  selectOrders,
  (adminOrderState: AdminOrdersState) => adminOrderState.orders,
);
