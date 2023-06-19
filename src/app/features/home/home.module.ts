import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { OverviewComponentComponent } from '../../components/overview-component/overview-component.component';
import { BlogEntryComponent } from '../../components/blog-entry/blog-entry.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent, OverviewComponentComponent, BlogEntryComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
})
export class HomeModule {}
