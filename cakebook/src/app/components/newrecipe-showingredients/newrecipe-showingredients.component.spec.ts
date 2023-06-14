import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecipeShowingredientsComponent } from './newrecipe-showingredients.component';

describe('NewrecipeShowingredientsComponent', () => {
  let component: NewrecipeShowingredientsComponent;
  let fixture: ComponentFixture<NewrecipeShowingredientsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrecipeShowingredientsComponent]
    });
    fixture = TestBed.createComponent(NewrecipeShowingredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
