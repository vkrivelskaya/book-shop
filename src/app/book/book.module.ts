import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { BookStoreModule } from './book-store.module';

import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    BookStoreModule,
  ],
  exports: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
})
export class BookModule { }
