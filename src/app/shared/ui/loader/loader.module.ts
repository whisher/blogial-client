import { NgModule } from '@angular/core';

import { UiLoaderComponent } from './loader.component';

const UI_LOADER = [UiLoaderComponent];

@NgModule({
  declarations: UI_LOADER,
  exports: UI_LOADER
})
export class UiLoaderModule { }
