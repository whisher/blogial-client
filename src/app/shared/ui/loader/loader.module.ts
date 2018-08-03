import { NgModule } from '@angular/core';

import { IwdfLoaderComponent } from './loader.component';

const IWDF_LOADER = [IwdfLoaderComponent];

@NgModule({
  declarations: IWDF_LOADER,
  exports: IWDF_LOADER
})
export class IwdfUiLoaderModule { }
