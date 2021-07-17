import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { ProductResolveService } from './product-resolve.service';

const initialState = {
  books: {
    books: [
      {
        'name': 'The Financier by Theodore Dreiser',
        'description': 'Frank Cowperwood, a fiercely ambitious businessman',
        'price': 9.99,
        'category': 'Romance',
        'createDate': 1912,
        'isAvailable': true,
        'id': 1,
      },
      {
        'name': 'Animal Farm by George Orwell',
        'description': 'A farm is taken over by its overworked,mistreated animals.',
        'price': 11.99,
        'category': 'SciFi',
        'createDate': 1945,
        'isAvailable': true,
        'id': 2,
      },
      {
        'name': 'The Old Man and The Sea by Ernest Hemingway',
        'description': 'The Old Man and the Sea is one of Hemingway\'s most enduring works.',
        'price': 10.99,
        'category': 'Romance',
        'createDate': 1952,
        'isAvailable': false,
        'id': 3,
      },
    ],
  },
};

describe('ProductResolveService', () => {
  let service: ProductResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductResolveService,
        provideMockStore({ initialState }),
      ],
    });
    service = TestBed.inject(ProductResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
