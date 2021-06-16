import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModule } from '../orders/orders-module.module';
import { FontDirective } from './directives/font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    FontDirective,
    OrderByPipe
  ],
  imports: [ ],
  exports: [ OrdersModule, CommonModule, FontDirective, OrderByPipe ]
})
export class SharedModuleModule { }
