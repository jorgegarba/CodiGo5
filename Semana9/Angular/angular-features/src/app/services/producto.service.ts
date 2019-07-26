import { Injectable } from '@angular/core';
import {PRODUCTOS} from './../seeders/productos';
import {iProducto} from './../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  arregloProductos:Array<iProducto> = PRODUCTOS;

  constructor() {
    console.log("Alguien esta consumiendo el servicio de productos");
  }

  getProductos(){

    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve(this.arregloProductos);
      }, 2000);  
    });

  }


}
