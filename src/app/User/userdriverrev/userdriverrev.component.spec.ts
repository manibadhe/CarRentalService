import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdriverrevComponent } from './userdriverrev.component';

describe('UserdriverrevComponent', () => {
  let component: UserdriverrevComponent;
  let fixture: ComponentFixture<UserdriverrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserdriverrevComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdriverrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
