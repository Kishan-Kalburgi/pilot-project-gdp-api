(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-user/add-user.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-user/add-user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Full-width input fields */\r\n/* input[type=text], input[type=password], input[type=date], input[type=email] {\r\n    width: 100%;\r\n    padding: 15px;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus, input[type=date]:focus, input[type=email]:focus {\r\n    background-color: #ddd;\r\n    outline: none;\r\n}\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n} */\r\n/* Set a style for all buttons */\r\n/* button {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\n\r\nbutton:hover {\r\n    opacity:1;\r\n} */\r\n/* Extra styles for the cancel button */\r\n/* .cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n} */\r\n/* Float cancel and signup buttons and add an equal width */\r\n/* .cancelbtn, .signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n} */\r\n/* Add padding to container elements */\r\n/* .container {\r\n    padding: 16px;\r\n} */\r\n/* Clear floats */\r\n/* .clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n} */\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n/* @media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n       width: 100%;\r\n    }\r\n} */\r\n/* padding for form */\r\n/* .paddingComform {\r\n    padding-left: 27em;\r\n    padding-right: 27em;\r\n    padding-top: 6em;\r\n} */"

/***/ }),

/***/ "./src/app/add-user/add-user.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-user/add-user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custRow row\">\r\n  <br>\r\n</div>\r\n\r\n<div class=\"custRow row\">\r\n  <div class=\"col-md-2 col-xs-2 col-lg-2\">\r\n    <span></span>\r\n  </div>\r\n\r\n  <div class=\"col-md-8 col-xs-8 col-lg-8\">\r\n\r\n    <form novalidate (ngSubmit)=\"onFormSubmit(signupForm)\" #signupForm=\"ngForm\" autocomplete=\"off\">\r\n\r\n      <div class=\"container\">\r\n        <div style=\"text-align:center;\">\r\n          <h1>New User Form</h1>\r\n          <p>Please fill in this form to create an User</p>\r\n        </div>\r\n        <hr>\r\n\r\n        <label for=\"firstName\">\r\n          <b>First Name</b>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" [ngModel]=\"user.firstName\" name=\"firstName\" #firstName=\"ngModel\" id=\"inputfirstName\"\r\n          placeholder=\"First Name\" required>\r\n\r\n        <!-- firstName error block -->\r\n        <div *ngIf=\"(firstName.invalid && ( firstName.touched || firstName.dirty) ) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n          <div *ngIf=\"firstName.errors?.required\">\r\n            Please enter the firstname\r\n          </div>\r\n        </div>\r\n        <label for=\"lastName\">\r\n            <b>Last Name</b>\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" [ngModel]=\"user.lastName\" name=\"lastName\" #lastName=\"ngModel\" id=\"inputlastName\"\r\n            placeholder=\"Last Name\" required>\r\n          <!-- lastName error block -->\r\n          <div *ngIf=\"(lastName.invalid && ( lastName.touched || lastName.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n            <div *ngIf=\"lastName.errors?.required\">\r\n              Please enter the lastname\r\n            </div>\r\n          </div>\r\n  \r\n          <label for=\"email\">\r\n            <b>Email</b>\r\n          </label>\r\n          <input type=\"text\" class=\"form-control\" [ngModel]=\"user.email\" name=\"email\" #email=\"ngModel\" id=\"inputEmail\" placeholder=\"Email\"\r\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>\r\n          <!-- Email error block -->\r\n          <div *ngIf=\"(email.invalid && ( email.touched || email.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n            <div *ngIf=\"email.errors?.required\">\r\n              Please enter the email id\r\n            </div>\r\n            <div *ngIf=\"email.errors?.pattern &&  email.dirty\">\r\n                Please enter the valid email id\r\n            </div>\r\n          </div>\r\n  \r\n          <!-- Select Password block -->\r\n          <label for=\"password\">\r\n            <b>Password</b>\r\n          </label>\r\n          <input type=\"password\" class=\"form-control\" [ngModel]=\"user.password\" name=\"password\" #password=\"ngModel\" id=\"inputpassword\"\r\n            placeholder=\"Password\" minlength=\"6\" required>\r\n          <!-- password error block -->\r\n          <div *ngIf=\"(password.invalid && ( password.touched || password.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n            <div *ngIf=\"password.errors?.required\">\r\n              Please enter the password\r\n            </div>\r\n            <div *ngIf=\"password.errors?.minlength && password.dirty\">\r\n                Password must have mininmum 6 characters.\r\n            </div>\r\n          </div>\r\n  \r\n          <!-- Select Gender block -->\r\n          <label for=\"gender\">\r\n            <b>Gender</b>\r\n          </label>\r\n          <select id=\"select\" class=\"form-control\" [ngModel]=\"user.gender\" name=\"gender\" required>\r\n            <option *ngFor=\"let g of gender\" [value]=\"g\"> {{g}}\r\n            </option>\r\n          </select>\r\n  \r\n          <!-- Select Date of Birth block -->\r\n          <label for=\"dob\">\r\n            <b>Date of Birth</b>\r\n          </label>\r\n          <input type=\"date\" class=\"form-control\" [ngModel]=\"user.dob\" name=\"dob\" #dob=\"ngModel\" id=\"inputdob\" placeholder=\"Select date\"\r\n            required>\r\n          <!-- dob error block -->\r\n          <div *ngIf=\"(dob.invalid && ( dob.touched || dob.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n            <div *ngIf=\"dob.errors?.required\">\r\n              Please enter the Date of Birth\r\n            </div>\r\n          </div>\r\n  \r\n          <!-- Select status block -->\r\n          <label for=\"status\">\r\n            <b>Status</b>\r\n          </label>\r\n          <select id=\"status\" class=\"form-control\" [ngModel]=\"user.status\" name=\"status\" required>\r\n            <option *ngFor=\"let s of status\" [value]=\"s\"> {{ s }}\r\n            </option>\r\n          </select>\r\n  \r\n       \r\n        <br>\r\n\r\n        <div class=\"clearfix\">\r\n          <button type=\"reset\" class=\"btn btn-danger\" routerLink=\"/users\">Cancel</button>\r\n          <!-- <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!signupForm.form.valid\"> Submit -->\r\n              <button type=\"submit\" class=\"btn btn-primary\"> Submit\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"col-md-2 col-xs-2 col-lg-2\">\r\n    <span></span>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"custRow row\">\r\n  <br>\r\n</div>"

