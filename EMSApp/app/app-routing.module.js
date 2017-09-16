"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_list_component_1 = require("./employee/employee-list.component");
var employee_detail_component_1 = require("./employee/employee-detail.component");
var employee_create_component_1 = require("./employee/employee-create.component");
var page_not_found_component_1 = require("./employee/page-not-found.component");
var employee_home_component_1 = require("./employee/employee-home.component");
var modal_popup_1 = require("./modal-popup");
var login_component_1 = require("./login.component");
var logout_component_1 = require("./logout.component");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'home', component: employee_home_component_1.EmployeeHomeComponent },
    { path: 'view', component: employee_list_component_1.EmployeeListComponent },
    { path: 'create', component: employee_create_component_1.EmployeeCreateComponent },
    { path: 'employee/:id', component: employee_detail_component_1.EmployeeDetailComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent },
    { path: '**', component: page_not_found_component_1.PageNotFound }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes, { useHash: true })
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [
    login_component_1.LoginComponent,
    employee_home_component_1.EmployeeHomeComponent,
    page_not_found_component_1.PageNotFound,
    employee_list_component_1.EmployeeListComponent,
    employee_detail_component_1.EmployeeDetailComponent,
    employee_create_component_1.EmployeeCreateComponent,
    modal_popup_1.ModalPopup,
    logout_component_1.LogoutComponent
];
//# sourceMappingURL=app-routing.module.js.map