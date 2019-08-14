import { Injectable } from '@angular/core';

import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor() { }

  canActivate() {
    if (localStorage.getItem('nombre')) {
      return true;
    } else {
      return false;
    }
  }

}
