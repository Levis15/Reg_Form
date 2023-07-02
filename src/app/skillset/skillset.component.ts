import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillset',
  templateUrl: './skillset.component.html',
  styleUrls: ['./skillset.component.css']
})
export class SkillsetComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private router:Router){
    
  }
  Skills:any=[]
  Rat=[50,75,100]
  skillset:any=[{
    
  }];
  add(){
    let index=this.Skills.length+1;
    this.Skills.push({
    id:index,
    Skil:'',
    year:'',
    rating:this.Rat
    })
  }
  next(){
    this.router.navigateByUrl('professional');

  }
  previous(){
    this.router.navigateByUrl('education');
  }


}
