import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualRegistersComponent } from './manual-registers.component';

describe('ManualRegistersComponent', () => {
  let component: ManualRegistersComponent;
  let fixture: ComponentFixture<ManualRegistersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualRegistersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualRegistersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
