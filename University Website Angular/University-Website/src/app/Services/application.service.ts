import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Application } from '../interfaces/application';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private apiUrl = 'https://localhost:7107/api/Applications';

  constructor(private http: HttpClient) { }

  getApplications(): Observable<Application[]> {
    return this.http.get<Application[]>(this.apiUrl);
  }

  getApplication(id: number): Observable<Application> {
    return this.http.get<Application>(`${this.apiUrl}/${id}`);
  }

  createApplication(application: Application): Observable<Application> {
    return this.http.post<Application>(this.apiUrl, application);
  }

  updateApplication(id: number, application: Application): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, application);
  }
}
