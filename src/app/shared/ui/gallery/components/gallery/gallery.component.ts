import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UiCarouselComponent } from '../carousel/carousel.component';

import { Image } from '../../../../../core/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ui-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class UiGalleryComponent {
  @Input() title: string;
  @Input() images: Image[];
  constructor(
    private modalService: NgbModal
  ) {}

  openCarousel(index) {
    const modalRef = this.modalService.open(UiCarouselComponent, {
      backdropClass: 'backdrop-primary',
      ariaLabelledBy: 'modal-post-gallery',
      windowClass: 'modal-container',
      size: 'lg',
      centered: true
    });
    modalRef.componentInstance.id = ''+index;
    modalRef.componentInstance.title = this.title;
    modalRef.componentInstance.images = this.images;
    modalRef.result.then((result) => {
      if(result) {
        this.images = [...result];
      }
    }, (reason) => {});
  }
}
