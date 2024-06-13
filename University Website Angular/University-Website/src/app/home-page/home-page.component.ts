import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FacultyService } from '../Services/faculty.service';
import { UniversityService } from '../Services/university.service';
import { User } from '../interfaces/auth';
import { Faculty } from '../interfaces/faculty';
import { Program } from '../interfaces/program';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private router: Router,  private userService: UserService,private facultyService: FacultyService,private universityService: UniversityService) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  totalStudents: number = 0;
  totalFaculty: number = 0;
  totalPrograms: number = 0;

  ngOnInit(): void {
    this.fetchDashboardData();
  }

  fetchDashboardData(): void {
    this.userService.getUsers().subscribe((users: User[]) => {
      this.totalStudents = users.length;
    });

    this.facultyService.getAllFaculties().subscribe((faculty: Faculty[]) => {
      this.totalFaculty = faculty.length;
    });

    this.universityService.getPrograms().subscribe((programs: Program[]) => {
      this.totalPrograms = programs.length;
    });
  }
}
