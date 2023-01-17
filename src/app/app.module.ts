import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { SolucionesComponent } from './soluciones/soluciones.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CardProgComponent } from './cards/card-prog/card-prog.component';
import { CardAutoComponent } from './cards/card-auto/card-auto.component';
import { CardIngComponent } from './cards/card-ing/card-ing.component';
import { CardSoluComponent } from './cards/card-solu/card-solu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextomovilComponent } from './textomovil/textomovil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SolucionesComponent,
    NosotrosComponent,
    ContactoComponent,
    CardProgComponent,
    CardAutoComponent,
    CardIngComponent,
    CardSoluComponent,
    CarouselComponent,
    TextomovilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'', component:HomeComponent},
      {path:'nosotros', component:NosotrosComponent},
      {path:'soluciones', component:SolucionesComponent},
      {path:'**', redirectTo:'/' , pathMatch:'full'},
    ]),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
