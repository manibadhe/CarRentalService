import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreviewComponent } from './carreview.component';

describe('CarreviewComponent', () => {
  let component: CarreviewComponent;
  let fixture: ComponentFixture<CarreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
