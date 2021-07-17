import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActiveUserService } from 'src/app/core/services/active-user/active-user.service';

import { AuthComponent } from './auth.component';

const fakeActivatedRoute = {
  snapshot: { data: {} },
} as ActivatedRoute;

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;
  const mockedActiveUserService = jasmine.createSpyObj('ActiveUserService', ['getUser', 'setUser']);

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        AuthComponent,
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        {
          provide: ActiveUserService,
          useValue: mockedActiveUserService,
        },
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create auth component', () => {
    expect(component).toBeTruthy();
  });
});
