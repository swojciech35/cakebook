import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecipeFormingredientsComponent } from './newrecipe-formingredients.component';

describe('NewrecipeFormingredientsComponent', () => {
  let component: NewrecipeFormingredientsComponent;
  let fixture: ComponentFixture<NewrecipeFormingredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrecipeFormingredientsComponent]
    });
    fixture = TestBed.createComponent(NewrecipeFormingredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
