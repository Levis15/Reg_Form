import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormsDetails';
  constructor(private router:Router){

  }
  onClick(){
    this.router.navigateByUrl('general');
  }
  onClickedu(){
    this.router.navigateByUrl('education');
  }
  onClickSkill(){
    this.router.navigateByUrl('skill');
  }
  onClickProfessional(){
    this.router.navigateByUrl('professional')
  }
  onClickLogin(){
    this.router.navigateByUrl('login');
  }
}
