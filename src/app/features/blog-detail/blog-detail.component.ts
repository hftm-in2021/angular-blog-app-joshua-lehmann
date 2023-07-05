import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogDetail } from '../../model/Blog';
import { BlogService } from '../../services/blog.service';
import { DataState } from '../../services/data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogId: number | undefined;
  blogDetail$!: Observable<DataState<BlogDetail>>;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.blogId = Number(routeParams.get('blogId'));
    this.blogDetail$ = this.blogService.getDetail(this.blogId);
    this.blogDetail$ = this.blogService.getBlogDetail(this.blogId);
  }
}
