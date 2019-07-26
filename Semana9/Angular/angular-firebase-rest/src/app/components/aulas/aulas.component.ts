import { Component, OnInit } from '@angular/core';
import { AulaService } from './../../services/aula.service';
import { Aula } from './../../modelos/Aula';

@Component({
  selector: 'app-aulas',
  templateUrl: './aulas.component.html',
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {

  listaAulas:Array<Aula>;
  aulaSeleccionada:Aula;

  constructor(private _sAula: AulaService) { }

  ngOnInit() {
    this._sAula.getAulas().then((aulas:Array<Aula>) => {
      this.listaAulas = aulas;
    })
  }

  setAula(objAula:Aula){    
    console.log("esuchando el disparo desde el padre");
    console.log(objAula);
    this.aulaSeleccionada = objAula;
  }

}
