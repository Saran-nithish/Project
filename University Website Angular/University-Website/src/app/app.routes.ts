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

export const routes: Routes = [
    // {path:'',redirectTo:'login',pathMatch:"full"},
    // {path:'login',component:LoginComponent},
    // {path:'',
    //     component:HomePageComponent,
    //     children:[
    //         {
    //             path:'admission',
    //             component:AdmissionsComponent
    //         }
    //     ]
    // }
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'home',component:HomePageComponent},
  {path:'user',component:UsersideComponent},
  {path:'managefaculties',component:ManageFacultiesComponent},
  {path:'departments',component:ManageDepartmentsComponent},
  {path:'programs',component:AcademicProgramsComponent},
  {path:'contact',component:ContactComponent},
  {path:'admission',component:AdmissionsComponent},
  {path:'mprogram',component:ManageProgramsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }