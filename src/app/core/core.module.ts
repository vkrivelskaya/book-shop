import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from './services/local-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{provide: LocalStorageService, useClass: LocalStorageService}],
})
export class CoreModule { }
