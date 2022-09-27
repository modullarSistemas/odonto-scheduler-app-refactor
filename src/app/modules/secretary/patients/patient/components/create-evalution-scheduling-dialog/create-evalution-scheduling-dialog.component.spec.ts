import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEvalutionSchedulingDialogComponent } from './create-evalution-scheduling-dialog.component';

describe('CreateEvalutionSchedulingDialogComponent', () => {
  let component: CreateEvalutionSchedulingDialogComponent;
  let fixture: ComponentFixture<CreateEvalutionSchedulingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEvalutionSchedulingDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEvalutionSchedulingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
