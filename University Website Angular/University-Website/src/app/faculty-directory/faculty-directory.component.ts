import { Component } from '@angular/core';
import { Faculty } from '../interfaces/faculty';
import { FacultyService } from '../Services/faculty.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserService } from '../Services/user.service';


@Component({
  selector: 'app-faculty-directory',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './faculty-directory.component.html',
  styleUrl: './faculty-directory.component.css'
})
export class FacultyDirectoryComponent {
  faculties: Faculty[] = [];

  constructor(private universityService: FacultyService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.getFaculties();
  }

  getFaculties(): void {
    this.universityService.getAllFaculties()
      .subscribe(faculties => this.faculties = faculties);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
