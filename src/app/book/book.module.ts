import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { UserRoutingModule } from '../user/user-routing.module';

import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

import { BooksService } from './services/books.service';

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
    UserRoutingModule,
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
