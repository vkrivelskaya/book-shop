import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../../models';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent implements OnInit {
  @Input() book!: BookModel;
  @Output() ordered = new EventEmitter<BookModel>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }

  onBuyButton(): void {
    if(this.book.isAvailable) {
      this.ordered.emit(this.book);
    }
  }
}
