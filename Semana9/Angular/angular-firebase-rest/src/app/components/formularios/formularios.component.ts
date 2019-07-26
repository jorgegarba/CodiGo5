import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  guardarDatos(iNombre){
    console.log("Guardando datos....");
    console.log(iNombre);
    
    
  }
}
