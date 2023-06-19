import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../../shared/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    BlogDetailRoutingModule,
    MatProgressSpinnerModule,
    MatIconModule,
    SharedModule,
    MatTooltipModule,
  ],
})
export class BlogDetailModule {}
