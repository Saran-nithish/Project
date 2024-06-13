import { Component } from '@angular/core';
import { Admission } from '../interfaces/admission';
import { UniversityService } from '../Services/university.service';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-manage-admissions',
  standalone: true,
  imports: [RouterLink,MatFormFieldModule,DatePipe,FormsModule,CommonModule],
  templateUrl: './manage-admissions.component.html',
  styleUrl: './manage-admissions.component.css'
})
export class ManageAdmissionsComponent {
  admissions: Admission[] = [];

  constructor(private admissionService: UniversityService,private router: Router,  private userService: UserService) { }

  ngOnInit(): void {
    this.getAdmissions();
  }
  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  getAdmissions(): void {
    this.admissionService.getAdmissions()
      .subscribe({
       next: admissions => this.admissions = admissions,
        error:error => console.error('Error fetching admissions', error)
  });
  }

  approveAdmission(admission: Admission): void {
    this.updateStatus(admission.admissionId, 'Approved');
  }

  rejectAdmission(admission: Admission): void {
    this.updateStatus(admission.admissionId, 'Rejected');
  }

  private updateStatus(id: number, status: string): void {
    this.admissionService.updateAdmissionStatus(id, status)
      .subscribe({
        next:updatedAdmission => {
          const index = this.admissions.findIndex(a => a.admissionId === updatedAdmission.admissionId);
          if (index !== -1) {
            this.admissions[index] = updatedAdmission;
          }
        },
       error: error => console.error('Error updating admission status', error)
  });
  }
}
