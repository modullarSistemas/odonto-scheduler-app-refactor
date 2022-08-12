import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProcedureEventComponent } from './new-procedure-event.component';

describe('NewProcedureEventComponent', () => {
  let component: NewProcedureEventComponent;
  let fixture: ComponentFixture<NewProcedureEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProcedureEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProcedureEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
