import { TestBed } from '@angular/core/testing';

import { TimingInterceptor } from './timing-interceptor.service';

describe('TimingInterceptor', () => {
  let service: TimingInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimingInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
