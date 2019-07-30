import { Injectable } from '@angular/core';

// Importando servicio de la libreria HttpModule
// para el consumo de API's
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lugar } from '../models/Lugar';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  url: string = "http://5d1cd485f31e7f00147ebb7a.mockapi.io/lugares";
  constructor(private _sHttp: HttpClient) { }

  getLugares(): Observable<any> {
    return this._sHttp.get(this.url);
  }

  getLugarById(id): Observable<any> {
    return this._sHttp.get(`${this.url}/${id}`);
  }

  updateLugarById(objLugar: Lugar) {
    let objLugarString = JSON.stringify(objLugar);
    let misHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this._sHttp.put(`${this.url}/${objLugar.id}`,
                              objLugarString,
                              { headers: misHeaders }
                          );
  }


}
