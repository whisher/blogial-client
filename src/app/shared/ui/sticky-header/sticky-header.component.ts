import { Component, Inject, AfterViewInit, HostBinding } from '@angular/core';
import {
  animate,
  style,
  state,
  transition,
  trigger } from '@angular/animations';

import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime } from 'rxjs/operators';

import { WINDOW } from '../utilities/window.service';

export enum Direction {
  Up = 'Up',
  Down = 'Down'
};

export enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

@Component({
  selector: 'ui-sticky-header',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: fixed;
        top: 0px;
        right: 0;
        bottom: 0;
        left: 0;
        width: 100%;
      }
  `],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class UiStickyHeaderComponent implements AfterViewInit {
  @HostBinding('@toggle')
    get toggle(): VisibilityState {
      return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
    }
  private direction: Direction;
  private isVisible = true;
  constructor(
    @Inject(WINDOW) private window
  ) { }
  ngAfterViewInit() {
    const _window = this.window;

    const scroll$ = fromEvent(_window, 'scroll')
      .pipe(
        throttleTime(10),
        map(() => window.pageYOffset),
        pairwise(),
        map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
        distinctUntilChanged(),
        share()
      );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));
  }
}
