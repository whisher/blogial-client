import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-fab-button',
  template: `<button [type]="type" [ngClass]="_cls">
  <ng-content></ng-content>
  </button>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class UiFabButtonComponent{
  _cls = ['c-btn-fab'];
  @Input() type: string = 'button';
  @Input()
  set cls(cls: string) {
    this._cls.push(cls);
  }
}
