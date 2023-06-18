import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemStepsComponent } from './cakebook-item-steps.component';

describe('CakebookItemDirectionsComponent', () => {
  let component: CakebookItemStepsComponent;
  let fixture: ComponentFixture<CakebookItemStepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemStepsComponent]
    });
    fixture = TestBed.createComponent(CakebookItemStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
