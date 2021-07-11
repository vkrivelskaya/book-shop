import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';

import { UserRoutingModule } from './user-routing.module';
import { BookModule } from '../book/book.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    BookModule,
    CartModule,
  ],
})
export class UserModule { }
