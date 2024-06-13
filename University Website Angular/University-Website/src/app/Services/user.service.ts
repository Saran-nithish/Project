import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private Url="https://localhost:7107/api";

  constructor(private http:HttpClient) { }

  register(user: User): Observable<any> {
    return this.http.post(`${this.Url}/Users/register`, user);
  }

  login(user:User): Observable<any> {
    return this.http.post(`${this.Url}/Users/login`, user);
  }
  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.Url}/Users`);
  }

}
