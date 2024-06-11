import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DateComponent } from '../../../lab-ui/src/public-api';

@Component({
  standalone: true,
  imports: [DateComponent],
  template: ` <lab-ui-date [value]="value" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateElement {
  @Input({ required: true }) value!: Date;
}
