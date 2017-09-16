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
var ng2_cookies_1 = require("ng2-cookies/ng2-cookies");
var router_1 = require("@angular/router");
var LogoutComponent = (function () {
    function LogoutComponent(_router) {
        this._router = _router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        if (ng2_cookies_1.Cookie.get("username") != null) {
            ng2_cookies_1.Cookie.delete("username");
        }
        else {
            this._router.navigate(['/login']);
        }
    };
    LogoutComponent.prototype.login = function () {
        location.reload();
        this._router.navigate(['/login']);
    };
    LogoutComponent = __decorate([
        core_1.Component({
            template: "<div class=\"container\">\n                <div class=\"alert alert-success\">\n                    <h3>Logout Successfully</h3>\n                    <h5>\n                        Click here to LogIn again <span class=\"glyphicon glyphicon-log-in\"></span>\n                        <input type=\"submit\" class=\"btn btn-primary\" value=\"Login\" (click)=\"login()\" />\n                    </h5>\n                </div>\n            </div>"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map