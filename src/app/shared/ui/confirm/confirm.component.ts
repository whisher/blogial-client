import { Component, Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

/**
 * The guarded Component should implement this interface
 */
export interface IsPristineAware {
  isPristine(): boolean;
}

/**
 * Options passed when opening a confirmation modal
 */
interface ConfirmOptions {
  /**
   * The title of the confirmation modal
   */
  title: string,

  /**
   * The message in the confirmation modal
   */
  message: string
}

/**
 * An internal service allowing to access, from the confirm modal component, the options and the modal reference.
 * It also allows registering the TemplateRef containing the confirm modal component.
 *
 * It must be declared in the providers of the NgModule, but is not supposed to be used in application code
 */
@Injectable()
export class ConfirmState {
  /**
   * The last options passed ConfirmService.confirm()
   */
  options: ConfirmOptions;

  /**
   * The last opened confirmation modal
   */
  modal: NgbModalRef;

}

/**
 * A confirmation service, allowing to open a confirmation modal from anywhere and get back a promise.
 */
@Injectable()
export class ConfirmService {

  constructor(private modalService: NgbModal, private state: ConfirmState) {}

  /**
   * Opens a confirmation modal
   * @param options the options for the modal (title and message)
   * @returns {Promise<boolean>} a promise that is fulfilled when the user chooses to confirm
   * or closes the modal
   */
  confirm(options: ConfirmOptions): Promise<boolean> {
    this.state.options = options;
    this.state.modal = this.modalService.open(UIConfirmComponent,{ size: 'sm' });
    return this.state.modal.result;
  }
}

/**
 * The component displayed in the confirmation modal opened by the ConfirmService.
 */
@Component({
  selector: 'ui-confirm',
  template: `<div class="modal-header">
    <h4 class="modal-title">
      {{ options.title}}
    </h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.close(false)">
        <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>{{ options.message }}</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-danger" (click)="yes()">Yes</button>
    <button type="button" class="btn btn-secondary" (click)="no()">No</button>
  </div>`
})
export class UIConfirmComponent {

  options: ConfirmOptions;

  constructor(private state: ConfirmState) {
    this.options = state.options;
  }

  yes() {
    this.state.modal.close(true);
  }

  no() {
    this.state.modal.close(false);
  }
}
