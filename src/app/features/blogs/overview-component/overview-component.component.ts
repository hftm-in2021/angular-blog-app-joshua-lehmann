import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../core/services/blog.service';
import BlogEntry from '../../../interfaces/Blog';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-overview-component',
  templateUrl: './overview-component.component.html',
  styleUrls: ['./overview-component.component.scss'],
})
export class OverviewComponentComponent implements OnInit {
  blogEntries$!: Observable<Array<BlogEntry>>;

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.blogEntries$ = this.blogService.getEntries();
    console.log(this.blogEntries$);
  }
}
