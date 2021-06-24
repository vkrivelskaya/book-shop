import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { BookModule } from '../book/book.module';
import { CoreModule } from '../core/core.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthGuard } from './guards/auth.guard';

import { AdminComponent } from './pages/admin/admin.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import { AdminProductComponent } from './pages/admin-product/admin-product.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

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
    CoreModule,
    AdminRoutingModule,
  ],
  exports: [
    AdminComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    AdminProductComponent,
    EditBookComponent,
  ],
  providers: [
    AuthGuard,
  ],
})
export class AdminModule { }
