import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { CartModule } from './cart/cart.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BookModule,
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
