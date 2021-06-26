import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any> {
    return this.http.get<any>(`/.netlify/functions/weather-app-proxy?q=ranchi`);
  }
}
