import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';

import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';

import { BookEffects } from './store/effects/book.effects';
import { booksReducers } from './store/reducers/book.reducer';

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
    StoreModule.forFeature('books', booksReducers),
    EffectsModule.forFeature([BookEffects]),
  ],
  exports: [
    BookComponent,
    BookListComponent,
    BookDetailComponent,
  ],
})
export class BookModule { }
