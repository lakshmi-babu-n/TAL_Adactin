import { AbstractControl } from '@angular/forms';

export function ValidateDOB(control: AbstractControl) {
  let controlDate = new Date(control.value);
  let currentDate = new Date();
  let minDate = new Date();
  minDate.setFullYear(minDate.getFullYear() - 120);
  if (currentDate < controlDate || controlDate < minDate) {
    return { invalidDOB: true };
  }
  return;
}
