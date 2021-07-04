import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LocationService } from 'src/app/shared/services/location.service';
import { GeoLocation } from 'src/app/shared/services/shared.interface';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isWeatherData = false;
  weather: any;
  cityControl = new FormControl('', [Validators.required]);
  isHandset = false;
  currentLocation!: GeoLocation;

  constructor(
    private dataService: DataService, 
    private locationService: LocationService,
    breakpointObserver: BreakpointObserver,
    private snackbar: MatSnackBar
  ) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      if (result.matches) {
        this.isHandset = true;
      } else {
        this.isHandset = false;
      }
    });
  }

  ngOnInit(): void {
    this.locationService.getPosition().subscribe(location => {
      if (location != null && location != this.currentLocation) {
        const url = `data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&units=metric&exclude=minutely`
        this.dataService.getData(url).subscribe(res => {
          this.currentLocation = location;
          this.isWeatherData = true;
          this.weather = res;
        },
        err => {
          this.snackbar.open('Error in getting weather data', 'dismiss', {duration: 5000});
        })
      }
    })

    navigator.geolocation.getCurrentPosition(resp => {
      console.log(resp);
      this.locationService.setPosition({lat: resp.coords.latitude, lon: resp.coords.longitude});
    },
    err => {
      this.snackbar.open('Location is disabled', 'dismiss', {duration: 5000});
    })
  }

  search(): void {
    const url = `geo/1.0/direct?q=${this.cityControl.value}&limit=3`
    this.dataService.getData(url).subscribe(res => {
      console.log(res);
      this.locationService.setPosition({lat: res[0].lat, lon: res[0].lon})
    }, err => {
      this.snackbar.open('Please try some other city', 'dismiss', {duration: 5000});
    })
  }

}
