import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTreatmentInstallmentDialogComponent } from './pay-treatment-installment-dialog.component';

describe('PayTreatmentInstallmentDialogComponent', () => {
  let component: PayTreatmentInstallmentDialogComponent;
  let fixture: ComponentFixture<PayTreatmentInstallmentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayTreatmentInstallmentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayTreatmentInstallmentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
