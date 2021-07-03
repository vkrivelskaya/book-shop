import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { BookModel } from 'src/app/core/models/book';
import { AppState } from 'src/app/store/state/app.state';
import { GetBook } from '../../store/actions/book.actions';
import { selectSelectedBook } from '../../store/selectors/book.selector';

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
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.book = this.getBook();

  }

  getBook(): BookModel {
    return this.route.snapshot.data.book;
  }

  goBack(): void {
    this.router.navigate(['products']);
  }
}
