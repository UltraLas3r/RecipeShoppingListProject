import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})


export class ShoppingListComponent {
  indredients: Ingredient[] = [
  new Ingredient('Apples', 5),
  new Ingredient('Tomatoes', 9)
  ]
}
