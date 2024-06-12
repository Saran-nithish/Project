import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router'
import { UserService } from '../Services/user.service';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { User } from '../interfaces/auth';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user: User = {
    userId: 0,
    username: "",
    password: "",
    role: "",
    email: "",
    profilePicture: "",
    contactInformation: "",
    user: undefined
  };

  constructor(private userService: UserService, private router: Router) {
    
  }


  onLogin() {
    this.userService.login(this.user).subscribe({
      next: (response: User) => {
        console.log('Login successful', response);
        if (response.user) {
          const user: User = response.user;
          localStorage.setItem('currentUser', JSON.stringify(user));

          if (user.role === 'admin') {
            this.router.navigate(['/home']);
          } else if (user.role === 'user') {
            this.router.navigate(['/user']);
          } else {
            console.error('Invalid role received:', user.role);
          }
        } else {
          console.error('User not found in response:', response);
        }
    
      },
      error: (err) => {
        console.error('Login failed', err);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  }

}
