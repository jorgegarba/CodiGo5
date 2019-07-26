import {RouterModule, Routes} from '@angular/router';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgswitchComponent } from './components/ngswitch/ngswitch.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoVerComponent } from './components/productos/producto-ver.component';

const MIS_RUTAS:Routes = [
    {
        path:'',
        component: BienvenidaComponent
    },
    {
        path:'ngclass',
        component: NgclassComponent
    },
    {
        path:'pipes',
        component: PipesComponent
    },
    {
        path:'ngstyle',
        component: NgstyleComponent
    },
    {
        path:'ngswitch',
        component: NgswitchComponent
    },
    {
        path:'productos',
        component: ProductosComponent
    },
    {
        path:'productos/:id',
        component: ProductoVerComponent
    },
    {
        path:'**',
        component: NotfoundComponent
    }
];

export const RUTAS_APP = RouterModule.forRoot(MIS_RUTAS);
