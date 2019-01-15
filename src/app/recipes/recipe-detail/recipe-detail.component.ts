import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        //const id = this.route.snapshot.params['id']; // will be loaded only once so not using
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];//adding + to cast id to number
                this.recipe = this.recipeService.getRecipeById(this.id);
            }
        );
    }

    addIngredientsForRecipe() {
        this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
    }

}
