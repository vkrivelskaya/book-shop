import { Injectable } from '@angular/core';

import { User } from '../../../core/models/user';

@Injectable()
export class ActiveUserService {
  user: User|null = null;

  setUser(user: User|null): void {
    this.user = user;
  }

  getUser(): User|null {
    return this.user;
  }
}
