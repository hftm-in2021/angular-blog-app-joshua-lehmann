import { NgModule } from '@angular/core';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { OverviewComponentComponent } from './overview-component/overview-component.component';
import { BlogEntryComponent } from './blog-entry/blog-entry.component';

@NgModule({
  declarations: [
    BlogsComponent,
    OverviewComponentComponent,
    BlogEntryComponent,
  ],
  imports: [
    SharedModule,
    MatProgressSpinnerModule,
    MatCardModule,
    BlogsRoutingModule,
  ],
})
export class BlogsModule {}
