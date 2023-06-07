import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import BlogEntry from '../interfaces/Blog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private http: HttpClient) {}

  getEntries() {
    return this.http.get<Array<BlogEntry>>(`${environment.backendUrl}/entries`);
  }
}
