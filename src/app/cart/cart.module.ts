import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CartComponent,
    CartItemComponent,
  ],
})
export class CartModule { }
