import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value)=>{
      this.jumTo(value);      
    });
  } 

  jumTo(section:any){
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
  }
  
}
