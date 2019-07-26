import { Component, OnInit } from '@angular/core';
import { Aula } from './../../modelos/Aula';
import Swal from 'sweetalert2';
import { AulaService } from './../../services/aula.service';

@Component({
  selector: 'app-aula-crear',
  templateUrl: './aula-crear.component.html',
  styles: []
})
export class AulaCrearComponent implements OnInit {

  objAula: Aula = new Aula();

  constructor(private _sAula:AulaService) { }

  ngOnInit() {
  }

  crearAula() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Estás seguro de crear el Aula?',
      type: 'question',
      showConfirmButton:true,
      showCancelButton:true
    }).then(r=>{
      if(r.value){

        Swal.fire({
          title:'Espere',
          text:'Guardando la Información',
          type:'info',
          allowOutsideClick:false
        });

        Swal.showLoading();

        // logica para crear un recurso
        this._sAula.createAula(this.objAula)
            .then(rpta=>{
              Swal.fire({
                title:'Creado!',
                text:`El Aula ${this.objAula.pabellon} - ${this.objAula.nro} ha sido creado!`,
                type:'success'
              });
              this.objAula.id = rpta.name;
            })
      }
    })
  }

}
