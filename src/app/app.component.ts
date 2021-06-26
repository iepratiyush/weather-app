import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';
  data: any;

  constructor(dataService: DataService) {
    dataService.getData().subscribe(data => {
      this.data = data;
    })
  }
}
