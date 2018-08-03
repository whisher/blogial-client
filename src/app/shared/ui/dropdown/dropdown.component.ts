import {
  forwardRef,
  Inject,
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ContentChild,
  NgZone,
  Renderer2,
  OnInit
} from '@angular/core';

/**
 */
@Directive({
  selector: '[iwdfDropdownMenu]',
  host: {'[class.iwdf-dropdown-menu]': 'true', '[class.show]': 'dropdown.isOpen()'}
})
export class IwdfDropdownMenu {
  placement = 'bottom';
  isOpen = false;

  constructor(
      @Inject(forwardRef(() => IwdfDropdown)) public dropdown, private _elementRef: ElementRef<HTMLElement>,
      private _renderer: Renderer2) {}

  isEventFrom($event) { return this._elementRef.nativeElement.contains($event.target); }


}


@Directive({
  selector: '[iwdfDropdownAnchor]',
  host: {'class': 'iwdf-dropdown-toggle', 'aria-haspopup': 'true', '[attr.aria-expanded]': 'dropdown.isOpen()'}
})
export class IwdfDropdownAnchor {
  anchorEl;

  constructor(@Inject(forwardRef(() => IwdfDropdown)) public dropdown, private _elementRef: ElementRef<HTMLElement>) {
    this.anchorEl = _elementRef.nativeElement;
  }

  isEventFrom($event) { return this._elementRef.nativeElement.contains($event.target); }
}

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgbDropdownAnchor as an
 * alternative.
 */
@Directive({
  selector: '[iwdfDropdownToggle]',
  host: {
    'class': 'iwdf-dropdown-toggle',
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'dropdown.isOpen()',
    '(click)': 'toggleOpen()'
  },
  providers: [{provide: IwdfDropdownAnchor, useExisting: forwardRef(() => IwdfDropdownToggle)}]
})
export class IwdfDropdownToggle extends IwdfDropdownAnchor {
  constructor(@Inject(forwardRef(() => IwdfDropdown)) dropdown, elementRef: ElementRef<HTMLElement>) {
    super(dropdown, elementRef);
  }

  toggleOpen() { this.dropdown.toggle(); }
}

/**
 * Transforms a node into a dropdown.
 */
@Directive({
  selector: '[iwdfDropdown]',
  exportAs: 'iwdfDropdown',
  host: {
    '[class.iwdf-dropdown]': 'true',
    '[class.show]': 'isOpen()',
    '(keyup.esc)': 'closeFromOutsideEsc()',
    '(document:click)': 'closeFromClick($event)'
  }
})
export class IwdfDropdown implements OnInit {
  private _zoneSubscription: any;

  @ContentChild(IwdfDropdownMenu) private _menu: IwdfDropdownMenu;

  @ContentChild(IwdfDropdownAnchor) private _anchor: IwdfDropdownAnchor;

  /**
   * Indicates that dropdown should be closed when selecting one of dropdown items (click) or pressing ESC.
   * When it is true (default) dropdowns are automatically closed on both outside and inside (menu) clicks.
   * When it is false dropdowns are never automatically closed.
   * When it is 'outside' dropdowns are automatically closed on outside clicks but not on menu clicks.
   * When it is 'inside' dropdowns are automatically on menu clicks but not on outside clicks.
   */
  @Input() autoClose: boolean | 'outside' | 'inside';

  /**
   *  Defines whether or not the dropdown-menu is open initially.
   */
  @Input('open') _open = false;

  /**
   * Placement of a popover accepts:
   *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
   *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
   * and array of above values.
   */
  @Input() placement;

  /**
   *  An event fired when the dropdown is opened or closed.
   *  Event's payload equals whether dropdown is open.
   */
  @Output() openChange = new EventEmitter();

  constructor(ngZone: NgZone) {
  this._zoneSubscription = ngZone.onStable.subscribe(() => { this._positionMenu(); });
  }

  ngOnInit() {
    if (this._menu) {
    }
  }
  /**
   * Checks if the dropdown menu is open or not.
   */
  isOpen(): boolean { return this._open; }

  /**
   * Opens the dropdown menu of a given navbar or tabbed navigation.
   */
  open(): void {
    if (!this._open) {
      this._open = true;
      this._positionMenu();
      this.openChange.emit(true);
    }
  }

  /**
   * Closes the dropdown menu of a given navbar or tabbed navigation.
   */
  close(): void {
    if (this._open) {
      this._open = false;
      this.openChange.emit(false);
    }
  }

  /**
   * Toggles the dropdown menu of a given navbar or tabbed navigation.
   */
  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  closeFromClick($event) {
    if (this.autoClose && $event.button !== 2 && !this._isEventFromToggle($event)) {
      if (this.autoClose === true) {
        this.close();
      } else if (this.autoClose === 'inside' && this._isEventFromMenu($event)) {
        this.close();
      } else if (this.autoClose === 'outside' && !this._isEventFromMenu($event)) {
        this.close();
      }
    }
  }

  closeFromOutsideEsc() {
    if (this.autoClose) {
      this.close();
    }
  }

  ngOnDestroy() { this._zoneSubscription.unsubscribe(); }

  private _isEventFromToggle($event) { return this._anchor.isEventFrom($event); }

  private _isEventFromMenu($event) { return this._menu ? this._menu.isEventFrom($event) : false; }

  private _positionMenu() {
    if (this.isOpen() && this._menu) {
      //this._menu.position(this._anchor.anchorEl, this.placement);
    }
  }
}
