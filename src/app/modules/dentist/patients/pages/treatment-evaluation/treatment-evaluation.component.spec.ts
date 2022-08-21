import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentEvaluationComponent } from './treatment-evaluation.component';

describe('TreatmentEvaluationComponent', () => {
  let component: TreatmentEvaluationComponent;
  let fixture: ComponentFixture<TreatmentEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
