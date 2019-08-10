import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

// IMPORTANDO LAS RUTAS DE INTRANET
import {IntranetRoutingModule} from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';


@NgModule({
  declarations: [HomeComponent, IntranetComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule
  ]
})
export class IntranetModule { }
