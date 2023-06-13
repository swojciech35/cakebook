import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemDetailsComponent } from './cakebook-item-details.component';

describe('CakebookItemDetailsComponent', () => {
  let component: CakebookItemDetailsComponent;
  let fixture: ComponentFixture<CakebookItemDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemDetailsComponent]
    });
    fixture = TestBed.createComponent(CakebookItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
