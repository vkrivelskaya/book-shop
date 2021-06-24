import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//import { CoreModule } from '../core/core.module';


import { FontDirective } from './directives/font.directive';

import { OrderByPipe } from './pipes/order-by.pipe';
import { EnumToArrayPipe } from './pipes/enum.pipe';

import { OrderComponent } from './pages/order/order.component';

import { OrderService } from './services/order.service';

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
    CommonModule,
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
