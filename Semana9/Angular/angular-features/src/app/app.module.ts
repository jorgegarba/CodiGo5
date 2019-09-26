import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';

// Importando las Rutas
import { RUTAS_APP } from './app.routes';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoVerComponent } from './components/productos/producto-ver.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NgstyleComponent,
    NgclassComponent,
    NgswitchComponent,
    PipesComponent,
    CapitalizePipe,
    BienvenidaComponent,
    NotfoundComponent,
    ProductosComponent,
    ProductoVerComponent
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
