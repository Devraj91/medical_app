import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailiabilityComponent } from './availiability.component';

describe('AvailiabilityComponent', () => {
  let component: AvailiabilityComponent;
  let fixture: ComponentFixture<AvailiabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailiabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
