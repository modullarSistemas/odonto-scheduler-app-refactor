import { TestBed } from '@angular/core/testing';

import { TreatmentsService } from './treatments.service';

describe('TreatmentService', () => {
  let service: TreatmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreatmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
