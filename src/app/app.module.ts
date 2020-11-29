import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
//FIREBASE
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { from } from 'rxjs';
import {environment} from '../environments/environment';
import { RecibidoComponent } from './dashboard/recibido/recibido.component';

//SERVICIES
import {RecibidoService} from './services/recibido.service';

 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RecibidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    RecibidoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
