import {Component, Input} from '@angular/core';

@Component({
  selector: 'newrecipe-showdirections',
  templateUrl: './newrecipe-showdirections.component.html',
  styleUrls: ['./newrecipe-showdirections.component.css']
})
export class NewrecipeShowdirectionsComponent {
  @Input() directionsElements: any[] = [];

  deleteIngredients(element: any) {
    const index = this.directionsElements.indexOf(element);
    if (index !== -1) {
      this.directionsElements.splice(index, 1);
    }
  }
}
