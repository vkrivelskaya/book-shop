import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { BookModule } from '../book/book.module';


import { AdminComponent } from './pages/admin/admin.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

import { reducers } from './store/reducers';
import { AdminEffects } from './store/effects';

@NgModule({
  declarations: [
    AdminComponent,
    AdminOrdersComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BookModule,
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature(AdminEffects),
  ],
})
export class AdminModule { }
