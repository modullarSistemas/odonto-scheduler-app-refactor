import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlansComponent } from './treatment-plans.component';

describe('TreatmentPlansComponent', () => {
  let component: TreatmentPlansComponent;
  let fixture: ComponentFixture<TreatmentPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatmentPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
