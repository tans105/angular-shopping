import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe('A Test Recipe 1 ', 'This is a simple desc 2', 'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf'),
        new Recipe('A Test Recipe 2', 'This is a simple desc 2', 'https://www.incredibleegg.org/wp-content/uploads/RecipeDetail_Deviled-930x550.jpg')
    ];

    constructor() {
    }

    ngOnInit() {
    }

    selectRecipe(recipe: Recipe)
    {
        this.recipeWasSelected.emit(recipe);
    }
}
