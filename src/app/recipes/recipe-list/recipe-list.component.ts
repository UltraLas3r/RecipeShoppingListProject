import { Component } from '@angular/core';
import {Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'This is a Test', 'https://s7d1.scene7.com/is/image/mcdonalds/Header_Hamburger_832x472:1-3-product-tile-desktop?wid=763&hei=472&dpr=off')
  ];

  constructor(){ }

}
