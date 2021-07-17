import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontDirective } from './directives/font.directive';

import { OrderByPipe } from './pipes/order-by.pipe';
import { EnumToArrayPipe } from './pipes/enum.pipe';

@NgModule({
  declarations: [
    FontDirective,
    OrderByPipe,
    EnumToArrayPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FontDirective,
    OrderByPipe,
    EnumToArrayPipe,
  ],
})
export class SharedModule { }
