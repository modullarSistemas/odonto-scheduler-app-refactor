import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEvaluationEventComponent } from './new-evaluation-event.component';

describe('NewEvaluationEventComponent', () => {
  let component: NewEvaluationEventComponent;
  let fixture: ComponentFixture<NewEvaluationEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEvaluationEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEvaluationEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
