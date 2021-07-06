import { OrderModel } from "src/app/shared/models/order";

export interface AdminOrdersState {
  orders: OrderModel[] | null;
  selectedOrder: OrderModel | null;
}

export const initialAdminOrdersState: AdminOrdersState = {
  orders: null,
  selectedOrder: null,
}
