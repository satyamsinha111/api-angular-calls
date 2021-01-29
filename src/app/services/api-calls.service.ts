import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallsService {
  constructor(private _httpClient: HttpClient) {}
  private _apiRoute: string = 'https://api.chucknorris.io/jokes/random';
  getJokes(): Observable<any> {
    return this._httpClient.get(this._apiRoute);
  }
}
