import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  Renderer2,
  ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const CHIPS_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => UiChipsComponent),
  multi: true
};
@Component({
  providers: [CHIPS_CONTROL_ACCESSOR],
  selector: 'ui-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class UiChipsComponent  implements ControlValueAccessor {
  private onTouch: Function;
  private onModelChange: Function;
  @Input() tabindex: number = 1;
  @Input() chips: Array<string> = [];
  @ViewChild('chip') chip: ElementRef;

  registerOnTouched(fn) {
      this.onTouch = fn;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value) {
    const chip = this.chip.nativeElement;
    //this.renderer.setAttribute(chip, 'value', value);
  }

  onInput(event){
    const value = this.chip.nativeElement.value;
  }

  onKeyPress(event){
    const input = this.chip.nativeElement;
    if(event.keyCode === 13) {
      event.preventDefault();
      this.chips = [...this.chips, input.value.trim()];
      input.value = '';
      this.onModelChange(this.chips);
      this.onTouch();
    }
  }

  onDeleteChip(chip){
    this.chips = this.chips.filter(c => c !== chip);
  }

  constructor( private renderer : Renderer2) {}
}
