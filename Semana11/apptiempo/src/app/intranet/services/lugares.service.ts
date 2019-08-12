import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  constructor(private _sHttp:HttpClient) { }

  getLugaresByName(name:string):Observable<any>{
    let busqueda = {
      busqueda:name
    };
    let misHeaders:HttpHeaders = new HttpHeaders();
    misHeaders.append("Content-type","application/json");

    return this._sHttp.post('http://localhost:3000/lugar/buscar',
                      busqueda,{headers:misHeaders});
  }

}
