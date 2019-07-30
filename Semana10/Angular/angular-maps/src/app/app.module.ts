import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { NotfoundComponent } from './components/notfound/notfound.component';


// Modulo de rutas
import {RUTAS_APP} from './app.routes';

// Modulos adicionales
// Modulo HTTP
import {HttpClientModule} from '@angular/common/http';
import { LugarComponent } from './components/lugar/lugar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LugaresComponent,
    NotfoundComponent,
    LugarComponent
  ],
  imports: [
    BrowserModule,
    RUTAS_APP,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
