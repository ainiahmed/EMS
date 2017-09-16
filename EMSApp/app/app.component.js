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
var employee_service_1 = require("./employee/services/employee.service");
var authorize_service_1 = require("./employee/services/authorize.service");
var router_1 = require("@angular/router");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.isUserAuthorize = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (ng2_cookies_1.Cookie.get("username") != null) {
            this.isUserAuthorize = true;
        }
    };
    AppComponent.prototype.onLogout = function () {
        ng2_cookies_1.Cookie.delete("username");
        this._router.navigate(['/login']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            providers: [employee_service_1.EmployeeService, authorize_service_1.Authorize]
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map