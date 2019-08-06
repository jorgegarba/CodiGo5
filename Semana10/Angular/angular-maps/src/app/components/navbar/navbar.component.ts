import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;

  constructor(private _sRouter: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = (user != null);
    });
  }

  buscar(e, termino) {
    e.preventDefault();
    if (termino === "crear") {
      return;
    }
    this._sRouter.navigate(['/lugares', termino]);
  }

}
