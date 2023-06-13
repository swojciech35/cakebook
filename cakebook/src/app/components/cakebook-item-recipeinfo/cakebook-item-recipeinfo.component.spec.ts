import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakebookItemRecipeinfoComponent } from './cakebook-item-recipeinfo.component';

describe('CakebookItemRecipeinfoComponent', () => {
  let component: CakebookItemRecipeinfoComponent;
  let fixture: ComponentFixture<CakebookItemRecipeinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakebookItemRecipeinfoComponent]
    });
    fixture = TestBed.createComponent(CakebookItemRecipeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
