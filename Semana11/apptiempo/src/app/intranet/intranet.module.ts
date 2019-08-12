import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

// IMPORTANDO LAS RUTAS DE INTRANET
import {IntranetRoutingModule} from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import {MaterialModule} from './../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LugaresComponent } from './components/lugares/lugares.component';

@NgModule({
  declarations: [HomeComponent, IntranetComponent, ToolbarComponent, LugaresComponent],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    MaterialModule
  ]
})
export class IntranetModule { }
