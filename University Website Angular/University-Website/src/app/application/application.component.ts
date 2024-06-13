import { Component } from '@angular/core';
import { Admission } from '../interfaces/admission';
import { UniversityService } from '../Services/university.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-application',
  standalone: true,
  imports: [RouterLink,DatePipe,CommonModule],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {
  admissions: Admission[] = [];

  constructor(private admissionService: UniversityService, private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.getAdmissions();
  }

  getAdmissions(): void {
    this.admissionService.getAdmissions()
      .subscribe({
       next: admissions => this.admissions = admissions,
        error:error => console.error('Error fetching admissions', error)
  });
  }

  deleteAdmission(admissionId: number): void {
    if (confirm('Are you sure you want to delete this application?')) {
      this.admissionService.deleteAdmission(admissionId)
        .subscribe({
         next: () => {
            this.admissions = this.admissions.filter(a => a.admissionId !== admissionId);
          },
         error: error => console.error('Error deleting admission', error)
      }  );
    }
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
