import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, finalize, map, switchMap } from 'rxjs/operators';

import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';
import { OrderModel } from '../../../shared/models/order';
import * as OrderPageActions from '../actions/order.actions';

@Injectable ()
export class OrderEffects {
  constructor(
    private httpService: HttpDataService,
    private actions$: Actions,
    private router: Router,
  ) {}

  addOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderPageActions.AddOrderRequest),
      switchMap(({ selectedOrder }: {selectedOrder: OrderModel}) =>
        this.httpService.addOrder(selectedOrder).pipe(
          map(
            (order: OrderModel) => OrderPageActions.OrderAddedSuccess({ selectedOrder: order }),
          ),
          finalize(() => {
            this.router.navigateByUrl('/cart');
          }),
          catchError(() => EMPTY),
        ),
      ),
    ),
  );
}
