import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationalComponent } from './educational/educational.component';
import { GeneralComponent } from './general/general.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { LoginComponent } from './login/login.component';
import { FormDetailsComponent } from './form-details/form-details.component';

const routes: Routes = [
  {path:'general', component: GeneralComponent},
  {path:'education', component: EducationalComponent},
  {path:'skill',component:SkillsetComponent},
  {path:'professional',component:ProfessionalComponent },
  {path:'login',component:LoginComponent},
  {path:'details',component:FormDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
