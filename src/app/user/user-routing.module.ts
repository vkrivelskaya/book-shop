import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from '../cart/pages/cart/cart.component';
import { OrderComponent } from '../shared/pages/order/order.component';
import { UserComponent } from './pages/user/user.component';
import { BookListComponent } from '../book/pages/book-list/book-list.component';
import { BookDetailComponent } from '../book/pages/book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: 'products', component: BookListComponent,
      children: [
        { path: ':id', component: BookDetailComponent },
        { path: '', component: BookListComponent },
      ],
    },
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
