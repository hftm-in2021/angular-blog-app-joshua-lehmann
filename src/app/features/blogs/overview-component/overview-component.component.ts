import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { Observable } from 'rxjs';
import { BlogEntry } from '../../../model/Blog';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss'],
})
export class OverviewComponentComponent implements OnInit {
  blogEntries$!: Observable<Array<BlogEntry>>;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogEntries$ = this.blogService.getEntries();
  }
}
