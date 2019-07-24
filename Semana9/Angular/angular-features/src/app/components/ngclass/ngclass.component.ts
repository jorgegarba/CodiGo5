import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

  miAlerta: string = "alert-danger";

  guardando: boolean = false;

  inventario: any = {
    existencia: 1
  }

  constructor() {
    setTimeout(() => {
      this.inventario.existencia = 2;
    }, 3000);
  }

  ngOnInit() {
  }

  cambiarSuccess() {
    this.miAlerta = "alert-success";
  }

  simularCarga() {
    this.guardando = true;
    setTimeout(() => {
      this.guardando = false;
    }, 2000);
  }
}
