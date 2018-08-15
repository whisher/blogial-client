import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class AdminLayoutNavComponent {}
