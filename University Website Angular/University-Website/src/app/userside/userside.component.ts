import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router, RouterLink } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';

@Component({
  selector: 'app-userside',
  standalone: true,
  imports: [HomePageComponent,RouterLink],
  templateUrl: './userside.component.html',
  styleUrl: './userside.component.css'
})
export class UsersideComponent {

  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
