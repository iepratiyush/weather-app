import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { CurrentComponent } from './components/current/current.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { DailyComponent } from './components/daily/daily.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentComponent,
    HourlyComponent,
    DailyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
