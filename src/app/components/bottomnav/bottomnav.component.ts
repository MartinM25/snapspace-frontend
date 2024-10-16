import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-bottomnav',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './bottomnav.component.html',
  styleUrl: './bottomnav.component.css'
})
export class BottomnavComponent {
  routes = [
    { path: '/home', activeIcon: 'home-solid', inactiveIcon: 'home-outline' },
    { path: '/explore', activeIcon: 'search-solid', inactiveIcon: 'search-outline' },
    { path: '/create',  activeIcon: 'create-solid', inactiveIcon: 'create-outline' },
    { path: '/messages', activeIcon: 'chat-solid', inactiveIcon: 'chat-outline' },
    { path: '/profile', activeIcon: 'profile-solid', inactiveIcon: 'profile-outline' },
  ];

  constructor(private router: Router) {};

  isRouteActive(routePath: string): boolean {
    return this.router.url === routePath;
  }

}
