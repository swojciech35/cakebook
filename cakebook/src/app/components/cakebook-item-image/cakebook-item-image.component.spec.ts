import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemImageComponent } from './cakebook-item-image.component';

describe('CakebookItemImageComponent', () => {
  let component: CakebookItemImageComponent;
  let fixture: ComponentFixture<CakebookItemImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemImageComponent]
    });
    fixture = TestBed.createComponent(CakebookItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
