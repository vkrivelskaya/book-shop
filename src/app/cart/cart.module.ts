import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { HighlightDirective } from './directives/highlight.directive';
import { RouterModule } from '@angular/router';

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
    CoreModule,
    RouterModule,
  ],
  exports: [
    CartComponent,
    CartItemComponent,
  ],
})
export class CartModule { }