import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-newrecipe-showingredients',
  templateUrl: './newrecipe-showingredients.component.html',
  styleUrls: ['./newrecipe-showingredients.component.css']
})
export class NewrecipeShowingredientsComponent {

  @Input() ingredientsElements: any[] = [];

  deleteIngredients(element: any) {
    const index = this.ingredientsElements.indexOf(element);
    if (index !== -1) {
      this.ingredientsElements.splice(index, 1);
    }
  }
}
