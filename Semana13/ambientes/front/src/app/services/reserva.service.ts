import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(private _sHttp: HttpClient) { }

  getHorarioXAula(aula_id, res_fechin, res_fechfin) {
    let url = `http://localhost:3000/reservabyfechas/${aula_id}`;
    let misHeaders = new HttpHeaders();
    misHeaders.set("Content-Type", "application/json");
    let body = {
      "body_res_fechin": res_fechin,
      "body_res_fechfin": res_fechfin,
    };
    
    return this._sHttp.post(url, body, { headers: misHeaders })
      .pipe(
        map((resultado: any) => {
          let horarios = resultado.map(reserva => {
            let horario = {
              Id: reserva.res_id,
              Subject: reserva.res_obs,
              StartTime: reserva.res_fechin,
              EndTime: reserva.res_fechfin
            }
            return horario;
          })
          return horarios
        })
      )
  }
}
