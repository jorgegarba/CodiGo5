import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;

  constructor(private _sHttp: HttpClient,
    private _sRouter: Router) {
    this.cargarToken();
  }

  get getToken() {
    if (this.token) {
      return this.token;
    } else {
      return null;
    }
  }

  cerrarSesion() {
    this.token = null;
    localStorage.removeItem("token");
    this._sRouter.navigate(['/']);
  }
  cargarToken() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
  }

  login(email, password) {
    let password_enc = window.btoa(password);
    let contenido = {
      b_usu_email: email,
      b_usu_pass: password_enc
    }
    let misHeaders = new HttpHeaders();
    misHeaders.set("Content-Type", "application/json");
    return this._sHttp.post('http://localhost:3000/usuario/loggin',
      contenido,
      { headers: misHeaders });
  }

  saveToken(token) {
    localStorage.setItem("token", token);
    this.token = token;
  }

  isLogged(): boolean {
    if (this.token) {
      let payload = this.token.split(".")[1];
      let payload_dec = JSON.parse(window.atob(payload));
      if (payload_dec.exp > (new Date().getTime()) / 1000) {
        return true;
      } else {
        localStorage.removeItem("token");
        return false;
      }
    } else {
      return false;
    }
  }

}
