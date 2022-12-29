import { TestBed } from '@angular/core/testing';

import { ServeaddressService } from './serveaddress.service';

describe('ServeaddressService', () => {
  let service: ServeaddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeaddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
