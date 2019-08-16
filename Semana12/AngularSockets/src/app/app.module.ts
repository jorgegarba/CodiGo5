import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { RUTAS_APP } from './app-routes';
import { AdminComponent } from './admin/components/admin/admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';
import { ProductosComponent } from './admin/components/productos/productos.component';
import { UsuariosComponent } from './admin/components/usuarios/usuarios.component';

// socket.io

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { LoginComponent } from './components/login/login.component';
import { SalaComponent } from './components/sala/sala.component';
const config: SocketIoConfig = { url: 'https://garnica-back-chat.herokuapp.com/', options: {} };

// forms
import { FormsModule } from '@angular/forms';

// inicio de sesion con redes sociales
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let configLogin = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1067081943096-vfnb6fuqhr801q00f4efge8v3oiaof97.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1563635610440191")
  }
]);

export function provideConfig() {
  return configLogin;
}

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
    SocketIoModule.forRoot(config),
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
