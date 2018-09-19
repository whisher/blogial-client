import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy
} from '@angular/core';

import { Post, Image } from '../../../../../core/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class BlogPostItemComponent implements OnInit{
  @Input() post: Post;
  images: Image[] = [];
  places: string;
  tags: [string];
  ngOnInit(){
    this.places = JSON.parse(this.post.places)
    .map(place => place.name)
    .join(' ,');
    this.tags = JSON.parse(this.post.tags);
    this.images = JSON.parse(this.post.images);
  }

}
