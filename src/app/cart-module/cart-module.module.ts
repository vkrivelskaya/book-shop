import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    HighlightDirective, CartComponent, CartItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModuleModule { }
