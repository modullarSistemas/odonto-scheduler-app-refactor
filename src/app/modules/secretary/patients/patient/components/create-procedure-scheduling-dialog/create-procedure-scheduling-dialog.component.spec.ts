import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProcedureSchedulingDialogComponent } from './create-procedure-scheduling-dialog.component';

describe('CreateProcedureSchedulingDialogComponent', () => {
  let component: CreateProcedureSchedulingDialogComponent;
  let fixture: ComponentFixture<CreateProcedureSchedulingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProcedureSchedulingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProcedureSchedulingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
