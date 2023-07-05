import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BlogDetail, BlogDetailSchema, BlogEntry, BlogEntrySchema } from '../model/Blog';
import { verifyResponseType } from './validator-helper';
import { z } from 'zod';
import { NotificationService } from './notification.service';
import { BehaviorSubject, catchError, map, of, repeat } from 'rxjs';

const CACHE_TIMEOUT = 1000 * 60 * 3; // 3 minutes

export interface BlogServiceState {
  data?: Array<BlogEntry>;
  status: 'loading' | 'error' | 'success';
  error?: string;
}

export interface BlogDetailResponse {
  data?: BlogDetail;
  status: 'loading' | 'error' | 'success';
  error?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  public blogEntriesState$ = new BehaviorSubject<BlogServiceState>({
    status: 'loading',
  });

  public blogDetailState$ = new Map<number, BehaviorSubject<BlogDetailResponse>>();

  constructor(private http: HttpClient, private notificationService: NotificationService) {
    this.getBlogEntries();
  }

  getBlogEntries() {
    this.blogEntriesState$.next({ status: 'loading' });
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
        }),
        repeat({ delay: CACHE_TIMEOUT })
      )
      .subscribe((data) => {
        this.blogEntriesState$.next(data);
      });
  }

  getBlogDetail(id: number) {
    if (!this.blogDetailState$.has(id)) {
      this.blogDetailState$.set(id, new BehaviorSubject<BlogDetailResponse>({ status: 'loading' }));
      this.http
        .get<BlogDetail>(`${environment.backendUrl}/entries/${id}`)
        .pipe(
          verifyResponseType(BlogDetailSchema, this.notificationService),
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
          }),
          // Refresh cache after cache timeout
          repeat({ delay: CACHE_TIMEOUT })
        )
        .subscribe((data) => {
          this.blogDetailState$.get(id)?.next({ status: 'success', data });
        });
    }
    return this.blogDetailState$.get(id)!.asObservable();
  }
}
