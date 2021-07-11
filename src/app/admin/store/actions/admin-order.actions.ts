import { createAction, props } from '@ngrx/store';
import { OrderModel } from 'src/app/shared/models/order';

export const FetchOrders = createAction (
  '[Order] Get Orders',
);

export const FetchOrdersSuccess = createAction (
  '[Order] Get Orders Success',
  props<{ orders: OrderModel[] }>(),
);

export const FetchOrdersError = createAction (
  '[Order] Get Orders Error',
);
