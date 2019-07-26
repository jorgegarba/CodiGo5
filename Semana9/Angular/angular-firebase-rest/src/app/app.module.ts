import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

// Cargando Archivo de Rutas
import {RUTAS_APP} from './app.routes';
// Lista de componentes
import { AulasComponent } from './components/aulas/aulas.component';
import { AulaCardComponent } from './components/aula-card/aula-card.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
// Modulo de Formularios para Angular
import {FormsModule} from '@angular/forms';
import { AulaCrearComponent } from './components/aula-crear/aula-crear.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotfoundComponent,
    AulasComponent,
    AulaCardComponent,
    FormulariosComponent,
    AulaCrearComponent
  ],
  imports: [
    BrowserModule,
    RUTAS_APP,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
