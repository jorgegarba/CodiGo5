import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './../../services/websocket.service';
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _sWebsocket: WebsocketService,
    private authService: AuthService) { }

  ngOnInit() { }

  cerrarSesion() {
    try {
      this.authService.signOut();
    } catch (error) {}
    this._sWebsocket.cerrarSesion();
  }

}
