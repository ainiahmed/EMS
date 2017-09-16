import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';
import { EmployeeModel } from './model/employee.model';
import { EmployeeService } from './services/employee.service';
import { FileUploader, FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
    selector: 'employee-create',
    templateUrl: 'app/employee/employee-create.component.html',
    styles: [`
            .ng-valid[required], .ng-valid.required  {
             border-left: 5px solid #42A948; /* green */
            }
            .ng-invalid:not(form)  {
             border-left: 5px solid #a94442; /* red */
            }
        `]
})

export class EmployeeCreateComponent implements OnInit {
    genders = ['Male', 'Female'];
    model: EmployeeModel;
    errorMsg: string = null;
    @ViewChild('refPopUp') refPopUp: ElementRef;
    public dialogMsg: string;

    constructor(private _employeeService: EmployeeService, private el: ElementRef,
        private _router: Router) {
        this.model = new EmployeeModel();
        this.model.Gender = "Male";
    }
    ngOnInit() {
        if (Cookie.get("username") == null)
        { this._router.navigate(['/login']); }
    }
    onCreate(value: any, isValid: boolean) {
        if (isValid) {
            let filePath: string;
            let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
            let fileCount: number = inputEl.files.length;
            let formData = new FormData();
            formData.append('EmployeeName', value.name);
            formData.append('Designation', value.designation);
            formData.append('Gender', value.gender);
            formData.append('Salary', value.salary);
            if (fileCount > 0) {
                formData.append('photo', inputEl.files.item(0));
                this._employeeService.createEmployee(formData)
                    .subscribe((data) => filePath = data,
                    resError => this.errorMsg = resError);
            }
            this.dialogMsg = "Employee Added!";
            this.refPopUp.nativeElement.click();
        }
    }
    onConfirm() {
        this._router.navigate(['/view']);
    }
}