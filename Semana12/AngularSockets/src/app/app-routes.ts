import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './admin/components/admin/admin.component';
import { HomeAdminComponent } from './admin/components/home-admin/home-admin.component';
import { UsuariosComponent } from './admin/components/usuarios/usuarios.component';
import { ProductosComponent } from './admin/components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { SalaComponent } from './components/sala/sala.component';


const MIS_RUTAS: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'sala',
        component: SalaComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                component: HomeAdminComponent
            },
            {
                path: 'usuarios',
                component: UsuariosComponent
            },
            {
                path: 'productos',
                component: ProductosComponent
            }
        ]
    }

];

export const RUTAS_APP = RouterModule.forRoot(MIS_RUTAS, { useHash: true });
