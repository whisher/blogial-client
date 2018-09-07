import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive(
  { selector: '[uiRole]'}
)
export class UiRoleDirective {
  private hasView = false;
  private admittedRoles = ['admin'];
  constructor(
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }
  @Input() set uiRole(role: string) {
   if ((this.admittedRoles.indexOf(role) !== -1) && !this.hasView) {
     this.viewContainer.createEmbeddedView(this.templateRef);
     this.hasView = true;
   } else  {
     this.viewContainer.clear();
     this.hasView = false;
   }
 }
}
