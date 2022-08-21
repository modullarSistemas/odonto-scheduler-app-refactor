import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProthesisComponent } from './new-prothesis.component';

describe('NewProthesisComponent', () => {
  let component: NewProthesisComponent;
  let fixture: ComponentFixture<NewProthesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewProthesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewProthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
