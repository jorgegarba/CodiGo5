import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InvitadoComponent } from './invitado.component';
import { ConsultaComponent } from './components/consulta/consulta.component';

const MIS_RUTAS: Routes = [
    {
        path: '',
        component: InvitadoComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'consulta',
                component: ConsultaComponent
            }
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(MIS_RUTAS)],
    exports: [RouterModule]
})
export class InvitadoRoutingModule { }
