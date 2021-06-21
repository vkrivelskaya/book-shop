import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './book/components/book-list/book-list.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { BookDetailComponent } from './book/components/book-detail/book-detail.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { UserComponent } from './user/components/user/user.component';
import { EditBookComponent } from './admin/components/edit-book/edit-book.component';
import { OrderComponent } from './shared/components/order/order.component';
import { AuthComponent } from './core/components/auth/auth.component';

import { AuthGuard } from './core/guards/auth.guard';

import { ProductResolveService } from './core/services/product-resolve.service';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {  path: 'products', component: AdminProductsComponent },
      {  path: 'product/edit/:id', component: EditBookComponent, resolve: {
        book: ProductResolveService,
      } },
      {  path: 'product/add', component: EditBookComponent },
      {  path: 'orders', component: AdminOrdersComponent },
    ],
    canActivate: [ AuthGuard ],
    data: {
      expectedRole: 'admin',
    },
  },
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'products-list', component: BookListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'product/:id', component: BookDetailComponent },
      { path: 'order', component: OrderComponent },
    ],
  },
  { path: 'login', component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
