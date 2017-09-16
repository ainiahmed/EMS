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
var router_1 = require("@angular/router");
var employee_service_1 = require("./services/employee.service");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(route, _employeeService, _router) {
        this.route = route;
        this._employeeService = _employeeService;
        this._router = _router;
        this.genders = ['Male', 'Female'];
        this.errorMsg = null;
        this.isEdit = false;
        this.model = { Designation: "", EmployeeName: "", Gender: "", Id: 0, Photo: "", Salary: "", IdentificatonDoc: "" };
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (ng2_cookies_1.Cookie.get("username") == null) {
            this._router.navigate(['/login']);
        }
        else {
            this.route.params.subscribe(function (params) {
                var id = parseInt(params['id']);
                _this.employeeId = id;
            });
            this.loadEmployeeDetails();
        }
    };
    EmployeeDetailComponent.prototype.loadEmployeeDetails = function () {
        var _this = this;
        this._employeeService.getEmployeeById(this.employeeId.toString())
            .subscribe(function (resEmployeeData) { return _this.model = resEmployeeData; }, function (resError) { return _this.errorMsg = resError; });
    };
    EmployeeDetailComponent.prototype.onEdit = function () {
        this.isEdit = !this.isEdit;
    };
    EmployeeDetailComponent.prototype.onUpdate = function (isValid) {
        var _this = this;
        //debugger;
        if (isValid) {
            this._employeeService.updateEmployee(this.model)
                .subscribe(function (resEmployeeData) { return _this.model = resEmployeeData; }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
            this.dialogMsg = "Employee Updated!";
            this.refPopUp.nativeElement.click();
        }
    };
    EmployeeDetailComponent.prototype.onCancel = function () {
        this.isEdit = !this.isEdit;
    };
    //call on form delete button to open popup
    EmployeeDetailComponent.prototype.onDeleteClick = function () {
        this.dialogMsg = "Are you sure you want to delete this employee?";
        this.refPopUp.nativeElement.click();
    };
    //call on popup delete click
    EmployeeDetailComponent.prototype.onDeleteConfirm = function () {
        var _this = this;
        this.isEdit = !this.isEdit;
        this._employeeService.deleteEmployee(this.model.Id.toString())
            .subscribe(function (resEmployeeData) { return console.log(resEmployeeData); }, function (resEmployeeError) { return _this.errorMsg = resEmployeeError; });
        this._router.navigate(['/view']);
    };
    EmployeeDetailComponent.prototype.onGoBack = function () {
        var selectedId = this.employeeId ? this.employeeId : null;
        this._router.navigate(['/view', { id: selectedId }]);
    };
    //call on popup close button
    EmployeeDetailComponent.prototype.onConfirm = function () {
        this._router.navigate(['/view']);
    };
    __decorate([
        core_1.ViewChild('refPopUp'),
        __metadata("design:type", core_1.ElementRef)
    ], EmployeeDetailComponent.prototype, "refPopUp", void 0);
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/employee/employee-detail.component.html',
            styles: ["\n            .ng-valid[required], .ng-valid.required  {\n             border-left: 5px solid #42A948; /* green */\n            }\n            .ng-invalid:not(form)  {\n             border-left: 5px solid #a94442; /* red */\n            }\n        "]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, employee_service_1.EmployeeService, router_1.Router])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map