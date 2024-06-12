import { Component } from '@angular/core';
import { Faculty } from '../interfaces/faculty';
import { FacultyService } from '../Services/faculty.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { FacultyComponent } from '../dialog/faculty/faculty.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select'
import { Router, RouterLink } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-manage-faculties',
  standalone: true,
  imports: [FormsModule,CommonModule,MatProgressBarModule,MatIconModule,MatSelectModule,RouterLink,HomePageComponent],
  templateUrl: './manage-faculties.component.html',
  styleUrl: './manage-faculties.component.css'
})
export class ManageFacultiesComponent {
  faculties: Faculty[] = [];
  loading = true;

  constructor(private facultyService: FacultyService, private dialog: MatDialog,private userService:UserService,private router:Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.loadFaculties();
  }

  loadFaculties(): void {
    this.facultyService.getAllFaculties().subscribe(data => {
      this.faculties = data;
      this.loading = false;
    });
  }

  addFaculty(): void {
    const dialogRef = this.dialog.open(FacultyComponent, {
      width: '400px',
      data: { faculty: null }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFaculties();
      }
    });
  }

  editFaculty(faculty: Faculty): void {
    const dialogRef = this.dialog.open(FacultyComponent, {
      width: '400px',
      data: { faculty }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadFaculties();
      }
    });
  }

  deleteFaculty(facultyId: number): void {
    this.facultyService.deleteFaculty(facultyId).subscribe(() => {
      this.loadFaculties();
    });
  }
  
}
