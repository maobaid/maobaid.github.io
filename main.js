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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-record/add-record.component.css":
/*!*****************************************************!*\
  !*** ./src/app/add-record/add-record.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: Aljazeera;\n}\n\n.special-card {\n    /* create a custom class so you \n       do not run into specificity issues \n       against bootstraps styles\n       which tends to work better than using !important \n       (future you will thank you later)*/\n    \n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n    border-radius: 10px;\n}\n\ninput {\n    width: 70%;\n    height: 30px;\n    border-radius: 5px;\n    text-align: right;\n}\n\nbutton {\n    width: 40%;\n    border-radius: 20px;\n}\n\n.bg-light-trans {\n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n}\n\n.bg-navy {\n    background-color: midnightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXJlY29yZC9hZGQtcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSTs7OzswQ0FJc0M7O0lBRXRDLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDJDQUEyQztJQUMzQyxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9hZGQtcmVjb3JkL2FkZC1yZWNvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBBbGphemVlcmE7XG59XG5cbi5zcGVjaWFsLWNhcmQge1xuICAgIC8qIGNyZWF0ZSBhIGN1c3RvbSBjbGFzcyBzbyB5b3UgXG4gICAgICAgZG8gbm90IHJ1biBpbnRvIHNwZWNpZmljaXR5IGlzc3VlcyBcbiAgICAgICBhZ2FpbnN0IGJvb3RzdHJhcHMgc3R5bGVzXG4gICAgICAgd2hpY2ggdGVuZHMgdG8gd29yayBiZXR0ZXIgdGhhbiB1c2luZyAhaW1wb3J0YW50IFxuICAgICAgIChmdXR1cmUgeW91IHdpbGwgdGhhbmsgeW91IGxhdGVyKSovXG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjQpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuYnV0dG9uIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5iZy1saWdodC10cmFucyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjQpO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5iZy1uYXZ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtaWRuaWdodGJsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/add-record/add-record.component.html":
/*!******************************************************!*\
  !*** ./src/app/add-record/add-record.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <header class=\"masthead text-center text-white d-flex\">\n    <div class=\"container my-auto\">\n        <br>\n        <br>\n        <br>\n        <br>\n      <div class=\"row justify-content-center\">\n      <div class=\"special-card col-md-4\">\n        <div class=\"text-muted col-md-12\">\n          <br>\n          <div class=\"input-group\">\n              <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" placeholder=\"الاسم الثلاثي\">\n          </div>\n          <br>\n          <div class=\"input-group\">\n              <input [(ngModel)]=\"job\" type=\"text\" class=\"form-control\" placeholder=\"الوظيفة\">\n          </div>\n          <br>\n          <div class=\"input-group\">\n              <input [(ngModel)]=\"jobPlace\" type=\"text\" class=\"form-control\" placeholder=\"مكان الوظيفة\">\n          </div>\n          <br>\n          <div class=\"input-group\">\n              <input [(ngModel)]=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"رقم الهاتف\">\n          </div>\n          <br>\n          <button (click)=\"add()\" type=\"button\" class=\"btn btn-light\">تــم</button>\n          <hr>\n        </div>\n      </div>\n      </div>\n    </div>\n  </header>\n\n\n\n  "

/***/ }),

/***/ "./src/app/add-record/add-record.component.ts":
/*!****************************************************!*\
  !*** ./src/app/add-record/add-record.component.ts ***!
  \****************************************************/
