import { Component, Input, OnInit } from '@angular/core';

import { BookModel } from '../../../core/models/book';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss'],
})
export class AdminProductComponent {
  @Input() book: BookModel;

  constructor() { }
}
