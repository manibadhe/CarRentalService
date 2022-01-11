import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercarreviewComponent } from './usercarreview.component';

describe('UsercarreviewComponent', () => {
  let component: UsercarreviewComponent;
  let fixture: ComponentFixture<UsercarreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercarreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercarreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
