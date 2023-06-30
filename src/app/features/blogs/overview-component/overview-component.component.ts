import { Component, OnInit } from '@angular/core';
import { BlogService, BlogServiceState } from '../../../services/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss'],
})
export class OverviewComponentComponent implements OnInit {
  blogEntriesState$!: Observable<BlogServiceState>;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogEntriesState$ = this.blogService.blogEntriesState$;
  }

  refresh() {
    this.blogService.getEntries();
  }
}
