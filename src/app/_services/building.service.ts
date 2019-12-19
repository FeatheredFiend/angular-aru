

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Building } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
  baseUrl = 'http://angular.proprietary-data.com/api';
  buildings: Building[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Building[]> {
    return this.http.get(`${this.baseUrl}/list_building`).pipe(
      map((res) => {
        this.buildings = res['data'];
        return this.buildings;
      }),
      catchError(this.handleError));
  }

  getEdit(): Observable<Building[]> {
    return this.http.get(`${this.baseUrl}/list_edit-building`).pipe(
      map((res) => {
        this.buildings = res['data'];
        return this.buildings;
      }),
      catchError(this.handleError));
  }
  store_addBuilding(building: Building): Observable<Building[]> {
    return this.http.post(`${this.baseUrl}/store_add-building`, { data: building })
      .pipe(map((res) => {
        this.buildings.push(res['data']);
        return this.buildings;
      }),
        catchError(this.handleError));
  }

  update_editBuilding(building: Building): Observable<Building[]> {
    return this.http.put(`${this.baseUrl}/update_edit-building`, { data: building })
      .pipe(map((res) => {
        const theBuilding = this.buildings.find((item) => {
          return +item['id'] === +building['id'];
        });
        if (theBuilding) {
          theBuilding['id'] = +building['id'];
          theBuilding['name'] = building['name'];
          theBuilding['organisation'] = building['organisation'];
        }
        return this.buildings;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}