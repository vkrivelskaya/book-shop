import { Component, Input, OnInit } from '@angular/core';

import { BookModel } from 'src/app/core/models/book';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  @Input() book!: BookModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.book);
  }
}
