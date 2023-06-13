import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookHomeComponent } from './cakebook-home.component';

describe('CakebookHomeComponent', () => {
  let component: CakebookHomeComponent;
  let fixture: ComponentFixture<CakebookHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookHomeComponent]
    });
    fixture = TestBed.createComponent(CakebookHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
