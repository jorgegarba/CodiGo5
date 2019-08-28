import { Component, OnInit } from '@angular/core';
import { PabellonService } from './../../../services/pabellon.service';
import { ReservaService } from './../../../services/reserva.service';
import { EventSettingsModel } from '@syncfusion/ej2-schedule';

declare var $: any;

@Component({
  selector: 'app-horario-aula',
  templateUrl: './horario-aula.component.html',
  styleUrls: ['./horario-aula.component.css']
})
export class HorarioAulaComponent implements OnInit {

  public eventSettings: EventSettingsModel;


  pabellones;
  pab_id: Number = 0;

  aulas;
  aula_id: Number = 0;

  constructor(private _sPabellon: PabellonService,
    private _sReserva: ReservaService) { }

  ngOnInit() {
    this._sPabellon.getPabellonesYAulas().then(pabellones => {
      console.log(pabellones);
      this.pabellones = pabellones
    });
  }

  cambioPabellon() {
    console.log(this.pab_id);

    let pabellon = this.pabellones.find(pabellon => (pabellon.pab_id == this.pab_id));
    this.aulas = pabellon.t_aulas;
    console.log(this.aulas);
  }

  buscarHorarios(fechin: string, fechfin: string) {
    // fechin = fechin.split("T")[0] + " " + fechin.split("T")[1] + ":00";
    // fechfin = fechfin.split("T")[0] + " " + fechfin.split("T")[1] + ":00";
    this._sReserva.getHorarioXAula(this.aula_id, fechin, fechfin)
      .subscribe((horarios) => {
        this.eventSettings = {
          dataSource: horarios
        }
      })
  }

  abrirModal() {
    $("#miModal").modal("show");
  }

}
