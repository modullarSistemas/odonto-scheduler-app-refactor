import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavListSecretaryComponent } from './nav-list-secretary.component';

describe('NavListSecretaryComponent', () => {
  let component: NavListSecretaryComponent;
  let fixture: ComponentFixture<NavListSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavListSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavListSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
