import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddashComponent } from './addash.component';

describe('AddashComponent', () => {
  let component: AddashComponent;
  let fixture: ComponentFixture<AddashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
