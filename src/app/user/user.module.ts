import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from './pages/user/user.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [
    UserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    UserComponent,
  ],
})
export class UserModule { }
