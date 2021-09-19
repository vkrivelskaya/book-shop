import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { CartService } from '../../../core/services/cart/cart.service';

import { AppState } from '../../../store/state/app.state';
import { FetchBooks } from '../../store/actions/book.actions';
import { selectBooksList } from '../../store/selectors/book.selector';

import { BookModel } from '../../../core/models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent implements OnInit {
  isAdmin: boolean;
  currentRoute: string;
  books = this.store.pipe(select(selectBooksList));

  constructor(
    private cartService: CartService,
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(FetchBooks());
    this.currentRoute = this.router.url;
    this.isAdmin = this.currentRoute.includes('admin');
  }

  onBookOrder(book: BookModel): void {
    this.cartService.addBook(book);
  }
}
