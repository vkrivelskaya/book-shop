import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/core/models/cart-item';
import { CartService } from 'src/app/core/services/cart/cart.service';

import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';
import { OrderModel } from '../../../shared/models/order';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  orders!:  Observable<OrderModel[]>;

  constructor(
    private httpDataService: HttpDataService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders(): void {
    this.orders = this.httpDataService.getOrders();
  }
}
