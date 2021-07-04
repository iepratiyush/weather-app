import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { GeoLocation } from './shared.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL = '/.netlify/functions/weather-app-proxy/';

  constructor(
    private http: HttpClient
  ) { 
  }

  getData(path: string) {
    const url = `${this.BASE_URL}${path}`;
    return this.http.get<any>(url);
  }

}
