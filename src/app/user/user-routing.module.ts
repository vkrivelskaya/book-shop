import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from '../cart/pages/cart/cart.component';
import { OrderComponent } from '../shared/pages/order/order.component';
import { UserComponent } from './pages/user/user.component';
import { BookListComponent } from '../book/pages/book-list/book-list.component';
import { BookDetailComponent } from '../book/pages/book-detail/book-detail.component';
import { ProductResolveService } from '../core/services/product-resolve/product-resolve.service';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'products', component: BookListComponent },
      { path: 'products/:id', component: BookDetailComponent,
      resolve: {
        book: ProductResolveService,
        } },
      { path: 'cart', component: CartComponent },
      { path: 'order', component: OrderComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
