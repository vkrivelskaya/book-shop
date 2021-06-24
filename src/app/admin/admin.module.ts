import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookModule,
    AdminRoutingModule,
    RouterModule,
  ],
  exports: [
  ],
  providers: [
  ],
})
export class AdminModule { }
