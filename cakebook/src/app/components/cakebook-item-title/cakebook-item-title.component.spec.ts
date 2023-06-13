import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemTitleComponent } from './cakebook-item-title.component';

describe('CakebookItemTitleComponent', () => {
  let component: CakebookItemTitleComponent;
  let fixture: ComponentFixture<CakebookItemTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemTitleComponent]
    });
    fixture = TestBed.createComponent(CakebookItemTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
