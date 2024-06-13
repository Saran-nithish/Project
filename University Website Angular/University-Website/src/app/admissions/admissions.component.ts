import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Program } from '../interfaces/program';
import { Admission } from '../interfaces/admission';
import { UniversityService } from '../Services/university.service';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,MatCardModule,MatLabel,MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.css'
})
export class AdmissionsComponent {
programs: Program[] = [];
  selectedProgram: Program | undefined;
  application: Admission = {
    admissionId: 0,
    studentName: '',
    email: '',
    programId: 0,
    status: 'Pending',
    applicationFormData: '',
    submissionDate: new Date()
  };

  showSuccessDialog: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private universityService: UniversityService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.universityService.getPrograms().subscribe((programs: Program[]) => {
      this.programs = programs;
    });
  }

  selectProgram(programId: number): void {
    this.selectedProgram = this.programs.find(program => program.programId === programId);
    if (this.selectedProgram) {
      this.application.programId = this.selectedProgram.programId;
    }
  }

  submitApplication(): void {
    this.universityService.postAdmission(this.application).subscribe({
     next: () => {
      this.showSuccessDialog = true; 
    }, error:error => {
      console.error('Error submitting application:', error);
  }});
  }

  closeDialog(): void {
    this.showSuccessDialog = false;
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
