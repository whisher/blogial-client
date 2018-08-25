import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogLayoutMainComponent } from './layout/containers';

export const ROUTES: Routes = [
  {
    path: '', component: BlogLayoutMainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'posts'
      },
      {
        path: 'posts',
        /* it's post.module because of conflit with ./posts/posts.module#AdminPostsModule */
        loadChildren: './posts/post.module#BlogPostsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
