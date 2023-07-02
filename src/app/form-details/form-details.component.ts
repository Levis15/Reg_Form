import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-details',
  templateUrl: './form-details.component.html',
  styleUrls: ['./form-details.component.css']
})
export class FormDetailsComponent implements OnInit {
  value:any;

  // rowData = [

    
  // { FirstName:this..value.firstName }
  // ];
  

  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
   this.getData();
  
  }


  formData:any;

  Url=" http://localhost:3000/FormDetails";
  getData(){
    this.http.get(this.Url).subscribe(data=>{
     
     this.formData=data;
     
    })

  }

  search(){
  
  // let getVal:any =[]
  //     getVal.push(this.formData);
    
      
  //     getVal.forEach((data:any)=>{
  //       console.log(data)
        
  //     })
 
  }

  

}
