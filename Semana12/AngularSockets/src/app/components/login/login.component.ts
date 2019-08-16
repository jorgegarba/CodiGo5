import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from './../../services/websocket.service';

import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
    private _sWebsocket: WebsocketService,
    private authService: AuthService) { }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(user => {
      this.entrarSalita(user.name);
    })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(user => {
      this.entrarSalita(user.name);
    });
  }

  ngOnInit() {
    if (localStorage.getItem('nombre')) {
      this._router.navigate(['/sala']);
    }
  }

  entrarSalita(nombre: string) {
    if (nombre.trim() == "") {
      return;
    }
    this._sWebsocket.login(nombre);
    this._router.navigate(['/sala']);
  }

}