/*! exports provided: AddRecordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRecordComponent", function() { return AddRecordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddRecordComponent = /** @class */ (function () {
    function AddRecordComponent(data, toastr, router) {
        this.data = data;
        this.toastr = toastr;
        this.router = router;
    }
    AddRecordComponent.prototype.ngOnInit = function () {
    };
    AddRecordComponent.prototype.add = function () {
        if (this.phone == "" || this.phone == undefined) {
            this.phone = "n/a";
        }
        this.data.add({
            name: this.name,
            job: this.job,
            jobPlace: this.jobPlace,
            phone: this.phone
        });
        this.router.navigate(['/thank']);
    };
    AddRecordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-record',
            template: __webpack_require__(/*! ./add-record.component.html */ "./src/app/add-record/add-record.component.html"),
            styles: [__webpack_require__(/*! ./add-record.component.css */ "./src/app/add-record/add-record.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddRecordComponent);
    return AddRecordComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: Aljazeera;\n}\n\n.special-card {\n    /* create a custom class so you \n       do not run into specificity issues \n       against bootstraps styles\n       which tends to work better than using !important \n       (future you will thank you later)*/\n    \n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n    border-radius: 10px;\n}\n\ninput {\n    width: 70%;\n    height: 30px;\n    border-radius: 5px;\n    text-align: right;\n}\n\nbutton.special-button {\n    width: 40%;\n    border-radius: 20px;\n}\n\n.material-icons.color_dark { color:dimgrey; }\n\n.bg-light-trans {\n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n}\n\n.bg-navy {\n    background-color: midnightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSTs7OzswQ0FJc0M7O0lBRXRDLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRCw2QkFBNkIsY0FBYyxFQUFFOztBQUU3QztJQUNJLDJDQUEyQztJQUMzQyxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwrQkFBK0I7Q0FDbEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGZvbnQtZmFtaWx5OiBBbGphemVlcmE7XG59XG5cbi5zcGVjaWFsLWNhcmQge1xuICAgIC8qIGNyZWF0ZSBhIGN1c3RvbSBjbGFzcyBzbyB5b3UgXG4gICAgICAgZG8gbm90IHJ1biBpbnRvIHNwZWNpZmljaXR5IGlzc3VlcyBcbiAgICAgICBhZ2FpbnN0IGJvb3RzdHJhcHMgc3R5bGVzXG4gICAgICAgd2hpY2ggdGVuZHMgdG8gd29yayBiZXR0ZXIgdGhhbiB1c2luZyAhaW1wb3J0YW50IFxuICAgICAgIChmdXR1cmUgeW91IHdpbGwgdGhhbmsgeW91IGxhdGVyKSovXG4gICAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NSwgMjQ1LCAwLjQpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuYnV0dG9uLnNwZWNpYWwtYnV0dG9uIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5tYXRlcmlhbC1pY29ucy5jb2xvcl9kYXJrIHsgY29sb3I6ZGltZ3JleTsgfVxuXG4uYmctbGlnaHQtdHJhbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYmctbmF2eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <!-- \n        <div class=\"bg-light-trans container\">\n          <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul *ngIf=\"flag\" class=\"navbar-nav\">\n              <li class=\"nav-item\">\n                  <a (click)=\"logout()\" class=\"nav-link js-scroll-trigger\" href=\"/\"><img width=\"40px\" height=\"40px\" src=\"../assets/logout.png\"></a>\n              </li>\n            </ul>\n            <ul class=\"bg-white navbar-nav mr-auto\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link js-scroll-trigger text-muted\" href=\"/login\">تسجيل الدخول</a>\n              </li>\n            </ul>\n          </div>\n          <h3 class=\"w-50\">بيانات أفراد عائلة العبيد</h3>\n          <a class=\"h-75 navbar-brand js-scroll-trigger\" href=\"/\"><img width=\"60px\" height=\"60px\" src=\"../assets/alobaid.png\"></a>\n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n        </div>\n    </nav> -->\n    <nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n      <div class=\"bg-light-trans container-fluid text-center align-items-center\">\n        <div class=\"col-12 col-sm-6 col-md-4 text-sm-left\">\n          <a class=\"navbar-brand js-scroll-trigger\" href=\"\"><img src=\"../assets/alobaid.png\" height=\"70\" width=\"70\"></a>\n        </div>\n\n        <div class=\"col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center\">\n          <h3> بيانات أفراد عائلة العبيد </h3>\n        </div>\n        \n        <button class=\"special-button navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n          \n          <ul *ngIf=\"data.flag\" class=\"navbar-nav\">\n            <li class=\"nav-item\">\n                <button (click)=\"logout()\" class=\"btn btn-simple nav-link js-scroll-trigger\" href=\"/\"><mat-icon svgIcon=\"exit\"></mat-icon> تسجيل الخروج</button>\n            </li>\n          </ul>\n\n          <ul *ngIf=\"!data.flag\" class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n              <button class=\"btn btn-simple nav-link js-scroll-trigger\" (click)=\"goToLogin()\">تسجيل الدخول</button>\n            </li>\n          </ul>\n          \n        </div>\n      </div>\n    </nav>\n  <router-outlet></router-outlet>\n\n\n  <footer class=\"fdb-block footer-small\">\n    <br>\n    <div class=\"container\">\n      <div class=\"row text-center align-items-center\">\n        <div class=\"col-12 col-sm-6 col-md-4 text-sm-left\">\n          <img alt=\"image\" src=\"../assets/alobaid.png\" height=\"40\">\n        </div>\n  \n        <div class=\"col-12 col-sm-6 col-md-4 mt-4 mt-sm-0 text-center text-sm-right text-md-center\">\n          © 2019 Alobaid\n        </div>\n\n        <div class=\"col-12 col-md-4 mt-4 mt-md-0 text-center text-md-right\">\n          <a href=\"\" class=\"mx-2\"><mat-icon class=\"material-icons color_dark\" svgIcon=\"twitter\"></mat-icon></a>\n          <a href=\"https://instagram.com/alobaid_fy?igshid=slemrcmyniic\" class=\"mx-2\"><mat-icon class=\"material-icons color_dark\" svgIcon=\"instagram\"></mat-icon></a>\n        </div>\n      </div>\n    </div>\n    <br>\n  </footer>\n</body>\n"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(data, router, matIconRegistry, domSanitizer) {
        this.data = data;
        this.router = router;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.title = 'Alobaid Family';
        this.matIconRegistry.addSvgIcon('exit', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/exit.svg'));
        this.matIconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/twitter-brands.svg'));
        this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/instagram-brands.svg'));
    }
    AppComponent.prototype.ngOnChanges = function () {
        this.flag = this.data.flag;
    };
    AppComponent.prototype.logout = function () {
        this.data.logout();
        this.router.navigate(['']);
    };
    AppComponent.prototype.goToLogin = function () {
        this.router.navigate(['/login']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routs", function() { return routs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-record/add-record.component */ "./src/app/add-record/add-record.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _thank_thank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./thank/thank.component */ "./src/app/thank/thank.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var config = {
    apiKey: "AIzaSyAbolThKeoPVn1PKQn8eg-dDMjJ9164aQE",
    authDomain: "alobaidfamily-335a1.firebaseapp.com",
    databaseURL: "https://alobaidfamily-335a1.firebaseio.com",
    projectId: "alobaidfamily-335a1",
    storageBucket: "alobaidfamily-335a1.appspot.com",
    messagingSenderId: "1037261543919"
};
var routs = [
    { path: '', component: _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_12__["AddRecordComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_17__["AuthGuard"]] },
    { path: 'thank', component: _thank_thank_component__WEBPACK_IMPORTED_MODULE_16__["ThankComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _add_record_add_record_component__WEBPACK_IMPORTED_MODULE_12__["AddRecordComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _thank_thank_component__WEBPACK_IMPORTED_MODULE_16__["ThankComponent"]
            ],
            imports: [
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(config),
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(routs),
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot()
            ],
            providers: [
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuth"],
                _data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(data, router) {
        this.data = data;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log(this.data.isAuth);
        if (this.data.isAuth) {
            return true;
        }
        console.log('access denied!!');
        this.router.navigate(['/login']);
        alert("access denied!!");
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
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
    function DataService(firebaseAuth, db) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.db = db;
        this.flag = false; //for logout
        this.user = firebaseAuth.authState;
        this.db.collection('/records').snapshotChanges().subscribe(function (data) {
            _this.list = data;
        });
        this.user.subscribe(function (result) {
            if (result) {
                _this.isAuth = true;
            }
            else {
                _this.isAuth = false;
            }
        });
    }
    DataService.prototype.add = function (obj) {
        this.db.collection('/records').add(obj);
    };
    DataService.prototype.signup = function (email, password) {
        var _this = this;
        this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password).
            then(function (value) {
            console.log('Success!', value);
            _this.name = value.user.email;
        }).
            catch(function (err) {
            console.log('Something went wrong:', err.message);
        });
    };
    DataService.prototype.login = function (email, password) {
        var _this = this;
        this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(function (value) {
            console.log('Nice, it worked!', value);
            _this.isAuth = true;
            _this.name = value.user.email;
            _this.flag = true;
        }).catch(function (err) {
            _this.flag = false;
            _this.isAuth = false;
            alert("اسم المستخدم او كلمة المرور غير صحيحة");
            console.log('Something went wrong:', err.message);
        });
    };
    DataService.prototype.logout = function () {
        this.firebaseAuth.auth.signOut();
        //this.router.navigate(['/logReg']);
        this.flag = false;
    };
    DataService.prototype.del = function (id) {
        this.db.collection('/records').doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: Aljazeera;\n}\n\n.special-card {\n    /* create a custom class so you \n       do not run into specificity issues \n       against bootstraps styles\n       which tends to work better than using !important \n       (future you will thank you later)*/\n    \n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n    border-radius: 10px;\n}\n\ninput {\n    width: 70%;\n    height: 30px;\n    border-radius: 5px;\n    text-align: right;\n}\n\nbutton {\n    width: 40%;\n    border-radius: 20px;\n}\n\n.bg-light-trans {\n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n}\n\n.bg-navy {\n    background-color: midnightblue;\n}\n\ntable {\n    text-align: right;\n    border-collapse:collapse;\n    border-radius:5px;\n    background: white;\n}\n\nth {\n    border: 1px solid #ddd;\n    color: black;\n    padding: 10px;\n    background-color: beige;\n    border-radius: 5px;\n}\n\ntd {\n    border: 1px solid #ddd;\n    color: black;\n    padding: 10px;\n    border-radius: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSTs7OzswQ0FJc0M7O0lBRXRDLDJDQUEyQztJQUMzQyxXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDJDQUEyQztJQUMzQyxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSwrQkFBK0I7Q0FDbEM7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogQWxqYXplZXJhO1xufVxuXG4uc3BlY2lhbC1jYXJkIHtcbiAgICAvKiBjcmVhdGUgYSBjdXN0b20gY2xhc3Mgc28geW91IFxuICAgICAgIGRvIG5vdCBydW4gaW50byBzcGVjaWZpY2l0eSBpc3N1ZXMgXG4gICAgICAgYWdhaW5zdCBib290c3RyYXBzIHN0eWxlc1xuICAgICAgIHdoaWNoIHRlbmRzIHRvIHdvcmsgYmV0dGVyIHRoYW4gdXNpbmcgIWltcG9ydGFudCBcbiAgICAgICAoZnV0dXJlIHlvdSB3aWxsIHRoYW5rIHlvdSBsYXRlcikqL1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYmctbGlnaHQtdHJhbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYmctbmF2eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xufVxuXG50YWJsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG50aCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbnRkIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <header class=\"masthead text-white d-flex\">\n    <div class=\"container my-auto\">\n        <br>\n        <br>\n        <br>\n        <!-- <div *ngIf=\"!editFlag\" class=\"row col-sm-2\">\n          <button (click)=\"edit()\" class=\"btn btn-danger btn-just-icon btn-round\">\n              <mat-icon svgIcon=\"edit\"></mat-icon>\n          </button>\n        </div>\n        <div *ngIf=\"editFlag\" class=\"row col-sm-2\">\n            <button (click)=\"done()\" class=\"btn btn-success btn-round\">\n                حفظ\n            </button>\n          </div> -->\n      <div class=\"row justify-content-center\">\n        <div class=\"special-card col-sm-10\">\n          <br>\n          <table class=\"col-sm-12\">\n            <th> رقم الهاتف </th>\n            <th> مكان الوظيفة </th>\n            <th> الوظيفة </th>\n            <th> الاسم </th>\n            <tr *ngFor=\"let record of records\" (click)=\"delete(record.name ,record.id)\">\n              <td>{{record.phone}}</td>\n              <td>{{record.jobPlace}}</td>\n              <td>{{record.job}}</td>\n              <td>{{record.name}}</td>\n            </tr>\n          </table>\n          <br>\n        </div>\n      </div>\n    </div>\n  </header>\n  \n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = /** @class */ (function () {
    function HomeComponent(data, db, router, matIconRegistry, domSanitizer) {
        this.data = data;
        this.db = db;
        this.router = router;
        this.matIconRegistry = matIconRegistry;
        this.domSanitizer = domSanitizer;
        this.records = [];
        this.matIconRegistry.addSvgIcon('edit', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/edit.svg'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.db.collection('records').snapshotChanges().subscribe(function (data) {
            _this.records = [];
            for (var i in data) {
                var r = data[i].payload.doc.data();
                r["id"] = data[i].payload.doc.id;
                _this.records.push(r);
            }
        });
    };
    HomeComponent.prototype.logout = function () {
        this.data.logout();
        this.router.navigate(['/']);
    };
    HomeComponent.prototype.delete = function (name, id) {
        var _this = this;
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("هل تريد حذف القيد الخاص بـ " + name, {
            buttons: ["لا", "نعم"],
        }).then(function (value) {
            if (value) {
                _this.data.del(id);
                // this.records = []
                // this.ngOnInit()
            }
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: Aljazeera;\n}\n\n.special-card {\n    /* create a custom class so you \n       do not run into specificity issues \n       against bootstraps styles\n       which tends to work better than using !important \n       (future you will thank you later)*/\n    \n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n    border-radius: 10px;\n}\n\ninput {\n    width: 70%;\n    height: 30px;\n    border-radius: 5px;\n    text-align: right;\n}\n\nbutton {\n    width: 40%;\n    border-radius: 20px;\n}\n\n.bg-light-trans {\n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n}\n\n.bg-navy {\n    background-color: midnightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJOzs7OzBDQUlzQzs7SUFFdEMsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksMkNBQTJDO0lBQzNDLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLCtCQUErQjtDQUNsQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogQWxqYXplZXJhO1xufVxuXG4uc3BlY2lhbC1jYXJkIHtcbiAgICAvKiBjcmVhdGUgYSBjdXN0b20gY2xhc3Mgc28geW91IFxuICAgICAgIGRvIG5vdCBydW4gaW50byBzcGVjaWZpY2l0eSBpc3N1ZXMgXG4gICAgICAgYWdhaW5zdCBib290c3RyYXBzIHN0eWxlc1xuICAgICAgIHdoaWNoIHRlbmRzIHRvIHdvcmsgYmV0dGVyIHRoYW4gdXNpbmcgIWltcG9ydGFudCBcbiAgICAgICAoZnV0dXJlIHlvdSB3aWxsIHRoYW5rIHlvdSBsYXRlcikqL1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYmctbGlnaHQtdHJhbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYmctbmF2eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <header class=\"masthead text-center text-white d-flex\">\n    <div class=\"container my-auto\">\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n      <div class=\"row justify-content-center\">\n      <div class=\"special-card col-md-4\">\n        <div class=\"text-muted col-md-12\">\n          <br>\n          <div class=\"input-group\">\n              <input [(ngModel)]=\"name\" type=\"text\" class=\"form-control\" placeholder=\"اسم المستخدم\">\n          </div>\n          <div class=\"input-group\">\n              <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" placeholder=\"كلمة المرور\">\n          </div>\n          <br>\n          <button (click)=\"login()\" type=\"button\" class=\"btn btn-light\">تسجيل الدخول</button>\n          <hr>\n          <!-- <div *ngIf=\"wrong\">\n            <label style=\"color:brown;\">اسم المستخدم أو كلمة المرور غير صحيحة</label>\n          </div> -->\n        </div>\n      </div>\n      </div>\n    </div>\n  </header>\n  "

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function LoginComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.wrong = false;
    };
    LoginComponent.prototype.login = function () {
        this.data.logout();
        this.data.login(this.name, this.password);
        if (this.data.isAuth) {
            this.wrong = false;
            this.router.navigate(['/home']);
        }
        else {
            this.wrong = true;
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/thank/thank.component.css":
/*!*******************************************!*\
  !*** ./src/app/thank/thank.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n    font-family: Aljazeera;\n}\n\n.special-card {\n    /* create a custom class so you \n       do not run into specificity issues \n       against bootstraps styles\n       which tends to work better than using !important \n       (future you will thank you later)*/\n    \n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n    border-radius: 10px;\n}\n\ninput {\n    width: 70%;\n    height: 30px;\n    border-radius: 5px;\n    text-align: right;\n}\n\nbutton {\n    width: 40%;\n    border-radius: 20px;\n}\n\n.bg-light-trans {\n    background-color: rgba(245, 245, 245, 0.4);\n    opacity: 1;\n}\n\n.bg-navy {\n    background-color: midnightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmsvdGhhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJOzs7OzBDQUlzQzs7SUFFdEMsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCxvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxXQUFXO0lBQ1gsb0JBQW9CO0NBQ3ZCOztBQUVEO0lBQ0ksMkNBQTJDO0lBQzNDLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLCtCQUErQjtDQUNsQyIsImZpbGUiOiJzcmMvYXBwL3RoYW5rL3RoYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBmb250LWZhbWlseTogQWxqYXplZXJhO1xufVxuXG4uc3BlY2lhbC1jYXJkIHtcbiAgICAvKiBjcmVhdGUgYSBjdXN0b20gY2xhc3Mgc28geW91IFxuICAgICAgIGRvIG5vdCBydW4gaW50byBzcGVjaWZpY2l0eSBpc3N1ZXMgXG4gICAgICAgYWdhaW5zdCBib290c3RyYXBzIHN0eWxlc1xuICAgICAgIHdoaWNoIHRlbmRzIHRvIHdvcmsgYmV0dGVyIHRoYW4gdXNpbmcgIWltcG9ydGFudCBcbiAgICAgICAoZnV0dXJlIHlvdSB3aWxsIHRoYW5rIHlvdSBsYXRlcikqL1xuICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4uYmctbGlnaHQtdHJhbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAyNDUsIDI0NSwgMC40KTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uYmctbmF2eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWlkbmlnaHRibHVlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/thank/thank.component.html":
/*!********************************************!*\
  !*** ./src/app/thank/thank.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <header class=\"masthead text-center text-white d-flex\">\n      <div class=\"container my-auto\">\n          <br>\n          <br>\n          <br>\n          <br>\n        <div class=\"row justify-content-center\">\n        <div class=\"special-card col-md-4\">\n          <div class=\"text-muted col-md-12\">\n            <br>\n            <p>\n              شكرا .. تم حفظ بياناتك بنجاح\n            </p>\n          </div>\n          <button (click)=\"back()\" type=\"button\" class=\"btn btn-light\">رجوع</button>\n          <hr>\n        </div>\n        </div>\n      </div>\n    </header>\n    "

/***/ }),

/***/ "./src/app/thank/thank.component.ts":
/*!******************************************!*\
  !*** ./src/app/thank/thank.component.ts ***!
  \******************************************/
/*! exports provided: ThankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankComponent", function() { return ThankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankComponent = /** @class */ (function () {
    function ThankComponent(router) {
        this.router = router;
    }
    ThankComponent.prototype.ngOnInit = function () {
    };
    ThankComponent.prototype.back = function () {
        this.router.navigate(['']);
    };
    ThankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thank',
            template: __webpack_require__(/*! ./thank.component.html */ "./src/app/thank/thank.component.html"),
            styles: [__webpack_require__(/*! ./thank.component.css */ "./src/app/thank/thank.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThankComponent);
    return ThankComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/maarijalobaid/Desktop/alobaidFamily/obaidFamily/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map