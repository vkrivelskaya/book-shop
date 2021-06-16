import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { SharedModuleModule } from '../shared/shared-module.module';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from '../shared/pipes/order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective, CartComponent, CartItemComponent
  ],
  imports: [
    CommonModule, SharedModuleModule, FormsModule
  ],
  exports: [CartComponent, CartItemComponent]
})
export class CartModule { }
