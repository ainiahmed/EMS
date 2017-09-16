import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserModel } from './employee/model/user-model';
import { Authorize } from './employee/services/authorize.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'app-login',
    templateUrl: `app/login.component.html`,
    styles: [`.clearer {
            clear: both;
            height: 10px;
        }`]
})
export class LoginComponent {
    model: UserModel;
    errorMsg: string = null;
    constructor(private _router: Router, private _authorize: Authorize, private route: ActivatedRoute) {
        this.model = new UserModel();
    }
    onLogin(isValid: boolean) {
        if (isValid) {
            this._authorize.authorizeUser(this.model)
                .subscribe((jsonData) => {
                    this.onSuccess();
                },
                error => this.errorMsg = error);
        }
    }
    onSuccess() {
        Cookie.set("username", this.model.userName);
        location.reload();
        this._router.navigate(['home']);
    }
}