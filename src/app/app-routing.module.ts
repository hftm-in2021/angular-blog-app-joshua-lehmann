import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { addBlogGuard } from './core/auth/add-blog.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blogs' },
  {
    path: 'blogs/add',
    canActivate: [addBlogGuard],
    loadChildren: () =>
      import('./features/add-blog-page/add-blog-page.module').then((m) => m.AddBlogPageModule),
  },
  {
    path: 'blogs/:blogId',
    loadChildren: () =>
      import('./features/blog-detail/blog-detail.module').then((m) => m.BlogDetailModule),
  },
  {
    path: 'blogs',
    loadChildren: () => import('./features/blogs/blogs.module').then((m) => m.BlogsModule),
  },

  { path: '**', redirectTo: 'blogs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
