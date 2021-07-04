import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { CartService } from '../../../core/services/cart/cart.service';
import { AppState } from '../../../store/state/app.state';
import { BookModel } from '../../../core/models/book';
import { GetBooks } from '../../store/actions/book.actions';
import { selectBooksList } from '../../store/selectors/book.selector';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books = this.store.pipe(select(selectBooksList));

  constructor(
    private cartService: CartService,
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(new GetBooks);
  }

  onBookOrdered(book: BookModel): void {
    this.cartService.addBook(book);
  }
}
