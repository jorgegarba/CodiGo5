import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PabellonService {

  pabellones: Array<any>;

  constructor(private _sHttp: HttpClient) { }

  getPabellonesYAulas() {
    return new Promise((resolve, reject) => {
      // Si ya tengo los pabellones cargados en el servicio de manera
      // temporal
      if (this.pabellones) {
        resolve(this.pabellones);
        return;
      } else {
        // si no existen, los traemos via HTTP
        this._sHttp.get("http://localhost:3000/pabellones/aulas")
          .subscribe((data: any) => {
            // data.contenido, es el atributo de nuestro JSON en el backend
            this.pabellones = data.contenido;
            resolve(this.pabellones);
            return;
          })
      }
    });
  }

}
