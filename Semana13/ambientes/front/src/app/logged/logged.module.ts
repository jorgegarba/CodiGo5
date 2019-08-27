import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedComponent } from './logged.component';
import { LoggedRoutingModule } from './logged-routing.module';
@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoggedComponent],
  imports: [
    CommonModule,
    LoggedRoutingModule
  ]
})
export class LoggedModule { }
