import { Component, Input } from '@angular/core';
import BlogEntry from '../../../interfaces/Blog';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.scss'],
})
export class BlogEntryComponent {
  @Input({ required: true }) blogEntry!: BlogEntry;
}
