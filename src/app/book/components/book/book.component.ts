import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { BookModel } from '../../../core/models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book: BookModel;

  constructor() { }
}
