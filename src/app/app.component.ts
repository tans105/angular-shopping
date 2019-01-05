import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angular-shopping';
    activateRecipe: string = 'R';

    toggleMenu(event: string) {
        this.activateRecipe = event;
    }
}
