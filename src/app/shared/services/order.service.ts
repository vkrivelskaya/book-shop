import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable(
)
export class OrderService {
  orders: Order[] = [];
  constructor() { }

  addOrder(order: Order): void {
    this.orders = [...this.orders, order]
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
