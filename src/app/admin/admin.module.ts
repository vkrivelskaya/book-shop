import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './components/admin/admin.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { BookModule } from '../book/book.module';
import { CoreModule } from '../core/core.module';

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
    RouterModule,
    SharedModule,
    AppRoutingModule,
    BookModule,
    CoreModule,
  ],
  exports: [
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductComponent,
    EditBookComponent,
  ],
  providers: [
  ],
})
export class AdminModule { }
