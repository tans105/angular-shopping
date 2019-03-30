import {Injectable} from '@angular/core';
import * as firebase from "firebase";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() {
    }

    signUpUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password).then().catch(
            (err) => console.log(err)
        )
    }
}
