import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Program } from '../interfaces/program';
import { Admission } from '../interfaces/admission';
import { FinancialAid } from '../interfaces/financial-aid';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

  private apiUrl = 'https://localhost:7107/api';

  constructor(private http: HttpClient) { }

  getPrograms(): Observable<Program[]> {
    return this.http.get<Program[]>(`${this.apiUrl}/ProgramDeets`);
  }

  getAdmissions(): Observable<Admission[]> {
    return this.http.get<Admission[]>(`${this.apiUrl}/Admissions`);
  }

  postAdmission(admission: Admission): Observable<Admission> {
    return this.http.post<Admission>(`${this.apiUrl}/Admissions`, admission);
  }

  updateAdmissionStatus(id: number, status: string): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/Admissions/${id}`, { status });
  }

  getFinancialAids(): Observable<FinancialAid[]> {
    return this.http.get<FinancialAid[]>(`${this.apiUrl}/FinancialAids`);
  }

  getProgram(programId: number): Observable<Program> {
    return this.http.get<Program>(`${this.apiUrl}/ProgramDeets/${programId}`);
  }

  createProgram(program: Program): Observable<Program> {
    return this.http.post<Program>(`${this.apiUrl}/ProgramDeets`, program);
  }

  updateProgram(program: Program): Observable<Program> {
    return this.http.put<Program>(`${this.apiUrl}/ProgramDeets/${program.programId}`, program);
  }
  deleteProgram(programId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/ProgramDeets/${programId}`);
  }

}
