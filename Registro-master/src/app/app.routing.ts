import { Routes, RouterModule} from '@angular/router';
import {from} from 'rxjs';

import {HomeComponent} from './components/home/home.component';
import {PrinComponent} from './components/prin/prin.component';
import { ListarComponent} from './components/listar/listar.component';
import {GastroComponent} from './components/gastro/gastro.component';
import { LoginComponent } from './components/login/login.component';
import { PrvinComponent} from './components/prvin/prvin.component';
import { ReserComponent } from './components/reservas/reservas.component';
import { SignInComponent } from './components/signin/signin.component';

const appRoutes: Routes = [
    {path:'', component: PrinComponent},
    {path:'prin', component: PrinComponent},
    {path:'Listar', component: ListarComponent},
    {path:'Inicio', component: HomeComponent},
    {path:'gastro', component: GastroComponent},
    {path:'login', component: LoginComponent},
    {path:'reservas', component: ReserComponent},
    {path:'prvin',  component:PrvinComponent },
    {path:'signin',  component:SignInComponent }    

]

export const routing = RouterModule.forRoot(appRoutes)