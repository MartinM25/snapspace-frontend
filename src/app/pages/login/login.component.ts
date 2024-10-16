import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import { Router } from '@angular/router'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginForm: FormGroup;
  isLoading = false;
  message: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // Show the loader immediately
    this.isLoading = true;
    this.message = ''; // Clear previous messages

    // Simulated valid credentials
    const validEmail = 'email@email.com';
    const validPassword = '12345678';

    // Check if both fields are filled
    if (!this.loginForm.value.email || !this.loginForm.value.password) {
      this.isLoading = false; // Stop loading
      this.message = 'Please fill in all the fields.'; // Set error message
      return;
    }

    // Check if email and password match valid credentials
    setTimeout(() => {
      if (this.loginForm.value.email === validEmail && this.loginForm.value.password === validPassword) {
        this.router.navigate(['/home']);
      } else {
        this.message = 'Invalid credentials'; // Set error message
      }
      this.isLoading = false; // Stop loading after checking
    }, 3000);
  }


    // Helper methods to show error messages
    get email() {
      return this.loginForm.get('email');
    }
  
    get password() {
      return this.loginForm.get('password');
    }

  goToRegister() {
    this.router.navigate(['/register'])
  }
}
