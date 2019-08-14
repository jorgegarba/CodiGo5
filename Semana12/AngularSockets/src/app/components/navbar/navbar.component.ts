import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './../../services/websocket.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuarioConectado;

  constructor(private _sWebsocket: WebsocketService) { }

  ngOnInit() {
    if (localStorage.getItem("nombre")) {
      this.usuarioConectado = localStorage.getItem("nombre");
    }
  }

  cerrarSesion(){
    this._sWebsocket.cerrarSesion();
  }

}
