import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee/services/employee.service';
import { Authorize } from './employee/services/authorize.service';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [EmployeeService, Authorize]
})
export class AppComponent implements OnInit {
    isUserAuthorize: boolean = false;
    constructor(private _router: Router) { }
    ngOnInit() {
        if (Cookie.get("username") != null)
        { this.isUserAuthorize = true; }
    }
    onLogout() {
        Cookie.delete("username");
        this._router.navigate(['/login']);
    }
}