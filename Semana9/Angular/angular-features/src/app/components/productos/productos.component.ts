import { Component, OnInit } from '@angular/core';
import {PRODUCTOS, iProducto} from './productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos: Array<iProducto> = PRODUCTOS;


  constructor() {}

  ngOnInit() {

  }

}
