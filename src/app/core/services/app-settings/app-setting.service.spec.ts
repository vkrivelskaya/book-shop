import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LocalStorageService } from '../local-storage/local-storage.service';

import { AppSettingService } from './app-setting.service';

describe('AppSettingService', () => {
  let service: AppSettingService;
  const mockedLocalStorageService = jasmine.createSpyObj('LocalStorageService', ['getItem', 'setItem']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppSettingService,
        {
          provide: LocalStorageService,
          useValue: mockedLocalStorageService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    });
    service = TestBed.inject(AppSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
