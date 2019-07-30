import { Component, OnInit, OnDestroy } from '@angular/core';
import { LugaresService } from './../../services/lugares.service';
import { Subscription } from 'rxjs';
import { Lugar } from './../../models/Lugar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styles: []
})
export class LugaresComponent implements OnInit, OnDestroy {

  obsLugares: Subscription;
  lugares: Array<Lugar>;
  constructor(private _sLugares: LugaresService,
              private _sRouter:Router) { }

  ngOnInit() {
    this.obsLugares = this._sLugares.getLugares()
                                    .subscribe((data:Array<Lugar>) => {
      this.lugares = data;
    });
  }

  ngOnDestroy() {
    // cancelar la subscripcion
    this.obsLugares.unsubscribe();
  }

  irEditar(id){
    // Redireccionar desde el controlador
    // genera la navegacion hacia ...4200/lugares/5 por ejemplo
    this._sRouter.navigate(['/lugares',id]);
  }

}
