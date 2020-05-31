webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<flash-messages></flash-messages>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__students_students_component__ = __webpack_require__("../../../../../src/app/students/students.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__student_service__ = __webpack_require__("../../../../../src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */] },
    { path: 'students/:id', component: __WEBPACK_IMPORTED_MODULE_5__students_students_component__["a" /* StudentsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__students_students_component__["a" /* StudentsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_10_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_9__student_service__["a" /* StudentService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.valregister = function (newStudent) {
        console.log('valregister');
        if (newStudent.roll_no == null || newStudent.first_name == null || newStudent.phone == null || newStudent.last_name == null) {
            return false;
        }
        return true;
    };
    ValidateService.prototype.valemail = function (email) {
        console.log('valemail');
        var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" type = \"text/css\" href=\"https://getbootstrap.com/docs/3.4/dist/css/bootstrap.min.css\">\n</head>\n<body>\n<div class=\"container\">\n  <h2>Sign In</h2>\n\n  <label>Username :{{stat}}</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.username\">\n  <label>Password :</label>\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"login.password\">\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"submit()\">Login</button>\n\n\n</div>\n</body>\n</html>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("../../../../../src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = (function () {
    function SigninComponent(httpservice, route, flashmessage) {
        this.httpservice = httpservice;
        this.route = route;
        this.flashmessage = flashmessage;
        this.login = { username: String, password: String };
        this.stat = '';
        this.login.username = this.login.password = null;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.submit = function () {
        var _this = this;
        this.httpservice.loginService(this.login).subscribe(function (res) {
            console.log(res);
            if (res.flag) {
                _this.route.navigate(['/students/' + res.user]);
            }
            else {
                _this.flashmessage.show('Invalid Credentials', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signin/signin.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
    }
    StudentService.prototype.getstudents = function () {
        return this.http.get('/api/student')
            .map(function (res) { return res.json(); });
    };
    // add student info method
    StudentService.prototype.addstudent = function (newstudent) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/student', newstudent, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // deleting student information
    StudentService.prototype.deletestudent = function (id) {
        return this.http.delete('/api/student/' + id)
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.update = function (id, upDatedContact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log('in update' + id);
        return this.http.put('/api/student/' + id, upDatedContact, headers).map(function (res) { return res.json(); });
    };
    StudentService.prototype.editstudent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('/api/student/' + id).map(function (res) { return res.json(); });
    };
    StudentService.prototype.getService = function () {
        console.log('http service started..');
        return this.http.get('/api/student/').map(function (res) { return res.json(); });
    };
    StudentService.prototype.loginService = function (login) {
        console.log("login");
        return this.http.post('/api/logindata', login).map(function (res) { return res.json(); });
    };
    StudentService.prototype.logoutService = function () {
        console.log('logout');
        return this.http.get('/api/logout').map(function (res) { return res.json(); });
    };
    return StudentService;
}());
StudentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/students/students.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/students/students.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\"> Student Information Center Welcomes {{id}}</h2>\n  <form (submit)=\"addstudent()\">\n    <div class=\"form-group\">\n      <label>Roll Number</label>\n      <input type=\"text\" [(ngModel)]=\"studentinfo.roll_no\" placeholder=\"Enter Roll Number Here\" name=\"roll_no\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" [(ngModel)]=\"studentinfo.first_name\" placeholder=\"Enter Your First Name\" name=\"first_name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" [(ngModel)]=\"studentinfo.last_name\" placeholder=\"Enter Your Last Name\" name=\"last_name\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Phone Number</label>\n      <input type=\"text\" [(ngModel)]=\"studentinfo.phone\" placeholder=\"Enter Your Phone Number\" name=\"phone\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <label>Email</label>\n      <input type=\"text\" [(ngModel)]=\"studentinfo.email\" placeholder=\"Enter Your Email Address\" name=\"email\" class=\"form-control\">\n    </div>\n    <input type=\"submit\" class=\"btn btn btn-success\" value=\"Add\">\n    <input type=\"button\" class=\"btn btn-info\" (click)=\"update()\" value=\"Update\">\n    <input type=\"button\" class=\"btn btn-info\" (click)=\"logout()\" value=\"Logout\">\n  </form>\n</div>\n\n<hr>\n<div class=\"row\">\n<div class=\"container\">\n  <div *ngFor = \"let student of students\">\n      <div class = \"col-md-2\">\n        {{student.roll_no}}\n      </div>\n    <div class = \"col-md-2\">\n      {{student.first_name}}\n    </div>\n    <div class = \"col-md-2\">\n      {{student.last_name}}\n    </div>\n    <div class = \"col-md-2\">\n      {{student.phone}}\n    </div>\n    <div class = \"col-md-2\">\n      {{student.email}}\n    </div>\n    <div class = \"col-md-2\">\n      <input type= \"button\" (click) = \"deletestudent(student._id)\" value=\"Delete\" class=\"btn btn-danger\">\n      <button class=\"btn btn-warning\" (click) = \"editstudent(student._id)\">Edit</button>\n      <br><br>\n    </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/students/students.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__student_service__ = __webpack_require__("../../../../../src/app/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentsComponent = (function () {
    function StudentsComponent(studentService, route, route2, validateservice, flashmessage) {
        this.studentService = studentService;
        this.route = route;
        this.route2 = route2;
        this.validateservice = validateservice;
        this.flashmessage = flashmessage;
        this.studentinfo = {
            _id: String, roll_no: String,
            first_name: String,
            last_name: String,
            phone: String,
            email: String,
        };
        this.refresh();
    }
    StudentsComponent.prototype.refresh = function () {
        var _this = this;
        this.route2.params.subscribe(function (param) {
            _this.id = param['id'];
        });
        this.studentService.getService().subscribe(function (res) {
            _this.students = res;
            console.log(_this.students);
            _this.studentinfo.roll_no = _this.studentinfo.first_name = _this.studentinfo.last_name = null;
            _this.studentinfo.phone = _this.studentinfo.email = _this.studentinfo._id = null;
        });
    };
    StudentsComponent.prototype.addstudent = function () {
        var _this = this;
        var newStudent = {
            roll_no: this.studentinfo.roll_no,
            first_name: this.studentinfo.first_name,
            last_name: this.studentinfo.last_name,
            phone: this.studentinfo.phone,
            email: this.studentinfo.email
        };
        if (!this.validateservice.valregister(newStudent)) {
            this.flashmessage.show('Fill all details', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateservice.valemail(newStudent.email)) {
            this.flashmessage.show('Use valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.studentService.addstudent(newStudent)
            .subscribe(function (student) {
            _this.students.push(student);
            _this.studentService.getstudents()
                .subscribe(function (students) {
                return _this.students = students;
            });
            _this.refresh();
        });
    };
    StudentsComponent.prototype.update = function () {
        var _this = this;
        console.log(this.studentinfo._id);
        this.studentService.update(this.studentinfo._id, this.studentinfo).subscribe(function (res) {
            console.log(res);
            _this.flashmessage.show('Update success', { cssClass: 'alert-success', timeout: 3000 });
            _this.refresh();
        });
    };
    StudentsComponent.prototype.deletestudent = function (id) {
        var _this = this;
        var students = this.students;
        this.studentService.deletestudent(id)
            .subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < students.length; i++) {
                    if (students[i]._id === id) {
                        students.splice(i, 1);
                        _this.flashmessage.show('Delete success', { cssClass: 'alert-success', timeout: 3000 });
                    }
                }
            }
        });
    };
    StudentsComponent.prototype.editstudent = function (id) {
        var _this = this;
        console.log(id);
        this.studentService.editstudent(id).subscribe(function (res) {
            console.log('data to be edited is' + res);
            _this.studentinfo = res;
        });
    };
    StudentsComponent.prototype.getstudents = function () {
        var _this = this;
        this.studentService.getstudents()
            .subscribe(function (students) {
            return _this.students = students;
        });
    };
    StudentsComponent.prototype.logout = function () {
        var _this = this;
        this.studentService.logoutService().subscribe(function (res) {
            console.log('data to be edited is' + res);
            _this.flashmessage.show('Loged out successfully', { cssClass: 'alert-success', timeout: 3000 });
            _this.route.navigate(['']);
        });
    };
    StudentsComponent.prototype.ngOnInit = function () {
        this.getstudents();
    };
    return StudentsComponent;
}());
StudentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-students',
        template: __webpack_require__("../../../../../src/app/students/students.component.html"),
        styles: [__webpack_require__("../../../../../src/app/students/students.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], StudentsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=students.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map