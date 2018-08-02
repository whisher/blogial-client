import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class AdminLayoutBrandComponent {}
