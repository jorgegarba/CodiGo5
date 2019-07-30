import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from './../../services/lugares.service';
import { Lugar } from "./../../models/Lugar";
@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styles: []
})
export class LugarComponent implements OnInit {

  objLugar:Lugar;

  constructor(private _sActivatedRoute:ActivatedRoute,
              private _sLugares:LugaresService) { }

  ngOnInit() {
    // forma 1 de recuperar parametros enviados por la URL
      // let id = this._sActivatedRoute.snapshot.paramMap.get("id");
      // console.log(id);

    // forma 2 de recuperar parametros enviados por la URL, hasta mas de una vez
    this._sActivatedRoute.params.subscribe(parametros=>{
      let {id} = parametros;
      this.getLugar(id);
    });
  }
  getLugar(id){
    this._sLugares.getLugarById(id)
                  .subscribe((lugar:Lugar)=>{
                    this.objLugar = lugar;
                    console.log(this.objLugar);
                  })
  }

}
