import { TestBed } from '@angular/core/testing';
import { ActiveUserService } from '../active-user/active-user.service';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let authService: AuthService;
  let activeUserServiceSpy: jasmine.SpyObj<ActiveUserService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ActiveUserService', ['setUser']);
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: ActiveUserService, useValue: spy }
      ]
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
    const testUser =  activeUserServiceSpy.setUser.calls.first.arguments()[0];
    expect(testUser.login).toEqual('admin');
    expect(testUser.password).toEqual('2222');
  })
});
