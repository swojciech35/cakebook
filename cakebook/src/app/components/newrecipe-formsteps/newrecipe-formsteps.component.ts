import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'newrecipe-formsteps',
  templateUrl: './newrecipe-formsteps.component.html',
  styleUrls: ['./newrecipe-formsteps.component.css']
})
export class NewrecipeFormstepsComponent {

  @Output() addStep: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;
  stepCounter: number = 1;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({

      step: ['', Validators.required],

    });
  }

  addElementSteps() {
    if (this.form.valid) {
      const { step } = this.form.value;
      this.addStep.emit({ numberOfStep:this.stepCounter,step});
      this.stepCounter++;
      this.form.reset();
    }
  }
}

