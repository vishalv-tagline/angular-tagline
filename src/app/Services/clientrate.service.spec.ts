import { TestBed } from '@angular/core/testing';

import { ClientrateService } from './clientrate.service';

describe('ClientrateService', () => {
  let service: ClientrateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientrateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
