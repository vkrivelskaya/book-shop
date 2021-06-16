import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BooksService } from './services/books.service';
import { SharedModuleModule } from '../shared/shared-module.module';



@NgModule({
  declarations: [BookComponent, BookListComponent],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [BookComponent, BookListComponent],
  providers: [BooksService]
})
export class BookModule { }
