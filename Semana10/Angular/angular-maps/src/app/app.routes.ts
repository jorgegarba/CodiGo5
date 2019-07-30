import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { LugarComponent } from './components/lugar/lugar.component';

const MIS_RUTAS: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'lugares',
        component: LugaresComponent
    },
    {
        path: 'lugares/:id',
        component: LugarComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];

export const RUTAS_APP = RouterModule.forRoot(MIS_RUTAS);
