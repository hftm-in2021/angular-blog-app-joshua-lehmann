import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogPageComponent } from './add-blog-page.component';
import { addBlogGuard } from '../../core/auth/add-blog.guard';

const routes: Routes = [{ path: '', canActivate: [addBlogGuard], component: AddBlogPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBlogPageRoutingModule {}
