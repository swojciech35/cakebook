import {Component, Input} from '@angular/core';

@Component({
  selector: 'cakebook-item',
  templateUrl: './cakebook-item.component.html',
  styleUrls: ['./cakebook-item.component.css']
})
export class CakebookItemComponent {

  @Input() image?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() amountOfIngredients?: any;
  @Input() amountOfSteps?: any;
  @Input() id?: number;
}
