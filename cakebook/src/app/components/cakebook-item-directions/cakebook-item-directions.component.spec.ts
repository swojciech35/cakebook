import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemDirectionsComponent } from './cakebook-item-directions.component';

describe('CakebookItemDirectionsComponent', () => {
  let component: CakebookItemDirectionsComponent;
  let fixture: ComponentFixture<CakebookItemDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemDirectionsComponent]
    });
    fixture = TestBed.createComponent(CakebookItemDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
