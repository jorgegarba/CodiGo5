import {RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AulasComponent } from './components/aulas/aulas.component';

const MIS_RUTAS:Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'aulas',
        component: AulasComponent
    },
    {
        path:'**',
        component: NotfoundComponent
    }
];

export const RUTAS_APP = RouterModule.forRoot(MIS_RUTAS);
