import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRights } from 'src/app/shared/constants/user-rights';
import { ActiveUserService } from '../services/active-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private activeUserService: ActiveUserService,
    public router: Router,
  ) {};

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const user = this.activeUserService.getUser();
      const expectedRole = route.data.expectedRole;

      if (!user) {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      }
      if (Boolean(user)) {
        if (user!.rights.includes(expectedRole)) {
          return true;
        }
        this.router.navigateByUrl('/');
      }
      return false;
  }
}
