import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecipeShowstepsComponent } from './newrecipe-showsteps.component';

describe('NewrecipeShowdirectionsComponent', () => {
  let component: NewrecipeShowstepsComponent;
  let fixture: ComponentFixture<NewrecipeShowstepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrecipeShowstepsComponent]
    });
    fixture = TestBed.createComponent(NewrecipeShowstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
