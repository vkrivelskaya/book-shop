import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { BookModel } from '../../../core/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book: BookModel;
  @Output() bookOrder = new EventEmitter<BookModel>();

  constructor() { }

  onBuyButtonClick(): void {
    if(this.book.isAvailable) {
      this.bookOrder.emit(this.book);
    }
  }
}
