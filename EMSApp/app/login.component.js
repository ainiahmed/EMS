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
var user_model_1 = require("./employee/model/user-model");
var authorize_service_1 = require("./employee/services/authorize.service");
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var LoginComponent = (function () {
    function LoginComponent(_router, _authorize, route) {
        this._router = _router;
        this._authorize = _authorize;
        this.route = route;
        this.errorMsg = null;
        this.model = new user_model_1.UserModel();
    }
    LoginComponent.prototype.onLogin = function (isValid) {
        var _this = this;
        if (isValid) {
            this._authorize.authorizeUser(this.model)
                .subscribe(function (jsonData) {
                _this.onSuccess();
            }, function (error) { return _this.errorMsg = error; });
        }
    };
    LoginComponent.prototype.onSuccess = function () {
        ng2_cookies_1.Cookie.set("username", this.model.userName);
        location.reload();
        this._router.navigate(['home']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: "app/login.component.html",
            styles: [".clearer {\n            clear: both;\n            height: 10px;\n        }"]
        }),
        __metadata("design:paramtypes", [router_1.Router, authorize_service_1.Authorize, router_1.ActivatedRoute])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map