import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router){
    
  }
  userName:any;
  password:any;
  hide = true;
  login(){
    if(this.userName=="admin" && this.password=="admin"){
      this.router.navigateByUrl('details');
    }else{
      alert("incorrect userName and Pasword")
    }

  }
}
