import { TestBed } from '@angular/core/testing';

import { BacklanguageService } from './backlanguage.service';

describe('BacklanguageService', () => {
  let service: BacklanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BacklanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
