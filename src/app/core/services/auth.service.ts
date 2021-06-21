import { Injectable } from '@angular/core';

import { ActiveUserService } from './active-user.service';
import { users } from '../mocks/users.mock';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private activeUserService: ActiveUserService,
  ) {}

  login(userName: string, password: string) {
    const user = users.find((el: User) =>  el.login === userName && el.password === password);
    this.activeUserService.setUser(user || null);
  }

  logout() {
    this.activeUserService.setUser(null);
  }
}
