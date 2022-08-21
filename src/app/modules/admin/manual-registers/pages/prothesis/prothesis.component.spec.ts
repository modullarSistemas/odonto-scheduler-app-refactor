import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProthesisComponent } from './prothesis.component';

describe('ProthesisComponent', () => {
  let component: ProthesisComponent;
  let fixture: ComponentFixture<ProthesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProthesisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProthesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
