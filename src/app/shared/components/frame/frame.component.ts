import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../../services/data.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  isDark = false;
  isHandset = false;
  appName = 'Weather App';
  cityControl = new FormControl('', [Validators.required]);

  constructor(
    private overlayContainer: OverlayContainer,
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
    if (localStorage.getItem('weather-app-theme')) {
      this.isDark = localStorage.getItem('weather-app-theme') === 'dark';
    } else {
      localStorage.setItem('weather-app-theme', this.isDark ? 'dark' : 'light');
    }
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    localStorage.setItem('weather-app-theme', this.isDark ? 'dark' : 'light');
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }

  search(): void {
    const url = `geo/1.0/direct?q=${this.cityControl.value}&limit=3`
    this.dataService.getData(url).subscribe(res => {
      this.locationService.setPosition({lat: res[0].lat, lon: res[0].lon})
    }, err => {
      this.snackbar.open('Please try some other city', 'Dismiss', {duration: 5000});
    })
  }
  
}
