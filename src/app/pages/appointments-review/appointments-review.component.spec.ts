import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsReviewComponent } from './appointments-review.component';

describe('AppointmentsReviewComponent', () => {
  let component: AppointmentsReviewComponent;
  let fixture: ComponentFixture<AppointmentsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
