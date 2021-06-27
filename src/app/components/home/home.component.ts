import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { WEATHER } from '../../shared/shared.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLocationAllowed = false;
  weather = {...WEATHER};

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.dataService.getPosition().subscribe(res => {
    //   if (res && res.coords) {
    //     this.isLocationAllowed = true;
    //     let {latitude, longitude} = res.coords;
    //     console.log(res.coords);
    //     let url = `/.netlify/functions/weather-app-proxy/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metrics&exclude=minutely`;
    //     this.dataService.getData(url).subscribe(data => {
    //       console.log(data);
    //       this.weather = data;
    //     })
    //   } else {
    //     this.isLocationAllowed = true;
    //     let url = `/.netlify/functions/weather-app-proxy/geo/1.0/direct?q=Ranchi&limit=3`;
    //     this.dataService.getData(url).subscribe(data => {
    //       console.log(data);
    //     })
    //   }
    // })
  }

}
