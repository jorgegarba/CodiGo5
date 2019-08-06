import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { LoginComponent } from './components/login/login.component';


// Modulo de rutas
import { RUTAS_APP } from './app.routes';

// Modulos adicionales
// Modulo HTTP
import { HttpClientModule } from '@angular/common/http';
// Modulo de Formularios Angular
import { FormsModule } from '@angular/forms';

// Modulos para inicio de sesión con redes sociales
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1067081943096-ii59uh1hfm09h3n5u02ia5a6c624139c.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1563635610440191")
  }
]);


export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LugaresComponent,
    NotfoundComponent,
    LugarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RUTAS_APP,
    HttpClientModule,
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
