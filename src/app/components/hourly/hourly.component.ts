import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { HOURLY } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  hourly = [...HOURLY];
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

  getWholeNumber(value: number): number {
    return Math.floor(value);
  }

}
