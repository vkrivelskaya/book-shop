import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';

import { BookCategories } from '../../../book/constants/books';
import { BookModel } from '../../../core/models/book';
import { HttpDataService } from '../../../core/services/http-data/http-data.service';

import * as AdminBooksActions from '../../store/actions/admin-books.actions';


@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  book: BookModel;
  checkoutForm: FormGroup;
  categories = BookCategories;

  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataService,
    private formBuilder: FormBuilder,
    public router: Router,
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
    this.actionListener$.pipe(
      ofType(AdminBooksActions.AddBookRequest, AdminBooksActions.UpdateBookRequest),
    ).subscribe(() => this.goBack());
  }

  getBookId(): any {
    if (this.book && this.book.id) {
      return this.book.id;
    }
  }

  getBook(): BookModel {
    const routeBook = this.route.snapshot.data.book;
    return routeBook ? Object.assign({}, routeBook) : {
      name: '',
      description: '',
      price: 0,
      category: BookCategories.Romance,
      createDate: 0,
      isAvailable: false,
    };
  }

  getUpdateBook() {
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
    if (this.book) {
      this.book = this.getUpdateBook();
      if (this.book.id) {
        this.store.dispatch(AdminBooksActions.UpdateBookRequest({ selectedBook: this.book }));
      } else {
        this.store.dispatch(AdminBooksActions.AddBookRequest({ selectedBook: this.book }));
      }
    }
  }
}
