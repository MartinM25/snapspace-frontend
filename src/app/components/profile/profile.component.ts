import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  fullName: string | null = null;
  username: string | null = null;


  constructor(private router: Router) {
    this.loadUserDetails();
  }

  loadUserDetails() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        this.fullName = userData.fullName; // Assuming the user object has a fullName property
        this.username = userData.username; // Assuming the user object has a username property
      }
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

}
