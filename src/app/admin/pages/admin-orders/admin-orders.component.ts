import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/models/order';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[] = [];
  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }
}
