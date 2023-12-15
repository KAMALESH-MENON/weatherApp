import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpClientModule,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { weatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',

})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http.get<weatherData>(
      'https://openweather43.p.rapidapi.com/weather',
      {
        headers: new HttpHeaders()
          .set('X-RapidAPI-Host', 'openweather43.p.rapidapi.com')
          .set(
            'X-RapidAPI-Key',
            '8f1f0e3758msh25f9a3b661c4349p11b19fjsnd436e66b3ee2'
          ),
        params: new HttpParams()
          .set('q', 'coimbatore')

      }
    );
  }
}
