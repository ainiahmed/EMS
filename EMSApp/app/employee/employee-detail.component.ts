import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EmployeeModel } from './model/employee.model';
import { IEmployeeModelInterface } from './model/employee-model.interface';
import { EmployeeService } from './services/employee.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    templateUrl: 'app/employee/employee-detail.component.html',
    styles: [`
            .ng-valid[required], .ng-valid.required  {
             border-left: 5px solid #42A948; /* green */
            }
            .ng-invalid:not(form)  {
             border-left: 5px solid #a94442; /* red */
            }
        `]
})

export class EmployeeDetailComponent implements OnInit {
    employeeId: number;
    genders = ['Male', 'Female'];
    @ViewChild('refPopUp') refPopUp: ElementRef;
    public dialogMsg: string;
    model: IEmployeeModelInterface;
    errorMsg: string = null;
    isEdit: boolean = false;

    constructor(private route: ActivatedRoute, private _employeeService: EmployeeService, private _router: Router) {
        this.model = { Designation: "", EmployeeName: "", Gender: "", Id: 0, Photo: "", Salary: "", IdentificatonDoc: "" };
    }

    ngOnInit() {
        if (Cookie.get("username") == null)
        { this._router.navigate(['/login']); }
        else {
            this.route.params.subscribe((params: Params) => {
                let id = parseInt(params['id']);
                this.employeeId = id;
            })
            this.loadEmployeeDetails();
        }
    }

    loadEmployeeDetails() {
        this._employeeService.getEmployeeById(this.employeeId.toString())
            .subscribe(resEmployeeData => this.model = resEmployeeData,
            resError => this.errorMsg = resError);
    }

    onEdit() {
        this.isEdit = !this.isEdit;
    }

    onUpdate(isValid: boolean) {
        //debugger;
        if (isValid) {
            this._employeeService.updateEmployee(this.model)
                .subscribe(resEmployeeData => this.model = resEmployeeData,
                resEmployeeError => this.errorMsg = resEmployeeError);

            this.dialogMsg = "Employee Updated!";
            this.refPopUp.nativeElement.click();
        }
    }

    onCancel() {
        this.isEdit = !this.isEdit;
    }
    //call on form delete button to open popup
    onDeleteClick() {
        this.dialogMsg = "Are you sure you want to delete this employee?";
        this.refPopUp.nativeElement.click();
    }
    //call on popup delete click
    onDeleteConfirm() {
        this.isEdit = !this.isEdit;
        this._employeeService.deleteEmployee(this.model.Id.toString())
            .subscribe(resEmployeeData => console.log(resEmployeeData),
            resEmployeeError => this.errorMsg = resEmployeeError);
        this._router.navigate(['/view']);
    }

    onGoBack() {
        let selectedId = this.employeeId ? this.employeeId : null;
        this._router.navigate(['/view', { id: selectedId }]);
    }
    //call on popup close button
    onConfirm() {
        this._router.navigate(['/view']);
    }
}