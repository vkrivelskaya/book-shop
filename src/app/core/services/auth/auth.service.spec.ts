import { TestBed } from '@angular/core/testing';

import { ActiveUserService } from '../active-user/active-user.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let activeUserServiceSpy: jasmine.SpyObj<ActiveUserService>;
  const spy = jasmine.createSpyObj('ActiveUserService', ['setUser']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ActiveUserService, useValue: spy },
      ],
    });
    authService = TestBed.inject(AuthService);
    activeUserServiceSpy = TestBed.inject(ActiveUserService) as jasmine.SpyObj<ActiveUserService>;
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('user can login', () => {
    authService.login('admin', '2222');
    expect(activeUserServiceSpy.setUser.calls.count()).toBe(1);
    const testUser =  activeUserServiceSpy.setUser.calls.argsFor(0);
    expect(testUser[0]?.login).toEqual('admin');
    expect(testUser[0]?.password).toEqual('2222');
  });
});
