import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemTextComponent } from './cakebook-item-text.component';

describe('CakebookItemTextComponent', () => {
  let component: CakebookItemTextComponent;
  let fixture: ComponentFixture<CakebookItemTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemTextComponent]
    });
    fixture = TestBed.createComponent(CakebookItemTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
