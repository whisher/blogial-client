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
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#BlogHomeModule'
      },
      {
        path: 'about',
        loadChildren: './about/about.module#BlogAboutModule'
      },
      {
        path: 'contact',
        loadChildren: './contact/contact.module#BlogContactModule'
      },
      {
        path: 'post/:slug',
        loadChildren: './post/post.module#BlogPostModule'
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
