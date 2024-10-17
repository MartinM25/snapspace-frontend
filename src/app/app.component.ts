import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BottomnavComponent } from "./components/bottomnav/bottomnav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, SidebarComponent, CommonModule, BottomnavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snapspace';

  constructor(private router: Router) { }

  ngOnInit() {
    const token = localStorage.getItem('jwtToken'); // Check for token on initialization
    if (token) {
      this.router.navigate(['/home']); // Redirect to home if logged in
    } else {
      this.router.navigate(['/login']); // Redirect to login if not logged in
    }
  }

  showSidebar(): boolean {
    const hideRoutes = ['/login', '/register']; // Add more routes here as needed
    return !hideRoutes.includes(this.router.url);
  }

  isLargeScreen(): boolean {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024; // or whatever breakpoint you're using
    }
    return false; // Default fallback in SSR
  }

  showBottomNav(): boolean {
    const hideRoutes = ['/login', '/register']; // Add more routes here as needed
    return !hideRoutes.includes(this.router.url);
  }
}
