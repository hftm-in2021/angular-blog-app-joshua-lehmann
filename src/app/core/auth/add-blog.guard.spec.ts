import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { addBlogGuard } from './add-blog.guard';

describe('addBlogGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => addBlogGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
