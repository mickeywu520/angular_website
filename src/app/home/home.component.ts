import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {
  animate,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { bootstrapApplication } from '@angular/platform-browser';
import {
  BrowserAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    register();
  }
}
