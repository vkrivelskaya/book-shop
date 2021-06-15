import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book-module/components/book/book.component';
import { CartComponent } from './cart-module/components/cart/cart.component';
import { BookListComponent } from './book-module/components/book-list/book-list.component';
import { CartItemComponent } from './cart-module/components/cart-item/cart-item.component';
import { HighlightDirective } from './cart-module/directives/highlight.directive';
import { FontDirective } from './shared-module/directives/font.directive';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CartComponent,
    BookListComponent,
    CartItemComponent,
    HighlightDirective,
    FontDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
