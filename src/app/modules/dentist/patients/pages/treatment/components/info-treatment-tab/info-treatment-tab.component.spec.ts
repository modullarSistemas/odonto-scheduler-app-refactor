import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTreatmentTabComponent } from './info-treatment-tab.component';

describe('InfoTreatmentTabComponent', () => {
  let component: InfoTreatmentTabComponent;
  let fixture: ComponentFixture<InfoTreatmentTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoTreatmentTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoTreatmentTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
