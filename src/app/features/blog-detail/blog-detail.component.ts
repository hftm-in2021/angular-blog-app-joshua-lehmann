import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BlogDetailResponse, BlogService } from '../../core/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit {
  blogId: number | undefined;
  blogDetail$!: Observable<BlogDetailResponse>;

  constructor(private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    this.blogId = Number(routeParams.get('blogId'));
    this.blogDetail$ = this.blogService.getBlogDetail(this.blogId);
  }
}
