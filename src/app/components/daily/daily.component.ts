import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { DAILY } from 'src/app/shared/shared.constants';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css']
})
export class DailyComponent implements OnInit {

  daily = [...DAILY];
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
