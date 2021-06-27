import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { CURRENT } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  weather = {...CURRENT};
  imgSrc = `https://openweathermap.org/img/wn/${this.weather.weather[0].icon}@2x.png`
  isHandset = false;

  constructor(breakpointObserver: BreakpointObserver) { 
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
  }

}
