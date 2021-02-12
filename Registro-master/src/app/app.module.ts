import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpRequest} from '@angular/common/http';
import {from} from 'rxjs';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PrinComponent } from './components/prin/prin.component';
import { FoterComponent } from './components/foter/foter.component';
import { GastroComponent} from  './components/gastro/gastro.component';
import { ListarComponent } from './components/listar/listar.component';
import { PrvinComponent } from './components/prvin/prvin.component';
import { LoginComponent } from './components/login/login.component';
import { ReserComponent } from './components/reservas/reservas.component';
import { SignInComponent } from './components/signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrinComponent,
    FoterComponent,
    GastroComponent,
    ListarComponent,
    LoginComponent,
    PrvinComponent,
    ReserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
