import { Component } from '@angular/core';
import {
  DATE_FORMAT,
  DateComponent,
  LocationComponent,
} from '../../../lab-ui/src/public-api';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocationComponent, DateComponent],
  providers: [{ provide: DATE_FORMAT, useValue: environment.dateFormat }],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>Testing the location component:</p>
    <lab-ui-location [value]="location" />
    <lab-ui-date [value]="date" />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-ui-host';
  location = 'Paris';
  date = new Date(2025, 7, 15);
}
