import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecipeFormstepsComponent } from './newrecipe-formsteps.component';

describe('NewrecipeFormdirectionsComponent', () => {
  let component: NewrecipeFormstepsComponent;
  let fixture: ComponentFixture<NewrecipeFormstepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrecipeFormstepsComponent]
    });
    fixture = TestBed.createComponent(NewrecipeFormstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
