import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    templateUrl: `app/employee/employee-home.component.html`
})
export class EmployeeHomeComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() {
        if (Cookie.get("username") == null)
        { this._router.navigate(['/login']); }
    }
    onView() {
        this._router.navigate(['/view']);
    }
}