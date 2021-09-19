import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { Payment } from 'src/app/shared/constants/payment';

import { AdminOrdersComponent } from './admin-orders.component';

const initialState = {
  admin: {
    order: {
      orders: [
        {
          sum: 67,
          quantity: 5,
          address: 'Minsk',
          payment: Payment.CreditCart,
        },
        {
          sum: 11,
          quantity: 1,
          address: 'NY',
          payment: Payment.CreditCart,
        },
      ],
    },
  },
};

describe('AdminOrdersComponent', () => {
  let component: AdminOrdersComponent;
  let fixture: ComponentFixture<AdminOrdersComponent>;
  let compiled: any;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        AdminOrdersComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOrdersComponent);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display orders', () => {
    const ordersList = compiled.querySelector('.orders-list');
    const ordersListElements = ordersList.children;

    expect(ordersListElements.length).not.toBe(0);
  });
});


