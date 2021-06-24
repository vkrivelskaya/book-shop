import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookModel } from 'src/app/core/models/book';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements OnInit {
  @Input() book!: BookModel;
  @Output() bookOrder = new EventEmitter<BookModel>();

  constructor(
    private route: ActivatedRoute,
    private bookService: BooksService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bookService.getBook(id)
      .subscribe(book => this.book = book);
  }

  goBack(): void {
    this.location.back();
  }

  onBuyButton(): void {
    if(this.book.isAvailable) {
      this.bookOrder.emit(this.book);
    }
  }
}
