import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService },
    CartService,
  ],
})
export class CoreModule { }
