import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent {
  constructor(private router:Router){
  
  }
  previous(){
    this.router.navigateByUrl('skill');

  }
  

}
