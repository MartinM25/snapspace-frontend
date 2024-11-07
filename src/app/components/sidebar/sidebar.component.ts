import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { AuthService } from '../../services/auth.service';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    RouterModule,
    ProfileComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  currentRoute: string = '';

  routes = [
    { path: '/home', label: 'Home', activeIcon: 'home-solid', inactiveIcon: 'home-outline' },
    { path: '/explore', label: 'Explore', activeIcon: 'search-solid', inactiveIcon: 'search-outline' },
    { path: '/messages', label: 'Messages', activeIcon: 'chat-solid', inactiveIcon: 'chat-outline' },
    { path: '/profile', label: 'Profile', activeIcon: 'profile-solid', inactiveIcon: 'profile-outline' },
    { path: '/saved', label: 'Saved', activeIcon: 'save-solid', inactiveIcon: 'save-outline' },
  ];

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {
    this.router.events.subscribe(() => {
      this.currentRoute =  this.router.url;
    });
  }

  isRouteActive(route: string): boolean {
    return this.currentRoute === route;
  }

  logout() {
    this.authService.logout(); // Clear localStorage
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

}
