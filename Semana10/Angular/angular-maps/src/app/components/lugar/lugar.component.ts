import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../../services/lugares.service';
import { Lugar } from "./../../models/Lugar";
import {Router} from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styles: []
})
export class LugarComponent implements OnInit {

  objLugar: Lugar;

  editar: boolean = false;
  crear: boolean = false;

  constructor(private _sActivatedRoute: ActivatedRoute,
    private _sLugares: LugaresService,
    private _sRouter:Router) { }

  ngOnInit() {
    // forma 1 de recuperar parametros enviados por la URL
    // let id = this._sActivatedRoute.snapshot.paramMap.get("id");
    // console.log(id);

    // forma 2 de recuperar parametros enviados por la URL, hasta mas de una vez
    this._sActivatedRoute.params.subscribe(parametros => {
      let { id } = parametros;
      if (id === "crear") {
        console.log("se va a crear un nuevo Lugar");
        // crear el objeto en blanco
        this.objLugar = new Lugar();
        this.editar = true;
        this.crear = true;
      } else {
        this.editar = false;
        this.crear = false;
        this.getLugar(id);
      }
    });
  }
  getLugar(id) {
    this._sLugares.getLugarById(id)
      .subscribe((lugar: Lugar) => {
        this.objLugar = lugar;
        console.log(this.objLugar);
      });
  }

  guardarCambios() {

    if (this.editar === true && this.crear === false) {
      // editar
      Swal.fire({
        title: '¿Estás seguro mafren?',
        text: '¿Estás seguro de editar el Aula?',
        type: 'question',
        showConfirmButton: true,
        showCancelButton: true
      }).then(r => {
        if (r.value === true) {

          Swal.fire({
            title: 'Espere',
            text: 'Guardando la Información',
            type: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
          });

          this._sLugares.updateLugarById(this.objLugar)
            .subscribe((nuevoLugar: Lugar) => {
              Swal.fire({
                title: 'Actualizado!',
                text: `El Lugar ha sido actualizado!`,
                type: 'success'
              });
              console.log(nuevoLugar);
              this.editar = false;
            });
        }
      })
    }else{
      // crear
      Swal.fire({
        title: '¿Estás seguro mafren?',
        text: '¿Estás seguro de crear el Aula?',
        type: 'question',
        showConfirmButton: true,
        showCancelButton: true
      }).then((rpta)=>{
        if(rpta.value === true){
          Swal.fire({
            title: 'Espere',
            text: 'Creando el lugar',
            type: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
          });
          
          this._sLugares.createLugar(this.objLugar)
                        .subscribe((response:Lugar)=>{
                          Swal.fire({
                            title: 'Creadp!',
                            text: `El Lugar ha sido creado!`,
                            type: 'success'
                          });
                          console.log(response);
                          this.objLugar.id = response.id;
                          // redireccionar a ver el lugar creado
                          this._sRouter.navigate(['/lugares',response.id])
                        });
        }
      })
    }
  }


}
