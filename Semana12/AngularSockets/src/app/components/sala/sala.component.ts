import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  constructor(private _sWebsocket: WebsocketService) { }

  ngOnInit() {
    // emito la peticion de usuarios
    this._sWebsocket.pedirUsuarios();
    // me subscribo a que el servidor me envie los usuarios
    this._sWebsocket.escucharUsuarios().subscribe(data=>{
      console.log("lista de usuarios");
      console.log(data);
    })

  }

}
