import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() fullName: string = 'John Doe';
  @Input() username: string = 'johndoe';
  @Input() profilePicture: string = 'assets/images/user.png';

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

}
