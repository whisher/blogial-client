import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'authentication-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AuthenticationLayoutHeaderComponent {}
