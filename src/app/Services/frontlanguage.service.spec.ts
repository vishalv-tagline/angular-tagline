import { TestBed } from '@angular/core/testing';

import { FrontlanguageService } from './frontlanguage.service';

describe('FrontlanguageService', () => {
  let service: FrontlanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontlanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
