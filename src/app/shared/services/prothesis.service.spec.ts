import { TestBed } from '@angular/core/testing';

import { ProthesisService } from './prothesis.service';

describe('ProthesisService', () => {
  let service: ProthesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProthesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
