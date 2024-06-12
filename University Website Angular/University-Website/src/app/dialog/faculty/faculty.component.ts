import { Component, Inject } from '@angular/core';
import { Department } from '../../interfaces/department';
import { Faculty } from '../../interfaces/faculty';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';  
import { MatSelectModule } from '@angular/material/select';
import { FacultyService } from '../../Services/faculty.service';
import { DepartmentService } from '../../Services/department.service';


@Component({
  selector: 'app-faculty',
  standalone: true,
  imports: [FormsModule,CommonModule,MatDialogModule,MatSelectModule,MatIconModule,MatProgressBarModule],
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  faculty: Faculty;
  departments: Department[] = [];

  constructor(
    public dialogRef: MatDialogRef<FacultyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { faculty: Faculty },
    private facultyService: FacultyService,
    private departmentService: DepartmentService
  ) {
    this.faculty = data.faculty || {
      facultyId: 0,
      departmentId: 0,
      name: '',
      photo: 'assets/images/user.png',
      contactInformation: '',
      expertise: '',
      officeHours: '',
      department: {
        departmentId: 0,
        name: '',
        description: ''
      }
    };
  }

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAllDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  save(): void {
    if (this.faculty.facultyId) {
      this.facultyService.updateFaculty(this.faculty).subscribe({
        next:() => {
        this.dialogRef.close(true);
      }, error:(error) => {
        console.error('Error updating faculty:', error);
    }});
    } else {
      this.facultyService.addFaculty(this.faculty).subscribe({
       next: () => {
        this.dialogRef.close(true);
      }, error:error => {
        console.error('Error adding faculty:', error);
    }});
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
