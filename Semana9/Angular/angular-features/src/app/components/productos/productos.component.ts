import { Component, OnInit, OnDestroy} from '@angular/core';
import { iProducto } from './../../models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit, OnDestroy{

  listaProductos: Array<iProducto>;

  // 1.- Un componente ejecuta primero su constructor
  // hasta es punto el DOM, no ha sido cargado
  constructor(private _sProductos:ProductoService) {
    console.log("Ejecutando constructor");
  }
  // 2.- ngOnInit se ejecuta automaticamente cuando el componente
  // ha cargado su HTML o DOM
  ngOnInit(){
    console.log("Ejecutando ngOnInit");
    this._sProductos.getProductos()
                    .then((productos:Array<iProducto>)=>{
                      this.listaProductos = productos;
                    });
  }
  // Funcion que es llamada cuando el componente es destruido
  // Es destruido cuando deja de verse o llamarse el componenete en el DOM
  // Ejm> cuando cambio de ruta 
  ngOnDestroy(){
    console.log("Ejecutando onDestroy");
  }
}
