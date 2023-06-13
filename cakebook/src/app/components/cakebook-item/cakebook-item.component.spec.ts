import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemComponent } from './cakebook-item.component';

describe('CakebookItemComponent', () => {
  let component: CakebookItemComponent;
  let fixture: ComponentFixture<CakebookItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemComponent]
    });
    fixture = TestBed.createComponent(CakebookItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
