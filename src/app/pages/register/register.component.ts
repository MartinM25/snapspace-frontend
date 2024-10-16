import { Component } from '@angular/core';

import { NgIf } from '@angular/common';
import { Router } from '@angular/router'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  registerForm: FormGroup;
  isLoading: boolean = false;
  isSuccess: boolean = false;
  message: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
        this.isSuccess = true;
        this.message = null;
        this.registerForm.reset();
      }, 2000);
    } else {
      this.message = 'Please fill out all fields correctly.';
    }
  }

  goToLogin() {
    this.router.navigate(['/login'])
  }
}
