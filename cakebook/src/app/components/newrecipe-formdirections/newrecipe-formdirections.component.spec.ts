import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecipeFormdirectionsComponent } from './newrecipe-formdirections.component';

describe('NewrecipeFormdirectionsComponent', () => {
  let component: NewrecipeFormdirectionsComponent;
  let fixture: ComponentFixture<NewrecipeFormdirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrecipeFormdirectionsComponent]
    });
    fixture = TestBed.createComponent(NewrecipeFormdirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
