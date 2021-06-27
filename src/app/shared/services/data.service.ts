import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  $position: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private http: HttpClient
  ) { 
    navigator.geolocation.getCurrentPosition(resp => {
      this.$position.next(resp);
    },
    err => {
      this.$position.next(err);
    })
  }

  getData(url: string): Observable<any> {
    // console.log(`/.netlify/functions/weather-app-proxy?q=ranchi`);
    return this.http.get<any>(url);
  }

  getPosition() {
    return this.$position;
  }
}
