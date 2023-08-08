import { Component, OnInit } from '@angular/core';
import { BlogService, BlogServiceState } from '../../../core/blog.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss'],
})
export class OverviewComponentComponent implements OnInit {
  blogEntriesState$!: Observable<BlogServiceState>;
  userData$ = this.authService.getUser();

  constructor(private blogService: BlogService, private authService: AuthService) {}

  ngOnInit(): void {
    this.blogEntriesState$ = this.blogService.blogEntriesState$;
  }

  refresh() {
    this.blogService.getBlogEntries();
  }
}
