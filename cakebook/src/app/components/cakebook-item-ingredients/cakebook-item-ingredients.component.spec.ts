import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemIngredientsComponent } from './cakebook-item-ingredients.component';

describe('CakebookItemIngredientsComponent', () => {
  let component: CakebookItemIngredientsComponent;
  let fixture: ComponentFixture<CakebookItemIngredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemIngredientsComponent]
    });
    fixture = TestBed.createComponent(CakebookItemIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
