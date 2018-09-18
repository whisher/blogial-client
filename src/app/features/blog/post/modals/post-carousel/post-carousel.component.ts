import {Component, Input} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Image } from '../../../../../core/posts/models';

@Component({
  selector: 'blog-post-carousel',
  template: `
    <div class="modal-header">
      <button type="button" class="close" aria-label="Close" (click)="activeModal.close(false)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ngb-carousel *ngIf="images">
          <ng-template *ngFor="let image of images" ngbSlide>
            <img [src]="image[1].src" [alt]="image[1].name">
          </ng-template>
      </ngb-carousel>
    </div>
  `
})
export class BlogPostCarouselComponent {
  @Input() images: Image[];

  constructor(public activeModal: NgbActiveModal) {}
}
