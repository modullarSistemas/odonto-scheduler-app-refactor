import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeItemComponent } from './income-item.component';

describe('IncomeItemComponent', () => {
  let component: IncomeItemComponent;
  let fixture: ComponentFixture<IncomeItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncomeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
