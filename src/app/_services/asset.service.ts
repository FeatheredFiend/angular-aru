

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Asset } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  baseUrl = 'http://angular.proprietary-data.com/api';
  assets: Asset[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<Asset[]> {
    return this.http.get(`${this.baseUrl}/list_assets`).pipe(
      map((res) => {
        this.assets = res['data'];
        return this.assets;
      }),
      catchError(this.handleError));
  }

  getEdit(): Observable<Asset[]> {
    return this.http.get(`${this.baseUrl}/list_edit-asset`).pipe(
      map((res) => {
        this.assets = res['data'];
        return this.assets;
      }),
      catchError(this.handleError));
  }
  store_addAsset(asset: Asset): Observable<Asset[]> {
    return this.http.post(`${this.baseUrl}/store_add-asset`, { data: asset })
      .pipe(map((res) => {
        this.assets.push(res['data']);
        return this.assets;
      }),
        catchError(this.handleError));
  }

  update_editAsset(asset: Asset): Observable<Asset[]> {
    return this.http.put(`${this.baseUrl}/update_edit-asset`, { data: asset })
      .pipe(map((res) => {
        const theAsset = this.assets.find((item) => {
          return +item['id'] === +asset['id'];
        });
        if (theAsset) {
          theAsset['id'] = +asset['id'];
          theAsset['barcode'] = asset['barcode'];
          theAsset['description'] = asset['description'];
        }
        return this.assets;
      }),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}