import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RecibidoComponent} from './dashboard/recibido/recibido.component';
const routes: Routes = [

  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard',component : DashboardComponent},
  {path: 'login',component : LoginComponent},
  {path: 'recibido',component : RecibidoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
