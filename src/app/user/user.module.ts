import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [
    UserComponent,
  ],
})
export class UserModule { }
