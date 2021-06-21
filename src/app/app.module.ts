import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
// import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
// import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    // BookModule,
    CartModule,
    AdminModule,
    UserModule,
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
