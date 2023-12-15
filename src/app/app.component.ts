import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpClientModule,
} from '@angular/common/http';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weatherData?: weatherData;

  ngOnInit(): void {
    this.weatherService.getWeatherData('coimbatore').subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }

  FahrenheitToCelsius(fahrenheit: number): number {
    return ((fahrenheit - 32) * 5) / 9;
  }
}
