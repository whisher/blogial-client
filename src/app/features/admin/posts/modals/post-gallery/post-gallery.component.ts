import { Component, Input } from '@angular/core';

import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { Thumb } from '../../../../../core/posts/models';
import { PostsService } from '../../../../../core/posts/services';

@Component({
  selector: 'admin-posts-post-gallery',
  templateUrl: './post-gallery.component.html',
  styleUrls: ['./post-gallery.component.scss']
})
export class AdminPostsPostGalleryComponent {
  private invalidFiles : Array<File> = [];
  @Input() files: Array<Thumb>;

  constructor(
    public activeModal: NgbActiveModal,
    private service: PostsService
  ) {}

  onFilesChange(fileList : Array<File>){
    const file = fileList[0];
    const name =  file.name.split('.')[0];
    this.service.gallery(file, name)
    .subscribe(
      (file) => {
        this.files.push(file);
      },
      console.error
    )
  }

  onEditable(evt){
    console.log(evt);
  }

  onFileInvalids(fileList : Array<File>){
    this.invalidFiles = fileList;
  }

}
