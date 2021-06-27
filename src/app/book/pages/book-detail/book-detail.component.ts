import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BookModel } from 'src/app/core/models/book';
import { HttpDataService } from 'src/app/core/services/http-data/http-data.service';

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
    private location: Location,
    private httpDataService: HttpDataService,
  ) { }

  ngOnInit(): void {
    this.getBook();
  }

  getBook(): void {
    this.book = this.route.snapshot.data.book;
  }

  goBack(): void {
    this.location.back();
  }
}
