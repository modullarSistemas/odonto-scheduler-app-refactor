import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListDentistComponent } from './nav-list-dentist.component';

describe('NavListDentistComponent', () => {
  let component: NavListDentistComponent;
  let fixture: ComponentFixture<NavListDentistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListDentistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavListDentistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
