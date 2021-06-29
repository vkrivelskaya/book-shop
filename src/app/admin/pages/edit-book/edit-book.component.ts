import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { BookCategories } from 'src/app/book/constants/books';
import { BookModel } from 'src/app/core/models/book';
import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss'],
})
export class EditBookComponent implements OnInit {
  checkoutForm = new FormGroup({});
  @Input() book!: BookModel;
  categories = BookCategories;
  constructor(
    private route: ActivatedRoute,
    private httpDataService: HttpDataService,
    private formBuilder: FormBuilder,
    public router: Router,
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

  getBook(): BookModel {
    return  this.route.snapshot.data.book || {
      name: '',
      description: '',
      price: 0,
      category: BookCategories.Romance,
      createDate: 0,
      isAvailable: false,
    }
  }

  updateBook() {
    this.book.name = this.checkoutForm.value.bookName;
    this.book.description = this.checkoutForm.value.bookDescription;
    this.book.price = this.checkoutForm.value.bookPrice;
    this.book.category = this.checkoutForm.value.bookCategory;
    this.book.createDate = this.checkoutForm.value.bookDate;
    this.book.isAvailable = this.checkoutForm.value.available;
  }

  goBack(): void {
    this.router.navigateByUrl('admin/products')
  }

  onSaveButtonClick(event: any):void {
    if (this.book) {
      this.updateBook();
      if (this.book.id) {
        this.httpDataService.updateBook(this.book)
        .subscribe(() => this.goBack());
      } else {
        this.httpDataService.addBook(this.book)
        .subscribe(() => this.goBack());
      }
    }
  }
}
