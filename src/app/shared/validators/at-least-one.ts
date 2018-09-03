import { AbstractControl } from '@angular/forms';

export function atLeastOne(control: AbstractControl) : {[key: string]: any} | null {
  if (!control.value.length) {
    return { atLeastOneError: true };
  }
  return null;
}
