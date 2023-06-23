import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  BlogDetail,
  BlogDetailSchema,
  BlogEntry,
  BlogEntrySchema,
} from '../model/Blog';
import { verifyResponseType } from './validator-helper';
import { z } from 'zod';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(
    private http: HttpClient,
    private notificationService: NotificationService
  ) {}

  getEntries() {
    return this.http
      .get<Array<BlogEntry>>(`${environment.backendUrl}/entries`)
      .pipe(
        verifyResponseType(z.array(BlogEntrySchema), this.notificationService)
      );
  }

  getDetail(id: number) {
    return this.http
      .get<BlogDetail>(`${environment.backendUrl}/entries/${id}`)
      .pipe(verifyResponseType(BlogDetailSchema, this.notificationService));
  }
}
