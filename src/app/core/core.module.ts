import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { CartService } from './services/cart.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ActiveUserService } from './services/active-user.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ProductResolveService } from './services/product-resolve.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    CartService,
    ActiveUserService,
    AuthService,
    ProductResolveService,
    AuthGuard,
  ],
})
export class CoreModule { }
