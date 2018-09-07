import {
  OnInit,
  OnDestroy,
  Directive,
  Input,
  ChangeDetectorRef,
  TemplateRef,
  ViewContainerRef } from '@angular/core';
import {
  Observable,
  Subscription,
} from 'rxjs';

export class SubscribeContext {
  $implicit = null;
  ngSubscribe = null;
};

@Directive({
  selector: '[uiSubscribe]'
})
export class UiSubscribeDirective implements OnInit, OnDestroy {
  private observable: Observable<any>;
  private context: SubscribeContext = new SubscribeContext();
  private subscription: Subscription;
  @Input()
  set uiSubscribe(inputObservable: Observable<any>) {
    if (this.observable !== inputObservable) {
      this.observable = inputObservable;
      this.subscription && this.subscription.unsubscribe();
      this.subscription = this.observable.subscribe(value => {
        console.log('PIP',value);
        this.context.ngSubscribe = value;
        this.cdr.markForCheck();
      });
    }
  }

  constructor(
  private cdr: ChangeDetectorRef,
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }

  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }

}
