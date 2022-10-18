import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericRosterComponent } from './generic-roster.component';

describe('GenericRosterComponent', () => {
  let component: GenericRosterComponent;
  let fixture: ComponentFixture<GenericRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericRosterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericRosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
