import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { BookCategories } from '../../../book/constants/books';
import { BookModel } from '../../../core/models/book';

import * as AdminBooksActions from '../../store/actions/admin-books.actions';
import { AppState } from '../../../store/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditBookComponent implements OnInit {
  book: BookModel;
  checkoutForm: FormGroup;
  categories = BookCategories;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
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
  }

  getBookId(): number | undefined {
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
    };
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

  onSaveButtonClick(): void {
    this.book = this.getUpdateBook();
    if (this.book.id) {
      this.store.dispatch(AdminBooksActions.UpdateBookRequest({ selectedBook: this.book }));
    } else {
      this.store.dispatch(AdminBooksActions.AddBookRequest({ selectedBook: this.book }));
    }
  }
}
