import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
@Component({
  selector: 'newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})
export class NewrecipeComponent {

  ingredientsElements: any[] = [];
  directionsElement:any[]=[];


  constructor(private dataService: DataService, public router: Router) {
  }


  addIngredients(event: any) {
    this.ingredientsElements.push(event);
  }

  deleteIngredients(element: any) {
    const index = this.ingredientsElements.indexOf(element);
    if (index !== -1) {
      this.ingredientsElements.splice(index, 1);
    }
  }

  addDirections(event:any){
    this.directionsElement.push(event);
  }

  deleteDirections(element: any) {
    const index = this.directionsElement.indexOf(element);
    if (index !== -1) {
      this.directionsElement.splice(index, 1);
    }
  }

  showTab() {
    console.log(this.ingredientsElements);
    console.log(this.directionsElement);
  }



  formData = {
    title: '',
    description: '',
    image: '',
    ingredients: this.ingredientsElements,
    directions: this.directionsElement

  };

  create() {
    // Obsługa logiki po zatwierdzeniu formularza
    console.log("halo to ja");
    this.dataService.addRecipe(this.formData).subscribe((result) => {
      return result;
    });
    this.router.navigate(['/']);

  }

}
