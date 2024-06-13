import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { UsersideComponent } from './userside/userside.component';
import { ManageFacultiesComponent } from './manage-faculties/manage-faculties.component';
import { DepartmentComponent } from './dialog/department/department.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { AcademicProgramsComponent } from './academic-programs/academic-programs.component';
import { ContactComponent } from './contact/contact.component';
import { ManageProgramsComponent } from './manage-programs/manage-programs.component';
import { ManageAdmissionsComponent } from './manage-admissions/manage-admissions.component';
import { ApplicationComponent } from './application/application.component';
import { FacultyDirectoryComponent } from './faculty-directory/faculty-directory.component';
import { combineLatest } from 'rxjs';
import { EventsComponent } from './events/events.component';
import { NewsComponent } from './news/news.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

  { path:'', redirectTo:'/login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  {path:'home',component:HomePageComponent},
  {path:'user',component:UsersideComponent},
  {path:'managefaculties',component:ManageFacultiesComponent},
  {path:'departments',component:ManageDepartmentsComponent},
  {path:'programs',component:AcademicProgramsComponent},
  {path:'contact',component:ContactComponent},
  {path:'admission',component:AdmissionsComponent},
  {path:'mprogram',component:ManageProgramsComponent},
  {path: 'admission/:programId', component: AdmissionsComponent },
  {path:'manageadmissions',component:ManageAdmissionsComponent},  
  {path:'application',component:ApplicationComponent},
  {path:'faculties',component:FacultyDirectoryComponent},
  {path:'events',component:EventsComponent},
  {path:'news',component:NewsComponent},
  {path:'about',component:AboutComponent}
 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }