import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonsContainerComponent } from './action-buttons-container.component';

describe('ActionButtonsContainerComponent', () => {
  let component: ActionButtonsContainerComponent;
  let fixture: ComponentFixture<ActionButtonsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonsContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionButtonsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
