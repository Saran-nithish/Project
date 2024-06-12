import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup, FormsModule, NgModel} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersideComponent } from './userside/userside.component';
import { ManageFacultiesComponent } from './manage-faculties/manage-faculties.component';
import { ManageDepartmentsComponent } from './manage-departments/manage-departments.component';
import { MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FacultyComponent } from './dialog/faculty/faculty.component';
import { DepartmentComponent } from './dialog/department/department.component';
import { MatSnackBar, MatSnackBarModule, matSnackBarAnimations } from '@angular/material/snack-bar';
import { MatOption } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'
import { AdmissionsComponent } from './admissions/admissions.component';
import { AcademicProgramsComponent } from './academic-programs/academic-programs.component';
import { matTooltipAnimations } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { ManageProgramsComponent } from './manage-programs/manage-programs.component';
import { ProgramFormComponent } from './dialog/program-form/program-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    HomePageComponent,
    HttpClientModule,
    FormsModule,
    LoginComponent,
    RegisterComponent,
  UsersideComponent,
ManageFacultiesComponent,
ManageDepartmentsComponent,
FacultyComponent,
MatDialogModule,
DepartmentComponent,
MatOption,
MatDialogModule,
MatButtonModule,
MatSnackBarModule,
MatProgressBarModule,
MatTableModule,
MatIconModule,
MatSelectModule,AdmissionsComponent,AcademicProgramsComponent,MatDialogActions,MatCardModule,MatFormFieldModule,
ManageProgramsComponent,MatInputModule

],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'University-Website';
}
