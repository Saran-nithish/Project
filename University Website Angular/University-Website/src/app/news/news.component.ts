import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
