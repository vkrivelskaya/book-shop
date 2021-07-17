import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CartService } from 'src/app/core/services/cart/cart.service';
import { BookComponent } from '../../components/book/book.component';

import { BookListComponent } from './book-list.component';

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

const bookListCount = initialState.books.books.length;

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;
  let compiled: any;
  let cartService: CartService;

  beforeEach(async() => {
    cartService = jasmine.createSpyObj('CartService', ['addBook']);

    await TestBed.configureTestingModule({
      declarations: [
        BookListComponent,
        BookComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: CartService,
          useValue: cartService,
        },
        Location,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display books', () => {
    const bookListElements = compiled.querySelectorAll('.book-container .book');

    expect(bookListElements.length).toBe(bookListCount);

    bookListElements.forEach((element: HTMLElement, i: number) => {
      const bookID = element.querySelector('span');
      expect(bookID?.textContent).toBe(initialState.books.books[i].id.toString());
    });
  });

  it('should show addBookButton, editBookButton', () => {
    const router = TestBed.inject(Router);

    router.navigate(['/admin/products']).then(() => {
      const addBookButton = compiled.querySelector('.add-book-link');
      expect(addBookButton).toBeTruthy();

      const editBookButtons = compiled.querySelectorAll('.book .edit-link');
      expect(editBookButtons.length).toBe(bookListCount);
    });
  });

  it('should not show addBookButton, show buyBookButton', () => {
    const router = TestBed.inject(Router);

    router.navigate(['/products']).then(() => {
      const addBookButton = compiled.querySelector('.add-book-link');
      expect(addBookButton).toBeFalsy();

      const buyBookButtons = compiled.querySelectorAll('.book .buy-button');
      expect(buyBookButtons.length).toBe(bookListCount);
    });
  });

  it('should check addBook function of cartService is called', () => {
    const router = TestBed.inject(Router);

    router.navigate(['/products']).then(() => {
      const buyBookButtons = compiled.querySelectorAll('.book .buy-button');

      buyBookButtons[0].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(cartService.addBook).toHaveBeenCalled();
    });
  });

  it('buyBookButton should be gray', () => {
    const router = TestBed.inject(Router);

    spyOnProperty(router, 'url', 'get').and.returnValue('/products');
    fixture.detectChanges();

    const buyBookButtons = compiled.querySelectorAll('.book .buy-button');
    buyBookButtons.forEach((element: HTMLElement, i: number) => {
      const book = initialState.books.books[i];
      if (book.isAvailable) {
        expect(element.style.color).toBe('black');
      } else {
        expect(element.style.color).toBe('gray');
      }
    });
  });
});
