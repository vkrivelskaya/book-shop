import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { orderReducers } from './store/reducers/order.reducers';
import { OrderEffects } from './store/effects/order.effects';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('orders', orderReducers),
    EffectsModule.forFeature([OrderEffects]),
  ],
})
export class UserStoreModule { }
