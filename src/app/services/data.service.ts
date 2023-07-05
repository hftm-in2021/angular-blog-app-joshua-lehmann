import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, share, timer } from 'rxjs';
import { verifyResponseType } from './validator-helper';
import { z } from 'zod';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';

export interface DataState<ResultType> {
  data?: ResultType;
  status: 'loading' | 'error' | 'success';
  error?: string;
}

const CACHE_TIMEOUT = 10 * 1000;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cache = new Map<string, Observable<DataState<any>>>();

  constructor(private http: HttpClient, private notificationService: NotificationService) {}

  getData<SchemaType extends z.ZodTypeAny>(url: string, validationSchema: SchemaType) {
    type ResultType = z.infer<SchemaType>;

    if (!this.cache.has(url)) {
      console.log('No cache for:', url);
      const test = this.http.get<ResultType>(url).pipe(
        share({
          connector: () => new BehaviorSubject<DataState<ResultType>>({ status: 'loading' }),
          resetOnComplete: () => timer(CACHE_TIMEOUT),
        }),
        verifyResponseType(validationSchema, this.notificationService),
        map<ResultType, DataState<ResultType>>((data) => ({
          data,
          status: 'success',
        })),
        catchError((err) => {
          const errorState: DataState<ResultType> = {
            status: 'error',
            error: err.message,
          };
          this.notificationService.setErrorMessage(
            `There was an error while trying to get data from ${url}: ${err.message}`
          );
          return of(errorState);
        })
      );

      console.log('Setting cache for:', url);
      this.cache.set(url, test);
    }
    console.log('Returning cache for:', url, this.cache.get(url));
    return this.cache.get(url) as Observable<DataState<ResultType>>;
  }
}
