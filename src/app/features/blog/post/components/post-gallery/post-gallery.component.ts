import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { BlogPostCarouselComponent } from '../../modals/post-carousel/post-carousel.component';

import { Image } from '../../../../../core/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-post-gallery',
  templateUrl: './post-gallery.component.html',
  styleUrls: ['./post-gallery.component.scss']
})
export class BlogPostGalleryComponent {
  @Input('images') images: Image[];
  constructor(
    private modalService: NgbModal
  ) {}

  openCarousel() {
    const modalRef = this.modalService.open(BlogPostCarouselComponent, {
      backdropClass: 'backdrop-primary',
      ariaLabelledBy: 'modal-post-gallery',
      windowClass: 'modal-container',
      size: 'lg',
      centered: true
    })
    modalRef.componentInstance.images = this.images;
    modalRef.result.then((result) => {
      if(result) {
        this.images = [...result];
      }
    }, (reason) => {});
  }
}
