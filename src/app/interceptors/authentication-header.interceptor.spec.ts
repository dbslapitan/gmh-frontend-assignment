import { TestBed } from '@angular/core/testing';

import { AuthenticationHeaderInterceptor } from './authentication-header.interceptor';

describe('AuthenticationHeaderInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AuthenticationHeaderInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AuthenticationHeaderInterceptor = TestBed.inject(AuthenticationHeaderInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
