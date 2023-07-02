import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralComponent } from './general/general.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducationalComponent } from './educational/educational.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProfessionalComponent } from './professional/professional.component';
import { LoginComponent } from './login/login.component';
import { FormDetailsComponent } from './form-details/form-details.component';
import { SampleService } from './sample.service';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatMenuModule} from '@angular/material/menu';
import {NgIf} from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    EducationalComponent,
    SkillsetComponent,
    ProfessionalComponent,
    LoginComponent,
    FormDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, 
    MatDatepickerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    NgIf
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
