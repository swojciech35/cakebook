import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'newrecipe-formingredients',
  templateUrl: './newrecipe-formingredients.component.html',
  styleUrls: ['./newrecipe-formingredients.component.css']
})
export class NewrecipeFormingredientsComponent {

  @Output() addIngredients: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      ingredients: ['', Validators.required],
      number: ['', Validators.required],
      type: ['szt',Validators.required]
    });
  }

  addElementIngredients() {
    if (this.form.valid) {
      const { ingredients, number, type } = this.form.value;
      this.addIngredients.emit({ ingredients, number, type});
      this.form.reset();
    }
  }
}
