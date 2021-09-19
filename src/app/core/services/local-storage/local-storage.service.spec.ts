import { TestBed, waitForAsync } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
    service = TestBed.inject(LocalStorageService);
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
