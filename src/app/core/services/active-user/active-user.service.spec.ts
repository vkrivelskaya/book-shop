import { TestBed } from '@angular/core/testing';
import { UserRights } from '../../constants/user-rights';
import { ActiveUserService } from './active-user.service';


describe('ActiveUserService', () => {
  let service: ActiveUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('user set', () => {
    const userExample = {
      login: 'example',
      password: '1111',
      rights: [UserRights.admin],
    }
    service.setUser(userExample);
    expect(service.getUser()).toEqual(userExample)
  })
});
