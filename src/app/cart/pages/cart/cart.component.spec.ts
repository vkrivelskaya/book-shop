import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSettingService } from 'src/app/core/services/app-settings/app-setting.service';
import { CartService } from 'src/app/core/services/cart/cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  const mockedCartService = jasmine.createSpyObj(
    'CartService',
    [
      'getCartItems', 'getTotalSum', 'getTotalCount',
      'removeBook', 'changeItemTotalSum', 'updateCartData',
      'removeAllBooks', 'increaseQuantity', 'decreaseQuantity',
    ],
  );
  const mockedAppSettingService = jasmine.createSpyObj('AppSettingService', ['getSetting']);

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        CartComponent,
      ],
      providers: [
        {
          provide: CartService,
          useValue: mockedCartService,
        },
        {
          provide: AppSettingService,
          useValue: mockedAppSettingService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    mockedCartService.getCartItems.and.returnValue([]);
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
