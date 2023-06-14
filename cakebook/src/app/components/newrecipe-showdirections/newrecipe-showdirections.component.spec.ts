import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrecipeShowdirectionsComponent } from './newrecipe-showdirections.component';

describe('NewrecipeShowdirectionsComponent', () => {
  let component: NewrecipeShowdirectionsComponent;
  let fixture: ComponentFixture<NewrecipeShowdirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewrecipeShowdirectionsComponent]
    });
    fixture = TestBed.createComponent(NewrecipeShowdirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
