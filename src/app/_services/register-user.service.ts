

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { RegisterUser } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  baseUrl = 'http://angular.proprietary-data.com/api';
  users: RegisterUser[];

  constructor(private http: HttpClient) { }



  getAll(): Observable<RegisterUser[]> {
    return this.http.get(`${this.baseUrl}/list_users`).pipe(
      map((res) => {
        this.users = res['data'];
        return this.users;
      }),
      catchError(this.handleError));
  }

  getEdit(): Observable<RegisterUser[]> {
    return this.http.get(`${this.baseUrl}/list_edit-user`).pipe(
      map((res) => {
        this.users = res['data'];
        return this.users;
      }),
      catchError(this.handleError));
  }
  store_addUser(user: RegisterUser): Observable<RegisterUser[]> {
    return this.http.post(`${this.baseUrl}/store_add-user`, { data: user })
      .pipe(map((res) => {
        this.users.push(res['data']);
        return this.users;
      }),
        catchError(this.handleError));
  }

  update_editUser(user: RegisterUser): Observable<RegisterUser[]> {
    return this.http.put(`${this.baseUrl}/update_edit-user`, { data: user })
      .pipe(map((res) => {
        const theUser = this.users.find((item) => {
          return +item['id'] === +user['id'];
        });
        if (theUser) {
          theUser['id'] = +user['id'];
          theUser['barcode'] = user['barcode'];
          theUser['description'] = user['description'];
        }
        return this.users;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}