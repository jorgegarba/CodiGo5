import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import {RUTAS_APP} from './app-routes';
import { AdminComponent } from './admin/components/admin/admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';
import { ProductosComponent } from './admin/components/productos/productos.component';
import { UsuariosComponent } from './admin/components/usuarios/usuarios.component';

// socket.io

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './components/login/login.component';
import { SalaComponent } from './components/sala/sala.component';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    HomeAdminComponent,
    ProductosComponent,
    UsuariosComponent,
    LoginComponent,
    SalaComponent
  ],
  imports: [
    BrowserModule,
    RUTAS_APP,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
