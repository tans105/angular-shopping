import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
    recipes: Recipe[] = [];
    recipeChangedSubs: Subscription;

    constructor(private recipeService: RecipeService) {
        this.recipeChangedSubs = this.recipeService.recipeChanged.subscribe(
            (recipes) => this.recipes = recipes
        )
    }

    ngOnInit() {
        this.recipes = this.recipeService.getRecipe();
    }

    ngOnDestroy() {
        this.recipeChangedSubs.unsubscribe();
    }

}
