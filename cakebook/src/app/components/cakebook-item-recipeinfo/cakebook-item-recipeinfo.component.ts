import {Component, Input} from '@angular/core';

@Component({
  selector: 'cakebook-item-recipeinfo',
  templateUrl: './cakebook-item-recipeinfo.component.html',
  styleUrls: ['./cakebook-item-recipeinfo.component.css']
})
export class CakebookItemRecipeinfoComponent {

  @Input() amountOfIngredients?: any;
  @Input() amountOfDirections?: any;
}
