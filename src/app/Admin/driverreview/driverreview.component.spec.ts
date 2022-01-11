import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverreviewComponent } from './driverreview.component';

describe('DriverreviewComponent', () => {
  let component: DriverreviewComponent;
  let fixture: ComponentFixture<DriverreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
