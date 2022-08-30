import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresTreatmentTabComponent } from './procedures-treatment-tab.component';

describe('ProceduresTreatmentTabComponent', () => {
  let component: ProceduresTreatmentTabComponent;
  let fixture: ComponentFixture<ProceduresTreatmentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduresTreatmentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresTreatmentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
