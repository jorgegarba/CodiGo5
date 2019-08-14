import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  public connected = false;

  public usuario;

  constructor(private _socket: Socket,
    private _router: Router) {
    this.checkStatus();
    this.cargarStorage();
  }

  cerrarSesion() {
    localStorage.removeItem("nombre");
    this._socket.emit('configurar-usuario', "sin-nombre");
    this.usuario = undefined;
    this._router.navigate(['/login']);
  }

  cargarStorage() {
    if (localStorage.getItem("nombre")) {
      this.usuario = localStorage.getItem("nombre");
      this._socket.emit('configurar-usuario', localStorage.getItem("nombre"));

    }
  }

  checkStatus() {
    this._socket.on("connect", () => {
      console.log("Conectado al servidor de sockets");
      this.connected = true;
    });

    this._socket.on("disconnect", () => {
      console.log("Desconectado al servidor de sockets");
      this.connected = false;
    });
  }

  pedirUsuarios() {
    this._socket.emit("pedir-usuarios");
  }

  escucharUsuarios() {
    return this._socket.fromEvent("lista-usuarios");
  }

  escucharMensajes() {
    return this._socket.fromEvent("nuevo-mensaje");
  }

  login(nombre: string) {

    localStorage.setItem("nombre", nombre);
    this.usuario = nombre;
    this._socket.emit('configurar-usuario', nombre);
  }

  enviarMensaje(mensaje: string) {
    this._socket.emit('enviar-mensaje', mensaje);
  }

}
