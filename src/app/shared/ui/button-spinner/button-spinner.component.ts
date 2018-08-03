import { Component, Input} from '@angular/core';

@Component({
  selector: 'iwdf-ui-button-spinner',
  template: `
    <ng-container *ngIf="has; else elseTemplate">
      <div class="loader">Loading...</div>
    </ng-container>
    <ng-template #elseTemplate>
      <span>{{value}}</span>
    </ng-template>
  `,
  styleUrls: ['./button-spinner.component.scss']
}) 
export class IwdfButtonSpinnerComponent {
    @Input() value: string;
    @Input() has: boolean;
}
