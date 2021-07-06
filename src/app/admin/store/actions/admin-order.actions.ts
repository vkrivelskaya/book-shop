import { createAction, props } from "@ngrx/store"
import { OrderModel } from "src/app/shared/models/order"

export const GetOrders = createAction (
  '[Order] Get Orders',
)

export const GetOrdersSuccess = createAction (
  '[Order] Get Orders Success',
  props<{ orders: OrderModel[] }>()
)

export const GetOrdersError = createAction (
  '[Order] Get Orders Error',
)
