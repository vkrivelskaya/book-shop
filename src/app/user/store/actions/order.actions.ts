import { createAction, props } from '@ngrx/store';

import { OrderModel } from '../../../shared/models/order';

export const AddOrderRequest = createAction (
  '[Create Order] Add Order Request',
  props<{ selectedOrder: OrderModel }>(),
);

export const OrderAddedSuccess = createAction (
  '[Create Order] Order Added Success',
  props<{ selectedOrder: OrderModel }>(),
);
