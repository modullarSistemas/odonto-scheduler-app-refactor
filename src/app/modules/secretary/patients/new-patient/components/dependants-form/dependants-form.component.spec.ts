import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependantsFormComponent } from './dependants-form.component';

describe('DependantsFormComponent', () => {
  let component: DependantsFormComponent;
  let fixture: ComponentFixture<DependantsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DependantsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
