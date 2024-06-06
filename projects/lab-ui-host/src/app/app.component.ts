import { Component } from '@angular/core';
import { LocationComponent } from 'lab-ui';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LocationComponent],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <p>Testing the location component:</p>
    <lab-ui-location value="Paris"></lab-ui-location>
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-ui-host';
}
