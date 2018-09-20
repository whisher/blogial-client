import {
  Component,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  EventEmitter } from '@angular/core';

import { Post, Image } from '../../../../../core/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-box',
  templateUrl: './post-box.component.html',
  styleUrls: ['./post-box.component.scss']
})
export class AdminPostsPostBoxComponent implements OnInit {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();
  @Output() edit = new EventEmitter<Post>();
  places: string;
  tags: [string];
  images: Image[];
  
  ngOnInit(){
    this.places = JSON.parse(this.post.places)
    .map(place => place.name)
    .join(' ,');
    this.tags = JSON.parse(this.post.tags);
    this.images = JSON.parse(this.post.images);
  }

  onEdit() {
    this.edit.emit(this.post)
  }

  onDelete() {
    this.deleted.emit(this.post);
  }
}
