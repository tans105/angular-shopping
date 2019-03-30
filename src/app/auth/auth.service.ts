import {Injectable} from '@angular/core';
import * as firebase from "firebase";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    tk: string;

    constructor(private router: Router) {
    }

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then().catch(
            (err) => console.log(err)
        )
    }

    signInUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (resp) => {
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.tk = token
                        )
                }
            )
            .catch(
                (err) => console.log(err)
            )
    }

    getToken() {
        firebase.auth().currentUser.getIdToken()
            .then(
                (token: string) => this.tk = token
            );
        return this.tk;
    }

    isAuthenticated() {
        return this.tk != null;
    }

    logout() {
        firebase.auth().signOut();
        this.tk = null;
    }
}
