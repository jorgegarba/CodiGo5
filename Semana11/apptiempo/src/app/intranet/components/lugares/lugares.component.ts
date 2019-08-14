import { Component, OnInit } from '@angular/core';
import { LugaresService } from './../../services/lugares.service';
import { MatDialog } from '@angular/material/dialog';
import { MapaComponent } from '../../dialogs/mapa/mapa.component';

import Swal from 'sweetalert2';

interface iLugar {
  c: "",
  l: "",
  lat: "",
  ll: "",
  lon: "",
  name: "",
  type: "",
  tz: "",
  tzs: "",
  zmw: ""
}
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {


  constructor(private _sLugares: LugaresService,
    public dialog: MatDialog) {
    }
  lugares: Array<iLugar> = [];

  ngOnInit() {}

  buscarLugar(busqueda: string) {
    this.lugares = [];
    Swal.fire({
      title: 'Espere',
      text: 'Buscando...',
      type: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    this._sLugares.getLugaresByName(busqueda)
      .subscribe(data => {
        this.lugares = data.Results;
        Swal.close();
      })
  }
  openDialog(lugar: iLugar) {
    const dialogRef = this.dialog.open(MapaComponent, {
      // width: '250px',
      data: lugar
    });
  }
}
