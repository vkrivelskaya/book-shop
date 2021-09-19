import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { CartService } from 'src/app/core/services/cart/cart.service';
import { EnumToArrayPipe } from '../../../shared/pipes/enum.pipe';

import { OrderComponent } from './order.component';

const initialState = {
  orders: {
    orders: {
    },
  },
};

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  const mockedCartService = jasmine.createSpyObj(
    'CartService',
    [
      'getCartItems', 'getTotalSum', 'getTotalCount',
      'removeBook', 'changeItemTotalSum', 'updateCartData',
      'removeAllBooks', 'increaseQuantity', 'decreaseQuantity',
    ],
  );

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        OrderComponent,
        EnumToArrayPipe,
      ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        {
          provide: CartService,
          useValue: mockedCartService,
        },
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
