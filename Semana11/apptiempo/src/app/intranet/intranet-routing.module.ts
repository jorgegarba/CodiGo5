import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntranetComponent } from './intranet.component';

const MIS_RUTAS_INTRANET: Routes = [
    {
      path:'',
      component: IntranetComponent,
      children:[
        {
          path:'',
          component: HomeComponent,
        }
      ]
    }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(MIS_RUTAS_INTRANET)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
