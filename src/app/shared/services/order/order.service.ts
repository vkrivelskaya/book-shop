import { Injectable } from '@angular/core';
import { OrderModel } from '../../models/order';

@Injectable(
)
export class OrderService {
  orders: OrderModel[] = [];
  constructor() { }

  addOrder(order: OrderModel): void {
    this.orders = [...this.orders, order];
  }

  getOrders(): OrderModel[] {
    return this.orders;
  }
}
