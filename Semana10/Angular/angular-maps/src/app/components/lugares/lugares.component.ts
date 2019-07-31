import { Component, OnInit, OnDestroy } from '@angular/core';
import { LugaresService } from './../../services/lugares.service';
import { Subscription } from 'rxjs';
import { Lugar } from './../../models/Lugar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styles: []
})
export class LugaresComponent implements OnInit, OnDestroy {

  obsLugares: Subscription;
  lugares: Array<Lugar>;
  constructor(private _sLugares: LugaresService,
    private _sRouter: Router) { }

  ngOnInit() {
    this.obsLugares = this._sLugares.getLugares()
      .subscribe((data: Array<Lugar>) => {
        this.lugares = data;
      });
  }

  ngOnDestroy() {
    // cancelar la subscripcion
    this.obsLugares.unsubscribe();
  }

  irEditar(id) {
    // Redireccionar desde el controlador
    // genera la navegacion hacia ...4200/lugares/5 por ejemplo
    this._sRouter.navigate(['/lugares', id]);
  }

  eliminar(id: number, i:number) {

    Swal.fire({
      title: '¿Estás seguro mafren?',
      text: '¿Estás seguro de eliminar el Lugar?',
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then((r) => {
      if (r.value === true) {

        Swal.fire({
          title: 'Espere',
          text: 'Eliminando el registro',
          type: 'info',
          allowOutsideClick: false,
          showConfirmButton: false,
        });

        this._sLugares.deleteLugarById(id)
          .subscribe(rpta => {
            Swal.fire({
              title: 'Eliminado!',
              text: `El Lugar ha sido eliminado!`,
              type: 'success'
            });
            console.log(rpta);
            this.lugares.splice(i,1);
          });
      }
    })


  }

}
