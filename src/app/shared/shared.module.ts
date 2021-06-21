import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontDirective } from './directives/font.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { EnumToArrayPipe } from './pipes/enum.pipe';
import { OrderComponent } from './components/order/order.component';
import { RouterModule } from '@angular/router';
import { OrderService } from './services/order.service';
import { CoreModule } from '../core/core.module';
import { ActiveUserService } from '../core/services/active-user.service';

@NgModule({
  declarations: [
    FontDirective,
    OrderByPipe,
    EnumToArrayPipe,
    OrderComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    CoreModule,
  ],
  exports: [
    CommonModule,
    FontDirective,
    OrderByPipe,
    EnumToArrayPipe,
    OrderComponent
  ],
  providers: [
    OrderService,
  ],
})
export class SharedModule { }
