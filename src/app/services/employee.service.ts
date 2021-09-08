import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "http://localhost:4000/api/employees";
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler));
  }
  
  getEmployeesById(id: number): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url + '/' + id)
    .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }

}
