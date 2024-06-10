import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  InjectionToken,
  InputSignal,
  inject,
  input,
} from '@angular/core';

export const DATE_FORMAT = new InjectionToken<string>('DATE_FORMAT', {
  providedIn: 'root',
  factory: () => 'mediumDate',
});

/**
 * Presentation component for displaying a date value.
 * - Displays the date value in the configured date format.
 * - Uses the `DatePipe` to format the value.
 */
@Component({
  selector: 'lab-ui-date',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe],
  template: ` <span>📅 on {{ value() | date : dateFormat }}</span> `,
})
export class DateComponent {
  // * Input signal division

  /** Date to be displayed */
  value: InputSignal<Date> = input.required<Date>();

  // * Properties division

  dateFormat: string = inject(DATE_FORMAT);
}
