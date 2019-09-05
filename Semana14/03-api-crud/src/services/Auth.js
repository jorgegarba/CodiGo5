import axios from 'axios';
import { URL_BACKEND } from './../environment/env';

export class AuthService {
    // TODO: Usar patrón SINGLETON

    token;
    constructor() {
        this.cargarToken();
    }

    cargarToken() {
        if (localStorage.getItem("token")) {
            this.token = localStorage.getItem("token");
        }
    }

    login = async (email, password) => {
        // encriptando el password en 'base64'
        let password_enc = window.btoa(password);
        let contenido = {
            b_usu_email: email,
            b_usu_pass: password_enc
        };
        let misHeaders = {
            "Content-type": 'application/json'
        };
        let rpta = await axios.post(`${URL_BACKEND}/usuario/loggin`,
            contenido, { headers: misHeaders })
        return rpta;
    }

    saveToken(token) {
        this.token = token;
        localStorage.setItem("token", token);
    }

    isLogged() {
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

    cerrarSesion() {
        this.token = null;
        localStorage.removeItem('token');
    }

}