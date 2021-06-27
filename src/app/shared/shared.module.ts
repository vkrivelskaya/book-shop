import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontDirective } from './directives/font.directive';

import { OrderByPipe } from './pipes/order-by.pipe';
import { EnumToArrayPipe } from './pipes/enum.pipe';

import { OrderComponent } from './pages/order/order.component';

import { OrderService } from './services/order/order.service';



@NgModule({
  declarations: [
    FontDirective,
    OrderByPipe,
    EnumToArrayPipe,
    OrderComponent,
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  exports: [
    FontDirective,
    OrderByPipe,
    EnumToArrayPipe,
    OrderComponent,
  ],
  providers: [
    OrderService,
  ],
})
export class SharedModule { }
