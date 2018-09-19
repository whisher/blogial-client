import {Component, AfterViewInit, Input, ViewChild} from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarousel,NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { Image } from '../../../../../core/posts/models';

@Component({
  selector: 'blog-post-carousel',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-basic-title">
        {{title}}
      </h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.close(false)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <ngb-carousel *ngIf="images" #myCarousel="ngbCarousel">
          <ng-template *ngFor="let image of images;let i = index" id="{{i}}" ngbSlide>
            <img [src]="image[1].src" [alt]="image[1].name">
          </ng-template>
      </ngb-carousel>
    </div>
  `,
  styles:[`
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  `]
})
export class BlogPostCarouselComponent implements AfterViewInit {
  @Input() id: string;
  @Input() title: string;
  @Input() images: Image[];
  @ViewChild('myCarousel') myCarousel: NgbCarousel;
  constructor(
    public activeModal: NgbActiveModal,
    public config: NgbCarouselConfig) {}

  ngAfterViewInit() {
    this.myCarousel.activeId = this.id;
  }
}
