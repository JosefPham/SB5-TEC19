import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthentificationService } from './authentification.service';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private authService: AuthentificationService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.authService.isLoggedIn();

  }
}
