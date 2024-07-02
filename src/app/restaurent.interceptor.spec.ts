import { TestBed } from '@angular/core/testing';

import { RestaurentInterceptor } from './restaurent.interceptor';

describe('RestaurentInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RestaurentInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RestaurentInterceptor = TestBed.inject(RestaurentInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
