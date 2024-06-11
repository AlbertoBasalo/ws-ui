import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LocationComponent } from '../../../lab-ui/src/public-api';

/**
 * Component to display a location
 * @description Displays the location value.
 * @param `value` to display as a location.
 */
@Component({
  standalone: true,
  imports: [LocationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <lab-ui-location [value]="value" /> `,
})
export class LocationElement {
  @Input({ required: true }) value!: string;
}
