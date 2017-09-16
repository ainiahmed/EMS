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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/toPromise");
var constant_1 = require("../model/constant");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
        this.constants = new constant_1.Constants();
        this._url = this.constants.employeeUrl;
    }
    EmployeeService.prototype.getEmployee = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype.getEmployeeById = function (id) {
        var params = new http_1.URLSearchParams();
        params.set("id", id);
        return this._http.get(this._url, { search: params })
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype.updateEmployee = function (model) {
        return this._http.put(this._url, model)
            .map(this.extractData)
            .catch(this._errorHandler);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this._http.delete(this._url + "/" + id)
            .map(function (response) { return response.json(); })
            .catch(this._errorHandler);
    };
    EmployeeService.prototype.createEmployee = function (formData) {
        return this._http
            .post(this._url, formData)
            .map(this.extractData)
            .catch(this._errorHandler);
    };
    EmployeeService.prototype._errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error || "Server Error");
    };
    EmployeeService.prototype.extractData = function (res) {
        var body = res.json();
        console.log("Body return: " + body + " : Body data " + body.fileName);
        return body;
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map