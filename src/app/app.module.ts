import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ProductosComponent } from './productos/productos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CommingsoonComponent } from './commingsoon/commingsoon.component';
import { ReactiveFormsModule } from '@angular/forms';
import {RecaptchaModule} from 'ng-recaptcha';
import {NgxTypedJsModule} from 'ngx-typed-js';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ServiciosComponent,
    ProductosComponent,
    ContactoComponent,
    CommingsoonComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxTypedJsModule,    
    ReactiveFormsModule,        
    RecaptchaModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'servicios', component:ServiciosComponent},      
      {path:'**', redirectTo:'/', pathMatch:'full'}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
