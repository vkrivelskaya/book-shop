import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { UserRights } from '../constants/user-rights';
import { ActiveUserService } from '../services/active-user/active-user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private activeUserService: ActiveUserService,
    public router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const user = this.activeUserService.getUser();

    if (user) {
      if (user.rights.includes(UserRights.admin)) {
        return true;
      }
      this.router.navigateByUrl('/');
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    }
    return false;
  }
}
