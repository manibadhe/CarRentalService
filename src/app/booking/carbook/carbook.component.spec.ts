import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarbookComponent } from './carbook.component';

describe('CarbookComponent', () => {
  let component: CarbookComponent;
  let fixture: ComponentFixture<CarbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