/***/ }),

/***/ "./src/app/add-user/add-user.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-user/add-user.component.ts ***!
  \************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/user */ "./src/app/common/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = /** @class */ (function () {
    function AddUserComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.isSubmitted = false;
        this.gender = ['Male', 'Female', 'Other'];
        this.status = ['ACTIVE', 'INACTIVE'];
        this.user = new _common_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
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
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.isSubmitted = true;
        this.user = value;
        // console.log(this.user);
        // console.log('valid: ' + valid);
        if (valid) {
            this.user = value;
            console.log(this.user);
            console.log('valid: ' + valid);
            this.dataService.saveUser(this.user)
                .subscribe(function (data) {
                console.log(data);
                console.log("success");
                _this.router.navigate(['/users']);
            }, function (error) {
                console.log("Error Occured");
            });
        }
    };
    AddUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user',
            template: __webpack_require__(/*! ./add-user.component.html */ "./src/app/add-user/add-user.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./add-user.component.css */ "./src/app/add-user/add-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AddUserComponent);
    return AddUserComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'users', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'addUser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"] },
    { path: '', redirectTo: "/login", pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            declarations: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n}\r\n* {\r\n    box-sizing: border-box\r\n} */\r\n\r\n/* row */\r\n\r\n.custRow {\r\n    margin-left: 0em;\r\n    margin-right: 0em;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pilot';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/add-user/add-user.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_6__["AddUserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/dataService.ts":
/*!***************************************!*\
  !*** ./src/app/common/dataService.ts ***!
  \***************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.getUserList = function () {
        //   http call
        return this.http.get("https://pilot-project-api-gdp.herokuapp.com/api/user/getUsersList");
    };
    DataService.prototype.saveUser = function (data) {
        //   http call
        return this.http.post("https://pilot-project-api-gdp.herokuapp.com/api/user/signup", data);
    };
    DataService.prototype.signInUser = function (data) {
        //   http call
        return this.http.post("https://pilot-project-api-gdp.herokuapp.com/api/user/signin", data);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/common/user.ts":
/*!********************************!*\
  !*** ./src/app/common/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        /*Constructor initialization*/
        Object.assign(this, values);
    }
    return User;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userTable {\r\n    width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custRow row\">\r\n    <br>\r\n</div>\r\n\r\n<div class=\"custRow row\">\r\n<div  class=\"col-md-4 col-xs-4 col-lg-4\"> \r\n    <span></span>\r\n</div>\r\n<div class=\"col-md-4 col-xs-4 col-lg-4\" style=\"text-align:center;\">\r\n    <h1> Dashboard </h1>\r\n</div>\r\n</div>\r\n\r\n<div class=\"custRow row\">\r\n    <div class=\"col-md-3 col-xs-3 col-lg-3\"><span></span></div>\r\n    <div class=\"col-md-3 col-xs-3 col-lg-3\" style=\"text-align:center;\">\r\n        <button class=\"btn btn-primary\" routerLink=\"/addUser\"> Add </button>\r\n    </div>\r\n    <div class=\"col-md-3 col-xs-3 col-lg-3\" style=\"text-align:center;\">\r\n        <button class=\"btn btn-danger\" routerLink=\"/login\"> Logout </button>\r\n    </div>\r\n</div>\r\n\r\n<div>\r\n    <br>\r\n</div>\r\n\r\n<div class=\"custRow row\">\r\n    <div class=\"col-md-1 col-xs-1 col-lg-1\"><span></span></div>\r\n        <div class=\"col-md-10 col-xs-10 col-lg-10 table-responsive\">\r\n            <table class=\"userTable table-bordered\">\r\n                <tr>\r\n                    <th>First Name</th>\r\n                    <th>Last Name</th>\r\n                    <th>Email</th>\r\n                    <th>Gender</th>\r\n                    <th>Profile Image</th>\r\n                    <th>Date of Birth</th>\r\n                    <th>Status</th>\r\n                </tr>\r\n                <tr *ngFor=\"let user of users\">\r\n                    <td> {{ user.firstName }} </td>\r\n                    <td> {{ user.lastName }} </td>\r\n                    <td> {{ user.email }} </td>\r\n                    <td> {{ user.gender }} </td>\r\n                    <td> {{ user.profileImage }} </td>\r\n                    <td> {{ user.dob | date:'MM-dd-yyyy'}} </td>\r\n                    <td> {{ user.status }} </td>\r\n                </tr>\r\n            </table>\r\n        </div>\r\n    <div class=\"col-md-1 col-xs-1 col-lg-1 table-responsive\"><span></span></div>\r\n</div>  "

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dataService) {
        this.dataService = dataService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getUserList()
            .subscribe(function (data) {
            _this.users = data['data'];
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_common_dataService__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* padding for login form to make it center */\r\n.loginContainer {\r\n    padding-left: 30em;\r\n    padding-right: 29em;\r\n    padding-top: 6em;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Login form -->\r\n<div class=\"loginContainer\">\r\n  <h1>Login </h1>\r\n  <form novalidate (ngSubmit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">\r\n        <b>Email</b>\r\n      </label>\r\n      <input type=\"text\" class=\"form-control\" [ngModel]=\"user.email\" name=\"email\" #email=\"ngModel\" id=\"inputEmail\" placeholder=\"Email\"\r\n        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" required>\r\n      <!-- Email error block -->\r\n      <div *ngIf=\"(email.invalid && ( email.touched || email.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n        <div *ngIf=\"email.errors?.required\">\r\n          Please enter the email id\r\n        </div>\r\n        <div *ngIf=\"email.errors?.pattern &&  email.dirty\">\r\n            Please enter the valid email id\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Password block -->\r\n      <label for=\"password\">\r\n        <b>Password</b>\r\n      </label>\r\n      <input type=\"password\" class=\"form-control\" [ngModel]=\"user.password\" name=\"password\" #password=\"ngModel\" id=\"inputpassword\"\r\n        placeholder=\"Password\" minlength=\"6\" required>\r\n      <!-- password error block -->\r\n      <div *ngIf=\"(password.invalid && ( password.touched || password.dirty)) || isSubmitted\" class=\"col-sm-6 text-danger\">\r\n        <div *ngIf=\"password.errors?.required\">\r\n          Please enter the password\r\n        </div>\r\n        <div *ngIf=\"password.errors?.minlength && password.dirty\">\r\n          Password must have mininmum 6 characters.\r\n        </div>\r\n      </div>\r\n      </div>\r\n\r\n      <button class=\"btn btn-primary\"> Login </button>\r\n  </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/user */ "./src/app/common/user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_dataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/dataService */ "./src/app/common/dataService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.isSubmitted = false;
        this.user = new _common_user__WEBPACK_IMPORTED_MODULE_1__["User"]({
            email: ''
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        console.log(value);
        console.log(valid);
        this.isSubmitted = true;
        if (value) {
            console.log(value);
            this.dataService.signInUser(value)
                .subscribe(function (data) {
                console.log(data);
                console.log("success");
                _this.router.navigate(['/users']);
            }, function (error) {
                console.log("Error Occured");
                alert("Invalid EmailId/Password");
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ../app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _common_dataService__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Class Work\3rd sem\GDP\pilot-project-gdp-api\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map