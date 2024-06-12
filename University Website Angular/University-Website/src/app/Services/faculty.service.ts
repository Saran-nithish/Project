import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faculty } from '../interfaces/faculty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private apiUrl = 'https://localhost:7107/api/Faculties'; 

  constructor(private http: HttpClient) { }

  getAllFaculties(): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this.apiUrl);
  }

  getFacultyById(facultyId: number): Observable<Faculty> {
    const url = `${this.apiUrl}/${facultyId}`;
    return this.http.get<Faculty>(url);
  }

  addFaculty(faculty: Faculty): Observable<Faculty> {
    return this.http.post<Faculty>(this.apiUrl, faculty);
  }

  updateFaculty(faculty: Faculty): Observable<any> {
    const url = `${this.apiUrl}/${faculty.facultyId}`;
    return this.http.put(url, faculty);
  }

  deleteFaculty(facultyId: number): Observable<any> {
    const url = `${this.apiUrl}/${facultyId}`;
    return this.http.delete(url);
  }
}

