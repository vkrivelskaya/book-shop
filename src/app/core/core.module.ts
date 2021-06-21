import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalStorageService } from './services/local-storage.service';
import { CartService } from './services/cart.service';
import { AuthComponent } from './components/auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ActiveUserService } from './services/active-user.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { ProductResolveService } from './services/product-resolve.service';

@NgModule({
  declarations: [
    AuthComponent
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
    AuthGuard,
    AuthService,
    ProductResolveService,
  ],
})
export class CoreModule { }
