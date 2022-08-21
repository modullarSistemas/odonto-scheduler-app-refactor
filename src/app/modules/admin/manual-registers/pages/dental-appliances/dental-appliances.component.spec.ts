import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalAppliancesComponent } from './dental-appliances.component';

describe('DentalAppliancesComponent', () => {
  let component: DentalAppliancesComponent;
  let fixture: ComponentFixture<DentalAppliancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentalAppliancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentalAppliancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
