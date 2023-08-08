import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBlogPageRoutingModule } from './add-blog-page-routing.module';
import { AddBlogPageComponent } from './add-blog-page.component';

@NgModule({
  declarations: [AddBlogPageComponent],
  imports: [CommonModule, AddBlogPageRoutingModule],
})
export class AddBlogPageModule {}
