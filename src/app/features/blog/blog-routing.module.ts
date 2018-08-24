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
        loadChildren: './posts/posts.module#BlogPostsModule'
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
