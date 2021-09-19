import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { BookCategories } from '../../constants/books';

import { BookDetailComponent } from './book-detail.component';

const fakeActivatedRoute = {
  snapshot: {
    data: {
      book: {
        name: 'The Financier by Theodore Dreiser',
        description: 'Frank Cowperwood, a fiercely ambitious businessman',
        price: 9.99,
        category: BookCategories.Romance,
        createDate: 1912,
        isAvailable: true,
        id: 1,
      },
    },
  },
};

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        BookDetailComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
