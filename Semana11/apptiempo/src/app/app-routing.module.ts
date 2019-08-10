import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const MIS_RUTAS: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'intranet'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(MIS_RUTAS)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
