import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookCategories } from 'src/app/book/constants/books';
import { BooksService } from 'src/app/book/services/books.service';
import { BookModel } from 'src/app/core/models/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  @Input() book!: BookModel;
  categories = BookCategories;
  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    this.book = this.route.snapshot.data['book'];
  }
}
