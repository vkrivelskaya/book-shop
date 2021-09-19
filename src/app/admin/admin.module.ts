import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { BookModule } from '../book/book.module';
import { AdminStoreModule } from './admin-store.module';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

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
    AdminStoreModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BookModule,
  ],
})
export class AdminModule { }
