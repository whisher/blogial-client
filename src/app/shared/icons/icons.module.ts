import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import * as fromComponents from './components';

@NgModule({
  imports: [FontAwesomeModule],
  declarations:[...fromComponents.components],
  exports: [...fromComponents.components]
})
export class IwdfIconsModule { }
