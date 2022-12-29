import { TestBed } from '@angular/core/testing';

import { ServeblogService } from './serveblog.service';

describe('ServeblogService', () => {
  let service: ServeblogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeblogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
