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
var employee_service_1 = require("./services/employee.service");
var router_1 = require("@angular/router");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService, _router, route) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.route = route;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (ng2_cookies_1.Cookie.get("username") == null) {
            this._router.navigate(['/login']);
        }
        else {
            this.route.params.subscribe(function (params) {
                var id = parseInt(params['id']);
                _this.selectedId = id;
            });
            //to get data from service you need to subscribe for it first
            this._employeeService.getEmployee()
                .subscribe(function (resemployeedata) { return _this.employees = resemployeedata; }, function (resError) { return _this.errorMsg = resError; });
        }
    };
    //navigate to selected employee id
    EmployeeListComponent.prototype.onSelect = function (employeeid) {
        this._router.navigate(['/employee', employeeid]);
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: "app/employee/employee-list.component.html"
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.Router, router_1.ActivatedRoute])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employee-list.component.js.map