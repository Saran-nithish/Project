import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router, RouterLink } from '@angular/router';
import { Application } from '../interfaces/application';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApplicationService } from '../Services/application.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {
  currentDate: string;

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  applicationForm: FormGroup;

  constructor(private fb: FormBuilder, private applicationService: ApplicationService,private userService: UserService, private router: Router) {
    this.currentDate = new Date().toISOString().split('T')[0];
   
    this.applicationForm = this.fb.group({
      userId: ['', Validators.required],
      programId: ['', Validators.required],
      status: ['', Validators.required],
      submissionDate: [this.currentDate, Validators.required],
      reviewDate: [''],
      decisionDate: ['']
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.applicationForm.valid) {
      const newApplication: Application = this.applicationForm.value;
      this.applicationService.createApplication(newApplication).subscribe({
        next:(response) => {
          console.log('Application submitted successfully', response);
        },
        error:(error) => {
          console.error('Error submitting application', error);
        }
    });
    }
  }
}
