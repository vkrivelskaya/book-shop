import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './store/reducers';
import { AdminEffects } from './store/effects';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature(AdminEffects),
  ]
})
export class AdminStoreModule { }
