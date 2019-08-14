import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from './../../services/websocket.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router,
    private _sWebsocket: WebsocketService) { }

  ngOnInit() {
    if (localStorage.getItem('nombre')) {
      this._router.navigate(['/sala']);
    }
  }

  entrarSalita(nombre: string) {
    this._sWebsocket.login(nombre);
    this._router.navigate(['/sala']);
  }

}
