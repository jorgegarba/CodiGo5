import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const MIS_RUTAS: Routes = [
  {
    path: '',
    loadChildren: './invitado/invitado.module#InvitadoModule'
  },
  {
    path: 'logged',
    loadChildren: './logged/logged.module#LoggedModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(MIS_RUTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
