import { TestBed } from '@angular/core/testing';

import { DentistGuard } from './dentist.guard';

describe('DentistGuard', () => {
  let guard: DentistGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DentistGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
