import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1 ',
            'This is a simple desc 2',
            'https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_640,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/17c6ec7292ce74c4f38c71ee4816925c46ffd4bf',
            [
                new Ingredient("Meat", 1),
                new Ingredient("Egg", 22)
            ]),
        new Recipe(
            'A Test Recipe 2',
            'This is a simple desc 2',
            'https://www.incredibleegg.org/wp-content/uploads/RecipeDetail_Deviled-930x550.jpg',
            [
                new Ingredient("Paneer", 5),
                new Ingredient("Water", 10)
            ])
    ];

    getRecipe() {
        return this.recipes.slice(); //not returning direct reference. Returning a new copy of the recipe array. Prevent access of recipes array from outside.
    }

    getRecipeById(index: number) {
        return this.recipes[index];
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsForRecipe(ingredients);
    }

    constructor(private slService: ShoppingListService) {
    }
}
