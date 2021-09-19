import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { HttpDataService } from './http-data.service';

describe('HttpDataService', () => {
  let service: HttpDataService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [HttpDataService],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpDataService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
