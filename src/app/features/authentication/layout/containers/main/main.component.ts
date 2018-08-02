import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'authentication-layout-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AuthenticationLayoutMainComponent {}
