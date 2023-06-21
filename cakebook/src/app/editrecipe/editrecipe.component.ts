import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from "../services/data.service";


@Component({
  selector: 'editrecipe',
  templateUrl: './editrecipe.component.html',
  styleUrls: ['./editrecipe.component.css']
})
export class EditrecipeComponent implements OnInit {
  ingredientsElements: any[] = [];
  stepsElement: any[] = [];
  formData: any = {};

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    let id: string = '';
    this.route.paramMap.subscribe((params: any) => {
      id = params.get('id');
    });

    this.dataService.getById(id).subscribe((res: any) => {
      this.formData = {
        title: res.title,
        description: res.description,
        image: res.image,
        ingredients: res.ingredients,
        steps: res.steps,
        id:res.id
      };
      this.ingredientsElements = res.ingredients;
      this.stepsElement = res.steps;
    });
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

  addStep(event: any) {
    this.stepsElement.push(event);
  }

  deleteStep(element: any) {
    const index = this.stepsElement.indexOf(element);
    if (index !== -1) {
      this.stepsElement.splice(index, 1);
    }
  }

  update() {
    this.formData.ingredients = this.ingredientsElements;
    this.formData.steps = this.stepsElement;

    this.dataService.addRecipe(this.formData).subscribe((result) => {
      console.log(result);
      this.router.navigate(['/']);
    });
  }
}
