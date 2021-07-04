import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeoLocation } from './shared.interface';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  $position: BehaviorSubject<GeoLocation> = new BehaviorSubject<any>(null);

  constructor() { }

  getPosition() {
    return this.$position;
  }

  setPosition(location: GeoLocation) {
    this.$position.next(location);
  }
}
