"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_model_1 = require("./model/employee.model");
var employee_service_1 = require("./services/employee.service");
var router_1 = require("@angular/router");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var EmployeeCreateComponent = (function () {
    function EmployeeCreateComponent(_employeeService, el, _router) {
        this._employeeService = _employeeService;
        this.el = el;
        this._router = _router;
        this.genders = ['Male', 'Female'];
        this.errorMsg = null;
        this.model = new employee_model_1.EmployeeModel();
        this.model.Gender = "Male";
    }
    EmployeeCreateComponent.prototype.ngOnInit = function () {
        if (ng2_cookies_1.Cookie.get("username") == null) {
            this._router.navigate(['/login']);
        }
    };
    EmployeeCreateComponent.prototype.onCreate = function (value, isValid) {
        var _this = this;
        if (isValid) {
            var filePath_1;
            var inputEl = this.el.nativeElement.querySelector('#photo');
            var fileCount = inputEl.files.length;
            var formData = new FormData();
            formData.append('EmployeeName', value.name);
            formData.append('Designation', value.designation);
            formData.append('Gender', value.gender);
            formData.append('Salary', value.salary);
            if (fileCount > 0) {
                formData.append('photo', inputEl.files.item(0));
                this._employeeService.createEmployee(formData)
                    .subscribe(function (data) { return filePath_1 = data; }, function (resError) { return _this.errorMsg = resError; });
            }
            this.dialogMsg = "Employee Added!";
            this.refPopUp.nativeElement.click();
        }
    };
    EmployeeCreateComponent.prototype.onConfirm = function () {
        this._router.navigate(['/view']);
    };
    __decorate([
        core_1.ViewChild('refPopUp'),
        __metadata("design:type", core_1.ElementRef)
    ], EmployeeCreateComponent.prototype, "refPopUp", void 0);
    EmployeeCreateComponent = __decorate([
        core_1.Component({
            selector: 'employee-create',
            templateUrl: 'app/employee/employee-create.component.html',
            styles: ["\n            .ng-valid[required], .ng-valid.required  {\n             border-left: 5px solid #42A948; /* green */\n            }\n            .ng-invalid:not(form)  {\n             border-left: 5px solid #a94442; /* red */\n            }\n        "]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, core_1.ElementRef,
            router_1.Router])
    ], EmployeeCreateComponent);
    return EmployeeCreateComponent;
}());
exports.EmployeeCreateComponent = EmployeeCreateComponent;
//# sourceMappingURL=employee-create.component.js.map