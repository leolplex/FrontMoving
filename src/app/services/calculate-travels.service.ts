import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InputRaw } from '../interface/InputRaw';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CalculateTravelsService {
  jsonUrlUsers = 'http://localhost:57174/';
  constructor(private http: HttpClient) {}

  calculateTravels(info: InputRaw): Observable<any> {
    const infoJson = JSON.stringify(info);
    console.log(infoJson);
    
    return this.http
      .post(this.jsonUrlUsers + 'calculatetravels', infoJson, {
        responseType: 'json',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        map((resp: any) => {
          return resp;
        }),
        catchError(this.errorHandler)
      );
  }

  errorHandler(error): Observable<any> {
    console.log(error);

    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
