import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedComponent } from './logged.component';
import { LoggedRoutingModule } from './logged-routing.module';
import { MyScheduleModule } from '../my-schedule.module';
import { HorarioAulaComponent } from './components/horario-aula/horario-aula.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoggedComponent,
    HorarioAulaComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule,
    MyScheduleModule,
    FormsModule
  ]
})
export class LoggedModule { }
