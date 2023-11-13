import { Component } from '@angular/core';
import {Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test Recipe 1', 
    'This is a Test', 
    'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg'),
   
  ];

  constructor(){ }

}
