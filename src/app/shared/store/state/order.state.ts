import { OrderModel } from '../../models/order';

export interface OrdersState {
  orders: OrderModel[] | null;
  selectedOrder: OrderModel | null;
}

export const initialOrdersState: OrdersState = {
  orders: null,
  selectedOrder: null,
};
