import { NgModule } from '@angular/core';

import { ShowcaseLayoutModule } from './layout/layout.module';
import { ShowcaseRoutingModule } from './showcase-routing.module';

@NgModule({
  imports: [
    ShowcaseLayoutModule,
    ShowcaseRoutingModule
  ],
  declarations: []
})
export class ShowcaseModule { }
