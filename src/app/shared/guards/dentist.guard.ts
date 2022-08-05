import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { routes } from '../models/routes';

@Injectable({
  providedIn: 'root'
})
export class DentistGuard implements CanActivate {
  public routes: typeof routes = routes;

  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user = JSON.parse(localStorage.getItem('user') as string);
      if(user.role == 'dentist'){
        return true;
      }

      this.router.navigate([this.routes.LOGIN_AUTH]);
      return false;  }

}
