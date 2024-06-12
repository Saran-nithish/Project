import { Component } from '@angular/core';
import { Department } from '../interfaces/department';
import { DepartmentService } from '../Services/department.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DepartmentComponent } from '../dialog/department/department.component';
import { MatIcon } from '@angular/material/icon';
import { HomePageComponent } from '../home-page/home-page.component';
import { UserService } from '../Services/user.service';
import { Router, RouterLink } from '@angular/router';
import { ManageFacultiesComponent } from '../manage-faculties/manage-faculties.component';
@Component({
  selector: 'app-manage-departments',
  standalone: true,
  imports: [FormsModule,CommonModule, MatDialogModule,MatIcon,HomePageComponent,ManageFacultiesComponent,RouterLink],
  templateUrl: './manage-departments.component.html',
  styleUrl: './manage-departments.component.css'
})
export class ManageDepartmentsComponent {
 departments: Department[] = [];
  loading = true;

  constructor(private departmentService: DepartmentService, private dialog: MatDialog,private userService:UserService,private router:Router) {}

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
      this.loading = false;
    });
  }

  addDepartment(): void {
    const dialogRef = this.dialog.open(DepartmentComponent, {
      width: '400px',
      data: { department: { departmentId: 0, name: '', description: '' } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDepartments();
      }
    });
  }

  editDepartment(department: Department): void {
    const dialogRef = this.dialog.open(DepartmentComponent, {
      width: '400px',
      data: { department }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadDepartments();
      }
    });
  }

  deleteDepartment(departmentId: number): void {
    this.departmentService.deleteDepartment(departmentId).subscribe(() => {
      this.loadDepartments();
    });
  }


}
