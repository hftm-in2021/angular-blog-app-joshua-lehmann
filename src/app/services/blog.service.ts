import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BlogDetail, BlogDetailSchema, BlogEntry, BlogEntrySchema } from '../model/Blog';
import { verifyResponseType } from './validator-helper';
import { z } from 'zod';
import { NotificationService } from './notification.service';
import { BehaviorSubject, catchError, map, of } from 'rxjs';

export interface BlogServiceState {
  data: Array<BlogEntry>;
  status: 'loading' | 'error' | 'success';
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogEntriesState$ = new BehaviorSubject<BlogServiceState>({
    data: [],
    status: 'loading',
  });

  constructor(private http: HttpClient, private notificationService: NotificationService) {
    this.getEntries();
  }

  getEntries() {
    this.blogEntriesState$.next({ data: [], status: 'loading' });
    this.http
      .get<Array<BlogEntry>>(`${environment.backendUrl}/entries`)
      .pipe(
        verifyResponseType(z.array(BlogEntrySchema), this.notificationService),
        map<Array<BlogEntry>, BlogServiceState>((entries) => ({
          data: entries,
          status: 'success',
        })),
        catchError((err) => {
          const state: BlogServiceState = {
            data: [],
            status: 'error',
            error: err.message,
          };
          this.notificationService.setErrorMessage(
            'There was an error while trying to load the blog entries:' + err.message
          );
          return of(state);
        })
      )
      .subscribe((data) => {
        this.blogEntriesState$.next(data);
      });
  }

  getDetail(id: number) {
    return this.http
      .get<BlogDetail>(`${environment.backendUrl}/entries/${id}`)
      .pipe(verifyResponseType(BlogDetailSchema, this.notificationService));
  }
}
