import {Component, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-shopping';

    ngOnInit(): void {
        firebase.initializeApp({
            apiKey: "AIzaSyDHQKbSGbWFkbbRblbSfukJHFJFecFNo-c",
            authDomain: "ng-recipe-book-984e0.firebaseapp.com"
        })
    }


}
