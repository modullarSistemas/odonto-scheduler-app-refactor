import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListAdminComponent } from './nav-list-admin.component';

describe('NavListAdminComponent', () => {
  let component: NavListAdminComponent;
  let fixture: ComponentFixture<NavListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
