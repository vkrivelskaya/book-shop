import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductResolveService } from '../core/services/product-resolve/product-resolve.service';

import { BookListComponent } from '../book/pages/book-list/book-list.component';
import { AdminOrdersComponent } from './pages/admin-orders/admin-orders.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EditBookComponent } from './pages/edit-book/edit-book.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {  path: 'products', component: BookListComponent },
      {  path: 'product/edit/:id',
         component: EditBookComponent,
         resolve: {
          book: ProductResolveService,
        } },
      {  path: 'product/add', component: EditBookComponent },
      {  path: 'orders', component: AdminOrdersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
