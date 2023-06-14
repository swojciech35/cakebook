import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'newrecipe-formdirections',
  templateUrl: './newrecipe-formdirections.component.html',
  styleUrls: ['./newrecipe-formdirections.component.css']
})
export class NewrecipeFormdirectionsComponent {

  @Output() addDirections: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  stepCounter: number = 1;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({

      directions: ['', Validators.required],

    });
  }

  addElementDirections() {
    if (this.form.valid) {
      const { directions } = this.form.value;
      this.addDirections.emit({ numberOfDirections:this.stepCounter,directions});
      this.stepCounter++;
      this.form.reset();
    }
  }
}

