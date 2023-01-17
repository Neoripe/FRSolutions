import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  slides : any =[
    {
     imagen:"https://wallpapercave.com/wp/wp10282256.jpg",
     titulo: "¿Que hacemos?",
     descripcion: "Proporcionamos un servicio de consultoria/soluciones en para todos nuestros clientes"
    },
    {
     imagen:"https://wallpapercave.com/wp/wp10282189.jpg",
     titulo: "¿Cuales son las areas con las que nos relacionamos?",
     descripcion: "Programacion - Automcion - Ingenieria - Soluciones a medida" 
    },
    {
     imagen:"https://wallpapercave.com/wp/wp10282259.jpg",
     titulo: "¿Nuestra meta?",
     descripcion: "Dar soluciones a nuestros clientes"
    }

  ]
  
  constructor(private _config:NgbCarouselConfig) {
    _config.interval =  5000;
    _config.pauseOnFocus = true;
    _config.showNavigationArrows = true;
   }

  ngOnInit(): void {
  }


}
