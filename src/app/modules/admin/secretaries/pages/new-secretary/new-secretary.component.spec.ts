import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSecretaryComponent } from './new-secretary.component';

describe('NewSecretaryComponent', () => {
  let component: NewSecretaryComponent;
  let fixture: ComponentFixture<NewSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSecretaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
