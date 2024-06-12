import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';  
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../../Services/department.service';
import { Department } from '../../interfaces/department';


@Component({
  selector: 'app-department',
  standalone: true,
  imports: [FormsModule,CommonModule,MatDialogModule,MatSelectModule,MatIconModule,MatProgressBarModule, MatDialogModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {

  department: Department;

  constructor(
    public dialogRef: MatDialogRef<DepartmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private departmentService: DepartmentService
  ) {
    this.department = data.department;
  }

  save(): void {
    if (this.department.departmentId) {
      this.departmentService.updateDepartment(this.department).subscribe(() => {
        this.dialogRef.close(true);
      });
    } else {
      this.departmentService.addDepartment(this.department).subscribe(() => {
        this.dialogRef.close(true);
      });
    }
  }

  cancel(): void {
    this.dialogRef.close(false);
  }
}
