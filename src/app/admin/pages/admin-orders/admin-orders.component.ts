import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from 'src/app/store/state/app.state';
import { GetOrders } from '../../store/actions/admin-order.actions';
import { selectOrdersList } from '../../store/selectors/admin-order.selectors';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss'],
})
export class AdminOrdersComponent implements OnInit {
  orders = this.store.pipe(select(selectOrdersList));

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(GetOrders());;
  }
}
