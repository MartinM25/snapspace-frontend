import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';
  private user: any;

  constructor(private http: HttpClient) {}

  register(user: { username: string; password: string; email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post<{ token: string; user: any; error: string }>(`${this.apiUrl}/login`, user).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('jwtToken', response.token); //store the JWT token
          this.user = response.user; //store user details in the service
          localStorage.setItem('user', JSON.stringify(this.user));
        } else if (response.error) {
          // Handle the error as needed (e.g., show a notification)
          console.error(response.error);
        }
      })
    );
  }

  // Method to get the stored token
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Method to get the stored user details
  getUser(): any {
    return this.user || JSON.parse(localStorage.getItem('user') || 'null'); // Return stored user details
  }

  // Method to logout
  logout(): void {
    localStorage.removeItem('jwtToken'); // Clear the token
    localStorage.removeItem('user'); // Clear user details
    this.user = null; // Reset user variable
  }
} 
