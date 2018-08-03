import {NgModule, ModuleWithProviders} from '@angular/core';
import {
  IwdfDropdown,
  IwdfDropdownAnchor,
  IwdfDropdownToggle,
  IwdfDropdownMenu} from './dropdown.component';

const IWDF_DROPDOWN_DIRECTIVES = [IwdfDropdown, IwdfDropdownAnchor, IwdfDropdownToggle, IwdfDropdownMenu];

@NgModule({
  declarations: IWDF_DROPDOWN_DIRECTIVES,
  exports: IWDF_DROPDOWN_DIRECTIVES
})
export class IwdfDropdownModule {}
