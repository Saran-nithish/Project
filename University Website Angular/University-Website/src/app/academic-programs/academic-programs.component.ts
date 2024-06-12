import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../Services/user.service';
import { Program } from '../interfaces/program';
import { UniversityService } from '../Services/university.service';
import { CommonModule } from '@angular/common';
import { MatDialog, matDialogAnimations } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTooltip } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar'
@Component({
  selector: 'app-academic-programs',
  standalone: true,
  imports: [FormsModule,CommonModule,MatProgressBarModule,MatIconModule,MatSelectModule,RouterLink,MatCardModule,MatTooltip,MatToolbarModule],
  templateUrl: './academic-programs.component.html',
  styleUrl: './academic-programs.component.css'
})
export class AcademicProgramsComponent {
  constructor(private userService: UserService, private router: Router,private universityService: UniversityService) { }

  programs: Program[] = [];


  ngOnInit(): void {
    this.universityService.getPrograms().subscribe((programs: Program[]) => this.programs = programs);
  }
  apply(programId: number): void {
    this.router.navigate(['/admission', programId]);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
