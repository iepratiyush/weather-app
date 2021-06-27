import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FrameComponent } from './components/frame/frame.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    FrameComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    FrameComponent,
  ]
})
export class SharedModule { }
