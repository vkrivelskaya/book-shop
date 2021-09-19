import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';

import { UserRoutingModule } from './user-routing.module';
import { BookModule } from '../book/book.module';
import { CartModule } from '../cart/cart.module';
import { OrderComponent } from './pages/order/order.component';
import { SharedModule } from '../shared/shared.module';
import { UserStoreModule } from './user-store.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UserComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    UserStoreModule,
    RouterModule,
    BookModule,
    CartModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UserModule { }
