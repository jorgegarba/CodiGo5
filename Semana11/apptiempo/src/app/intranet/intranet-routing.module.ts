import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntranetComponent } from './intranet.component';
import { LugaresComponent } from './components/lugares/lugares.component';

const MIS_RUTAS_INTRANET: Routes = [
    {
      path:'',
      component: IntranetComponent,
      children:[
        {
          path:'',
          component: HomeComponent,
        },
        {
          path:'lugares',
          component:LugaresComponent
        }
      ]
    },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(MIS_RUTAS_INTRANET)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
