import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';

import { BookCategories } from '../../../book/constants/books';
import { BookModel } from '../../../core/models/book';

import * as AdminBooksActions from '../../store/actions/admin-books.actions';
import { AppState } from '../../../store/state/app.state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBookComponent implements OnInit, OnDestroy {
  book: BookModel;
  checkoutForm: FormGroup;
  categories = BookCategories;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppState>,
    private actionListener$: ActionsSubject,
  ) { }

  ngOnInit(): void {
    this.book = this.getBook();
    this.checkoutForm = this.formBuilder.group({
      bookName: this.book.name,
      bookDescription: this.book.description,
      bookPrice: this.book.price,
      bookCategory: this.book.category,
      bookDate: this.book.createDate,
      available: this.book.isAvailable,
    });
    this.subscription.add(
      this.actionListener$.pipe(
        ofType(AdminBooksActions.AddBookRequest, AdminBooksActions.UpdateBookRequest),
      ).subscribe(() => {
        this.goBack();

      })
    );
  }

  ngOnDestroy():void {
    this.subscription.unsubscribe();
  }

  getBookId(): any {
    return this.book.id;
  }

  getBook(): BookModel {
    const routeBook = this.route.snapshot.data.book;
    return routeBook || {
      name: '',
      description: '',
      price: 0,
      category: BookCategories.Romance,
      createDate: 0,
      isAvailable: false,
    }
  }

  getUpdateBook(): BookModel {
    const updatedBook: BookModel = {
      name: this.checkoutForm.value.bookName,
      description: this.checkoutForm.value.bookDescription,
      price: this.checkoutForm.value.bookPrice,
      category: this.checkoutForm.value.bookCategory,
      createDate: this.checkoutForm.value.bookDate,
      isAvailable: this.checkoutForm.value.available,
      id: this.getBookId(),
    };
    return updatedBook;
  }

  goBack(): void {
    this.router.navigateByUrl('/admin/products');
  }

  onSaveButtonClick(): void {
    this.book = this.getUpdateBook();
    if (this.book.id) {
      this.store.dispatch(AdminBooksActions.UpdateBookRequest({ selectedBook: this.book }));
    } else {
      this.store.dispatch(AdminBooksActions.AddBookRequest({ selectedBook: this.book }));
    }
  }
}
