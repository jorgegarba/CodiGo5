import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private _sAuth: AuthService, private _sRouter: Router) { }
  canActivate() {
    if (this._sAuth.isLogged()) {
      return true;
    } else {
      this._sRouter.navigate(['/']);
      return false;
    }
  }
}
