import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { booksReducers } from './store/reducers/book.reducer';
import { BookEffects } from './store/effects/book.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('books', booksReducers),
    EffectsModule.forFeature([BookEffects]),
  ],
})
export class BookStoreModule { }
