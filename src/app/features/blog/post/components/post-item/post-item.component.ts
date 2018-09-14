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
})
export class BlogPostItemComponent implements OnInit{
  @Input() post: Post;
  images: Image[] = [];
  
  ngOnInit(){
    this.images = JSON.parse(this.post.files);
  }

}
