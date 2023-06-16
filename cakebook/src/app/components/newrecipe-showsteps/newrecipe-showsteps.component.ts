import {Component, Input} from '@angular/core';

@Component({
  selector: 'newrecipe-showsteps',
  templateUrl: './newrecipe-showsteps.component.html',
  styleUrls: ['./newrecipe-showsteps.component.css']
})
export class NewrecipeShowstepsComponent {
  @Input() stepsElements: any[] = [];

  deleteIngredients(element: any) {
    const index = this.stepsElements.indexOf(element);
    if (index !== -1) {
      this.stepsElements.splice(index, 1);
    }
  }
}
