import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import { Router } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm: FormGroup;
  isLoading = false;
  message: string = '';

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService,
  ) {
    // Initialize the form
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Ensure form is valid before submitting
    if (this.loginForm.invalid) {
      this.message = 'Please Fill Out The Form Correctly';
      return;
    }

    this.isLoading = true;
    const loginData = this.loginForm.value; //Extract values from the form

    this.authService.login(loginData).subscribe({
      next: response => {
        console.log('Login successful, token:', response.token);
        localStorage.setItem('token', response.token);
        this.isLoading = false;

        // Redirect or show success message
        this.router.navigate(['/home'], { replaceUrl: true }) 
      },
      error: error => {
        console.error('Error logging in:', error);
        this.isLoading = false;
        this.message = 'Login Failed. Please Check Your Credentials.';
      }
    });
  }


    // Helper methods to show error messages
    get email() {
      return this.loginForm.get('username');
    }
  
    get password() {
      return this.loginForm.get('password');
    }

  goToRegister() {
    this.router.navigate(['/register'])
  }
}
