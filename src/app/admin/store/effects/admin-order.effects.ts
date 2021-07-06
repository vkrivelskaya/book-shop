import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HttpDataService } from '../../../core/services/http-data/http-data.service';
import * as AdminOrdersAction from '../actions/admin-order.actions';

@Injectable ()
export class AdminOrderEffects {
  constructor(
    private httpService: HttpDataService,
    private actions$: Actions,
  ) {}

  getOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminOrdersAction.GetOrders),
      switchMap(() =>
        this.httpService.getOrders().pipe(
          map(
            (orders) => AdminOrdersAction.GetOrdersSuccess({orders: orders}),
          ),
          catchError(() => of(AdminOrdersAction.GetOrdersError())),
        ),
      ),
    ),
  );
}