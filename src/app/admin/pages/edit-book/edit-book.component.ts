import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookCategories } from 'src/app/book/constants/books';
import { BookModel } from 'src/app/core/models/book';
import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  checkoutForm = this.formBuilder.group({
    bookName: '',
    bookDescription: '',
    bookPrice: 0,
    bookCategory: BookCategories.Romance,
    bookDate: 0,
    available: false,
    bookID: 0,
  });
  @Input() book!: BookModel;
  categories = BookCategories;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private httpDataService: HttpDataService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getBook();
    this.setValue();
  }

  setValue() {
    this.checkoutForm.setValue(
      {
        bookName: this.book.name,
        bookDescription: this.book.description,
        bookPrice: this.book.price,
        bookCategory: this.book.category,
        bookDate: this.book.createDate,
        available: this.book.isAvailable,
        bookID: this.book.id,
      }
    );
  }

  getBook(): void {
    this.book = this.route.snapshot.data.book;
    if (!this.book) {
      this.book = {
        name: '',
        description: '',
        price: 0,
        category: BookCategories.Romance,
        createDate: 0,
        isAvailable: false,
        id: 0,
      };
    }
  }

  updateBook() {
    this.book.name = this.checkoutForm.value.bookName;
    this.book.description = this.checkoutForm.value.bookDescription;
    this.book.price = this.checkoutForm.value.bookPrice;
    this.book.category = this.checkoutForm.value.bookCategory;
    this.book.createDate = this.checkoutForm.value.bookDate;
    this.book.isAvailable = this.checkoutForm.value.available;
    this.book.id = this.checkoutForm.value.bookID;
  }

  goBack(): void {
    this.location.back();
  }

  onSaveButtonClick(event: any):void {
    if (this.book) {
      this.updateBook();
      if (this.book.id !== 0) {
        this.httpDataService.updateBook(this.book)
        .subscribe(() => this.goBack());
      } else {
        this.httpDataService.addBook(this.book)
        .subscribe(() => this.goBack());
      }

    }
  }
}
