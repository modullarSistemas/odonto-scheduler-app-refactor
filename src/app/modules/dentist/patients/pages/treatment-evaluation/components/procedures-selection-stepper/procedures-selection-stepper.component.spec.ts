import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresSelectionStepperComponent } from './procedures-selection-stepper.component';

describe('ProceduresSelectionStepperComponent', () => {
  let component: ProceduresSelectionStepperComponent;
  let fixture: ComponentFixture<ProceduresSelectionStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduresSelectionStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresSelectionStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
