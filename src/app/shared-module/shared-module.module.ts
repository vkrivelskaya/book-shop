import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersModuleModule } from '../orders-module/orders-module.module';
import { BookModelModule } from '../book-module/book-module.module';
import { CartModuleModule } from '../cart-module/cart-module.module';
import { FontDirective } from './directives/font.directive';



@NgModule({
  declarations: [
    FontDirective
  ],
  imports: [
    SharedModuleModule, BookModelModule, CartModuleModule
  ],
  exports: [OrdersModuleModule, CommonModule]
})
export class SharedModuleModule { }
