import { Component } from '@angular/core';
import { User } from '../interfaces/auth';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../Services/user.service';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,RouterLink,FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: User = {
    userId: 0,
    username: '',
    password: '',
    role: 'user',
    email: '',
    profilePicture: 'assets/images/user.png',
    contactInformation: '',
    user: undefined
  };

  constructor(private userService: UserService, private router: Router) {}

  onRegister(registerForm: NgForm) {
    if (registerForm.invalid) {
      return;
    }

    this.userService.register(this.register).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Registration failed', err);
        alert('Registration failed. Please try again.');
      }
    });
  }

}
