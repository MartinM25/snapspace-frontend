import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  register(user: { username: string; password: string; email: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post<{ token: string; error: string }>(`${this.apiUrl}/login`, user).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('jwtToken', response.token);
        } else if (response.error) {
          // Handle the error as needed (e.g., show a notification)
          console.error(response.error);
        }
      })
    );
  }
}
