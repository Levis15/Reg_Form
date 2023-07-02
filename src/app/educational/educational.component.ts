import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-educational',
  templateUrl: './educational.component.html',
  styleUrls: ['./educational.component.css']
})
export class EducationalComponent implements OnInit{
  educationalDetails:any;
  constructor(private router:Router,private http:HttpClient,private service:SampleService){
    
  }

  ngOnInit(): void {
   
    this.educationalDetails=new FormGroup({
      coursePursued:new FormControl('', Validators.required),
      institution:new FormControl('', Validators.required),
      duration:new FormControl('', Validators.required),
      CGPA:new FormControl('', Validators.required),
        
      

    });
    
     
  }
  Url="http://localhost:3000/educationalDetails";
  Url2="http://localhost:3000/FormDetails";
  next(){
    this.router.navigateByUrl('skill');
    let data=this.educationalDetails.value
    
    this.http.post(this.Url,data).subscribe((datas)=>{
      console.log(datas);
    this.router.navigateByUrl('education');
    
      // if (this.formsDetails.invalid) {
      //       return;
      //   }
   
    })
   

  }
  previous(){
 

    this.router.navigateByUrl('general');
  }
  add(){
    
  }

}
