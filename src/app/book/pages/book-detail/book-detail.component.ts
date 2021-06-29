import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookModel } from 'src/app/core/models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailComponent implements OnInit {
  book!: BookModel;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(){
    this.book = this.getBook();
  }

  getBook(): BookModel {
    return this.route.snapshot.data.book;
  }

  goBack(): void {
    this.router.navigate(['products']);
  }
}
