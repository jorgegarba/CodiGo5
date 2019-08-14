import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class SalaComponent implements OnInit {

  usuariosConectados;
  mensaje:string = "";

  constructor(private _sWebsocket: WebsocketService) { }

  ngOnInit() {
    // emito la peticion de usuarios
    this._sWebsocket.pedirUsuarios();
    // me subscribo a que el servidor me envie los usuarios
    this._sWebsocket.escucharUsuarios().subscribe(data => {
      this.usuariosConectados = data;
    })
    // me subsribo a que el servidor me envie los mensajes
    this._sWebsocket.escucharMensajes().subscribe((data: { de: string, mensaje: string }) => {
      let historial = document.getElementById("historial");
      let div = document.createElement("div");
      div.setAttribute("class", "outgoing_msg");
      div.innerHTML = `<div class="sent_msg">
                          <span class="time_date">${data.de}: dice</span>
                          <p>${data.mensaje}</p>
                      </div>`;
      historial.appendChild(div);
      historial.scrollTop = historial.scrollHeight; 
    })

  }
  mandarMensaje() {
    this._sWebsocket.enviarMensaje(this.mensaje);
    this.mensaje = "";
  }

}
