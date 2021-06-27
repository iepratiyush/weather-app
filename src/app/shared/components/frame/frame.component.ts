import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  isDark = true;
  isHandset = false;
  appName = 'Weather App';

  constructor(
    private overlayContainer: OverlayContainer, 
    breakpointObserver: BreakpointObserver,
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
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    if (this.isDark) {
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    } else {
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
    }
  }
  
}
