import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitadoComponent } from './invitado.component';
import { HomeComponent } from './components/home/home.component';
import { InvitadoRoutingModule } from './invitado-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConsultaComponent } from './components/consulta/consulta.component';



@NgModule({
  declarations: [InvitadoComponent, HomeComponent, NavbarComponent, ConsultaComponent],
  imports: [
    CommonModule,
    InvitadoRoutingModule
  ]
})
export class InvitadoModule { }
