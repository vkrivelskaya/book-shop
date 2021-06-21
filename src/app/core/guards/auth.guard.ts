import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { ActiveUserService } from '../services/active-user.service';

@Injectable({
  providedIn: 'root',
})
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
    const expectedRole = route.data.expectedRole;

    if (user) {
      if (user.rights.includes(expectedRole)) {
        return true;
      }
      this.router.navigateByUrl('/');
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
    }
    return false;
  }
}
