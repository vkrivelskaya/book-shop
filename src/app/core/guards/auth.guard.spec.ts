import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ActiveUserService } from '../services/active-user/active-user.service';

import { AuthGuard } from './auth.guard';

const fakeActivatedRoute = {
  snapshot: { data: {} },
} as ActivatedRoute;

const mockedActiveUserService = jasmine.createSpyObj('ActiveUserService', ['getUser']);

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute,
        },
        {
          provide: ActiveUserService,
          useValue: mockedActiveUserService,
        },
      ],
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
