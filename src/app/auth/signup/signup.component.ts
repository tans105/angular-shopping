import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    constructor(private authservice: AuthService) {
    }

    ngOnInit() {
    }

    onSignUp(form: NgForm) {
        const email = form.value.email;
        const password = form.value.password;
        this.authservice.signUpUser(email, password);
    }

}
