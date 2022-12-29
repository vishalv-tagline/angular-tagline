import { TestBed } from '@angular/core/testing';

import { ExpCardService } from './exp-card.service';

describe('ExpCardService', () => {
  let service: ExpCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
