import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { AulasComponent } from './components/aulas/aulas.component';
import { FormulariosComponent } from './components/formularios/formularios.component';
import { AulaCrearComponent } from './components/aula-crear/aula-crear.component';

const MIS_RUTAS: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'aulas',
        component: AulasComponent
    },
    {
        path: 'formularios',
        component: FormulariosComponent
    },
    {
        path: 'aulas/crear',
        component: AulaCrearComponent
    },
    {
        path: '**',
        component: NotfoundComponent
    }
];

export const RUTAS_APP = RouterModule.forRoot(MIS_RUTAS);
