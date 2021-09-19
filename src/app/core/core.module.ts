import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LocalStorageService } from './services/local-storage/local-storage.service';
import { CartService } from './services/cart/cart.service';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { ProductResolveService } from './services/product-resolve/product-resolve.service';
import { HttpDataService } from './services/http-data/http-data.service';
import { TimingInterceptor } from './services/timing-interceptor/timing-interceptor.service';
import { ActiveUserService } from './services/active-user/active-user.service';
import { AppSettingService } from './services/app-settings/app-setting.service';

function initializeModule(appSettingsService: AppSettingService) {
  return () => appSettingsService.loadSettings();
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    CartService,
    ActiveUserService,
    AuthService,
    ProductResolveService,
    AuthGuard,
    HttpDataService,
    AppSettingService,
    { provide: HTTP_INTERCEPTORS, useClass: TimingInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: initializeModule, deps: [AppSettingService], multi: true },
  ],
})
export class CoreModule { }
