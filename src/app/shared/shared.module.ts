import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FrameComponent } from './components/frame/frame.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FrameComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    MaterialModule,
    FrameComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
