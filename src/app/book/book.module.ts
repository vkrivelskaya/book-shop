import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';

import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';

import { BooksService } from './services/books.service';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
  providers: [
    BooksService,
  ],
})
export class BookModule { }
