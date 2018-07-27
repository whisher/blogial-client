import { Component, Input, forwardRef, ViewChild, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const PASSWORD_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IwdfUiPasswordComponent),
  multi: true
};

@Component({
  selector: 'iwdf-ui-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [PASSWORD_CONTROL_ACCESSOR]
})
export class IwdfUiPasswordComponent  implements ControlValueAccessor {
  @ViewChild('input') input: ElementRef;
  @Input() tabindex = 1;
  value: string;
  type= 'password';
  show = false;
  private onTouch: Function;
  private onModelChange: Function;

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value: string) {
    this.value = value;
  }

  onInput(){
    this.value = this.input.nativeElement.value;
    this.onModelChange(this.value);
    this.onTouch();
  }

  onToggleShow() {
    this.show = !this.show;
    if (this.show) {
      this.type = "text";
    }
    else {
      this.type = "password";
    }
  }

}