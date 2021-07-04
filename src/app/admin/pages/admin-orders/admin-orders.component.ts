import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CartService } from '../../../core/services/cart/cart.service';
import { HttpDataService } from '../../../core/services/http-data/http-data.service';

import { OrderModel } from '../../../shared/models/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  orders:  Observable<OrderModel[]>;

  constructor(
    private httpDataService: HttpDataService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.orders = this.getOrders();
  }

  getOrders(): Observable<OrderModel[]> {
    return this.httpDataService.getOrders();
  }
}
