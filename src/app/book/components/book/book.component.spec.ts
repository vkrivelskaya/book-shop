import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookModel } from 'src/app/core/models/book';
import { BookCategories } from '../../constants/books';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let expectedBook: BookModel;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        BookComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    expectedBook = {
      name: '',
      description: '',
      price: 0,
      category: BookCategories.Contemporary,
      createDate: 0,
      isAvailable: true,
      id: 1,
    };
    component.book = expectedBook;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
