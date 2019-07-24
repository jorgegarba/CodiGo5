import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre:string = "Jorge Luis";

  numeros:Array<number> = [78,4,32,5,-7,0];

  PI:number = 3.1416726902;

  igv:number = 0.18;

  sueldo:number = 1000;

  hoy:Date = new Date();

  persona:any = {
    nombre:'Jorge',
    apellido:'Garnica'
  }

  frase:string = "agua que no has de beber, jala la cadena y dejala correr";

  constructor() {}

  ngOnInit() {
  }

}
