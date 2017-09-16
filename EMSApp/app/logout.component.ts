import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { Router } from '@angular/router';

@Component({
    template: `<div class="container">
                <div class="alert alert-success">
                    <h3>Logout Successfully</h3>
                    <h5>
                        Click here to LogIn again <span class="glyphicon glyphicon-log-in"></span>
                        <input type="submit" class="btn btn-primary" value="Login" (click)="login()" />
                    </h5>
                </div>
            </div>`
})
export class LogoutComponent implements OnInit {
    constructor(private _router: Router) { }

    public ngOnInit() {
        if (Cookie.get("username") != null)
        { Cookie.delete("username");}
        else {  this._router.navigate(['/login']); }
    }

    login() {
        location.reload();
        this._router.navigate(['/login']);
    }
}