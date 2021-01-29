import { Component } from '@angular/core';
import { ApiCallsService } from './services/api-calls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'api-tutorial';
  constructor(private _apiCallsService: ApiCallsService) {}
  public joke: any;
  public loading: boolean = false;
  nextJoke() {
    this.loading = true;
    this._apiCallsService.getJokes().subscribe((response) => {
      console.log('Response ', response);
      this.joke = response;
      this.loading = false;
    });
  }
}
