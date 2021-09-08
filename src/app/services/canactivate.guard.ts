import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authservice ';

@Injectable({
  providedIn: 'root'
})
export class CanactivateGuard implements CanActivate, CanActivateChild  {

  constructor(private router:Router, private authService: AuthguardService ) {}

  //The method gets the instance of the ActivatedRouteSnapshot & RouterStateSnapshot. 
  //We can use this to get access to the route parameter, query parameter etc.
  //The guard must return true/false or a UrlTree. 
  //The return value can be in the form of observable or a promise or a simple boolean value.
  //A route can have more than one canActivate guard.
  //If all guards returns true, navigation to the route will continue.
  //If any one of the guard returns false, navigation will be cancelled.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
    if (!this.authService.isUserLoggedIn()) {
      alert('You are not allowed to view this page. You are redirected to login Page');
      this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
      return false;
      //var urlTree = this.router.createUrlTree(['login']);
      //return urlTree;
    } 
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|UrlTree {
      if (!this.authService.isAdminUser()) {
        alert('You are not allowed to view this page');
        return false;
      }
      return true;
  }

}
