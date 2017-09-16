import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeeModel } from './model/employee.model';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'employee-list',
    templateUrl: `app/employee/employee-list.component.html`
})

export class EmployeeListComponent implements OnInit {
    employees: EmployeeModel[];
    errorMsg: string;
    selectedId: number;

    constructor(private _employeeService: EmployeeService, private _router: Router, private route: ActivatedRoute) { }
    ngOnInit() {
        if (Cookie.get("username") == null)
        { this._router.navigate(['/login']); }
        else {
            this.route.params.subscribe((params: Params) => {
                let id = parseInt(params['id']);
                this.selectedId = id;
            })

            //to get data from service you need to subscribe for it first

            this._employeeService.getEmployee()
                .subscribe(
                resemployeedata => this.employees = resemployeedata,
                resError => this.errorMsg = resError);
        }
    }
    //navigate to selected employee id
    onSelect(employeeid: number) {
        this._router.navigate(['/employee', employeeid]);
    }

}