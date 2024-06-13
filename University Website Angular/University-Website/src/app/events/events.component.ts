import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  constructor(private userService: UserService, private router: Router) { }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
