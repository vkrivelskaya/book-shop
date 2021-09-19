import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCategories } from 'src/app/book/constants/books';
import { CartItem } from 'src/app/core/models/cart-item';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let expectedCartItem: CartItem;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        CartItemComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;

    expectedCartItem = {
      book: {
        name: '',
        description: '',
        price: 0,
        category: BookCategories.Contemporary,
        createDate: 0,
        isAvailable: true,
        id: 1,
      },
      count: 0,
      total: 0,
      bookPrice: 0,
      bookName: '',
    };
    component.cartItem = expectedCartItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
