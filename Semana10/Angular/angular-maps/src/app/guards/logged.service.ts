import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class LoggedService implements CanActivate{
  
  
  loggedIn;
  constructor(private authService:AuthService,
              private _sRouter:Router) {
    this.authService.authState.subscribe((user) => {
      this.loggedIn = (user != null);
    });
  }

  canActivate(){
    if(this.loggedIn){
      return true;
    }else{
      this._sRouter.navigate(['/']);
      return false;
    }
  }
}
