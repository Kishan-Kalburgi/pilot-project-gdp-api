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
var user_1 = require("../common/user");
var router_1 = require("@angular/router");
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router) {
        this.router = router;
        this.gender = ['Male', 'Female', 'Others'];
        this.status = ['Active', 'Inactive'];
        this.user = new user_1.User({
            firstName: '',
            lastName: '',
            email: '',
            gender: this.gender[0],
            profileImage: '',
            dob: '',
            status: this.status[0]
        });
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.stringify = function (item) {
        return JSON.stringify(item);
    };
    AddUserComponent.prototype.onFormSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.user = value;
            console.log(this.user);
            console.log('valid: ' + valid);
            this.router.navigate(['/users']);
        }
    };
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['../app.component.css', './add-user.component.css']
            // styleUrls: ['./add-user.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map