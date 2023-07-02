import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { SampleService } from '../sample.service';
import {NgFor} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';


export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  

  
})
export class GeneralComponent implements OnInit {

 
  formsDetails:any;
  submitted=true;
  constructor(private http: HttpClient,private router:Router,private fb: FormBuilder, private service:SampleService){

  }
 

  ngOnInit(): void {
    this.formsDetails=new FormGroup({
      firstName: new FormControl( '', Validators.required),
      lastName:new FormControl( '', Validators.required),
      dob:new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]),
      gender:new FormControl('', Validators.required),
      posAplyFor:new FormControl('', Validators.required),
      empRef:new FormControl(),
      mobNum:new FormControl('', [ Validators.required,
        Validators.pattern('[6-9]\\d{9}'),
        Validators.minLength(10), Validators.maxLength(10)]),
      homephNum:new FormControl('', [ Validators.required,
        Validators.pattern('[6-9]\\d{9}'),
        Validators.minLength(10), Validators.maxLength(10)]),
      officeNum:new FormControl('', [
        Validators.pattern('[6-9]\\d{9}'),
        Validators.minLength(10), Validators.maxLength(10)]),
      perEmail:new FormControl('', [Validators.required, Validators.email]),
      perAddress:new FormControl('', Validators.required),
      locality:new FormControl(),
      city:new FormControl('', Validators.required),
      pinCode:new FormControl('', Validators.required),
      district:new FormControl('', Validators.required),
      state:new FormControl('', Validators.required),
      country:new FormControl('', Validators.required),
      landmark:new FormControl(),
      possport:new FormControl('', Validators.required),
      visa:new FormControl('', Validators.required),
      maritalStatus:new FormControl('', Validators.required),
      // famMumber:this.fb.group({
      //   name: [''],
      //   age: [''],
      //   relationship: [''],
      //   occOrOrg1: ['']
      // }),
      Language:new FormControl(),
      speak:new FormControl(),
      write:new FormControl()

      
    

    }) 
   
   this.editdata();
  }


  editdata(){
    let data=this.service.DataId;
    this.formsDetails.patchValue({
      firstName:data.firstName,
      lastName:data.lastName,
      dob:data.dob,
      gender:data.gender,
      posAplyFor:data.posAplyFor,
      empRef:data.empRef,
      mobNum:data.mobNum,
      homephNum:data.homephNum,
      officeNum:data.officeNum,
      perEmail:data.perEmail,
      locality:data.locality,
      city:data.city,
      pinCode:data.pinCode,
      district:data.district,
      state:data.state,
      country:data.country,
      landmark:data.landmark,
      possport:data.possport,
      visa:data.visa,
      maritalStatus:data.maritalStatus,
      // famMumber:this.fb.group({
      //   name: [''],
      //   age: [''],
      //   relationship: [''],
      //   occOrOrg1: ['']
      // }),
      Language:data.language,
      speak:data.speak,
      write:data.write,
      perAddress:data.perAddress
    })

  }
  
 
  Url="  http://localhost:3000/FormDetails";
  savaData:any;
  
  
  onSubmit(){

    let data = this.formsDetails.value;
    this.http.post(this.Url,data).subscribe((datas)=>{
      console.log(datas);
      let getVal:any =[]
      getVal.push(datas);
      console.log(getVal,"getVal");
      
      getVal.forEach((data:any)=>{
        this.service.DataId=data
        
      })
      console.log(datas)
    this.router.navigateByUrl('education');
    this.submitted=true;
      // if (this.formsDetails.invalid) {
      //       return;
      //   }
   
    })
    

  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  addData(){
    let indexForId = this.formsDetails.famMumber.length + 1;
    console.log(indexForId);
    this.formsDetails.famMumber.push({
      id: indexForId,
      name: this.formsDetails.famMumber.name,
      age:this.formsDetails.famMumber.age,
      relationship:["father","Mather","Brother","Sister","Other"],
      occOrOrg1:this.formsDetails.occOrOrg
      

    })
  }
  Language:any=[];
  addLan(){
    let indexId=this.Language.length+1;
    this.Language.push({
      id:indexId,
      languages:this.formsDetails.languages,
      canSpeak:this.formsDetails.speak,
      canWrite:this.formsDetails.write
    })
  }

  

}


