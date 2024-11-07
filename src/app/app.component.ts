import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule, isPlatformBrowser  } from '@angular/common';
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

  constructor(
    private router: Router, 
    @Inject(PLATFORM_ID) 
    private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('jwtToken'); // Check for token on initialization
      const currentUrl = this.router.url; // Get the current URL
  
      // Allow users to stay on any page they're on after a reload
      if (!token) {
        // If no token, redirect only if they try to access protected routes
        const unprotectedRoutes = ['/login', '/register'];
        if (!unprotectedRoutes.includes(currentUrl)) {
          this.router.navigate(['/login']); // Redirect to login only if on a protected route
        }
      } else {
        // If token exists, prevent access to login or register pages
        if (currentUrl === '/login' || currentUrl === '/register') {
          this.router.navigate(['/home']);
        }
      }
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
