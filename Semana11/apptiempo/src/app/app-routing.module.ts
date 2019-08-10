import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const MIS_RUTAS: Routes = [
  {
      path: '',
      component: HomeComponent
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(MIS_RUTAS)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
