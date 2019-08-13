import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';

// IMPORTANDO LAS RUTAS DE INTRANET
import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { MaterialModule } from './../material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { MapaComponent } from './dialogs/mapa/mapa.component';

// importando modulo de AGM angular maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    HomeComponent,
    IntranetComponent,
    ToolbarComponent,
    LugaresComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAnZzdYNu8q7TN9PdX5XEmbJ2TIHYMC8cI'
    })
  ],
  entryComponents: [MapaComponent]
})
export class IntranetModule { }
