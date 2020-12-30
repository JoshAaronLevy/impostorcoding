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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_pricingpage_pricingpage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pricingpage/pricingpage.component */ "./src/app/pages/pricingpage/pricingpage.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/post/post.component */ "./src/app/pages/post/post.component.ts");
/* harmony import */ var _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/categories/categories.component */ "./src/app/pages/categories/categories.component.ts");
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/category-list/category-list.component */ "./src/app/components/category-list/category-list.component.ts");











var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: ':slug', component: _pages_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"] },
    { path: 'categories', component: _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_7__["CategoriesComponent"] },
    { path: 'category/:slug', component: _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_8__["CategoryListComponent"] },
    { path: 'signup', component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'pricing-page', component: _pages_pricingpage_pricingpage_component__WEBPACK_IMPORTED_MODULE_4__["PricingpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: false,
                    scrollPositionRestoration: 'enabled',
                    anchorScrolling: 'enabled',
                    scrollOffset: [0, 64]
                })
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        useHash: false,
                        scrollPositionRestoration: 'enabled',
                        anchorScrolling: 'enabled',
                        scrollOffset: [0, 64]
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");

// import Headroom from 'headroom.js';





var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        // const headroom = new Headroom(document.querySelector('#navbar-main'), {
        //   offset: 300,
        //   tolerance: {
        //     up: 30,
        //     down: 30
        //   },
        // });
        // headroom.init();
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        } }, directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".mt-30[_ngcontent-%COMP%] {\n  margin-top: 30px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3NobGV2eS9EZXNrdG9wL2ltcG9zdGVyY29kaW5nL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuIiwiLm10LTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/__ivy_ngcc__/fesm5/ngx-chips.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/timepicker/fesm5/ngx-bootstrap-timepicker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/signup/signup.component */ "./src/app/pages/signup/signup.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_pricingpage_pricingpage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/pricingpage/pricingpage.component */ "./src/app/pages/pricingpage/pricingpage.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _components_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/home-hero/home-hero.component */ "./src/app/components/home-hero/home-hero.component.ts");
/* harmony import */ var _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/post-list/post-list.component */ "./src/app/components/post-list/post-list.component.ts");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/highlight.service */ "./src/app/services/highlight.service.ts");
/* harmony import */ var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/post/post.component */ "./src/app/pages/post/post.component.ts");
/* harmony import */ var _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/categories/categories.component */ "./src/app/pages/categories/categories.component.ts");
/* harmony import */ var _components_categories_hero_categories_hero_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/categories-hero/categories-hero.component */ "./src/app/components/categories-hero/categories-hero.component.ts");
/* harmony import */ var _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/category-list/category-list.component */ "./src/app/components/category-list/category-list.component.ts");
/* harmony import */ var _components_post_hero_post_hero_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/post-hero/post-hero.component */ "./src/app/components/post-hero/post-hero.component.ts");

 // this is needed!














































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' },
            _services_highlight_service__WEBPACK_IMPORTED_MODULE_29__["HighlightService"]
        ], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_17__["TimepickerModule"].forRoot(),
                ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                ngx_chips__WEBPACK_IMPORTED_MODULE_0__["TagInputModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot()
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
        _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"],
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
        _index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
        _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
        _pages_pricingpage_pricingpage_component__WEBPACK_IMPORTED_MODULE_23__["PricingpageComponent"],
        _components_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_27__["HomeHeroComponent"],
        _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_28__["PostListComponent"],
        _pages_post_post_component__WEBPACK_IMPORTED_MODULE_30__["PostComponent"],
        _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_31__["CategoriesComponent"],
        _components_categories_hero_categories_hero_component__WEBPACK_IMPORTED_MODULE_32__["CategoriesHeroComponent"],
        _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_33__["CategoryListComponent"],
        _components_post_hero_post_hero_component__WEBPACK_IMPORTED_MODULE_34__["PostHeroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"], ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_17__["TimepickerModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_0__["TagInputModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                    _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_25__["NavbarComponent"],
                    _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
                    _index_index_component__WEBPACK_IMPORTED_MODULE_20__["IndexComponent"],
                    _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_21__["SignupComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                    _pages_pricingpage_pricingpage_component__WEBPACK_IMPORTED_MODULE_23__["PricingpageComponent"],
                    _components_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_27__["HomeHeroComponent"],
                    _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_28__["PostListComponent"],
                    _pages_post_post_component__WEBPACK_IMPORTED_MODULE_30__["PostComponent"],
                    _pages_categories_categories_component__WEBPACK_IMPORTED_MODULE_31__["CategoriesComponent"],
                    _components_categories_hero_categories_hero_component__WEBPACK_IMPORTED_MODULE_32__["CategoriesHeroComponent"],
                    _components_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_33__["CategoryListComponent"],
                    _components_post_hero_post_hero_component__WEBPACK_IMPORTED_MODULE_34__["PostHeroComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_6__["BsDropdownModule"].forRoot(),
                    ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_7__["ProgressbarModule"].forRoot(),
                    ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_8__["TooltipModule"].forRoot(),
                    ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_17__["TimepickerModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_16__["PopoverModule"].forRoot(),
                    ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                    ngx_chips__WEBPACK_IMPORTED_MODULE_0__["TagInputModule"],
                    ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_10__["TabsModule"].forRoot(),
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationModule"].forRoot(),
                    ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
                    ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_13__["BsDatepickerModule"].forRoot(),
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_14__["CarouselModule"].forRoot(),
                    ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_15__["ModalModule"].forRoot()
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_5__["APP_BASE_HREF"], useValue: '/' },
                    _services_highlight_service__WEBPACK_IMPORTED_MODULE_29__["HighlightService"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/categories-hero/categories-hero.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/categories-hero/categories-hero.component.ts ***!
  \*************************************************************************/
/*! exports provided: CategoriesHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesHeroComponent", function() { return CategoriesHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CategoriesHeroComponent = /** @class */ (function () {
    function CategoriesHeroComponent() {
        this.isCollapsed = true;
    }
    CategoriesHeroComponent.prototype.ngOnInit = function () { };
    CategoriesHeroComponent.prototype.ngOnDestroy = function () { };
    CategoriesHeroComponent.ɵfac = function CategoriesHeroComponent_Factory(t) { return new (t || CategoriesHeroComponent)(); };
    CategoriesHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesHeroComponent, selectors: [["app-categories-hero"]], decls: 7, vars: 0, consts: [[1, "page-header"], [1, "page-header-image", 2, "background-image", "url('assets/img/ill/p8.svg')"], [1, "container", "ph-200"], [1, "row"], [1, "col-md-6", "mx-auto", "text-center", "transparent-background"], [1, "display-2", "home-title"]], template: function CategoriesHeroComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return CategoriesHeroComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories-hero',
                templateUrl: 'categories-hero.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/category-list/category-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/category-list/category-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/butterCMS.service */ "./src/app/services/butterCMS.service.ts");





var CategoryListComponent = /** @class */ (function () {
    function CategoryListComponent(router) {
        this.router = router;
        this.loadError = false;
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        this.loading = false;
        console.log("Hello!");
        // this.progressLoaderOne();
        // this.getCategories();
    };
    CategoryListComponent.prototype.progressLoaderOne = function () {
        var _this = this;
        var stepOne = setTimeout(function () {
            _this.step1 = false;
            _this.step2 = true;
            _this.getCategories();
            return stepOne;
        }, 150);
    };
    CategoryListComponent.prototype.progressLoaderTwo = function () {
        var _this = this;
        var stepTwo = setTimeout(function () {
            _this.step3 = false;
            _this.step4 = true;
            _this.progressLoaderThree();
            return stepTwo;
        }, 150);
    };
    CategoryListComponent.prototype.progressLoaderThree = function () {
        var _this = this;
        var stepThree = setTimeout(function () {
            _this.displayData();
            return stepThree;
        }, 150);
    };
    CategoryListComponent.prototype.displayData = function () {
        if (this.categories) {
            this.step4 = false;
            this.loading = false;
            this.showData = true;
        }
        else {
            this.loading = false;
            this.loadError = true;
        }
    };
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_2__["butterService"].category.list()
            .then(function (res) {
            console.log(res);
            _this.categories = res.data.data;
        });
    };
    CategoryListComponent.prototype.selectCategory = function (category) {
        this.category = category.slug;
        localStorage.setItem('category', this.category);
        this.router.navigate(['/category/', this.category]);
    };
    CategoryListComponent.prototype.ngOnDestroy = function () { };
    CategoryListComponent.ɵfac = function CategoryListComponent_Factory(t) { return new (t || CategoryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    CategoryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryListComponent, selectors: [["app-category-list"]], decls: 1, vars: 0, consts: [[1, "container", "text-center"]], template: function CategoryListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        } }, encapsulation: 2 });
    return CategoryListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-list',
                templateUrl: 'category-list.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/home-hero/home-hero.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-hero/home-hero.component.ts ***!
  \*************************************************************/
/*! exports provided: HomeHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeHeroComponent", function() { return HomeHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HomeHeroComponent = /** @class */ (function () {
    function HomeHeroComponent() {
        this.isCollapsed = true;
    }
    HomeHeroComponent.prototype.ngOnInit = function () { };
    HomeHeroComponent.prototype.ngOnDestroy = function () { };
    HomeHeroComponent.ɵfac = function HomeHeroComponent_Factory(t) { return new (t || HomeHeroComponent)(); };
    HomeHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeHeroComponent, selectors: [["app-home-hero"]], decls: 11, vars: 0, consts: [[1, "page-header"], [1, "page-header-image", 2, "background-image", "url('assets/img/ill/p8.svg')"], [1, "container", "ph-200"], [1, "row"], [1, "col-md-6", "mx-auto", "text-center", "transparent-background"], [1, "display-2", "home-title"], [1, "row", "tagline"], [1, "floating-box", "bg-default", "text-center"], [1, "lead", "text-white", "p-5", "text-center"]], template: function HomeHeroComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Imposter Coding");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Embrace Your Inner Imposter Syndrome ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return HomeHeroComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-hero',
                templateUrl: 'home-hero.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/post-hero/post-hero.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-hero/post-hero.component.ts ***!
  \*************************************************************/
/*! exports provided: PostHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostHeroComponent", function() { return PostHeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PostHeroComponent = /** @class */ (function () {
    function PostHeroComponent() {
        this.isCollapsed = true;
    }
    PostHeroComponent.prototype.ngOnInit = function () { };
    PostHeroComponent.prototype.ngOnDestroy = function () { };
    PostHeroComponent.ɵfac = function PostHeroComponent_Factory(t) { return new (t || PostHeroComponent)(); };
    PostHeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostHeroComponent, selectors: [["app-post-hero"]], decls: 7, vars: 0, consts: [[1, "page-header"], [1, "page-header-image", 2, "background-image", "url('assets/img/ill/p8.svg')"], [1, "container", "ph-200"], [1, "row"], [1, "col-md-6", "mx-auto", "text-center", "transparent-background"], [1, "display-2", "home-title"]], template: function PostHeroComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Categories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return PostHeroComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostHeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-hero',
                templateUrl: 'post-hero.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/post-list/post-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/post-list/post-list.component.ts ***!
  \*************************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/butterCMS.service */ "./src/app/services/butterCMS.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");






function PostListComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    var _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostListComponent_li_7_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r46); var post_r44 = ctx.$implicit; var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r45.viewPost(post_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var post_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", post_r44.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r44.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r44.categories[0].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("routerLink", post_r44.slug);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r44.title);
} }
function PostListComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    var _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PostListComponent_button_8_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r48); var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r47.loadMore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Show more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
var PostListComponent = /** @class */ (function () {
    function PostListComponent(router) {
        this.router = router;
        this.page = 1;
        this.pageSize = 10;
        this.currentLength = 10;
    }
    PostListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_0__["butterService"].post.list({
            page: this.page,
            page_size: this.pageSize
        }).then(function (res) {
            _this.posts = res.data.data;
            if (_this.posts.length < 10) {
                _this.moreAvailable = false;
            }
            else {
                _this.moreAvailable = true;
            }
        });
    };
    PostListComponent.prototype.loadMore = function () {
        var _this = this;
        this.page = this.page + 1;
        _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_0__["butterService"].post.list({
            page: this.page,
            page_size: this.pageSize
        }).then(function (res) {
            _this.newPosts = res.data.data;
            if (_this.newPosts.length < 10) {
                _this.moreAvailable = false;
            }
            else {
                _this.moreAvailable = true;
            }
            for (var i = 0; i < _this.newPosts.length; i++) {
                _this.posts.push(_this.newPosts[i]);
            }
        });
    };
    PostListComponent.prototype.viewPost = function (post) {
        this.router.navigate(["/" + post.slug]);
    };
    PostListComponent.prototype.ngOnDestroy = function () { };
    PostListComponent.ɵfac = function PostListComponent_Factory(t) { return new (t || PostListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
    PostListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PostListComponent, selectors: [["app-post-list"]], decls: 9, vars: 2, consts: [[1, "container", "text-center"], [1, "row", "mb-5"], [1, "col-md-8", "mx-auto"], [1, "display-3", "mt-30"], [1, "row", "align-items-center"], [1, "col-md-12", "blog-list"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], ["class", "btn btn-icon btn-primary mt-4 mb-30", 3, "click", 4, "ngIf"], [1, "col-md-6"], ["data-animation", "zooming", 1, "card", "card-blog", "card-background", "blog-list-item", 3, "click"], [3, "routerLink"], [1, "full-background"], [3, "src"], [1, "card-body"], [1, "content-bottom"], [1, "card-category", "text-white", "opacity-8"], [1, "card-title"], [1, "btn", "btn-icon", "btn-primary", "mt-4", "mb-30", 3, "click"], [1, "btn-inner--text"], [1, "btn-inner--icon"], [1, "ni", "ni-bold-right"]], template: function PostListComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Latest Posts");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PostListComponent_li_7_Template, 12, 5, "li", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, PostListComponent_button_8_Template, 5, 0, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posts);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.moreAvailable);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], encapsulation: 2 });
    return PostListComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PostListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-post-list',
                templateUrl: 'post-list.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.min.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm5/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm5/ngx-bootstrap-carousel.js");



















function IndexComponent_div_502_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1058);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Submenu action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Submenu action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_502_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1054);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1056);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1057);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Submenu ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IndexComponent_div_502_div_8_Template, 5, 0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_511_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1058);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1059);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 991);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 809);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_520_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1061);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1059);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " My profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 991);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Activity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 413);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Support ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 809);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_756_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1062);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_793_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1063);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_831_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1064);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_860_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1065);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_893_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1066);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_ng_template_1007_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1067);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home ");
} }
function IndexComponent_ng_template_1015_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1068);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile ");
} }
function IndexComponent_ng_template_1021_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1069);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Messages ");
} }
function IndexComponent_ng_template_1118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1067);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Home ");
} }
function IndexComponent_ng_template_1125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1068);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Profile ");
} }
function IndexComponent_ng_template_1133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1069);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Messages ");
} }
function IndexComponent_ng_template_1144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1070);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Home ");
} }
function IndexComponent_ng_template_1151_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Settings ");
} }
function IndexComponent_ng_template_1164_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 765);
} }
function IndexComponent_ng_template_1171_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 479);
} }
function IndexComponent_ng_template_1180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 765);
} }
function IndexComponent_ng_template_1187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 479);
} }
function IndexComponent_ng_template_1194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 1071);
} }
function IndexComponent_div_1587_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1072);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Australia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Belgium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Canada ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " France ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Italy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Portugal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Spain ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " United States ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_1594_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1072);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Deutch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Espa\u00F1ol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Fran\u00E7ais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Italiano ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_1822_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1073);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Deutch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1074);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " English ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Espa\u00F1ol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Fran\u00E7ais ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Italiano ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_2414_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1075);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1076);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1076);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Another action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1076);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1077);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Remove Data ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_2857_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1075);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1059);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Mute conversation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 1078);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Block ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 1079);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Clear chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 1060);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 657);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Delete chat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_3108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1080);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function IndexComponent_div_3253_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1080);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Settings ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1055);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Log out ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a0) { return { "focused": a0 }; };
var IndexComponent = /** @class */ (function () {
    function IndexComponent(router) {
        var _this = this;
        this.router = router;
        this.page = 2;
        this.page0 = 2;
        this.page6 = 2;
        this.page5 = 3;
        this.page1 = 1;
        this.page2 = 2;
        this.page3 = 2;
        this.page4 = 1;
        this.isDropup = true;
        this.items = ['Pizza', 'Pasta', 'Parmesan'];
        this.isCollapsed = true;
        this.autoclose = false;
        router.events.subscribe(function (val) {
            _this.autoclose = true;
            _this.isCollapsed = true;
        });
    }
    IndexComponent.prototype.onWindowScroll = function (e) {
        var buttonScrollTop = document.getElementsByClassName('back-to-top')[0];
        if (window.pageYOffset > 100 && buttonScrollTop) {
            buttonScrollTop.classList.add('show');
        }
        else {
            buttonScrollTop.classList.remove('show');
        }
    };
    IndexComponent.prototype.scrollTop = function (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    };
    IndexComponent.prototype.ngOnInit = function () {
        // Datepicker
        flatpickr__WEBPACK_IMPORTED_MODULE_4___default()('.flatpickr', {});
        // Datepicker - range
        flatpickr__WEBPACK_IMPORTED_MODULE_4___default()('.range', {
            mode: 'range'
        });
        // DateTimePicker
        flatpickr__WEBPACK_IMPORTED_MODULE_4___default()('.datetimepicker', {
            enableTime: true,
            dateFormat: 'Y-m-d H:i',
        });
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
        var navbar = document.getElementById('navbar-main');
        navbar.classList.add('navbar-transparent');
        var choicesSingle = document.getElementById('choices-single-default');
        if (choicesSingle) {
            new choices_js__WEBPACK_IMPORTED_MODULE_2___default.a(choicesSingle, {
                searchEnabled: false,
            });
        }
        var choicesMultiple = document.getElementById('choices-multiple-default');
        if (choicesMultiple) {
            new choices_js__WEBPACK_IMPORTED_MODULE_2___default.a('#choices-multiple-default', {
                searchEnabled: true,
                delimiter: ',',
                editItems: true,
                removeItemButton: true,
            });
        }
        var badges = document.getElementById('badges');
        if (badges) {
            // Activate Tags
            new choices_js__WEBPACK_IMPORTED_MODULE_2___default.a(badges, {
                delimiter: ',',
                maxItemCount: 5,
                editItems: true,
                removeItems: true,
                removeItemButton: true,
            });
        }
        var slider = document.getElementById('sliderRegular');
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider, {
            start: 40,
            connect: false,
            range: {
                min: 0,
                max: 100
            }
        });
        var slider2 = document.getElementById('sliderDouble');
        nouislider__WEBPACK_IMPORTED_MODULE_1___default.a.create(slider2, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    IndexComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
        var navbar = document.getElementById('navbar-main');
        navbar.classList.remove('navbar-transparent');
    };
    IndexComponent.ɵfac = function IndexComponent_Factory(t) { return new (t || IndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
    IndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IndexComponent, selectors: [["app-index"]], hostBindings: function IndexComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function IndexComponent_scroll_HostBindingHandler($event) { return ctx.onWindowScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, decls: 3946, vars: 151, consts: [[1, "wrapper"], ["target", ""], [1, "section", "section-hero", "section-shaped"], [1, "page-header"], ["alt", "", "src", "assets/img/ill/indexred_bg.svg", 1, "bg-image"], [1, "container", "shape-container", "d-flex", "align-items-center", "py-lg"], [1, "col", "px-0"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-lg-6", "text-center"], ["src", "assets/img/brand/red.png", 1, "img-fluid", 2, "width", "200px"], [1, "badge", "badge-danger"], [1, "lead"], [1, "display-3"], [1, "btn-wrapper", "mt-5"], ["href", "https://www.creative-tim.com/product/imposter-coding", 1, "btn", "btn-danger", "btn-icon", "mb-3", "mb-sm-0"], [1, "btn-inner--icon"], [1, "fas", "fa-shopping-cart"], [1, "btn-inner--text"], ["href", "https://demos.creative-tim.com/imposter-coding/#/documentation/overview", 1, "btn", "btn-white", "btn-icon", "mb-3", "mb-sm-0"], [1, "fas", "fa-file"], [1, "mt-5"], [1, "font-weight-bold", "mb-0", "mr-2"], ["src", "assets/img/brand/creativetim-black-slim.png", 2, "height", "28px"], ["id", "section-components", 1, "section", "section-components", "pb-0"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12"], [1, "mb-5"], [1, "h4", "text-success", "font-weight-bold", "mb-4"], [1, "mb-3", "mt-5"], [1, "text-uppercase", "font-weight-bold"], ["type", "button", 1, "btn", "btn-primary", "mr-1"], ["type", "button", 1, "btn", "btn-info", "mr-1"], ["type", "button", 1, "btn", "btn-success", "mr-1"], ["type", "button", 1, "btn", "btn-danger", "mr-1"], ["type", "button", 1, "btn", "btn-warning", "mr-1"], ["type", "button", 1, "btn", "btn-default", "mr-1"], ["type", "button", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-info", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-success", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-danger", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-warning", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-default", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-secondary", "btn-round"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-1"], ["type", "button", 1, "btn", "btn-outline-info", "mr-1"], ["type", "button", 1, "btn", "btn-outline-success", "mr-1"], ["type", "button", 1, "btn", "btn-outline-danger", "mr-1"], ["type", "button", 1, "btn", "btn-outline-warning", "mr-1"], ["type", "button", 1, "btn", "btn-outline-default", "mr-1"], ["type", "button", 1, "btn", "btn-outline-secondary"], ["type", "button", 1, "btn", "btn-outline-primary", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-info", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-success", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-default", "btn-round", "mr-1"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-round"], ["type", "button", 1, "btn", "btn-link", "text-primary", "mr-1"], ["type", "button", 1, "btn", "btn-link", "text-info", "mr-1"], ["type", "button", 1, "btn", "btn-link", "text-success", "mr-1"], ["type", "button", 1, "btn", "btn-link", "text-danger", "mr-1"], ["type", "button", 1, "btn", "btn-link", "text-warning", "mr-1"], ["type", "button", 1, "btn", "btn-link", "text-default", "mr-1"], ["type", "button", 1, "btn", "btn-link", "text-secondary"], ["type", "button", 1, "btn", "btn-gradient-primary", "mr-1"], ["type", "button", 1, "btn", "btn-gradient-info", "mr-1"], ["type", "button", 1, "btn", "btn-gradient-success", "mr-1"], ["type", "button", 1, "btn", "btn-gradient-danger", "mr-1"], ["type", "button", 1, "btn", "btn-gradient-warning", "mr-1"], ["type", "button", 1, "btn", "btn-gradient-default", "mr-1"], ["type", "button", 1, "btn", "btn-gradient-secondary"], ["type", "button", 1, "btn", "btn-icon", "btn-3", "btn-primary", "mr-1"], [1, "ni", "ni-bag-17"], ["type", "button", 1, "btn", "btn-icon", "btn-primary"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "mr-1"], ["type", "button", 1, "btn", "btn-1", "btn-primary", "mr-1"], ["type", "button", 1, "btn", "btn-lg", "btn-primary"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-icon-only", "rounded-circle"], ["type", "button", 1, "btn", "btn-primary", "btn-icon-only", "rounded-circle"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "btn-icon-only", "rounded-circle"], [1, "row"], [1, "col-md-6"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "active"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "disabled"], ["type", "button", 1, "btn", "btn-primary", "btn-block"], ["type", "button", 1, "btn", "btn-info", "btn-block"], ["name", "button", "type", "button", 1, "btn", "btn-primary", "btn-icon-only", "back-to-top", 3, "click"], [1, "ni", "ni-bold-up"], ["type", "button", 1, "btn-icon", "my-2", "btn", "btn-facebook", "mr-1"], [1, "btn-inner--icon", "mr-1"], [1, "fab", "fa-facebook"], ["type", "button", 1, "btn-icon", "btn", "btn-twitter", "mr-1"], [1, "fab", "fa-twitter"], ["type", "button", 1, "btn-instagram", "btn-icon", "btn", "mr-1"], [1, "fab", "fa-instagram"], ["type", "button", 1, "btn-github", "btn-icon", "btn", "mr-1"], [1, "fab", "fa-github"], ["type", "button", 1, "btn-icon", "btn", "btn-pinterest", "mr-1"], [1, "fab", "fa-pinterest"], ["type", "button", 1, "btn-icon", "btn", "btn-youtube"], [1, "fab", "fa-youtube"], ["type", "button", 1, "btn", "btn-vimeo", "btn-icon", "mr-1"], [1, "fab", "fa-vimeo-v"], ["type", "button", 1, "btn-slack", "btn", "btn-icon", "mr-1"], [1, "fab", "fa-slack"], ["type", "button", 1, "btn-icon", "btn", "btn-dribbble", "mr-1"], [1, "fab", "fa-dribbble"], ["type", "button", 1, "btn-icon", "btn", "btn-reddit", "mr-1"], [1, "fab", "fa-reddit"], ["type", "button", 1, "btn-icon", "btn", "btn-tumblr", "mr-1"], [1, "fab", "fa-tumblr"], ["type", "button", 1, "btn-icon", "btn", "btn-linkedin"], [1, "fab", "fa-linkedin"], ["type", "button", 1, "btn-icon-only", "btn", "btn-facebook", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-twitter", "mr-1"], ["type", "button", 1, "btn-instagram", "btn", "btn-icon-only", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-pinterest", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-youtube", "mr-1"], ["type", "button", 1, "btn", "btn-vimeo", "btn-icon-only", "mr-1"], ["type", "button", 1, "btn", "btn-slack", "btn-icon-only", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-dribbble"], ["type", "button", 1, "btn-icon-only", "rounded-circle", "btn", "btn-facebook", "mr-1"], ["type", "button", 1, "btn-icon-only", "rounded-circle", "btn", "btn-twitter", "mr-1"], ["type", "button", 1, "btn-instagram", "btn-icon-only", "rounded-circle", "btn", "mr-1"], ["type", "button", 1, "btn-icon-only", "rounded-circle", "btn", "btn-pinterest", "mr-1"], ["type", "button", 1, "btn-icon-only", "rounded-circle", "btn", "btn-youtube", "mr-1"], ["type", "button", 1, "btn", "btn-vimeo", "btn-icon-only", "rounded-circle", "mr-1"], ["type", "button", 1, "btn", "btn-slack", "btn-icon-only", "rounded-circle", "mr-1"], ["type", "button", 1, "btn-icon-only", "rounded-circle", "btn", "btn-dribbble"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-facebook", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-twitter", "mr-1"], ["type", "button", 1, "btn-gradient-instagram", "btn", "btn-icon-only", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-pinterest", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-youtube", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-vimeo", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-slack", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn", "btn-gradient-dribbble"], ["type", "button", 1, "btn-icon-only", "btn-simple", "btn", "btn-facebook", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn-simple", "btn", "btn-twitter", "mr-1"], ["type", "button", 1, "btn-tumblr", "btn-icon-only", "btn-simple", "btn", "mr-1"], ["type", "button", 1, "btn-instagram", "btn-icon-only", "btn-simple", "btn", "btn-default", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn-simple", "btn", "btn-youtube", "mr-1"], ["type", "button", 1, "btn-vimeo", "btn-icon-only", "btn", "btn-simple", "mr-1"], ["type", "button", 1, "btn-reddit", "btn-icon-only", "btn-simple", "btn", "mr-1"], ["type", "button", 1, "btn-icon-only", "btn-simple", "btn", "btn-dribbble"], [1, "section", "pb-0", "section-components"], [1, "container", "mb-5"], [1, "mb-3"], [1, "col-lg-4", "col-sm-6"], [1, "form-group", 3, "ngClass"], ["placeholder", "Regular", "type", "text", 1, "form-control", 3, "blur", "focus"], [1, "input-group", "mb-4"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-zoom-split-in"], ["placeholder", "Search", "type", "text", 1, "form-control", 3, "blur", "focus"], ["disabled", "disabled", "placeholder", "Regular", "type", "text", 1, "form-control", 3, "blur", "focus"], ["placeholder", "Birthday", "type", "text", 1, "form-control", 3, "blur", "focus"], [1, "input-group-append"], [1, "form-group", "has-success"], ["placeholder", "Success", "type", "text", 1, "form-control", "is-valid"], [1, "form-group", "has-danger"], ["placeholder", "Error Input", "type", "email", 1, "form-control", "is-invalid"], [1, "py-5", "bg-secondary"], ["placeholder", "Regular", "type", "text", 1, "form-control", "form-control-alternative", 3, "blur", "focus"], [1, "input-group", "input-group-alternative", "mb-4"], ["disabled", "disabled", "placeholder", "Regular", "type", "text", 1, "form-control", "form-control-alternative", 3, "blur", "focus"], [1, "form-group", "has-success", 3, "ngClass"], ["placeholder", "Success", "type", "text", 1, "form-control", "form-control-alternative", "is-valid", 3, "blur", "focus"], [1, "form-group", "has-danger", 3, "ngClass"], ["placeholder", "Error Input", "type", "email", 1, "form-control", "form-control-alternative", "is-invalid", 3, "blur", "focus"], [1, "section", "section-select"], ["for", "choices-single-default", 1, "text-uppercase", "font-weight-bold"], ["data-trigger", "", "id", "choices-single-default", "name", "choices-single-default", 1, "form-control"], ["disabled", "disabled"], ["value", "2"], ["value", "3"], ["value", "4"], ["for", "choices-multiple-default", 1, "text-uppercase", "font-weight-bold"], ["data-trigger", "", "id", "choices-multiple-default", "multiple", "multiple", "name", "choices-multiple-default", 1, "form-control"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], [1, "col-lg-6", "col-md-12", "mt-md-5", "mt-lg-0"], [1, "col-md-4"], ["dropdown", "", 1, "dropdown", 3, "autoClose", "clickOutside"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "id", "multiDropdownMenu", "type", "button", 1, "btn", "btn-primary", "btn-block", "mr-5", 3, "click"], [1, "ripple-container"], ["aria-labelledby", "multiDropdownMenu", "class", "dropdown-menu", 4, "dropdownMenu"], ["dropdown", "", 1, "dropdown"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "role", "button", 1, "btn", "btn-primary"], ["class", "dropdown-menu", 4, "dropdownMenu"], ["dropdown", "", 1, "dropup", 3, "dropup"], ["aria-controls", "dropdown-dropup", "dropdownToggle", "", "href", "javascript:;", "role", "button", "id", "button-dropup", 1, "btn", "btn-primary"], ["class", "dropdown-menu dropdown-menu-right", "role", "menu", "aria-labelledby", "button-dropup", 4, "dropdownMenu"], ["id", "exampleFormControlTextarea1", "placeholder", "You can write your text here...", "rows", "3", "spellcheck", "false", 1, "form-control", 3, "blur", "focus"], [1, "form-group"], ["id", "badges", "placeholder", "+ Add", "type", "text", "value", "Amsterdam,Sydney, Rome, Singapore"], [1, "h4", "text-success", "font-weight-bold", "mb-2", "mt-5"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], ["disabled", "disabled", "type", "button", 1, "btn", "btn-primary", "btn-sm", "ml-2", "mb-2", "mr-1"], ["aria-hidden", "true", "role", "status", 1, "spinner-border", "spinner-border-sm"], ["disabled", "disabled", "type", "button", 1, "btn", "btn-primary", "btn-sm", "mb-2", "mr-1"], ["role", "status", 1, "spinner-border", "text-primary"], ["role", "status", 1, "spinner-border", "text-secondary"], ["role", "status", 1, "spinner-border", "text-success"], ["role", "status", 1, "spinner-border", "text-danger"], ["role", "status", 1, "spinner-border", "text-warning"], ["role", "status", 1, "spinner-border", "text-info"], ["role", "status", 1, "spinner-border", "text-light"], ["role", "status", 1, "spinner-border", "text-default"], ["role", "status", 1, "spinner-grow"], ["aria-hidden", "true", "role", "status", 1, "spinner-grow", "spinner-grow-sm"], ["role", "status", 1, "spinner-grow", "text-primary"], ["role", "status", 1, "spinner-grow", "text-secondary"], ["role", "status", 1, "spinner-grow", "text-success"], ["role", "status", 1, "spinner-grow", "text-danger"], ["role", "status", 1, "spinner-grow", "text-warning"], ["role", "status", 1, "spinner-grow", "text-info"], ["role", "status", 1, "spinner-grow", "text-light"], ["role", "status", 1, "spinner-grow", "text-dark"], [1, "section"], [1, "col-lg-3", "col-md-6"], [1, "custom-control", "custom-checkbox", "mb-3"], ["id", "customCheck1", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck1", 1, "custom-control-label"], ["checked", "checked", "id", "customCheck2", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck2", 1, "custom-control-label"], ["disabled", "disabled", "id", "customCheck3", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck3", 1, "custom-control-label"], ["checked", "checked", "disabled", "disabled", "id", "customCheck4", "type", "checkbox", 1, "custom-control-input"], ["for", "customCheck4", 1, "custom-control-label"], [1, "col-lg-3", "col-sm-6", "mt-4", "mt-md-0"], [1, "custom-control", "custom-radio", "mb-3"], ["id", "customRadio1", "name", "custom-radio-1", "type", "radio", 1, "custom-control-input"], ["for", "customRadio1", 1, "custom-control-label"], ["checked", "checked", "id", "customRadio2", "name", "custom-radio-1", "type", "radio", 1, "custom-control-input"], ["for", "customRadio2", 1, "custom-control-label"], ["disabled", "disabled", "id", "customRadio3", "name", "custom-radio-2", "type", "radio", 1, "custom-control-input"], ["for", "customRadio3", 1, "custom-control-label"], ["checked", "checked", "disabled", "disabled", "id", "customRadio4", "name", "custom-radio-2", "type", "radio", 1, "custom-control-input"], ["for", "customRadio4", 1, "custom-control-label"], [1, "custom-toggle"], ["checked", "", "type", "checkbox"], ["data-label-off", "OFF", "data-label-on", "ON", 1, "custom-toggle-slider", "rounded-circle"], [1, "custom-toggle", "custom-toggle-default"], [1, "custom-toggle", "custom-toggle-danger"], [1, "custom-toggle", "custom-toggle-warning"], [1, "custom-toggle", "custom-toggle-success"], [1, "custom-toggle", "custom-toggle-info"], [1, "input-slider-container"], ["id", "sliderRegular", 1, "slider"], ["id", "sliderDouble", 1, "slider", "slider-primary"], ["data-range-value-max", "500", "data-range-value-min", "100", "id", "input-slider-range"], [1, "row", "d-none"], [1, "col-6"], ["data-range-value-low", "200", "id", "input-slider-range-value-low", 1, "range-slider-value", "value-low"], [1, "col-6", "text-right"], ["data-range-value-high", "400", "id", "input-slider-range-value-high", 1, "range-slider-value", "value-high"], [1, "row", "justify-content-center", "mt-md"], [1, "col-lg-6"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "rounded"], ["href", "javascript:;", 1, "navbar-brand"], ["aria-controls", "nav-inner-primary", "aria-label", "Toggle navigation", "id", "nav-inner-primary", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "nav-inner-primary", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar-collapse-header"], [1, "col-6", "collapse-brand"], ["href", "./index.html"], ["src", "assets/img/brand/blue.png"], [1, "col-6", "collapse-close"], [1, "navbar-nav", "ml-lg-auto"], [1, "nav-item"], ["href", "javascript:;", 1, "nav-link"], ["dropdown", "", 1, "nav-item", "dropdown"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "id", "nav-inner-primary_dropdown_1", "role", "button", 1, "nav-link", "dropdown-toggle", "dropdown-toggle"], ["aria-labelledby", "nav-inner-primary_dropdown_1", "class", "dropdown-menu", 4, "dropdownMenu"], [1, "col-lg-6", "mt-4", "mt-lg-0"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-success", "rounded"], ["aria-controls", "nav-inner-success", "aria-label", "Toggle navigation", "id", "nav-inner-success", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "nav-inner-success", 1, "navbar-collapse", 3, "isAnimated", "collapse"], ["href", "javascript:;", 1, "nav-link", "nav-link-icon"], [1, "ni", "ni-favourite-28"], [1, "nav-link-inner--text", "d-lg-none"], [1, "ni", "ni-notification-70"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "id", "nav-inner-success_dropdown_1", "role", "button", 1, "nav-link", "dropdown-toggle", "nav-link-icon", "dropdown-toggle"], [1, "ni", "ni-settings-gear-65"], ["aria-labelledby", "nav-inner-success_dropdown_1", "class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "section", "section-navbars"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-default"], ["aria-controls", "navbar-default", "aria-label", "Toggle navigation", "id", "navbar-default", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "navbar-default", 1, "navbar-collapse", 3, "isAnimated", "collapse"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "id", "navbar-default_dropdown_1", "role", "button", 1, "nav-link", "nav-link-icon", "dropdown-toggle", "dropdown-toggle"], ["aria-labelledby", "navbar-default_dropdown_1", "class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-primary", "mt-4"], ["aria-controls", "navbar-primary", "aria-label", "Toggle navigation", "id", "navbar-primary", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "navbar-primary", 1, "navbar-collapse", 3, "isAnimated", "collapse"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "id", "navbar-primary_dropdown_1", "role", "button", 1, "nav-link", "dropdown-toggle", "dropdown-toggle"], ["aria-labelledby", "navbar-primary_dropdown_1", "class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-success", "mt-4"], ["aria-controls", "navbar-success", "aria-label", "Toggle navigation", "id", "navbar-success", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "navbar-success", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "ni", "ni-planet"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "id", "navbar-success_dropdown_1", "role", "button", 1, "nav-link", "nav-link-icon", "dropdown-toggle", "dropdown-toggle"], ["aria-labelledby", "navbar-success_dropdown_1", "class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-danger", "mt-4"], ["aria-controls", "navbar-danger", "aria-label", "Toggle navigation", "id", "navbar-danger", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "navbar-danger", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar-nav", "ml-auto"], [1, "fa", "fa-facebook-square"], [1, "fa", "fa-twitter"], [1, "fa", "fa-google-plus"], [1, "fa", "fa-instagram"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-warning", "mt-4"], ["aria-controls", "navbar-warning", "aria-label", "Toggle navigation", "id", "navbar-warning", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "navbar-warning", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar-nav", "align-items-lg-center", "ml-lg-auto"], [1, "fa", "fa-pinterest"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-info", "mt-4"], ["aria-controls", "navbar-info", "aria-label", "Toggle navigation", "id", "navbar-info", "type", "button", 1, "navbar-toggler", 3, "click"], ["id", "navbar-info", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "nav-link-inner--text"], [1, "section", "section-components"], [1, "nav-wrapper"], ["type", "pills", 1, "nav-fill", "flex-column", "flex-md-row"], ["tabHeading", ""], [1, "card", "shadow", "mt-3"], [1, "card-body"], [1, "description"], [1, "col-lg-6", "mt-5", "mt-lg-0"], ["heading", "Home"], ["heading", "Profile"], ["heading", "Messages"], [1, "section", "section-pills"], ["id", "navigation-pills"], [1, "title"], ["type", "pills", 1, "tab-space"], [1, "card", "card-plain"], ["heading", "Settings"], ["heading", "Options"], ["type", "pills", 1, "vertical-pills", "nav-fill", 3, "vertical"], [1, "mb-4"], ["type", "pills", 1, "nav-pills-icons", "nav-fill"], ["type", "pills", 1, "nav-pills-danger", "nav-pills-icons", "vertical-pills", 3, "vertical"], [1, "col-md-6", "mb-5"], ["type", "pills", 1, "nav-pills-warning", "nav-pills-circle", "mb-3", "vertical-pills", 3, "vertical"], ["type", "pills", 1, "nav-pills-success", "nav-pills-circle", "mb-3"], [1, "progress-wrapper"], [1, "progress-info"], [1, "progress-label"], [1, "progress-percentage"], [1, "progress"], ["type", "default", 3, "value"], [1, "text-primary"], ["type", "primary", 3, "value"], ["type", "secondary", 3, "value"], [1, "text-info"], ["type", "info", 3, "value"], [1, "text-success"], ["type", "success", 3, "value"], [1, "text-danger"], ["type", "danger", 3, "value"], [1, "text-warning"], ["type", "warning", 3, "value"], [1, "col-md-5", "pagination-area"], ["previousText", "\u2039", "nextText", "\u203A", 1, "pagination-primary", 3, "ngModel", "totalItems", "ngModelChange"], ["previousText", "\u2039", "nextText", "\u203A", 1, "pagination-info", 3, "ngModel", "totalItems", "ngModelChange"], [1, "pagination-container", "justify-content-center"], ["previousText", "\u00AB", "nextText", "\u00BB", 1, "pagination-success", 3, "ngModel", "totalItems", "ngModelChange"], ["previousText", "\u00AB", "nextText", "\u00BB", 1, "pagination-warning", 3, "ngModel", "totalItems", "ngModelChange"], ["previousText", "\u00AB", "nextText", "\u00BB", 1, "pagination-danger", 3, "ngModel", "totalItems", "ngModelChange"], ["previousText", "\u00AB", "nextText", "\u00BB", 1, "pagination-secondary", 3, "ngModel", "totalItems", "ngModelChange"], ["previousText", "\u00AB", "nextText", "\u00BB", 1, "pagination-default", 3, "ngModel", "totalItems", "ngModelChange"], [1, "h4", "text-success", "font-weight-bold", "mb-4", "mt-4"], [1, "badge", "badge-default", "mr-1"], [1, "badge", "badge-primary", "mr-1"], [1, "badge", "badge-secondary", "mr-1"], [1, "badge", "badge-info", "mr-1"], [1, "badge", "badge-success", "mr-1"], [1, "badge", "badge-danger", "mr-1"], [1, "badge", "badge-warning"], [1, "mb-2", "mt-2"], [1, "badge", "badge-pill", "badge-default", "mr-1"], [1, "badge", "badge-pill", "badge-primary", "mr-1"], [1, "badge", "badge-pill", "badge-secondary", "mr-1"], [1, "badge", "badge-pill", "badge-info", "mr-1"], [1, "badge", "badge-pill", "badge-success", "mr-1"], [1, "badge", "badge-pill", "badge-danger", "mr-1"], [1, "badge", "badge-pill", "badge-warning"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-default", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-primary", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-secondary", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-info", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-success", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-danger", "mr-1"], ["href", "javascript:;", 1, "badge", "badge-pill", "badge-warning"], [1, "badge", "badge-primary"], ["type", "button", 1, "btn", "btn-primary"], [1, "badge", "badge-md", "badge-circle", "badge-floating", "badge-danger", "border-white"], [1, "mb-3", "mt-2"], [1, "badge", "badge-pill", "badge-md", "badge-warning", "mr-1"], [1, "badge", "badge-pill", "badge-lg", "badge-success"], [1, "h4", "text-success", "font-weight-bold", "mb-4", "mt-5"], [3, "dismissible", "type"], [1, "alert-inner--icon"], [1, "ni", "ni-like-2"], [1, "alert-inner--text"], [1, "ni", "ni-bell-55"], [1, "ni", "ni-support-16"], [1, "text-uppercase", "font-weight-bold", "mt-5", "mb-3"], [1, "col-lg-4", "col-md-6"], ["aria-atomic", "true", "aria-live", "assertive", "data-animation", "autohide", 1, "toast"], [1, "toast-header"], ["alt", "...", "src", "assets/img/tim.png", 1, "rounded", "mr-2"], [1, "mr-auto"], ["aria-label", "Close", "data-dismiss", "toast", "type", "button", 1, "ml-2", "close"], ["aria-hidden", "true"], [1, "toast-body"], ["aria-atomic", "true", "aria-live", "assertive", 1, "toast", "bg-info"], [1, "toast-header", "text-white"], [1, "text-white"], [1, "toast-body", "text-white"], ["aria-atomic", "true", "aria-live", "assertive", 1, "toast", "bg-warning", "mt-md-4", "mt-lg-0"], [1, "section", "section-prefooter"], [1, "container-fluid"], [1, "social-line", "social-line-blue", "text-center"], [1, "col-md-12"], [1, "title", "mb-4"], ["href", "javascript:;", 1, "btn", "btn-twitter", "btn-round"], ["href", "javascript:;", 1, "btn", "btn-facebook", "btn-round"], [1, "fab", "fa-facebook-square"], ["href", "javascript:;", 1, "btn", "btn-tumblr", "btn-round"], ["href", "javascript:;", 1, "btn", "btn-dribbble", "btn-round"], [1, "social-line", "social-line-big-icons"], [1, "col-lg-3", "col-md-6", "mb-md-4", "mb-lg-0"], ["href", "javascript:;", 1, "btn", "btn-gradient-twitter", "btn-footer"], [1, "subtitle"], ["href", "javascript:;", 1, "btn", "btn-gradient-facebook", "btn-footer"], ["href", "javascript:;", 1, "btn", "btn-gradient-slack", "btn-footer"], ["href", "javascript:;", 1, "btn", "btn-gradient-instagram", "btn-footer"], [1, "social-line", "social-line-big-icons", "bg-default"], [1, "col-md-2"], ["href", "javascript:;", 1, "btn", "btn-simple", "btn-icon", "btn-footer"], [1, "fab", "fa-twitter", "text-white"], [1, "fab", "fa-facebook-square", "text-white"], [1, "fab", "fa-google-plus", "text-white"], [1, "fab", "fa-dribbble", "text-white"], [1, "fab", "fa-youtube", "text-white"], [1, "fab", "fa-instagram", "text-white"], [1, "subscribe-line", "subscribe-line-white"], [1, "col-lg-5", "mr-auto"], [1, "col-lg-6", "d-flex", "justify-content-center", "flex-column", "ml-auto"], ["action", "", "method", ""], [1, "col-sm-8"], [1, "ni", "ni-email-83"], ["placeholder", "Your Email...", "type", "text", 1, "form-control", 3, "blur", "focus"], [1, "col-sm-4"], ["type", "button", 1, "btn", "btn-success", "btn-round", "btn-block"], [1, "section", "section-footer"], ["id", "footer-areas"], [1, "section", "section-shaped", "no-tilt"], [1, "shape", "shape-style-1", "shape-default"], [1, "subscribe-line"], [1, "col-lg-6", "col-sm-10", "ml-auto", "mr-auto"], [1, "text-center"], [1, "title", "text-white"], [1, "description", "text-white"], ["action", "", "method", "", 1, "mt-4"], [1, "footer", "bg-transparent"], [1, "col-md-3"], ["dropdown", "", 1, "dropdown", "mt-2"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "role", "button", 1, "btn", "btn-link", "text-white", "dropdown-toggle", "dropdown-toggle"], [1, "ni", "ni-pin-3"], ["class", "dropdown-menu", "x-placement", "bottom-start", 4, "dropdownMenu"], [1, "ni", "ni-chat-round"], [1, "copyrights"], [1, "col-md-2", "col-6"], [1, "column"], [1, "mt-3"], ["href", "javascript:;"], ["href", "https://creative-tim.com/contact-us"], ["href", "https://creative-tim.com/about-us"], ["href", "https://creative-tim.com/blog"], ["href", "https://opensource.org/licenses/MIT"], ["href", "javascript;:"], [1, "col-md-3", "col-6"], [1, "btn-wrapper", "profile", "text-left"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-twitter", "btn-sm"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-facebook", "btn-sm"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-slack", "btn-sm"], [1, "footer", "footer-simple"], ["href", "https://www.creative-tim.com", 1, "nav-link"], ["href", "http://presentation.creative-tim.com", 1, "nav-link"], ["href", "http://blog.creative-tim.com", 1, "nav-link"], ["href", "https://www.creative-tim.com/license", "target", "_blank", 1, "nav-link"], [1, "copyright", "text-right"], ["href", "https://www.creative-tim.com", "target", "_blank", 1, "copyright-link"], [1, "footer", "footer-simple", "bg-gradient-default"], ["href", "javascript:;", 1, "footer-brand"], [1, "inline-menu"], [1, "social-buttons", "pull-right"], ["href", "https://twitter.com/CreativeTim", "target", "_blank", 1, "btn", "btn-icon", "btn-twitter", "btn-sm", "mr-1"], ["href", "https://www.facebook.com/CreativeTim", "target", "_blank", 1, "btn", "btn-icon", "btn-facebook", "btn-sm", "mr-1"], ["href", "https://www.instagram.com/CreativeTimOfficial", "target", "_blank", 1, "btn", "btn-icon", "btn-instagram", "btn-sm"], [1, "footer", "footer-big"], [1, "content"], ["alt", "", "src", "assets/img/brand/blue.png", 1, "logo"], [1, "btn-wrapper", "profile", "text-left", "mt-3"], ["href", "https://twitter.com/creativetim", "target", "_blank", 1, "btn", "btn-sm"], ["href", "https://www.facebook.com/creativetim", "target", "_blank", 1, "btn", "btn-sm"], ["href", "https://dribbble.com/creativetim", "target", "_blank", 1, "btn", "btn-sm"], [1, "col-md-9"], [1, "d-inline-block"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "dropdownToggle", "", "href", "javascript:;", "role", "button", 1, "btn", "btn-link", "text-primary"], ["class", "dropdown-menu", "style", "position: absolute; transform: translate3d(0px, 42px, 0px); top: 0px; left: 0px; will-change: transform;", "x-placement", "bottom-start", 4, "dropdownMenu"], [1, "footer-description"], [1, "col-md-4", "col-6"], [1, "social-feed"], [1, "feed-line"], [1, "text-muted"], [1, "mt-4", "mb-4"], [1, "social-buttons"], ["type", "button", 1, "btn-icon-only", "btn", "btn-twitter"], ["type", "button", 1, "btn-icon-only", "btn", "btn-facebook"], [1, "copyright", "d-flex", "flex-row-reverse"], [1, "footer", "footer-big", "bg-gradient-default"], [1, "row", "mb-5"], [1, "column", "mx-auto"], ["alt", "", "src", "assets/img/brand/blue.png", 1, "logo", "logo-sm"], [1, "links-vertical"], [1, "col-md-8"], ["action", "", "method", "", 1, "form", "form-newsletter"], ["placeholder", "Your Email", "type", "email", 1, "form-control", 3, "blur", "focus"], ["name", "button", "type", "button", 1, "btn", "btn-primary"], [1, "bg-white", "opacity-3"], [1, "d-flex", "justify-content-center"], [1, "section", "section-typography"], [1, "mt-lg", "mb-5"], [1, "h4", "text-success", "font-weight-bold"], [1, "row", "py-3", "align-items-center"], [1, "col-sm-3"], [1, "text-uppercase", "text-muted", "font-weight-bold"], [1, "col-sm-9"], [1, "mb-0"], [1, "h4", "text-success", "font-weight-bold", "mt-md"], [1, "display-1", "mb-0"], [1, "display-2", "mb-0"], [1, "display-3", "mb-0"], [1, "display-4", "mb-0"], [1, "heading", "mb-0"], [1, "heading-title", "text-warning", "mb-0"], [1, "lead", "text-muted"], [1, "blockquote"], [1, "blockquote-footer"], ["title", "Source Title"], [1, "text-muted", "mb-0"], [1, "text-info", "mb-0"], [1, "text-success", "mb-0"], [1, "text-warning", "mb-0"], [1, "text-danger", "mb-0"], [1, "col-sm-3", "col-6"], [1, "d-block", "text-uppercase", "font-weight-bold", "mb-4"], ["alt", "Rounded image", "src", "assets/img/faces/team-1.jpg", 1, "img-fluid", "rounded", "shadow", 2, "width", "150px"], ["alt", "Circle image", "src", "assets/img/faces/team-2.jpg", 1, "img-fluid", "rounded-circle", "shadow", 2, "width", "150px"], [1, "col-sm-3", "col-6", "mt-5", "mt-sm-0"], ["alt", "Raised image", "src", "assets/img/faces/team-3.jpg", 1, "img-fluid", "rounded", "shadow-lg", 2, "width", "150px"], ["alt", "Raised circle image", "src", "assets/img/faces/team-4.jpg", 1, "img-fluid", "rounded-circle", "shadow-lg", 2, "width", "150px"], [1, "row", "mt-5"], [1, "avatar-group"], ["href", "javascript:;", 1, "avatar", "avatar-lg", "rounded-circle"], ["alt", "Image placeholder", "src", "assets/img/faces/team-1.jpg"], ["alt", "Image placeholder", "src", "assets/img/faces/team-2.jpg"], ["alt", "Image placeholder", "src", "assets/img/faces/team-3.jpg"], ["alt", "Image placeholder", "src", "assets/img//faces/team-4.jpg"], [1, "col-sm-6", "col-6"], ["href", "javascript:;", 1, "avatar", "avatar-xs", "rounded-circle"], ["alt", "Image placeholder", "src", "assets/img/faces/team-4.jpg"], ["href", "javascript:;", 1, "avatar", "avatar-sm", "rounded-circle"], ["href", "javascript:;", 1, "avatar", "rounded-circle"], ["href", "javascript:;", 1, "avatar", "avatar-xl", "rounded-circle"], [1, "section", "section-content-areas"], [1, "mb-4", "mt-4"], [1, "table-responsive"], [1, "table", "align-items-center", "table-flush"], [1, "thead-light"], ["data-sort", "name", "scope", "col", 1, "sort"], ["data-sort", "budget", "scope", "col", 1, "sort"], ["data-sort", "status", "scope", "col", 1, "sort"], ["scope", "col"], ["data-sort", "completion", "scope", "col", 1, "sort"], [1, "list"], ["scope", "row"], [1, "media", "align-items-center"], ["href", "#", 1, "avatar", "rounded-circle", "mr-3"], ["alt", "Image placeholder", "src", "assets/img/theme/bootstrap.jpg"], [1, "media-body"], [1, "name", "mb-0", "text-sm"], [1, "budget"], [1, "badge", "badge-dot", "mr-4"], [1, "bg-warning"], [1, "status"], ["href", "#", 1, "avatar", "avatar-sm", "rounded-circle"], [1, "d-flex", "align-items-center"], [1, "completion", "mr-2"], [1, "text-right"], [1, "dropdown", "dropleft"], ["aria-expanded", "false", "aria-haspopup", "true", "data-toggle", "dropdown", "href", "#", "role", "button", 1, "btn", "btn-sm", "btn-icon-only", "text-light"], [1, "fas", "fa-ellipsis-v"], ["alt", "Image placeholder", "src", "assets/img/theme/angular.jpg"], [1, "bg-success"], [1, "dropdown"], ["alt", "Image placeholder", "src", "assets/img/theme/sketch.jpg"], [1, "bg-danger"], ["alt", "Image placeholder", "src", "assets/img/theme/react.jpg"], [1, "bg-info"], ["alt", "Image placeholder", "src", "assets/img/theme/vue.jpg"], ["aria-label", "..."], ["previousText", "\u2039", "nextText", "\u203A", 1, "justify-content-end", "mb-0", 3, "ngModel", "totalItems", "ngModelChange"], [1, "table"], [1, "tools", "float-right"], ["data-toggle", "dropdown", "dropdownToggle", "", "type", "button", 1, "btn", "dropdown-toggle", "btn-link", "btn-icon", "dropdown-toggle"], ["class", "dropdown-menu dropdown-menu-right", 4, "dropdownMenu"], [1, "table", "table-striped"], [1, "custom-control", "custom-checkbox"], ["checked", "checked", "id", "checkbox1", "type", "checkbox", 1, "custom-control-input"], ["for", "checkbox1", 1, "custom-control-label"], [1, "progress-container"], [1, "progress-badge"], [3, "value"], ["id", "checkbox2", "type", "checkbox", 1, "custom-control-input"], ["for", "checkbox2", 1, "custom-control-label"], ["checked", "checked", "id", "checkbox3", "type", "checkbox", 1, "custom-control-input"], ["for", "checkbox3", 1, "custom-control-label"], ["checked", "checked", "id", "checkbox4", "type", "checkbox", 1, "custom-control-input"], ["for", "checkbox4", 1, "custom-control-label"], ["id", "checkbox5", "type", "checkbox", 1, "custom-control-input"], ["for", "checkbox5", 1, "custom-control-label"], ["colspan", "5"], [1, "td-total"], [1, "td-price"], ["id", "", 1, "table", "tablesorter", "table-shopping"], [1, "img-container"], ["alt", "...", "src", "assets/img/jacket.png"], [1, "td-name"], ["href", "#jacket"], [1, "td-number"], [1, "btn-group", "mb-1"], [1, "btn", "btn-info", "btn-sm"], [1, "ni", "ni-fat-delete"], [1, "ni", "ni-fat-add"], [1, "td-actions"], ["placement", "left", "tooltip", "Remove item", "type", "button", 1, "btn", "btn-link", "text-danger", "sm"], [1, "ni", "ni-fat-remove"], ["alt", "...", "src", "assets/img/boots.png"], ["href", "#boots"], ["alt", "...", "src", "assets/img/sweater.png"], ["href", "#sweater"], ["colspan", "3"], ["colspan", "2", 1, "text-right"], ["type", "button", 1, "btn", "btn-info", "btn-round"], ["id", "comments"], [1, "h4", "text-success", "font-weight-bold", "mb-5", "mt-5"], [1, "col-md-8", "mx-auto"], [1, "card"], [1, "card-header"], [1, "h3", "mb-0"], [1, "card-header", "d-flex", "align-items-center"], ["src", "assets/img/faces/team-1.jpg", 1, "avatar"], [1, "mx-3"], ["href", "javascript:;", 1, "text-dark", "font-weight-600", "text-sm"], [1, "d-block", "text-muted"], [1, "text-right", "ml-auto"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-icon"], [1, "btn-inner--icon", "icon-big"], ["alt", "Image placeholder", "src", "assets/img/sections/mohamed.jpg", 1, "img-fluid", "rounded"], [1, "row", "align-items-center", "my-3", "pb-3", "border-bottom"], [1, "col-sm-6"], [1, "icon-actions"], ["href", "javascript:;", 1, "like", "active"], [1, "ni", "ni-curved-next"], [1, "col-sm-6", "d-none", "d-sm-block"], [1, "d-flex", "align-items-center", "justify-content-sm-end"], ["alt", "Image placeholder", "src", "assets/img/faces/team-2.jpg", 1, "rounded-circle"], ["alt", "Image placeholder", "src", "assets/img/faces/team-3.jpg", 1, "rounded-circle"], [1, "pl-2", "font-weight-bold"], [1, "mb-1"], [1, "media", "media-comment"], ["alt", "Image placeholder", "src", "assets/img/faces/team-1.jpg", 1, "media-comment-avatar", "rounded-circle"], [1, "media-comment-text"], [1, "h5", "mt-0"], [1, "text-sm", "lh-160"], ["alt", "Image placeholder", "src", "assets/img/faces/team-2.jpg", 1, "media-comment-avatar", "rounded-circle"], [1, "media", "align-items-center", "mt-5"], ["alt", "Image placeholder", "src", "assets/img/faces/team-3.jpg", 1, "avatar", "avatar-lg", "rounded-circle", "mb-4"], ["placeholder", "Write your comment", "rows", "1", 1, "form-control", 3, "blur", "focus"], [1, "row", "flex-row", "chat"], [1, "col-lg-4"], [1, "card", "bg-secondary"], [1, "card-header", "mb-3"], [1, "input-group", "input-group-alternative"], ["placeholder", "Search contact", "type", "text", 1, "form-control", 3, "blur", "focus"], [1, "list-group", "list-group-chat", "list-group-flush"], ["href", "javascript:;", 1, "list-group-item", "active", "bg-gradient-primary"], [1, "media"], ["alt", "Image", "src", "assets/img/faces/christian.jpg", 1, "avatar"], [1, "media-body", "ml-2"], [1, "justify-content-between", "align-items-center"], [1, "mb-0", "text-white"], [1, "badge", "badge-success"], ["href", "javascript:;", 1, "list-group-item"], ["alt", "Image", "src", "assets/img/faces/team-2.jpg", 1, "avatar", "shadow"], [1, "text-muted", "text-small", "col-10", "p-0", "text-truncate", "d-block"], ["alt", "Image", "src", "assets/img/faces/team-3.jpg", 1, "avatar", "shadow"], ["alt", "Image", "src", "assets/img/faces/team-4.jpg", 1, "avatar", "shadow"], ["alt", "Image", "src", "assets/img/faces/team-5.jpg", 1, "avatar", "shadow"], [1, "col-lg-8"], [1, "card-header", "d-inline-block"], [1, "col-md-10"], ["alt", "Image", "src", "assets/img/faces/christian.jpg", 1, "avatar", "shadow"], [1, "mb-0", "d-block"], [1, "text-muted", "text-small"], [1, "col-md-1", "col-3"], ["placement", "top", "tooltip", "Video call", "type", "button", 1, "btn", "btn-link", "btn-text"], [1, "ni", "ni-book-bookmark"], ["data-toggle", "dropdown", "dropdownToggle", "", "type", "button", 1, "btn", "btn-link", "text-primary"], [1, "row", "justify-content-start"], [1, "col-auto"], [1, "card-body", "p-2"], [1, "opacity-60"], [1, "far", "fa-clock"], [1, "row", "justify-content-end", "text-right"], [1, "card", "bg-gradient-primary", "text-white"], [1, "ni", "ni-check-bold"], [1, "row", "mt-4"], [1, "col-md-12", "text-center"], [1, "badge", "text-default"], [1, "col-5"], [1, "col-12", "p-0"], ["alt", "Rounded image", "src", "assets/img/theme/img-1-1200x1000.jpg", 1, "img-fluid", "rounded", "mb-1"], [1, "spinner"], [1, "bounce1"], [1, "bounce2"], [1, "bounce3"], [1, "d-inline-block", "mr-2", "mb-1", "mt-1"], [1, "card-footer", "d-block"], ["placeholder", "Your message", "type", "text", 1, "form-control", 3, "blur", "focus"], [1, "ni", "ni-send"], [1, "section", "section-cards", "bg-secondary"], [1, "col-md-6", "col-lg-4"], [1, "card", "bg-gradient-danger"], [1, "card-body", "pb-0"], [1, "category-social", "text-white", "text-uppercase"], [1, "fa", "fa-fire"], [1, "lead", "text-white", "my-0"], ["src", "assets/img/ill/p51.svg", 1, "img", "pattern", "rounded"], ["data-image", "path", 1, "card", "card-blog", "bg-primary"], [1, "card-image"], ["src", "assets/img/ill/p22.png", 1, "img", "rounded"], [1, "card-body", "pt-0"], [1, "category", "text-white"], [1, "ni", "ni-atom"], [1, "card-title"], ["href", "javascript:;", 1, "text-white"], [1, "card-description", "text-white"], ["data-header", "pattern", 1, "card", "card-blog"], ["src", "assets/img/ill/p2.svg", 1, "img", "pattern", "rounded"], [1, "card-category", "text-danger"], [1, "ni", "ni-badge"], [1, "card-description"], [1, "card-footer"], [1, "author"], ["alt", "...", "src", "assets/img/faces/team-3.jpg", 1, "avatar", "img-raised"], [1, "stats", "stats-right"], [1, "ni", "ni-archive-2"], [1, "card", "text-white", "bg-default"], ["alt", "Card image", "src", "assets/img/ill/inn.svg", 1, "card-img"], [1, "card-img-overlay", "d-flex", "align-items-center"], [1, "h2", "card-title", "text-white", "mb-2"], [1, "card-text", "text-sm", "font-weight-bold"], ["data-header", "skew", 1, "card", "card-blog"], [1, "card-header", "bg-yellow"], ["src", "assets/img/ill/inn.svg", 1, "card-img-top"], [1, "card-category"], [1, "ni", "ni-paper-diploma"], [1, "card", "bg-gradient-warning"], [1, "ni", "ni-money-coins"], [1, "card", "card-blog", "bg-info"], ["src", "assets/img/ill/p7.svg", 1, "img", "pattern", "rounded"], [1, "display-4", "text-white"], [1, "lead", "text-white", "mt-0"], ["data-background", "pattern", 1, "card", "card-blog"], ["src", "assets/img/ill/p8.svg", 1, "img", "pattern", "rounded"], ["alt", "Image placeholder", "src", "assets/img/ill/linth3.svg", 1, "card-img-top"], [1, "h5", "card-title", "mb-0"], [1, "card-text", "mt-4"], ["href", "#", 1, "btn", "btn-link", "px-0"], ["data-image", "profile-image", 1, "card", "card-profile"], ["aria-expanded", "false", "data-toggle", "dropdown", "dropdownToggle", "", "type", "button", 1, "btn", "btn-link", "dropdown-toggle", "btn-icon-only", "dropdown-toggle"], ["class", "dropdown-menu dropdown-menu-right", "x-placement", "bottom-end", 4, "dropdownMenu"], ["src", "assets/img/faces/team-5.jpg", 1, "img", "rounded"], [1, "list-unstyled"], [1, "py-1"], [1, "badge", "badge-circle", "badge-info", "mr-3"], [1, "badge", "badge-circle", "badge-success", "mr-3"], [1, "ni", "ni-user-run"], [1, "badge", "badge-circle", "badge-danger", "mr-3"], [1, "ni", "ni-chart-bar-32"], [1, "card", "card-profile"], [1, "card-header", "bg-info", 2, "background-image", "url('assets/img/ill/inn.svg')"], [1, "card-avatar"], ["src", "assets/img/faces/team-4.jpg", 1, "img", "img-raised", "rounded-circle"], [1, "d-flex", "justify-content-between"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-info", "mr-4", "mt-3"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-default", "float-right", "mt-3"], [1, "col"], [1, "card-profile-stats", "d-flex", "justify-content-center"], [1, "heading"], [1, "h4"], [1, "font-weight-light"], [1, "font-weight-300"], [1, "ni", "location_pin", "mr-2"], ["data-image", "img-raised", 1, "card", "card-profile"], [1, "card-header-image"], ["src", "assets/img/faces/alejandro-escamilla.jpg", 1, "img"], [1, "card-title", "text-white"], [1, "card-category", "text-info", "text-center"], [1, "card-footer", "text-center"], ["type", "button", 1, "btn-instagram", "btn-icon-only", "btn-simple", "btn", "btn-default"], ["type", "button", 1, "btn-icon-only", "btn-simple", "btn", "btn-twitter"], ["data-image", "img-rounded", 1, "card", "card-profile"], ["src", "assets/img/faces/team-1.jpg", 1, "img"], [1, "card-category", "text-gray"], ["href", "javascript:;", 1, "btn", "btn-info", "btn-round"], ["data-background", "cover", 1, "card", "card-profile"], ["alt", "cover", "src", "assets/img/ill/linth3.svg", 1, "img", "pattern", "pattern-top"], ["src", "assets/img/faces/team-3.jpg", 1, "img", "img-raised", "rounded-circle"], [1, "h5", "mt-3"], ["type", "button", 1, "btn", "btn-lg", "btn-success", "btn-block"], ["data-background", "full", 1, "card", "card-profile"], ["src", "assets/img/theme/lucy.jpg", 1, "img", "img-raised", "rounded"], [1, "display-4"], [1, "lead", "mt-0", "mb-1"], ["id", "plain-table", 1, "table", "tablesorter"], [1, "text-left", "pl-0"], [1, "badge", "badge-circle", "badge-info", "mr-2"], [1, "ni", "ni-hat-3"], [1, "ni", "ni-satisfied"], [1, "ni", "ni-bullet-list-67"], [1, "col-md-6", "col-lg-3"], ["data-animation", "zooming", 1, "card", "card-blog", "card-background"], [1, "full-background", 2, "background-image", "url('assets/img/theme/josh-appel.jpg')"], [1, "content-bottom"], [1, "card-category", "text-white", "opacity-8"], [1, "full-background", 2, "background-image", "url('assets/img/theme/john-hoang.jpg')"], ["data-animation", "true", 1, "card", "card-blog", "card-background"], [1, "full-background", 2, "background-image", "url('assets/img/theme/kit-suman.jpg')"], [1, "card-category", "text-white"], [1, "card", "card-pricing", "bg-success", "border-0", "text-center", "mb-4", 2, "background-image", "url('assets/img/ill/pattern_pricing1.svg')"], [1, "card-header", "bg-transparent"], [1, "text-uppercase", "ls-1", "text-white", "py-3", "mb-0"], [1, "display-2", "text-white"], [1, "list-unstyled", "my-4"], [1, "icon", "icon-xs", "icon-shape", "bg-white", "shadow", "rounded-circle", "text-success"], [1, "pl-2", "text-sm", "text-white"], [1, "ni", "ni-diamond"], [1, "ni", "ni-chart-pie-35"], ["type", "button", 1, "btn", "btn-link", "text-white", "mb-3"], [1, "card-footer", "bg-transparent"], ["href", "#", 1, "text-white"], [1, "card", "card-pricing", "bg-white", "border-0", "text-center", "mb-4"], [1, "text-uppercase", "ls-1", "py-3", "mb-0"], [1, "display-2"], [1, "align-items-center"], ["href", "#"], [1, "card", "card-pricing", "card-background", 2, "background-image", "url('assets/img/ill/pattern_pricing6.svg')"], [1, "card-body", "pb-4"], [1, "card-category", "text-danger", "text-uppercase"], [1, "card-title", "text-default"], [1, "icon", "icon-xs", "icon-shape", "icon-shape-info", "shadow", "rounded-circle"], [1, "pl-2", "text-sm", "text-whit"], [1, "icon", "icon-xs", "icon-shape", "icon-shape-danger", "shadow", "rounded-circle"], ["href", "#pablo", 1, "btn", "btn-danger", "mt-4"], ["data-background", "image", 1, "card", "card-pricing", "bg-default", "card-background", 2, "background-image", "url('assets/img/ill/pricing_bg.svg')"], [1, "card-category", "text-white", "text-uppercase"], ["href", "javascript:;", 1, "btn", "btn-white", "btn-sm", "mt-3"], [1, "card", "card-pricing", "card-coin", 2, "background-image", "url('assets/img/ill/pattern_pricing5.svg')"], ["src", "assets/img/dropbox.png", 1, "img-center", "shadow"], [1, "text-uppercase"], [1, "list-group"], [1, "list-group-item"], [1, "card-footer", "text-center", "bg-transparent"], [1, "btn", "btn-primary", "mb-3"], ["data-icon", "big-icon", 1, "card", "card-pricing", "bg-gradient-warning", "text-center"], [1, "icon", "text-white"], [1, "ni", "ni-camera-compact"], [1, "price", "d-inline"], [1, "currency", "text-white"], [1, "amount", "text-white"], [1, "frequency", "text-white"], [1, "list-unstyled", "align-items-center"], [1, "text-sm", "text-white"], ["type", "button", 1, "btn", "btn-outline-white"], [1, "section", "section-js-components"], ["data-target", "#modal-default", "type", "button", 1, "btn", "btn-block", "btn-primary", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "modal-default", "bsModal", "", "id", "modal-default", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["modaldefault", "bs-modal"], ["role", "document", 1, "modal-dialog", "modal-", "modal-dialog-centered", "modal-"], [1, "modal-content"], [1, "modal-header"], ["id", "modal-title-default", 1, "modal-title"], ["aria-label", "Close", "data-dismiss", "modal", "type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-link", "ml-auto", 3, "click"], ["data-target", "#modal-notification", "type", "button", 1, "btn", "btn-block", "btn-warning", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "modal-notification", "bsModal", "", "id", "modal-notification", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["modalnotification", "bs-modal"], ["role", "document", 1, "modal-dialog", "modal-danger", "modal-dialog-centered", "modal-"], [1, "modal-content", "bg-gradient-danger"], ["id", "modal-title-notification", 1, "modal-title"], [1, "py-3", "text-center"], [1, "ni", "ni-bell-55", "ni-3x"], [1, "heading", "mt-4"], ["type", "button", 1, "btn", "btn-white"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-link", "text-white", "ml-auto", 3, "click"], ["data-target", "#modal-form", "type", "button", 1, "btn", "btn-block", "btn-default", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "modal-form", "bsModal", "", "id", "modal-form", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["modalform", "bs-modal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-sm"], [1, "modal-body", "p-0"], [1, "card", "bg-secondary", "shadow", "border-0", "mb-0"], [1, "card-header", "bg-white", "pb-5"], [1, "text-muted", "text-center", "mb-3"], [1, "btn-wrapper", "text-center"], ["href", "javascript:;", 1, "btn", "btn-neutral", "btn-icon"], ["src", "assets/img/icons/common/github.svg"], ["src", "assets/img/icons/common/google.svg"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-4"], ["role", "form"], [1, "form-group", "mb-3"], ["placeholder", "Email", "type", "email", 1, "form-control", 3, "blur", "focus"], [1, "ni", "ni-lock-circle-open"], ["placeholder", "Password", "type", "password", 1, "form-control", 3, "blur", "focus"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", " customCheckLogin", "type", "checkbox", 1, "custom-control-input"], ["for", " customCheckLogin", 1, "custom-control-label"], ["type", "button", 1, "btn", "btn-primary", "my-4"], ["data-target", "#exampleModalLong", "type", "button", 1, "btn", "btn-danger", "btn-block", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "exampleModalLongTitle", "bsModal", "", "id", "exampleModalLong", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["exampleModalLong", "bs-modal"], ["role", "document", 1, "modal-dialog"], ["id", "exampleModalLongTitle", 1, "modal-title"], ["data-dismiss", "modal", "type", "button", 1, "btn", "btn-secondary", 3, "click"], ["data-target", "#exampleModalMessage", "type", "button", 1, "btn", "btn-success", "btn-block", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "exampleModalMessageTitle", "bsModal", "", "id", "exampleModalMessage", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["exampleModalMessage", "bs-modal"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body", "bg-secondary"], ["for", "recipient-name", 1, "col-form-label"], ["id", "recipient-name", "type", "text", "value", "Creative Tim", 1, "form-control", "form-control-alternative", 3, "blur", "focus"], ["for", "message-text", 1, "col-form-label"], ["id", "message-text", 1, "form-control", "form-control-alternative", 3, "blur", "focus"], [1, "modal-footer", "bg-secondary"], ["data-target", "#exampleModalSignUp", "type", "button", 1, "btn", "btn-info", "btn-block", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "exampleModalSignTitle", "bsModal", "", "id", "exampleModalSignUp", "role", "dialog", "tabindex", "-1", 1, "modal", "fade"], ["exampleModalSignUp", "bs-modal"], [1, "input-group", "input-group-alternative", 3, "ngClass"], ["placeholder", "Confirm Password", "type", "password", 1, "form-control", 3, "blur", "focus"], [1, "h5", "text-default", "font-weight-bold", "mb-5", "mt-5"], ["type", "button", 1, "btn", "btn-primary", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "myExtraLargeModalLabel", "bsModal", "", "role", "dialog", "tabindex", "-1", 1, "modal", "fade", "bd-example-modal-xl"], ["bdexamplemodalxl", "bs-modal"], [1, "modal-dialog", "modal-xl"], ["id", "exampleModalScrollableTitle", 1, "modal-title"], ["aria-hidden", "true", "aria-labelledby", "myLargeModalLabel", "bsModal", "", "role", "dialog", "tabindex", "-1", 1, "modal", "fade", "bd-example-modal-lg"], ["bdexamplemodallg", "bs-modal"], [1, "modal-dialog", "modal-lg"], ["data-target", "bd-example-modal-sm", "type", "button", 1, "btn", "btn-primary", "mb-3", 3, "click"], ["aria-hidden", "true", "aria-labelledby", "mySmallModalLabel", "bsModal", "", "role", "dialog", "tabindex", "-1", 1, "modal", "fade", "bd-example-modal-sm"], ["bdexamplemodalsm", "bs-modal"], [1, "modal-dialog", "modal-sm"], [1, "h4", "text-success", "font-weight-bold", "mt-md", "mb-4"], [1, "d-block", "text-uppercase", "font-weight-bold", "mb-3"], [1, "input-group"], [1, "ni", "ni-calendar-grid-58"], ["placeholder", "Select Date..", "type", "text", 1, "flatpickr", "flatpickr-input", "form-control", 3, "blur", "focus"], [1, "input-daterange"], ["placeholder", "Range", "type", "text", 1, "flatpickr", "range", "form-control", 3, "blur", "focus"], ["placeholder", "Datetimepicker", "type", "text", 1, "flatpickr", "datetimepicker", "form-control", 3, "blur", "focus"], [1, "row", "tooltips-popovers"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-sm", "btn-info", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-sm", "btn-success", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-sm", "btn-warning", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-sm", "btn-danger", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "top", "tooltip", "Tooltip on top", "type", "button", 1, "btn", "btn-sm", "btn-default", "btn-tooltip"], ["data-animation", "true", "data-container", "body", "placement", "bottom", "tooltip", "Tooltip on bottom", "type", "button", 1, "btn", "btn-sm", "btn-secondary", "btn-tooltip", "mt-2"], ["data-animation", "true", "data-container", "body", "data-delay", "100", "placement", "left", "tooltip", "Tooltip on left", "type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "bottom", "tooltip", "Tooltip on bottom", "type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-tooltip", "mr-3"], ["data-animation", "true", "data-container", "body", "placement", "right", "tooltip", "Tooltip on right", "type", "button", 1, "btn", "btn-sm", "btn-primary", "btn-tooltip"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-primary", "mr-3"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-info", "mr-3"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-success", "mr-3"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-warning", "mr-3"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-danger", "mr-3"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-default"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-secondary", "mt-3"], ["container", "body", "placement", "left", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-default", "mr-3"], ["container", "body", "placement", "top", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-default", "mr-3"], ["container", "body", "placement", "right", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-default", "mr-3"], ["container", "body", "placement", "bottom", "popover", "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.", "type", "button", 1, "btn", "btn-sm", "btn-default"], [1, "h4", "text-success", "font-weight-bold", "mt-md", "mb-4", "mt-5"], [1, "col-md-5", "col-sm-8"], [1, "section", 2, "background-image", "url('assets/img/ill/1.svg')"], [1, "container", "py-md"], [1, "row", "justify-content-between", "align-items-center"], [1, "col-lg-6", "mb-lg-auto"], [1, "rounded", "overflow-hidden", "transform-perspective-left"], [3, "showIndicators"], ["alt", "First slide", "src", "assets/img/theme/img-1-1200x1000.jpg", 1, "img-fluid"], ["alt", "Second slide", "src", "assets/img/theme/img-2-1200x1000.jpg", 1, "img-fluid"], ["alt", "Third slide", "src", "assets/img/theme/img-1-1200x1000.jpg", 1, "img-fluid"], [1, "col-lg-5", "mb-5", "mb-lg-0"], [1, "lead", "mt-4"], ["href", "https://demos.creative-tim.com/imposter-coding/#/documentation/carousel", 1, "btn", "btn-white", "mt-4"], [1, "section", "section-lg", "section-nucleo-icons", "pb-250"], [1, "col-lg-8", "text-center"], [1, "btn-wrapper"], ["href", "https://demos.creative-tim.com/imposter-coding/#/documentation/icons", 1, "btn", "btn-primary"], ["href", "https://nucleoapp.com/?ref=1712", "target", "_blank", 1, "btn", "btn-default", "mt-3", "mt-md-0"], [1, "blur--hover"], ["href", "https://demos.creative-tim.com/imposter-coding/#/documentation/icons"], ["data-toggle", "on-screen", 1, "icons-container", "blur-item", "mt-5", "on-screen"], [1, "icon", "ni", "ni-diamond"], [1, "icon", "icon-sm", "ni", "ni-album-2"], [1, "icon", "icon-sm", "ni", "ni-app"], [1, "icon", "icon-sm", "ni", "ni-atom"], [1, "icon", "ni", "ni-bag-17"], [1, "icon", "ni", "ni-bell-55"], [1, "icon", "ni", "ni-credit-card"], [1, "icon", "icon-sm", "ni", "ni-briefcase-24"], [1, "icon", "icon-sm", "ni", "ni-building"], [1, "icon", "icon-sm", "ni", "ni-button-play"], [1, "icon", "ni", "ni-calendar-grid-58"], [1, "icon", "ni", "ni-camera-compact"], [1, "icon", "ni", "ni-chart-bar-32"], [1, "blur-hidden", "h5", "text-success"], ["aria-labelledby", "multiDropdownMenu", 1, "dropdown-menu"], ["href", "javascript:;", 1, "dropdown-item"], ["dropdown", "", 1, ""], ["href", "javascript:;", "dropdownToggle", "", "id", "navbarDropdown2", 1, "dropdown-item", "dropdown-toggle"], [1, "dropdown-menu"], [1, "ni", "ni-single-02"], [1, "dropdown-divider"], ["role", "menu", "aria-labelledby", "button-dropup", 1, "dropdown-menu", "dropdown-menu-right"], ["aria-labelledby", "nav-inner-primary_dropdown_1", 1, "dropdown-menu"], ["aria-labelledby", "nav-inner-success_dropdown_1", 1, "dropdown-menu", "dropdown-menu-right"], ["aria-labelledby", "navbar-default_dropdown_1", 1, "dropdown-menu", "dropdown-menu-right"], ["aria-labelledby", "navbar-primary_dropdown_1", 1, "dropdown-menu", "dropdown-menu-right"], ["aria-labelledby", "navbar-success_dropdown_1", 1, "dropdown-menu", "dropdown-menu-right"], [1, "ni", "ni-cloud-upload-96", "mr-2"], [1, "ni", "ni-bell-55", "mr-2"], [1, "ni", "ni-calendar-grid-58", "mr-2"], [1, "ni", "ni-istanbul"], [1, "ni", "ni-cloud-download-95"], ["x-placement", "bottom-start", 1, "dropdown-menu"], ["x-placement", "bottom-start", 1, "dropdown-menu", 2, "position", "absolute", "transform", "translate3d(0px, 42px, 0px)", "top", "0px", "left", "0px", "will-change", "transform"], ["href", "javascript:;", 1, "dropdown-item", "active"], [1, "dropdown-menu", "dropdown-menu-right"], ["href", "#", 1, "dropdown-item"], ["href", "#", 1, "dropdown-item", "text-danger"], [1, "ni", "ni-key-25"], [1, "ni", "ni-button-power"], ["x-placement", "bottom-end", 1, "dropdown-menu", "dropdown-menu-right"]], template: function IndexComponent_Template(rf, ctx) { if (rf & 1) {
            var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " PRO ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " All components ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A beautiful Premium Design System for Bootstrap 4 and Angular. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Purchase ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Docs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " *proudly coded by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Basic Elements ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Buttons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Pick your color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Default");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Rounded ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "button", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Outline ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "button", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " Outline Rounded ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "button", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "button", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "button", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "button", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Links ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "button", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "button", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "button", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "button", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "button", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Gradients ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "button", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "button", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "button", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "button", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Pick your style ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "button", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Left icon ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "button", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " Right icon ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "button", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, " Pick your size ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "button", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, " Small ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "button", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, " Regular ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "button", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Large Button ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Floating ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "button", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "button", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "i", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Active & Disabled ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "button", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Active ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "button", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " Disabled ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Block Level ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "button", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "button", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "button", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_204_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); return ctx.scrollTop(_r0); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "i", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " Social Buttons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "button", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, " Facebook ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "button", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Twitter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "button", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Instagram ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "button", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " Github ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "button", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, " Pinterest ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "button", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Youtube ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Vimeo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "button", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, " Slack ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "button", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Dribbble ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "button", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](256, "i", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, " Reddit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "button", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Tumblr ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "button", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "span", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "i", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, " LinkedIn ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " W/ Icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "button", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "button", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "button", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "button", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "button", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "button", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "button", 121);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "button", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Rounded w/ Icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "button", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "button", 124);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](309, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "button", 125);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "button", 126);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 127);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 128);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](321, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "button", 129);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](324, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "button", 130);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " w/ Gradient ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "button", 131);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "button", 132);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "button", 133);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "button", 134);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "button", 135);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](347, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "button", 136);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "button", 137);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](353, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "button", 138);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, " Link ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "button", 139);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "button", 140);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](366, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "button", 141);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](369, "i", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "button", 142);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](372, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "button", 143);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](374, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](375, "i", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](376, "button", 144);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "button", 145);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "i", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "button", 146);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "div", 147);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](386, "div", 148);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Inputs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](391, " Form controls ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "input", 152);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_395_listener($event) { return ctx.focus = false; })("focus", function IndexComponent_Template_input_focus_395_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](397, "div", 153);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](399, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](400, "i", 156);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "input", 157);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_401_listener($event) { return ctx.focus1 = false; })("focus", function IndexComponent_Template_input_focus_401_listener($event) { return ctx.focus1 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "input", 158);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_404_listener($event) { return ctx.focus2 = false; })("focus", function IndexComponent_Template_input_focus_404_listener($event) { return ctx.focus2 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](405, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 153);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "input", 159);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_407_listener($event) { return ctx.focus3 = false; })("focus", function IndexComponent_Template_input_focus_407_listener($event) { return ctx.focus3 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 160);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](410, "i", 156);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 161);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](413, "input", 162);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "div", 163);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](415, "input", 164);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "div", 165);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, " Form controls (alternative) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "div", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "input", 166);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_424_listener($event) { return ctx.focus4 = false; })("focus", function IndexComponent_Template_input_focus_424_listener($event) { return ctx.focus4 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](425, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "div", 167);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](427, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](429, "i", 156);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "input", 157);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_430_listener($event) { return ctx.focus5 = false; })("focus", function IndexComponent_Template_input_focus_430_listener($event) { return ctx.focus5 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "div", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "input", 168);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_433_listener($event) { return ctx.focus6 = false; })("focus", function IndexComponent_Template_input_focus_433_listener($event) { return ctx.focus6 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "div", 167);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "input", 159);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_436_listener($event) { return ctx.focus7 = false; })("focus", function IndexComponent_Template_input_focus_436_listener($event) { return ctx.focus7 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "div", 160);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](439, "i", 156);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "div", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "div", 169);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "input", 170);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_442_listener($event) { return ctx.focus8 = false; })("focus", function IndexComponent_Template_input_focus_442_listener($event) { return ctx.focus8 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 171);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "input", 172);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_444_listener($event) { return ctx.focus9 = false; })("focus", function IndexComponent_Template_input_focus_444_listener($event) { return ctx.focus9 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 173);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, " Customizable Select ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](452, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "label", 174);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, " Single Option ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](457, "select", 175);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "option", 176);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](459, " Single Option ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](460, "option", 177);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](461, " Foobar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](462, "option", 178);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](463, " Is great ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "option", 179);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](465, " Pick one ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](466, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](468, "label", 180);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](469, " Multiple Options ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](470, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "select", 181);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](472, "option", 176);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, " Multiple Options ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "option", 177);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, " Paris ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "option", 178);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, " Bucharest ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "option", 179);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, " Rome ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "option", 182);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, " New York ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "option", 183);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](483, " Miami ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "option", 184);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, " Los Santos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "option", 185);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, " Sydney ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "option", 186);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, " Piatra Neamt ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "div", 187);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](491, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Dropdowns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](497, " Multilevel ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 189);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function IndexComponent_Template_div_clickOutside_498_listener($event) { return ctx.autoclose = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "button", 190);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_499_listener($event) { return ctx.autoclose = false; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](500, " Click here ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](501, "div", 191);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](502, IndexComponent_div_502_Template, 9, 0, "div", 192);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](503, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](505, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " Dropdown ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "div", 194);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, " Click me ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](511, IndexComponent_div_511_Template, 22, 0, "div", 195);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](513, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, " Dropup ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "div", 196);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](517, "div", 197);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, " Click me ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](520, IndexComponent_div_520_Template, 22, 0, "div", 198);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](524, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](527, " Textarea ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](528, "textarea", 199);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_textarea_blur_528_listener($event) { return ctx.focus10 = false; })("focus", function IndexComponent_Template_textarea_focus_528_listener($event) { return ctx.focus10 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](534, " Tags ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "input", 201);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](536, "h3", 202);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](537, "Spinners");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](540, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](542, " Border Spinners ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 203);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](545, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "button", 205);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](547, "span", 206);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](548, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](549, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](550, "button", 207);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](551, "span", 206);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](553, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, " Colors ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](557, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "div", 208);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](560, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](561, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](562, "div", 209);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 210);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "div", 211);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](569, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](570, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](571, "div", 212);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "div", 213);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](576, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 214);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "div", 215);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](582, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](583, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](586, " Growing Spinners ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "div", 216);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](588, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](589, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "button", 205);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](591, "span", 217);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "button", 207);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](595, "span", 217);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](596, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](598, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](599, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](600, " Colors ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](602, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](603, "div", 218);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](605, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "div", 219);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](607, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](608, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "div", 220);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](610, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](611, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](612, "div", 221);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](614, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "div", 222);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](616, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](617, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "div", 223);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](620, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "div", 224);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](622, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](623, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "div", 225);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " Loading... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "div", 226);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "div", 227);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](631, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](633, " Checkboxes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](634, "div", 228);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](635, "input", 229);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](636, "label", 230);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, " Unchecked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "div", 228);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](640, "input", 231);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "label", 232);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](642, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](643, " Checked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](644, "div", 228);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](645, "input", 233);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](646, "label", 234);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](648, " Disabled Unchecked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "div", 228);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](650, "input", 235);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "label", 236);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, " Disabled Checked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "div", 237);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](655, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](657, " Radios ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "div", 238);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](659, "input", 239);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "label", 240);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](662, " Unchecked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div", 238);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](664, "input", 241);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](665, "label", 242);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](667, " Checked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "div", 238);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](669, "input", 243);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "label", 244);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](672, " Disabled unchecked ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "div", 238);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](674, "input", 245);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "label", 246);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, " Disabled checkbox ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "div", 237);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](679, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, " Toggle buttons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "label", 247);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](683, "input", 248);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](684, "span", 249);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](685, "label", 250);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](686, "input", 248);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](687, "span", 249);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](688, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](689, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "label", 251);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "input", 248);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](692, "span", 249);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](693, "label", 252);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](694, "input", 248);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](695, "span", 249);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](696, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](697, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](698, "label", 253);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](699, "input", 248);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](700, "span", 249);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "label", 254);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](702, "input", 248);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](703, "span", 249);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "div", 237);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](707, " Sliders ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](708, "div", 255);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](709, "div", 256);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](710, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](711, "div", 257);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](712, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](713, "div", 258);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "div", 259);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "div", 260);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](716, "span", 261);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](717, "div", 262);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](718, "span", 263);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "div", 264);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](720, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "Menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](724, "div", 265);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](726, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](727, " With text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](728, "nav", 266);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](730, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](731, " Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](732, "button", 268);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_732_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](733, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](734, "div", 270);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](736, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](739, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](741, "button", 268);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_741_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](742, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](743, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "ul", 276);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](745, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](747, " Discover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](749, " (current) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](752, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](753, "li", 279);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "a", 280);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](755, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](756, IndexComponent_div_756_Template, 8, 0, "div", 281);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](757, "div", 282);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](760, " With icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "nav", 283);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](762, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](764, " Menu ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](765, "button", 284);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_765_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](766, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](767, "div", 285);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](769, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](771, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](772, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](773, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "button", 284);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_774_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](775, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](776, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](777, "ul", 276);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](779, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](780, "i", 287);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](781, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](782, " Discover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](784, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](785, "i", 289);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](786, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](787, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](788, "li", 279);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "a", 290);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](790, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](792, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](793, IndexComponent_div_793_Template, 8, 0, "div", 292);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 293);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](796, "h2", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](798, " Navbars ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "nav", 294);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](800, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](802, " Default Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "button", 295);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_803_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](804, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](805, "div", 296);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](808, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](810, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](812, "button", 295);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_812_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](813, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "ul", 276);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](816, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](818, "i", 287);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, " Discover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](822, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](823, "i", 289);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](824, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](825, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "li", 279);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](827, "a", 297);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](828, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](829, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](830, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](831, IndexComponent_div_831_Template, 8, 0, "div", 298);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "nav", 299);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](833, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](835, " Primary Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "button", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_836_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](837, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "div", 301);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](839, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](843, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "button", 300);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_845_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](846, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](847, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](848, "ul", 276);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, " Discover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "span", 204);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, " (current) ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](855, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](856, " Profile ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](857, "li", 279);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "a", 302);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](860, IndexComponent_div_860_Template, 8, 0, "div", 303);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](861, "nav", 304);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](863, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](864, " Success Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](865, "button", 305);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_865_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](866, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](867, "div", 306);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](870, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](872, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](874, "button", 305);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_874_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](875, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](876, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "ul", 276);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](880, "i", 287);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](882, " Favorites ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](885, "i", 307);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](886, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](887, " Another action ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "li", 279);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "a", 308);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](890, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](891, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](892, " Settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](893, IndexComponent_div_893_Template, 8, 0, "div", 309);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](894, "nav", 310);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](896, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](897, " Danger Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](898, "button", 311);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_898_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](899, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](900, "div", 312);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](902, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](904, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](905, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](906, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "button", 311);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_907_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](908, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](909, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](910, "ul", 313);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](913, "i", 314);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, " Facebook ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](917, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](918, "i", 315);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](919, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](920, " Twitter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](923, "i", 316);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, " Google + ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](928, "i", 317);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](929, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](930, " Instagram ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "nav", 318);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](934, " Warning Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "button", 319);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_935_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](936, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](937, "div", 320);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](939, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](941, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](942, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](943, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "button", 319);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_944_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](945, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](946, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](947, "ul", 321);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](949, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](950, "i", 314);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](951, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](952, " Share ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](953, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](955, "i", 315);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](956, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](957, " Tweet ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](958, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](960, "i", 322);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "span", 288);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, " Pin ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "nav", 323);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "a", 267);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](966, " Info Color ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "button", 324);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_967_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](968, "span", 269);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "div", 325);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](970, "div", 271);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "div", 272);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "a", 273);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](974, "img", 274);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](975, "div", 275);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "button", 324);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_976_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](977, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](978, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "ul", 313);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](980, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](982, "i", 314);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](983, "span", 326);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](984, " Facebook ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](985, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](987, "i", 315);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "span", 326);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, " Twitter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "a", 286);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "i", 317);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "span", 326);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](994, " Instagram ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](995, "div", 327);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](997, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](998, "Tabs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1000, "div", 265);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1002, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1003, " With icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1004, "div", 328);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "tabset", 329);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1006, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1007, IndexComponent_ng_template_1007_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "div", 331);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1009, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1011, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1012, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1013, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1014, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1015, IndexComponent_ng_template_1015_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "div", 331);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1017, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, " Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1021, IndexComponent_ng_template_1021_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "div", 331);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1023, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1025, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1026, "div", 334);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1029, " With text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "div", 328);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "tabset", 329);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "tab", 335);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "div", 331);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1034, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1036, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1037, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1038, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1039, "tab", 336);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "div", 331);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1041, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1043, " Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1044, "tab", 337);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "div", 331);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1047, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1048, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1049, "div", 338);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1050, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1051, "div", 339);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "div", 340);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1053, "h4", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1054, " Navigation Pills ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1059, " Horizontal tabs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "div", 328);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1061, "tabset", 341);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "tab", 336);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1063, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1064, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, " Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1066, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1067, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1068, " Dramatically visualize customer directed convergence without revolutionary ROI. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "tab", 343);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1070, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1073, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1074, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1075, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1076, "tab", 344);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1077, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1078, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1079, " Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1080, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1081, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1082, " Dynamically innovate resource-leveling customer service for state of the art customer service. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1085, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1086, " Vertical tabs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1087, "div", 328);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "tabset", 345);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "tab", 336);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1090, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1092, " Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1093, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1095, " Dramatically visualize customer directed convergence without revolutionary ROI. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "tab", 343);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1097, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1099, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1101, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1102, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "tab", 344);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1104, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, " Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1107, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1108, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1109, " Dynamically innovate resource-leveling customer service for state of the art customer service. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "div", 346);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, " With Icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1114, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1115, "div", 328);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1116, "tabset", 347);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1117, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1118, IndexComponent_ng_template_1118_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1120, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1121, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1122, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1123, " Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1125, IndexComponent_ng_template_1125_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1129, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1130, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1131, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1132, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1133, IndexComponent_ng_template_1133_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1134, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1136, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1137, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1138, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1139, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1141, "div", 328);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "tabset", 348);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1144, IndexComponent_ng_template_1144_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1146, " Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1148, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1149, " Dramatically visualize customer directed convergence without revolutionary ROI. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1151, IndexComponent_ng_template_1151_Template, 2, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1154, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1155, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1156, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "div", 346);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, " Just Icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1161, "div", 349);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1162, "tabset", 350);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1163, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1164, IndexComponent_ng_template_1164_Template, 1, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1165, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1166, " Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1167, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1168, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, " Dramatically visualize customer directed convergence without revolutionary ROI. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1171, IndexComponent_ng_template_1171_Template, 1, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1172, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1173, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1174, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1175, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1176, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1177, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1178, "tabset", 351);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1179, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1180, IndexComponent_ng_template_1180_Template, 1, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1181, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1182, " Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1183, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1184, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, " Dramatically visualize customer directed convergence without revolutionary ROI. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1186, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1187, IndexComponent_ng_template_1187_Template, 1, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, " Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1190, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1191, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1192, " Dramatically maintain clicks-and-mortar solutions without functional solutions. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1193, "tab");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1194, IndexComponent_ng_template_1194_Template, 1, 0, "ng-template", 330);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, " Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1197, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1198, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1199, " Dynamically innovate resource-leveling customer service for state of the art customer service. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1200, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1201, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, " Progress bars ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1205, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1208, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1213, "progressbar", 357);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1214, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1215, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1216, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1217, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1218, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1219, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "span", 358);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1223, "progressbar", 359);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1224, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1226, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1227, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1228, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1229, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1230, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1231, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1232, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1233, "progressbar", 360);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1235, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1237, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1238, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1240, "span", 361);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1241, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1243, "progressbar", 362);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1245, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1246, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1247, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1248, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1250, "span", 363);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1251, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1252, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1253, "progressbar", 364);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1254, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1255, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1258, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1260, "span", 365);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1261, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1262, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1263, "progressbar", 366);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1264, "div", 352);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "div", 353);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1266, "div", 354);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1268, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1269, "div", 355);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1270, "span", 367);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1271, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1272, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1273, "progressbar", 368);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1274, "div", 369);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "h4", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1276, " Pagination ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1277, "pagination", 370);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1277_listener($event) { return ctx.page = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1278, "pagination", 371);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1278_listener($event) { return ctx.page0 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1279, "div", 372);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1280, "pagination", 373);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1280_listener($event) { return ctx.page1 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1281, "div", 372);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1282, "pagination", 374);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1282_listener($event) { return ctx.page2 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "div", 372);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1284, "pagination", 375);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1284_listener($event) { return ctx.page3 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "div", 372);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1286, "pagination", 376);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1286_listener($event) { return ctx.page4 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "div", 372);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1288, "pagination", 377);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_1288_listener($event) { return ctx.page5 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "h3", 378);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, "Labels");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1292, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1295, " Contextual variations ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1296, "span", 379);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1297, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "span", 380);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1299, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "span", 381);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1301, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1302, "span", 382);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1303, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1304, "span", 383);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1305, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "span", 384);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1307, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1308, "span", 385);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1309, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1310, "div", 386);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1311, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1312, " Pill Badges ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1313, "span", 387);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1314, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "span", 388);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1316, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1317, "span", 389);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1318, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1319, "span", 390);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1320, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1321, "span", 391);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1322, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1323, "span", 392);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1324, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1325, "span", 393);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1326, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "div", 386);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1329, " Links ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "a", 394);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1331, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1332, "a", 395);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1333, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "a", 396);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1335, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "a", 397);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1337, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1338, "a", 398);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1339, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "a", 399);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1341, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "a", 400);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1343, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1344, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "div", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1347, " Style ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1348, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1349, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1350, " Unread messages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "span", 401);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1352, " 24 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1353, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1355, " Notifications ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1356, "span", 403);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1357, " 4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "div", 404);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1359, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1360, " Sizes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1361, "span", 388);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1362, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "span", 405);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1364, " Medium ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1365, "span", 406);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1366, " Large badge ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1367, "h3", 407);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1368, "Alerts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "alert", 408);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "span", 409);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1371, "i", 410);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1372, "span", 411);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1373, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1374, " Success! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1375, " This is a success alert\u2014check it out! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "alert", 408);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1377, "span", 409);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1378, "i", 412);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "span", 411);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1381, " Info! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1382, " This is an info alert\u2014check it out! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1383, "alert", 408);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1384, "span", 409);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1385, "i", 412);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1386, "span", 411);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1387, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1388, " Warning! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1389, " This is a warning alert\u2014check it out! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1390, "alert", 408);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "span", 409);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1392, "i", 413);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "span", 411);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1394, "strong");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1395, " Danger! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1396, " This is an error alert\u2014check it out! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1397, "p", 414);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1398, "Toasts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1399, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "div", 415);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1401, "div", 416);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1402, "div", 417);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1403, "img", 418);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1404, "strong", 419);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1405, " Creative Tim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1406, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1407, " 11 mins ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1408, "button", 420);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1410, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1411, "div", 422);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1412, " Hello, world! This is a toast message. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1413, "div", 415);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1414, "div", 423);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "div", 424);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1416, "img", 418);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "strong", 419);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1418, " Creative Tim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1419, "small", 425);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1420, " Just now ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "button", 420);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1423, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "div", 426);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "See? Just like this.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "div", 415);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1427, "div", 427);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "div", 424);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1429, "img", 418);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "strong", 419);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1431, " Creative Tim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "small", 425);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1433, " Active ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "button", 420);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1435, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1436, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1437, "div", 426);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1438, " Heads up, toasts will stack automatically ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1439, "div", 428);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1440, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "h4", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1442, " Pre-footer Areas ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "div", 429);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "div", 430);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1445, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1447, "div", 431);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "h4", 432);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1449, "Thank you for your support!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1450, "a", 433);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1451, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1452, " Twitter \u00B7 2.5k ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "a", 434);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1454, "i", 435);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1455, " Facebook \u00B7 3.2k ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1456, "a", 436);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1457, "i", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1458, " Tumblr \u00B7 1.2k ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1459, "a", 437);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1460, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1461, " Dribbble \u00B7 1.8k ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1462, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1463, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1464, "div", 438);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1465, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1466, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1467, "div", 439);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1468, "a", 440);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1469, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1470, "p", 340);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1471, "twitter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1472, "p", 441);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1473, "@creativetim");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1474, "div", 439);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1475, "a", 442);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1476, "i", 435);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1477, "p", 340);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1478, "facebook");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1479, "p", 441);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1480, "@creativetim");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1481, "div", 227);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1482, "a", 443);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1483, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "p", 340);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1485, "slack");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "p", 441);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1487, "@creativetim");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1488, "div", 227);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1489, "a", 444);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1490, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1491, "p", 340);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1492, "instagram");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1493, "p", 441);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1494, "@creativetim");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1495, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1496, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1497, "div", 445);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1498, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1500, "div", 446);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1501, "a", 447);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1502, "i", 448);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1503, "div", 446);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "a", 447);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1505, "i", 449);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1506, "div", 446);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1507, "a", 447);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1508, "i", 450);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1509, "div", 446);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1510, "a", 447);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1511, "i", 451);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1512, "div", 446);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1513, "a", 447);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1514, "i", 452);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1515, "div", 446);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "a", 447);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1517, "i", 453);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1518, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1519, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1520, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1521, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "div", 454);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1523, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1524, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1525, "div", 455);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "h4", 340);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1527, "Get Tips & Tricks every Week!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1528, "p", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1529, " Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1530, "div", 456);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1531, "form", 457);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1532, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1533, "div", 458);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1534, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1535, "div", 153);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1536, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1537, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1538, "i", 459);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1539, "input", 460);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_1539_listener($event) { return ctx.focus11 = false; })("focus", function IndexComponent_Template_input_focus_1539_listener($event) { return ctx.focus11 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1540, "div", 461);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1541, "button", 462);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1542, " Subscribe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1543, "div", 463);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1544, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1545, "h4", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1546, "Footer Areas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1547, "div", 429);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1548, "div", 464);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1549, "div", 465);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1550, "div", 466);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1551, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1552, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1553, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1554, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1555, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1556, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1557, "div", 467);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1558, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1559, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1560, "div", 468);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1561, "div", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1562, "h4", 470);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1563, " Subscribe to our Newsletter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1564, "p", 471);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1565, " Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1566, "form", 472);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1567, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1568, "div", 458);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1569, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1570, "div", 167);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1571, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1572, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1573, "i", 459);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1574, "input", 157);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_1574_listener($event) { return ctx.focus12 = false; })("focus", function IndexComponent_Template_input_focus_1574_listener($event) { return ctx.focus12 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1575, "div", 461);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1576, "button", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1577, " Subscribe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1578, "footer", 473);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1579, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1580, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1581, "div", 474);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1582, "div", 475);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1583, "button", 476);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1584, "i", 477);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1585, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1586, " United States ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1587, IndexComponent_div_1587_Template, 25, 0, "div", 478);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1588, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1589, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1590, "button", 476);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1591, "i", 479);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1592, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1593, " English ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1594, IndexComponent_div_1594_Template, 16, 0, "div", 478);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1595, "li", 480);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1596, "\u00A9 Argon Design System");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1597, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1598, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1599, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1600, "Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1601, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1602, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1603, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1604, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1605, " Payments ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1606, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1607, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1608, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1609, " Billing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1610, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1611, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1612, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1613, " Connect ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1614, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1615, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1616, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1617, " Sigma ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1618, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1619, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1620, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1621, " Issuing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1622, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1623, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1624, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1625, " Terminal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1626, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1627, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1628, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1629, "Resources");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1630, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1631, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1632, "a", 485);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1633, " Contact Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1634, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1635, "a", 486);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1636, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1637, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1638, "a", 487);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1639, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1640, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1641, "a", 488);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1642, " License ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1643, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1644, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1645, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1646, "Company");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1647, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1648, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1649, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1650, " Support ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1651, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1652, "a", 489);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1653, " Jobs ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1654, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1655, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1656, " Privacy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1657, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1658, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1659, " Guides ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1660, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1661, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1662, " Pricing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1663, "div", 490);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1664, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1665, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1666, "Follow us:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1667, "div", 491);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1668, "a", 492);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1669, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1670, "a", 493);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1671, "i", 435);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1672, "a", 494);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1673, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1674, "footer", 495);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1675, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1676, "nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1677, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1678, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1679, "a", 496);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1680, " Creative Tim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1681, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1682, "a", 497);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1683, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1684, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1685, "a", 498);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1686, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1687, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1688, "a", 499);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1689, " License ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1690, "div", 500);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1691, " \u00A9 2019 , Proudly Coded by ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1692, "a", 501);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1693, " Creative Tim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1694, " . ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1695, "footer", 502);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1696, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1697, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1698, "div", 474);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1699, "a", 503);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1700, " Argon Design ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1701, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1702, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1703, "ul", 504);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1704, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1705, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1706, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1707, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1708, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1709, " Presentation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1710, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1711, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1712, " Discover ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1713, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1714, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1715, " Payment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1716, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1717, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1718, " Contact Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1719, "div", 474);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1720, "ul", 505);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1721, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1722, "a", 506);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1723, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1724, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1725, "a", 507);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1726, "i", 435);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1727, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1728, "a", 508);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1729, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1730, "footer", 509);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1731, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1732, "div", 510);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1733, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1734, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1735, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1736, "img", 511);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1737, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1738, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1739, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1740, "Company");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1741, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1742, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1743, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1744, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1745, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1746, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1747, " Careers ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1748, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1749, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1750, " Press ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1751, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1752, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1753, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1754, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1755, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1756, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1757, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1758, " How it works ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1759, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1760, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1761, " Pricing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1762, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1763, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1764, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1765, "Resources");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1766, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1767, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1768, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1769, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1770, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1771, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1772, " Case study ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1773, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1774, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1775, " Connect ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1776, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1777, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1778, " Help Center ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1779, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1780, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1781, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1782, "Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1783, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1784, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1785, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1786, " Book a demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1787, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1788, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1789, " Mail us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1790, "div", 512);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1791, "a", 513);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1792, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1793, "a", 514);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1794, "i", 435);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1795, "a", 515);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1796, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1797, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1798, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1799, "div", 516);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1800, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1801, "nav");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1802, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1803, "li", 517);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1804, "a", 496);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1805, " @Argon ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1806, "li", 517);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1807, "a", 497);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1808, " Terms & Conditions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1809, "li", 517);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1810, "a", 498);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1811, " Privacy Policy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1812, "li", 517);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1813, "a", 499);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1814, " Legal Notice ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1815, "div", 474);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1816, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1817, " Language: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1818, "div", 518);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1819, "i", 479);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1820, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1821, " English ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1822, IndexComponent_div_1822_Template, 16, 0, "div", 519);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1823, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1824, "div", 431);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1825, "div", 520);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1826, " Mastercard is a registered trademark and the circles design is a trademark of Mastercard International Incorporated. The Spendesk Prepaid Card/This card is issued by Transact Payments Limited pursuant to licence by Mastercard International Incorporated. The Spendesk accounts are issued by Transact Payments Limited. Transact Payments Limited is authorised and regulated by the Gibraltar Financial Services Commission. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1827, "footer", 509);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1828, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1829, "div", 510);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1830, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1831, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1832, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1833, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1834, "About Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1835, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1836, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1837, "a", 485);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1838, " Contact Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1839, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1840, "a", 486);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1841, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1842, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1843, "a", 487);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1844, " Blog ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1845, "li", 277);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1846, "a", 488);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1847, " License ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1848, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1849, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1850, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1851, "Market");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1852, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1853, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1854, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1855, " Sales FAQ ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1856, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1857, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1858, " How to Register ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1859, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1860, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1861, " Sell Goods ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1862, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1863, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1864, " Receive Payment ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1865, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1866, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1867, " Transactions Issues ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1868, "div", 521);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1869, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1870, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1871, "Social Feed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1872, "div", 522);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1873, "div", 523);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1874, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1875, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1876, " How to handle ethical disagreements with your clients. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1877, "div", 523);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1878, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1879, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1880, " The tangible benefits of designing at 1x pixel density. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1881, "div", 523);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1882, "i", 435);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1883, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1884, " A collection of 25 stunning sites that you can use for inspiration. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1885, "div", 521);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1886, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1887, "h4", 483);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1888, "Numbers Don't Lie");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1889, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1890, " 14.521 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1891, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1892, " Freelancers ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1893, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1894, " 1.423.183 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1895, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1896, " Transactions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1897, "h4", 525);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1898, "Follow Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1899, "ul", 526);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1900, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1901, "button", 527);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1902, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1903, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1904, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1905, "button", 528);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1906, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1907, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1908, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1909, "button", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1910, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1911, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1912, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1913, "div", 529);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1914, " Copyright \u00A9 2019 Creative Tim All Rights Reserved. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1915, "footer", 530);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1916, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1917, "div", 510);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1918, "div", 531);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1919, "div", 532);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1920, "img", 533);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1921, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1922, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1923, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1924, "h4", 346);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1925, "About Us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1926, "ul", 534);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1927, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1928, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1929, " Our mission ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1930, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1931, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1932, " Media Kit ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1933, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1934, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1935, " Contact ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1936, "div", 481);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1937, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1938, "h4", 346);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1939, "Social");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1940, "ul", 534);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1941, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1942, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1943, " Community ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1944, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1945, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1946, " Dribbble ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1947, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1948, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1949, " Twitter ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1950, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1951, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1952, " Facebook ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1953, "div", 535);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1954, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1955, "h4", 346);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1956, "Newsletter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1957, "ul", 534);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1958, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1959, " We handpicked the most interesting content for you. No spam. It takes one click to unsubscribe. Give it a try! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1960, "form", 536);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1961, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1962, "input", 537);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_1962_listener($event) { return ctx.focus13 = false; })("focus", function IndexComponent_Template_input_focus_1962_listener($event) { return ctx.focus13 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1963, "button", 538);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1964, " Subscribe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1965, "hr", 539);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1966, "div", 482);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1967, "ul", 540);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1968, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1969, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1970, " Terms & conditions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1971, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1972, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1973, " Privacy policy ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1974, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1975, "a", 278);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1976, " Legal notice ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1977, "div", 541);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1978, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1979, "h2", 542);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1980, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1981, " Typography ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1982, "h3", 543);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1983, "Headings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1984, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1985, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1986, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1987, " Heading 1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1988, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1989, "h1", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1990, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1991, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1992, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1993, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1994, " Heading 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1995, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1996, "h2", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1997, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1998, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1999, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2000, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2001, " Heading 3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2002, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2003, "h3", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2004, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2005, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2006, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2007, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2008, " Heading 4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2009, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2010, "h4", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2011, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2012, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2013, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2014, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2015, " Heading 5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2016, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2017, "h5", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2018, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2019, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2020, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2021, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2022, " Heading 6 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2023, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2024, "h6", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2025, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2026, "h3", 549);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2027, " Display titles ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2028, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2029, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2030, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2031, " Display 1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2032, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2033, "h1", 550);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2034, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2035, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2036, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2037, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2038, " Display 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2039, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2040, "h2", 551);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2041, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2042, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2043, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2044, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2045, " Display 3 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2046, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2047, "h3", 552);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2048, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2049, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2050, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2051, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2052, " Display 4 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2053, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2054, "h4", 553);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2055, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2056, "h3", 549);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2057, " Specialized titles ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2058, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2059, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2060, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2061, " Heading ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2062, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2063, "h3", 554);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2064, "Argon Design System PRO");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2065, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2066, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2067, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2068, " Heading title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2069, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2070, "h3", 555);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2071, " Argon Design System PRO ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2072, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2073, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2074, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2075, " Heading seaction ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2076, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2077, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2078, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2079, "Header with small subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2080, "p", 556);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2081, " According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record maximum. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2082, "h3", 549);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2083, "Paragraphs");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2084, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2085, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2086, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2087, " Paragraph ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2088, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2089, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2090, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2091, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2092, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2093, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2094, " Lead text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2095, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2096, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2097, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that's a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2098, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2099, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2100, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2101, " Quote ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2102, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2103, "blockquote", 557);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2104, "p", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2105, " I always felt like I could do anything. That's the main thing people are controlled by! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2106, "footer", 558);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2107, " Someone famous in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2108, "cite", 559);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2109, " Source Title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2110, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2111, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2112, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2113, " Muted text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2114, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2115, "p", 560);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2116, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2117, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2118, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2119, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2120, " Primary text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2121, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2122, "p", 358);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2123, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2124, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2125, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2126, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2127, " Info text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2128, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2129, "p", 561);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2130, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2131, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2132, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2133, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2134, " Success text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2135, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2136, "p", 562);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2137, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2138, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2139, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2140, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2141, " Warning text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2142, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2143, "p", 563);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2144, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2145, "div", 544);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2146, "div", 545);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2147, "small", 546);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2148, " Danger text ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2149, "div", 547);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2150, "p", 564);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2151, " I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2152, "h2", 542);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2153, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2154, " Images ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2155, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2156, "div", 565);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2157, "small", 566);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2158, " Image ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2159, "img", 567);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2160, "div", 565);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2161, "small", 566);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2162, " Circle Image ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2163, "img", 568);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2164, "div", 569);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2165, "small", 566);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2166, " Raised ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2167, "img", 570);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2168, "div", 569);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2169, "small", 566);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2170, " Circle Raised ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2171, "img", 571);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2172, "div", 572);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2173, "div", 565);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2174, "small", 566);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2175, " Avatar group ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2176, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2177, "a", 574);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2178, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2179, "a", 574);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2180, "img", 576);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2181, "a", 574);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2182, "img", 577);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2183, "a", 574);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2184, "img", 578);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2185, "div", 579);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2186, "small", 566);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2187, " Sizing ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2188, "a", 580);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2189, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2190, "a", 582);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2191, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2192, "a", 583);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2193, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2194, "a", 574);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2195, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2196, "a", 584);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2197, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2198, "div", 585);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2199, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2200, "h2", 542);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2201, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2202, " Content Areas ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2203, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2204, "Tables");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2205, "div", 586);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2206, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2207, " Simple With Actions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2208, "div", 587);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2209, "table", 588);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2210, "thead", 589);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2211, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2212, "th", 590);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2213, "Project");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2214, "th", 591);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2215, "Budget");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2216, "th", 592);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2217, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2218, "th", 593);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2219, "Users");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2220, "th", 594);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2221, " Completion ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2222, "th", 593);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2223, "tbody", 595);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2224, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2225, "th", 596);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2226, "div", 597);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2227, "a", 598);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2228, "img", 599);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2229, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2230, "span", 601);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2231, " Argon Design System ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2232, "td", 602);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2233, "$2500 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2234, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2235, "span", 603);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2236, "i", 604);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2237, "span", 605);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2238, " pending ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2239, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2240, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2241, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2242, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2243, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2244, "img", 576);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2245, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2246, "img", 577);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2247, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2248, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2249, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2250, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2251, "span", 608);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2252, " 60% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2253, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2254, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2255, "progressbar", 368);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2256, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2257, "div", 610);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2258, "a", 611);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2259, "i", 612);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2260, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2261, "th", 596);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2262, "div", 597);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2263, "a", 598);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2264, "img", 613);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2265, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2266, "span", 601);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2267, " Angular Now UI Kit PRO ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2268, "td", 602);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2269, "$1800 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2270, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2271, "span", 603);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2272, "i", 614);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2273, "span", 605);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2274, " completed ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2275, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2276, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2277, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2278, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2279, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2280, "img", 576);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2281, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2282, "img", 577);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2283, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2284, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2285, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2286, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2287, "span", 608);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2288, " 100% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2289, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2290, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2291, "progressbar", 364);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2292, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2293, "div", 615);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2294, "a", 611);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2295, "i", 612);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2296, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2297, "th", 596);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2298, "div", 597);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2299, "a", 598);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2300, "img", 616);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2301, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2302, "span", 601);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2303, " Black Dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2304, "td", 602);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2305, "$3150 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2306, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2307, "span", 603);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2308, "i", 617);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2309, "span", 605);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2310, " delayed ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2311, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2312, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2313, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2314, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2315, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2316, "img", 576);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2317, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2318, "img", 577);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2319, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2320, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2321, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2322, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2323, "span", 608);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2324, " 72% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2325, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2326, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2327, "progressbar", 366);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2328, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2329, "div", 615);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2330, "a", 611);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2331, "i", 612);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2332, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2333, "th", 596);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2334, "div", 597);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2335, "a", 598);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2336, "img", 618);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2337, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2338, "span", 601);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2339, " React Material Dashboard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2340, "td", 602);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2341, "$4400 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2342, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2343, "span", 603);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2344, "i", 619);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2345, "span", 605);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2346, " on schedule ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2347, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2348, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2349, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2350, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2351, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2352, "img", 576);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2353, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2354, "img", 577);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2355, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2356, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2357, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2358, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2359, "span", 608);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2360, " 90% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2361, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2362, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2363, "progressbar", 362);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2364, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2365, "div", 615);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2366, "a", 611);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2367, "i", 612);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2368, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2369, "th", 596);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2370, "div", 597);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2371, "a", 598);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2372, "img", 620);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2373, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2374, "span", 601);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2375, " Vue Paper UI Kit PRO ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2376, "td", 602);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2377, "$2200 USD");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2378, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2379, "span", 603);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2380, "i", 614);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2381, "span", 605);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2382, " completed ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2383, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2384, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2385, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2386, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2387, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2388, "img", 576);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2389, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2390, "img", 577);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2391, "a", 606);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2392, "img", 581);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2393, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2394, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2395, "span", 608);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2396, " 100% ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2397, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2398, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2399, "progressbar", 364);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2400, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2401, "div", 615);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2402, "a", 611);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2403, "i", 612);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2404, "nav", 621);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2405, "pagination", 622);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IndexComponent_Template_pagination_ngModelChange_2405_listener($event) { return ctx.page6 = $event; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2406, "div", 586);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2407, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2408, " Striped With Checkboxes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2409, "div", 623);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2410, "div", 624);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2411, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2412, "button", 625);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2413, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2414, IndexComponent_div_2414_Template, 9, 0, "div", 626);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2415, "div", 587);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2416, "table", 627);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2417, "thead", 358);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2418, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2419, "th", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2420, "#");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2421, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2422, "Product Name");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2423, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2424, "Type");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2425, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2426, "Milestone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2427, "th", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2428, "Qty");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2429, "th", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2430, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2431, "th", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2432, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2433, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2434, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2435, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2436, "div", 628);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2437, "input", 629);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2438, "label", 630);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2439, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2440, "Moleskine Agenda");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2441, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2442, "Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2443, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2444, "div", 631);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2445, "span", 632);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2446, " v1.2.0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2447, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2448, "progressbar", 633);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2449, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2450, "25");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2451, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2452, "\u20AC 49");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2453, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2454, "\u20AC 1,225");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2455, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2456, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2457, "div", 628);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2458, "input", 634);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2459, "label", 635);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2460, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2461, "Stabilo Pen");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2462, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2463, "Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2464, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2465, "div", 631);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2466, "span", 632);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2467, " v1.4.0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2468, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2469, "progressbar", 633);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2470, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2471, "30");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2472, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2473, "\u20AC 10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2474, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2475, "\u20AC 300");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2476, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2477, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2478, "div", 628);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2479, "input", 636);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2480, "label", 637);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2481, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2482, "A4 Paper Pack");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2483, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2484, "Office");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2485, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2486, "div", 631);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2487, "span", 632);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2488, " v2.0.0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2489, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2490, "progressbar", 633);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2491, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2492, "50");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2493, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2494, "\u20AC 10.99");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2495, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2496, "\u20AC 109");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2497, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2498, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2499, "div", 628);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2500, "input", 638);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2501, "label", 639);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2502, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2503, "Apple iPad");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2504, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2505, "Meeting");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2506, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2507, "div", 631);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2508, "span", 632);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2509, " v1.5.0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2510, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2511, "progressbar", 633);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2512, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2513, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2514, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2515, "\u20AC 499.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2516, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2517, "\u20AC 4,990");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2518, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2519, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2520, "div", 628);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2521, "input", 640);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2522, "label", 641);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2523, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2524, "Apple iPhone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2525, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2526, "Communication");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2527, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2528, "div", 631);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2529, "span", 632);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2530, " v1.0.0 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2531, "div", 356);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2532, "progressbar", 633);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2533, "td", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2534, "10");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2535, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2536, "\u20AC 599.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2537, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2538, "\u20AC 5,999");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2539, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2540, "td", 642);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2541, "td", 643);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2542, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2543, "td", 644);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2544, "\u20AC 35,999");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2545, "div", 586);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2546, "small", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2547, " Shopping Cart Table ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2548, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2549, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2550, "div", 587);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2551, "table", 645);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2552, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2553, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2554, "th", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2555, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2556, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2557, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2558, "Color");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2559, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2560, "Size");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2561, "th", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2562, "Price");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2563, "th", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2564, "Qty");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2565, "th", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2566, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2567, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2568, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2569, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2570, "div", 646);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2571, "img", 647);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2572, "td", 648);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2573, "a", 649);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2574, " Monaco bees ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2575, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2576, " natt\u00E9 jacket ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2577, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2578, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2579, " by Gucci ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2580, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2581, "Blue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2582, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2583, "M");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2584, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2585, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2586, " 1,490");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2587, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2588, " 1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2589, "div", 651);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2590, "button", 652);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2591, "i", 653);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2592, "button", 652);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2593, "i", 654);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2594, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2595, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2596, " 1,490");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2597, "td", 655);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2598, "button", 656);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2599, "i", 657);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2600, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2601, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2602, "div", 646);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2603, "img", 658);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2604, "td", 648);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2605, "a", 659);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2606, " Patent-leather ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2607, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2608, " ankle boots ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2609, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2610, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2611, " by Prada ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2612, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2613, "Black");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2614, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2615, "41");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2616, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2617, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2618, " 1,985");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2619, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2620, " 2 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2621, "div", 651);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2622, "button", 652);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2623, "i", 653);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2624, "button", 652);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2625, "i", 654);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2626, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2627, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2628, " 3,890");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2629, "td", 655);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2630, "button", 656);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2631, "i", 657);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2632, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2633, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2634, "div", 646);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2635, "img", 660);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2636, "td", 648);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2637, "a", 661);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2638, " Ophidia GG ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2639, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2640, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2641, " by Saint Laurent ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2642, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2643, "Black");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2644, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2645, "L");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2646, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2647, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2648, " 799");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2649, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2650, " 1 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2651, "div", 651);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2652, "button", 652);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2653, "i", 653);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2654, "button", 652);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2655, "i", 654);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2656, "td", 650);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2657, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2658, " 799");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2659, "td", 655);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2660, "button", 656);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2661, "i", 657);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2662, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2663, "td", 662);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2664, "td", 643);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2665, "Total");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2666, "td", 644);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2667, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2668, " \u20AC ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2669, " 7,346");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2670, "td", 663);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2671, "button", 664);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2672, " Complete Purchase ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2673, "div", 665);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2674, "h3", 666);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2675, " Comments ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2676, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2677, "div", 667);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2678, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2679, "div", 669);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2680, "h5", 670);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2681, "Activity feed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2682, "div", 671);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2683, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2684, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2685, "img", 672);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2686, "div", 673);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2687, "a", 674);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2688, " John Snow ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2689, "small", 675);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2690, " 3 days ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2691, "div", 676);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2692, "button", 677);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2693, "span", 678);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2694, "i", 654);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2695, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2696, " Follow ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2697, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2698, "p", 346);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2699, " Personal profiles are the perfect way for you to grab their attention and persuade recruiters to continue reading your CV because you're telling them from the off exactly why they should hire you. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2700, "img", 679);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2701, "div", 680);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2702, "div", 681);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2703, "div", 682);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2704, "a", 683);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2705, "i", 410);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2706, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2707, " 150 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2708, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2709, "i", 479);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2710, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2711, " 36 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2712, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2713, "i", 684);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2714, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2715, " 12 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2716, "div", 685);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2717, "div", 686);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2718, "div", 573);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2719, "a", 580);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2720, "img", 575);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2721, "a", 580);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2722, "img", 687);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2723, "a", 580);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2724, "img", 688);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2725, "small", 689);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2726, " and 30+ more ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2727, "div", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2728, "div", 691);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2729, "img", 692);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2730, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2731, "div", 693);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2732, "h6", 694);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2733, "Michael Lewis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2734, "p", 695);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2735, " You have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2736, "div", 682);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2737, "a", 683);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2738, "i", 410);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2739, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2740, " 3 likes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2741, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2742, "i", 684);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2743, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2744, " 2 shares ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2745, "div", 691);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2746, "img", 696);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2747, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2748, "div", 693);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2749, "h6", 694);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2750, "Jessica Stones");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2751, "p", 695);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2752, " I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2753, "div", 682);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2754, "a", 683);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2755, "i", 410);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2756, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2757, " 10 likes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2758, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2759, "i", 684);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2760, "span", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2761, " 1 share ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2762, "div", 697);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2763, "img", 698);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2764, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2765, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2766, "textarea", 699);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_textarea_blur_2766_listener($event) { return ctx.focus = false; })("focus", function IndexComponent_Template_textarea_focus_2766_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2767, "h3", 666);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2768, "Chat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2769, "div", 700);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2770, "div", 701);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2771, "div", 702);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2772, "form", 703);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2773, "div", 704);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2774, "input", 705);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_2774_listener($event) { return ctx.focus = false; })("focus", function IndexComponent_Template_input_focus_2774_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2775, "div", 160);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2776, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2777, "i", 156);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2778, "div", 706);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2779, "a", 707);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2780, "div", 708);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2781, "img", 709);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2782, "div", 710);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2783, "div", 711);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2784, "h6", 712);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2785, " Charlie Watson ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2786, "span", 713);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2787, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2788, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2789, " Typing... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2790, "a", 714);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2791, "div", 708);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2792, "img", 715);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2793, "div", 710);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2794, "div", 711);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2795, "h6", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2796, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2797, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2798, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2799, " 1 hour ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2800, "span", 716);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2801, " Computer users and programmers ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2802, "a", 714);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2803, "div", 708);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2804, "img", 717);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2805, "div", 710);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2806, "div", 711);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2807, "h6", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2808, "Mila Skylar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2809, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2810, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2811, " 24 min ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2812, "span", 716);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2813, " You can subscribe to receive weekly... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2814, "a", 714);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2815, "div", 708);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2816, "img", 718);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2817, "div", 710);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2818, "div", 711);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2819, "h6", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2820, "Sofia Scarlett");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2821, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2822, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2823, " 7 hours ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2824, "span", 716);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2825, " It's an effective resource regardless.. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2826, "a", 714);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2827, "div", 708);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2828, "img", 719);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2829, "div", 710);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2830, "div", 711);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2831, "h6", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2832, "Tom Klein");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2833, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2834, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2835, " 1 day ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2836, "span", 716);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2837, " Be sure to check it out if your dev pro... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2838, "div", 720);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2839, "div", 342);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2840, "div", 721);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2841, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2842, "div", 722);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2843, "div", 597);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2844, "img", 723);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2845, "div", 600);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2846, "h6", 724);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2847, "Charlie Watson");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2848, "span", 725);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2849, " last seen today at 1:53am ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2850, "div", 726);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2851, "button", 727);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2852, "i", 728);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2853, "div", 726);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2854, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2855, "button", 729);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2856, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2857, IndexComponent_div_2857_Template, 17, 0, "div", 626);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2858, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2859, "div", 730);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2860, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2861, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2862, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2863, "p", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2864, " It contains a lot of good lessons about effective practices ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2865, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2866, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2867, "i", 734);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2868, " 3:14am ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2869, "div", 735);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2870, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2871, "div", 736);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2872, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2873, "p", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2874, " Can it generate daily design links that include essays and data visualizations ?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2875, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2876, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2877, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2878, " 3:30am ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2879, "i", 737);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2880, "div", 738);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2881, "div", 739);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2882, "span", 740);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2883, " Wed, 3:27pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2884, "div", 730);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2885, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2886, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2887, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2888, "p", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2889, " Yeah! Responsive Design is geared towards those trying to build web apps ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2890, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2891, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2892, "i", 734);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2893, " 4:31pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2894, "div", 735);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2895, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2896, "div", 736);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2897, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2898, "p", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2899, "Excellent, I want it now !");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2900, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2901, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2902, " 4:40pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2903, "i", 737);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2904, "div", 730);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2905, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2906, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2907, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2908, "p", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2909, " You can easily get it; The content here is all free ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2910, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2911, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2912, "i", 734);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2913, " 4:42pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2914, "div", 735);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2915, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2916, "div", 736);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2917, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2918, "p", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2919, " Awesome, blog is important source material for anyone who creates apps? beacuse these blogs offer a lot of information about website development. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2920, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2921, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2922, " 4:46pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2923, "i", 737);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2924, "div", 730);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2925, "div", 741);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2926, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2927, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2928, "div", 742);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2929, "img", 743);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2930, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2931, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2932, "i", 734);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2933, " 4:47pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2934, "div", 735);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2935, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2936, "div", 736);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2937, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2938, "p", 548);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2939, " At the end of the day \u00E2\u0080\u00A6 the native dev apps is where users are ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2940, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2941, "small", 733);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2942, " 4:47pm ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2943, "i", 737);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2944, "div", 730);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2945, "div", 731);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2946, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2947, "div", 732);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2948, "div", 744);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2949, "div", 745);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2950, "div", 746);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2951, "div", 747);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2952, "p", 748);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2953, " Typing... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2954, "div", 749);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2955, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2956, "div", 153);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2957, "input", 750);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_2957_listener($event) { return ctx.focus14 = false; })("focus", function IndexComponent_Template_input_focus_2957_listener($event) { return ctx.focus14 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2958, "div", 160);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2959, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2960, "i", 751);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2961, "div", 752);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2962, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2963, "h2", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2964, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2965, " Cards ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2966, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2967, "Blog Cards");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2968, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2969, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2970, "div", 754);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2971, "div", 755);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2972, "h6", 756);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2973, "i", 757);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2974, " Focus ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2975, "p", 758);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2976, " Our brains are finely attuned to distraction ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2977, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2978, "img", 759);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2979, "div", 760);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2980, "div", 761);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2981, "img", 762);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2982, "div", 763);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2983, "h6", 764);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2984, "i", 765);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2985, " Focus ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2986, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2987, "a", 767);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2988, " Stay focused ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2989, "p", 768);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2990, " Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to focus... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2991, "div", 769);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2992, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2993, "img", 770);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2994, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2995, "h6", 771);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2996, "i", 772);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2997, " Features ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2998, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2999, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3000, " FiftyThree Files For Paper ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3001, "p", 773);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3002, " Yesterday, as Facebook launched its news reader app Paper, design-focused startup FiftyThree called out Facebook... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3003, "div", 774);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3004, "div", 775);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3005, "img", 776);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3006, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3007, " Johana Doe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3008, "div", 777);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3009, "i", 287);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3010, " 10.4K \u00B7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3011, "i", 778);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3012, " 425 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3013, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3014, "div", 779);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3015, "img", 780);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3016, "div", 781);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3017, "div", 510);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3018, "h5", 782);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3019, "Card Title");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3020, "p", 773);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3021, " This is a wider card with supporting text below as a natural lead-in to additional content. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3022, "p", 783);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3023, " Last updated 3 mins ago ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3024, "div", 784);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3025, "div", 785);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3026, "div", 761);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3027, "img", 786);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3028, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3029, "h6", 787);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3030, "i", 788);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3031, " Business ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3032, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3033, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3034, " Springer Spends $343M To Buy Business Insider ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3035, "p", 773);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3036, " German media giant Axel Springer has announced it's acquiring online business news publication Business Inside... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3037, "div", 789);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3038, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3039, "h6", 764);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3040, "i", 790);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3041, " Features ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3042, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3043, "a", 767);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3044, " That's One Way To Ditch Your Passenger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3045, "p", 768);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3046, " As near as we can tell, this guy must have thought he was going over backwards break to bring the nose down... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3047, "div", 774);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3048, "div", 775);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3049, "img", 776);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3050, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3051, " Johana Doe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3052, "div", 777);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3053, "i", 287);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3054, " 10.4K \u00B7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3055, "i", 778);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3056, " 425 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3057, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3058, "div", 791);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3059, "img", 792);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3060, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3061, "h4", 793);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3062, "Here Be Dragons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3063, "p", 794);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3064, " Our brains are finely attuned to distraction, so today's digital environment makes it especially hard to focus... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3065, "div", 795);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3066, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3067, "img", 796);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3068, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3069, "h6", 771);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3070, "i", 772);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3071, " News ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3072, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3073, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3074, " Focus on Your Employees ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3075, "p", 773);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3076, " Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3077, "div", 774);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3078, "div", 775);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3079, "img", 776);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3080, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3081, " Dylan Wyatt ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3082, "div", 777);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3083, "i", 287);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3084, " 10.4K \u00B7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3085, "i", 778);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3086, " 425 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3087, "div", 668);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3088, "img", 797);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3089, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3090, "h5", 798);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3091, "Get started with Argon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3092, "small", 524);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3093, " by John Snow on Oct 29th at 10:23 AM ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3094, "p", 799);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3095, " Argon is a great free UI package based on Bootstrap 4 that includes the most important components and features. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3096, "a", 800);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3097, " View article ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3098, "h3", 666);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3099, " Profile Cards ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3100, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3101, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3102, "div", 801);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3103, "div", 669);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3104, "div", 761);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3105, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3106, "button", 802);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3107, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3108, IndexComponent_div_3108_Template, 7, 0, "div", 803);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3109, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3110, "img", 804);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3111, "div", 763);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3112, "h4", 553);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3113, "Dylan Wyatt");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3114, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3115, "Team Lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3116, "div", 587);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3117, "ul", 805);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3118, "li", 806);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3119, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3120, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3121, "div", 807);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3122, "i", 765);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3123, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3124, "h6", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3125, "Dedicated entrepreneur");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3126, "li", 806);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3127, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3128, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3129, "div", 808);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3130, "i", 809);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3131, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3132, "h6", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3133, "Urban exploration");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3134, "li", 806);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3135, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3136, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3137, "div", 810);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3138, "i", 811);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3139, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3140, "h6", 690);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3141, " Able to get good at everything ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3142, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3143, "div", 812);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3144, "div", 813);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3145, "div", 814);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3146, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3147, "img", 815);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3148, "div", 763);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3149, "div", 816);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3150, "a", 817);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3151, " Connect ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3152, "a", 818);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3153, " Message ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3154, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3155, "div", 819);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3156, "div", 820);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3157, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3158, "span", 821);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3159, " 22 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3160, "span", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3161, " Friends ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3162, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3163, "span", 821);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3164, " 10 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3165, "span", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3166, " Photos ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3167, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3168, "span", 821);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3169, " 89 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3170, "span", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3171, " Comments ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3172, "div", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3173, "h5", 822);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3174, " Daisy Paisley");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3175, "span", 823);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3176, " , 28 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3177, "div", 824);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3178, "i", 825);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3179, " Bucharest, Romania ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3180, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3181, "div", 826);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3182, "div", 827);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3183, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3184, "img", 828);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3185, "div", 829);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3186, "Austin Johnson");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3187, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3188, "h6", 830);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3189, " Project Manager ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3190, "p", 773);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3191, " Don't be scared of the truth because we need to restart the human foundation in truth And I love you... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3192, "div", 831);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3193, "button", 832);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3194, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3195, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3196, "button", 833);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3197, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3198, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3199, "button", 146);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3200, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3201, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3202, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3203, "div", 834);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3204, "div", 814);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3205, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3206, "img", 835);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3207, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3208, "h6", 836);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3209, "Project Manager");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3210, "h4", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3211, "Austin Johnson");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3212, "p", 773);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3213, " Don't be scared of the truth because we need to restart the human foundation in truth And I love you... ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3214, "a", 837);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3215, " Follow ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3216, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3217, "div", 838);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3218, "img", 839);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3219, "div", 669);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3220, "div", 814);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3221, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3222, "img", 840);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3223, "div", 763);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3224, "div", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3225, "h5", 841);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3226, " Johana Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3227, "span", 823);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3228, " , 37 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3229, "div", 824);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3230, "i", 825);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3231, " Chicago, USA ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3232, "div", 820);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3233, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3234, "span", 821);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3235, " 23K ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3236, "span", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3237, " Followers ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3238, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3239, "span", 821);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3240, " 47 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3241, "span", 333);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3242, " Posts ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3243, "button", 842);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3244, " Like! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3245, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3246, "div", 843);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3247, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3248, "img", 844);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3249, "div", 761);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3250, "div", 193);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3251, "button", 802);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3252, "i", 291);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3253, IndexComponent_div_3253_Template, 7, 0, "div", 803);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3254, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3255, "h4", 845);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3256, "Jane Doe");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3257, "p", 846);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3258, "Team Lead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3259, "div", 587);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3260, "table", 847);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3261, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3262, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3263, "td", 848);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3264, "div", 849);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3265, "i", 850);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3266, " Skills ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3267, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3268, "Leadership");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3269, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3270, "td", 848);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3271, "div", 849);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3272, "i", 851);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3273, " Hobbies ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3274, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3275, "Skiing, Chess");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3276, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3277, "td", 848);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3278, "div", 849);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3279, "i", 852);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3280, " Level ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3281, "td", 609);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3282, "\u00B7 \u00B7 \u00B7 \u00B7 \u00B7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3283, "h3", 666);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3284, " Full Background Cards ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3285, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3286, "div", 853);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3287, "div", 854);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3288, "div", 855);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3289, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3290, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3291, "div", 856);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3292, "h6", 857);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3293, " New Challenges ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3294, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3295, "Touch on a trend");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3296, "div", 853);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3297, "div", 854);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3298, "div", 858);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3299, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3300, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3301, "div", 856);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3302, "h6", 857);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3303, " New Opportunities ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3304, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3305, "Constantly growing");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3306, "div", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3307, "div", 859);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3308, "div", 860);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3309, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3310, "div", 856);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3311, "h6", 861);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3312, "Sales Leads");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3313, "a", 484);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3314, "h5", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3315, " Configure Blockchain Technology ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3316, "h3", 666);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3317, " Pricing Cards ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3318, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3319, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3320, "div", 862);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3321, "div", 863);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3322, "h6", 864);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3323, " Bravo pack ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3324, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3325, "div", 865);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3326, "$49");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3327, "span", 425);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3328, " per application ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3329, "ul", 866);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3330, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3331, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3332, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3333, "div", 867);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3334, "i", 728);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3335, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3336, "span", 868);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3337, " Complete documentation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3338, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3339, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3340, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3341, "div", 867);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3342, "i", 869);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3343, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3344, "span", 868);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3345, " Working materials in Sketch ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3346, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3347, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3348, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3349, "div", 867);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3350, "i", 870);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3351, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3352, "span", 868);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3353, " 2GB cloud storage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3354, "button", 871);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3355, " Free Trial ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3356, "div", 872);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3357, "a", 873);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3358, " Request a demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3359, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3360, "div", 874);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3361, "div", 863);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3362, "h6", 875);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3363, "Premium pack");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3364, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3365, "div", 876);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3366, "$89");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3367, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3368, " per month ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3369, "ul", 866);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3370, "li", 877);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3371, "b", 358);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3372, " 20GB ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3373, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3374, " File Storage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3375, "li", 877);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3376, "b", 358);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3377, " Sketch ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3378, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3379, " Working materials in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3380, "li", 877);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3381, "b", 358);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3382, " Premium ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3383, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3384, " Support ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3385, "div", 872);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3386, "a", 878);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3387, " Request a demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3388, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3389, "div", 879);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3390, "div", 880);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3391, "h6", 881);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3392, " Standard ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3393, "h1", 882);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3394, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3395, " $ ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3396, " 69 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3397, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3398, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3399, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3400, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3401, "div", 883);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3402, "i", 737);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3403, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3404, "span", 884);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3405, " Sharing Tools ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3406, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3407, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3408, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3409, "div", 883);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3410, "i", 737);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3411, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3412, "span", 884);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3413, " Design Tools ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3414, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3415, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3416, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3417, "div", 885);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3418, "i", 657);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3419, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3420, "span", 884);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3421, " Private Messages ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3422, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3423, "div", 607);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3424, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3425, "div", 885);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3426, "i", 657);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3427, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3428, "span", 884);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3429, " Private Brand ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3430, "a", 886);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3431, " Choose plan ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3432, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3433, "div", 887);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3434, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3435, "h6", 888);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3436, " Premium ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3437, "h1", 766);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3438, "small", 425);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3439, " $ ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3440, " 109 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3441, "ul");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3442, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3443, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3444, " 100 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3445, " Projects");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3446, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3447, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3448, " 5 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3449, " Team Members");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3450, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3451, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3452, " 55 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3453, " Personal Contacts");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3454, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3455, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3456, " 5K ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3457, " Messages");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3458, "a", 889);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3459, " Get Started ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3460, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3461, "div", 890);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3462, "div", 669);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3463, "img", 891);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3464, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3465, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3466, "div", 739);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3467, "h5", 892);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3468, "Platinum Pack");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3469, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3470, " \u00A3 349 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3471, "hr", 619);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3472, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3473, "ul", 893);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3474, "li", 894);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3475, "350 messages");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3476, "li", 894);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3477, "10K emails");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3478, "li", 894);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3479, "24/7 Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3480, "div", 895);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3481, "button", 896);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3482, "Get plan");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3483, "div", 753);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3484, "div", 897);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3485, "div", 863);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3486, "div", 898);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3487, "i", 899);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3488, "p", 425);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3489, "Premium pack");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3490, "div", 332);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3491, "div", 900);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3492, "span", 901);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3493, " $ ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3494, "span", 902);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3495, " 89 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3496, "span", 903);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3497, " /mo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3498, "ul", 904);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3499, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3500, "p", 905);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3501, "10 Templates + Updates");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3502, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3503, "p", 905);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3504, "+ Adobe Sketch");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3505, "div", 872);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3506, "button", 906);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3507, " Upgrade ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3508, "div", 907);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3509, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3510, "h2", 542);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3511, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3512, " Javascript Components ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3513, "h3", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3514, "Modals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3515, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3516, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3517, "button", 908);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3517_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3520); return _r29.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3518, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3519, "div", 909, 910);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3521, "div", 911);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3522, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3523, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3524, "h6", 914);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3525, " Type your modal title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3526, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3526_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3520); return _r29.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3527, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3528, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3529, "div", 916);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3530, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3531, " Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3532, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3533, " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3534, "div", 917);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3535, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3536, " Save changes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3537, "button", 918);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3537_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3520); return _r29.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3538, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3539, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3540, "button", 919);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3540_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3543); return _r30.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3541, " Notification ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3542, "div", 920, 921);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3544, "div", 922);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3545, "div", 923);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3546, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3547, "h6", 924);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3548, " Your attention is required ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3549, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3549_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3543); return _r30.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3550, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3551, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3552, "div", 916);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3553, "div", 925);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3554, "i", 926);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3555, "h4", 927);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3556, "You should read this!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3557, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3558, " A small river named Duden flows by their place and supplies it with the necessary regelialia. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3559, "div", 917);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3560, "button", 928);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3561, " Ok, Got it ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3562, "button", 929);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3562_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3543); return _r30.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3563, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3564, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3565, "button", 930);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3565_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3568); return _r31.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3566, " Form ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3567, "div", 931, 932);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3569, "div", 933);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3570, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3571, "div", 934);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3572, "div", 935);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3573, "div", 936);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3574, "div", 937);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3575, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3576, " Sign in with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3577, "div", 938);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3578, "a", 939);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3579, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3580, "img", 940);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3581, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3582, " Github ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3583, "a", 939);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3584, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3585, "img", 941);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3586, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3587, " Google ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3588, "div", 942);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3589, "div", 943);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3590, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3591, " Or sign in with credentials ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3592, "form", 944);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3593, "div", 945);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3594, "div", 704);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3595, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3596, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3597, "i", 459);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3598, "input", 946);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3598_listener($event) { return ctx.focus = false; })("focus", function IndexComponent_Template_input_focus_3598_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3599, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3600, "div", 704);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3601, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3602, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3603, "i", 947);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3604, "input", 948);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3604_listener($event) { return ctx.focus15 = false; })("focus", function IndexComponent_Template_input_focus_3604_listener($event) { return ctx.focus15 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3605, "div", 949);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3606, "input", 950);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3607, "label", 951);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3608, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3609, " Remember me ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3610, "div", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3611, "button", 952);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3612, " Sign in ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3613, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3614, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3615, "button", 953);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3615_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3618); return _r32.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3616, " Long Modal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3617, "div", 954, 955);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3619, "div", 956);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3620, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3621, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3622, "h5", 957);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3623, " Modal title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3624, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3624_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3618); return _r32.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3625, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3626, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3627, "div", 916);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3628, " I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3629, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3630, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3631, " As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3632, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3633, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3634, " We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3635, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3636, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3637, " There's nothing I really wanted to do in life that I wasn't able to get good at. That's my skill. I'm not really specifically talented at anything except for the ability to learn. That's what I do. That's what I'm here for. Don't be afraid to be wrong because you can't learn anything from a compliment. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3638, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3639, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3640, " It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3641, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3642, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3643, " The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3644, "div", 917);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3645, "button", 958);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3645_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3618); return _r32.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3646, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3647, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3648, " Save changes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3649, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3650, "button", 959);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3650_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3653); return _r33.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3651, " Message Modal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3652, "div", 960, 961);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3654, "div", 962);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3655, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3656, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3657, "h5", 963);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3658, " New message to CT ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3659, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3659_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3653); return _r33.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3660, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3661, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3662, "div", 964);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3663, "form");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3664, "div", 200);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3665, "label", 965);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3666, " Recipient: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3667, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3668, "input", 966);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3668_listener($event) { return ctx.focus16 = false; })("focus", function IndexComponent_Template_input_focus_3668_listener($event) { return ctx.focus16 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3669, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3670, "label", 967);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3671, " Message: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3672, "textarea", 968);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_textarea_blur_3672_listener($event) { return ctx.focus17 = false; })("focus", function IndexComponent_Template_textarea_focus_3672_listener($event) { return ctx.focus17 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3673, "div", 969);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3674, "button", 958);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3674_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3653); return _r33.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3675, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3676, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3677, " Send message ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3678, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3679, "button", 970);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3679_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3682); return _r34.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3680, " SignUp Modal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3681, "div", 971, 972);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3683, "div", 933);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3684, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3685, "div", 934);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3686, "div", 935);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3687, "div", 936);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3688, "div", 937);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3689, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3690, " Sign Up with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3691, "div", 938);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3692, "a", 939);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3693, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3694, "img", 941);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3695, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3696, " Google ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3697, "a", 939);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3698, "span", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3699, "img", 940);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3700, "span", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3701, " Github ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3702, "div", 942);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3703, "div", 943);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3704, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3705, " Or sign up here: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3706, "form", 944);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3707, "div", 945);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3708, "div", 973);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3709, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3710, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3711, "i", 459);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3712, "input", 946);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3712_listener($event) { return ctx.focus18 = false; })("focus", function IndexComponent_Template_input_focus_3712_listener($event) { return ctx.focus18 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3713, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3714, "div", 704);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3715, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3716, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3717, "i", 947);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3718, "input", 948);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3718_listener($event) { return ctx.focus19 = false; })("focus", function IndexComponent_Template_input_focus_3718_listener($event) { return ctx.focus19 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3719, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3720, "div", 704);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3721, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3722, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3723, "i", 947);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3724, "input", 974);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3724_listener($event) { return ctx.focus20 = false; })("focus", function IndexComponent_Template_input_focus_3724_listener($event) { return ctx.focus20 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3725, "div", 469);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3726, "button", 952);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3727, " Sign Up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3728, "h5", 975);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3729, "Sizes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3730, "button", 976);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3730_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3733); return _r35.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3731, " Extra large modal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3732, "div", 977, 978);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3734, "div", 979);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3735, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3736, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3737, "h5", 980);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3738, " Modal title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3739, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3739_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3733); return _r35.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3740, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3741, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3742, "div", 916);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3743, " Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out. It's like a little kid, a little boy, looking at colors, and no one told him what colors are good, before somebody tells you you shouldn't like pink because that's for girls, or you'd instantly become a gay two-year-old. Why would anyone pick blue over pink? Pink is obviously a better color. Everyone's born confident, and everything's taken away from you ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3744, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3745, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3746, " As we live, our hearts turn colder. Cause pain is what we go through as we become older. We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. We get our heart broken by people we love, even that we give them all we have. Then we lose family over time. What else could rust the heart more over time? Blackgold. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3747, "div", 917);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3748, "button", 958);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3748_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3733); return _r35.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3749, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3750, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3751, " Save changes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3752, "button", 976);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3752_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3755); return _r36.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3753, " Large modal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3754, "div", 981, 982);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3756, "div", 983);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3757, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3758, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3759, "h5", 980);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3760, " Modal title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3761, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3761_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3755); return _r36.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3762, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3763, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3764, "div", 916);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3765, " The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3766, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3767, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3768, " I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3769, "div", 917);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3770, "button", 958);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3770_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3755); return _r36.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3771, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3772, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3773, " Save changes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3774, "button", 984);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3774_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3777); return _r37.show(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3775, " Small modal ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3776, "div", 985, 986);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3778, "div", 987);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3779, "div", 912);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3780, "div", 913);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3781, "h5", 980);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3782, " Modal title ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3783, "button", 915);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3783_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3777); return _r37.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3784, "span", 421);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3785, " \u00D7 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3786, "div", 916);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3787, " I always felt like I could do anything. That's the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can't do anything, you won't do anything. I was taught I could do everything. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3788, "div", 917);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3789, "button", 958);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IndexComponent_Template_button_click_3789_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3777); return _r37.hide(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3790, " Close ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3791, "button", 402);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3792, " Save changes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3793, "h3", 988);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3794, " Datepicker ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3795, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3796, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3797, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3798, " Single date ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3799, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3800, "div", 990);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3801, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3802, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3803, "i", 991);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3804, "input", 992);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3804_listener($event) { return ctx.focus21 = false; })("focus", function IndexComponent_Template_input_focus_3804_listener($event) { return ctx.focus21 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3805, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3806, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3807, " Date range ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3808, "div", 993);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3809, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3810, "div", 990);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3811, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3812, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3813, "i", 991);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3814, "input", 994);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3814_listener($event) { return ctx.focus22 = false; })("focus", function IndexComponent_Template_input_focus_3814_listener($event) { return ctx.focus22 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3815, "div", 188);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3816, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3817, " DateTimePicker ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3818, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3819, "div", 990);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3820, "div", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3821, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3822, "i", 991);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3823, "input", 995);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function IndexComponent_Template_input_blur_3823_listener($event) { return ctx.focus23 = false; })("focus", function IndexComponent_Template_input_focus_3823_listener($event) { return ctx.focus23 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3824, "div", 996);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3825, "div", 265);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3826, "h3", 988);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3827, " Tooltips ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3828, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3829, " Colors ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3830, "button", 997);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3831, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3832, "button", 998);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3833, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3834, "button", 999);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3835, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3836, "button", 1000);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3837, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3838, "button", 1001);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3839, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3840, "button", 1002);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3841, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3842, "button", 1003);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3843, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3844, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3845, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3846, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3847, " Position ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3848, "button", 1004);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3849, " On left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3850, "button", 997);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3851, " On top ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3852, "button", 1005);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3853, " On bottom ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3854, "button", 1006);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3855, " On right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3856, "div", 282);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3857, "h3", 988);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3858, " Popovers ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3859, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3860, " Colors ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3861, "button", 1007);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3862, " Primary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3863, "button", 1008);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3864, " Info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3865, "button", 1009);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3866, " Success ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3867, "button", 1010);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3868, " Warning ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3869, "button", 1011);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3870, " Danger ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3871, "button", 1012);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3872, " Default ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3873, "button", 1013);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3874, " Secondary ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3875, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3876, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3877, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3878, " Position ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3879, "button", 1014);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3880, " On left ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3881, "button", 1015);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3882, " On top ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3883, "button", 1016);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3884, " On right ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3885, "button", 1017);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3886, " On bottom ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3887, "h3", 1018);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3888, " File Upload ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3889, "div", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3890, "div", 1019);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3891, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3892, " Regular Image ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3893, "div", 1019);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3894, "small", 989);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3895, " Avatar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3896, "div", 1020);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3897, "div", 1021);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3898, "div", 1022);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3899, "div", 1023);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3900, "div", 1024);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3901, "carousel", 1025);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3902, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3903, "img", 1026);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3904, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3905, "img", 1027);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3906, "slide");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3907, "img", 1028);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3908, "div", 1029);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3909, "h1", 823);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3910, "Bootstrap carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3911, "p", 1030);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3912, " Argon Design System comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3913, "a", 1031);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3914, " See all components ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3915, "div", 1032);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3916, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3917, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3918, "div", 1033);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3919, "h2", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3920, "Nucleo Icons");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3921, "p", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3922, " The official package contains over 21.000 icons which are looking great in combination with Argon Design System. Make sure you check all of them and use those that you like the most. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3923, "div", 1034);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3924, "a", 1035);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3925, " View demo icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3926, "a", 1036);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3927, " View all icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3928, "div", 1037);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3929, "a", 1038);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3930, "div", 1039);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3931, "i", 1040);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3932, "i", 1041);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3933, "i", 1042);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3934, "i", 1043);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3935, "i", 1044);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3936, "i", 1045);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3937, "i", 1046);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3938, "i", 1047);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3939, "i", 1048);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3940, "i", 1049);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3941, "i", 1050);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3942, "i", 1051);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3943, "i", 1052);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3944, "span", 1053);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3945, " Eplore all the 21.000+ Nucleo Icons ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](394);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](103, _c0, ctx.focus === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](105, _c0, ctx.focus1 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](107, _c0, ctx.focus2 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](109, _c0, ctx.focus3 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](111, _c0, ctx.focus4 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](113, _c0, ctx.focus5 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](115, _c0, ctx.focus6 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](117, _c0, ctx.focus7 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](119, _c0, ctx.focus8 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](121, _c0, ctx.focus9 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", ctx.autoclose);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dropup", ctx.isDropup);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](123, _c0, ctx.focus10 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](208);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page0)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page1)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page2)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page3)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page4)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page5)("totalItems", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true)("type", "success");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true)("type", "info");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true)("type", "warning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dismissible", true)("type", "danger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](144);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](125, _c0, ctx.focus11 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](127, _c0, ctx.focus12 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](392);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](129, _c0, ctx.focus13 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](294);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.page6)("totalItems", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](423);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](131, _c0, ctx.focus14 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](644);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](133, _c0, ctx.focus15 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](135, _c0, ctx.focus16 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](137, _c0, ctx.focus17 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](139, _c0, ctx.focus18 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](141, _c0, ctx.focus19 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](143, _c0, ctx.focus20 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](145, _c0, ctx.focus21 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](147, _c0, ctx.focus22 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](149, _c0, ctx.focus23 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showIndicators", true);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_7__["BsDropdownMenuDirective"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabDirective"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabHeadingDirective"], ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_10__["ProgressbarComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalDirective"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_15__["PopoverDirective"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_16__["SlideComponent"]], encapsulation: 2 });
    return IndexComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-index',
                templateUrl: 'index.component.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/categories/categories.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_categories_hero_categories_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/categories-hero/categories-hero.component */ "./src/app/components/categories-hero/categories-hero.component.ts");



var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
        this.isCollapsed = true;
    }
    CategoriesComponent.prototype.ngOnInit = function () { };
    CategoriesComponent.prototype.ngOnDestroy = function () { };
    CategoriesComponent.ɵfac = function CategoriesComponent_Factory(t) { return new (t || CategoriesComponent)(); };
    CategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoriesComponent, selectors: [["app-categories"]], decls: 2, vars: 0, consts: [[1, "wrapper"]], template: function CategoriesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-categories-hero");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_components_categories_hero_categories_hero_component__WEBPACK_IMPORTED_MODULE_1__["CategoriesHeroComponent"]], encapsulation: 2 });
    return CategoriesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-categories',
                templateUrl: 'categories.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _components_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/home-hero/home-hero.component */ "./src/app/components/home-hero/home-hero.component.ts");
/* harmony import */ var _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/post-list/post-list.component */ "./src/app/components/post-list/post-list.component.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isCollapsed = true;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.prototype.ngOnDestroy = function () { };
    HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 3, vars: 0, consts: [[1, "wrapper"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home-hero");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-post-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_components_home_hero_home_hero_component__WEBPACK_IMPORTED_MODULE_1__["HomeHeroComponent"], _components_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"]], encapsulation: 2 });
    return HomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: 'home.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var _c0 = function (a0) { return { "focused": a0 }; };
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login');
    };
    LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 55, vars: 6, consts: [[1, "section-shaped", "my-0", "skew-separator", "skew-mini"], [1, "page-header", "page-header-small", "header-filter"], [1, "page-header-image", 2, "background-image", "url('assets/img/sections/unsplashs.jpg')"], [1, "container"], [1, "header-body", "text-center", "mb-7"], [1, "row", "justify-content-center"], [1, "col-xl-5", "col-lg-6", "col-md-8", "px-5"], [1, "text-white"], [1, "text-lead", "text-white"], [1, "upper"], [1, "col-lg-5", "col-md-8", "mx-auto"], [1, "card", "bg-secondary", "shadow", "border-0"], [1, "card-header", "bg-white", "pb-5"], [1, "text-muted", "text-center", "mb-3"], [1, "btn-wrapper", "text-center"], ["href", "#", 1, "btn", "btn-neutral", "btn-icon"], [1, "btn-inner--icon"], ["src", "assets/img/icons/common/github.svg"], [1, "btn-inner--text"], ["src", "assets/img/icons/common/google.svg"], [1, "card-body", "px-lg-5", "py-lg-5"], [1, "text-center", "text-muted", "mb-4"], ["role", "form"], [1, "form-group", "mb-3", 3, "ngClass"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-email-83"], ["placeholder", "Email", "type", "email", 1, "form-control", 3, "blur", "focus"], [1, "form-group", 3, "ngClass"], [1, "ni", "ni-lock-circle-open"], ["placeholder", "Password", "type", "password", 1, "form-control", 3, "blur", "focus"], [1, "custom-control", "custom-control-alternative", "custom-checkbox"], ["id", " customCheckLogin2", "type", "checkbox", 1, "custom-control-input"], ["for", " customCheckLogin2", 1, "custom-control-label"], [1, "text-default", "opacity-5"], [1, "text-center"], ["type", "button", 1, "btn", "btn-primary", "my-4"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Welcome!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Use these awesome forms to login or create new account in your project for free. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login with ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Github ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Google ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Or login with credentials ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function LoginComponent_Template_input_blur_40_listener($event) { return ctx.focus = false; })("focus", function LoginComponent_Template_input_focus_40_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function LoginComponent_Template_input_blur_46_listener($event) { return ctx.focus1 = false; })("focus", function LoginComponent_Template_input_focus_46_listener($event) { return ctx.focus1 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Remember me ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Login ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.focus === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.focus1 === true));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
    return LoginComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: 'login.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/post/post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/butterCMS.service */ "./src/app/services/butterCMS.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_highlight_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/highlight.service */ "./src/app/services/highlight.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");









function PostComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r41.post.data == null ? null : ctx_r41.post.data.featured_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.post.data == null ? null : ctx_r41.post.data.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("By ", ctx_r41.post.data == null ? null : ctx_r41.post.data.author.first_name, " ", ctx_r41.post.data == null ? null : ctx_r41.post.data.author.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 6, ctx_r41.post.data == null ? null : ctx_r41.post.data.published), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r41.post.data == null ? null : ctx_r41.post.data.body, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var PostComponent = /** @class */ (function () {
    function PostComponent(route, router, highlightService) {
        this.route = route;
        this.router = router;
        this.highlightService = highlightService;
        this.highlighted = false;
        this.loading = true;
        this.post = {
            meta: null,
            data: null
        };
    }
    PostComponent.prototype.ngAfterViewChecked = function () {
        this.highlightService.highlightAll();
        this.highlighted = true;
    };
    PostComponent.prototype.ngOnInit = function () {
        this.loading = true;
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("profile-page");
        this.showData = false;
        this.step1 = true;
        this.progressLoaderOne();
    };
    PostComponent.prototype.progressLoaderOne = function () {
        var _this = this;
        var stepOne = setTimeout(function () {
            _this.step1 = false;
            _this.step2 = true;
            _this.fetchPost();
            return stepOne;
        }, 150);
    };
    PostComponent.prototype.progressLoaderTwo = function () {
        var _this = this;
        var stepTwo = setTimeout(function () {
            _this.step3 = false;
            _this.step4 = true;
            _this.progressLoaderThree();
            return stepTwo;
        }, 150);
    };
    PostComponent.prototype.progressLoaderThree = function () {
        var _this = this;
        var stepThree = setTimeout(function () {
            _this.displayData();
            return stepThree;
        }, 150);
    };
    PostComponent.prototype.fetchPost = function () {
        var _this = this;
        this.slug$ = this.route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (params) { return (params.get('slug')); }));
        this.slug$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1))
            .toPromise()
            .then(function (slug) {
            _services_butterCMS_service__WEBPACK_IMPORTED_MODULE_2__["butterService"].post.retrieve(slug)
                .then(function (res) {
                _this.post = res.data;
                _this.step2 = false;
                _this.step3 = true;
                _this.progressLoaderTwo();
            })
                .catch(function (res) {
                console.log(res);
            });
        });
    };
    PostComponent.prototype.displayData = function () {
        if (this.post) {
            this.step4 = false;
            this.loading = false;
            this.showData = true;
        }
    };
    PostComponent.prototype.selectTag = function (tag) {
        this.tag = tag.slug;
        localStorage.setItem('tag', this.tag);
        console.log(localStorage);
        this.router.navigate(['/tag/', this.tag]);
    };
    PostComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("profile-page");
    };
    PostComponent.ɵfac = function PostComponent_Factory(t) { return new (t || PostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"])); };
    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostComponent, selectors: [["app-post"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
                _services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"]
            ])], decls: 11, vars: 2, consts: [[1, "wrapper"], [1, "section-profile-cover", "section-shaped", "my-0"], ["src", "assets/img/ill/p8.svg", 1, "bg-image", 2, "width", "100%"], [1, "separator", "separator-bottom", "separator-skew"], ["x", "0", "y", "0", "viewBox", "0 0 2560 100", "preserveAspectRatio", "none", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["points", "2560 0 2560 100 0 100", 1, "fill-secondary"], [1, "section", "bg-secondary"], [1, "container"], [1, "card", "card-profile", "shadow", "mt--300"], ["id", "border-component", "class", "tab-pane tab-example-result fade show active", "role", "tabpanel", "aria-labelledby", "border-component-tab", 4, "ngIf"], ["class", "px-4", 4, "ngIf"], ["id", "border-component", "role", "tabpanel", "aria-labelledby", "border-component-tab", 1, "tab-pane", "tab-example-result", "fade", "show", "active"], ["role", "status", 1, "spinner-border"], [1, "sr-only"], [1, "px-4"], [1, "col-md-12", "row", "justify-content-center", "post-image-container"], [1, "card-profile-image"], [1, "rounded-circle", 3, "src"], [1, "row", "justify-content-center", "mt-o-200"], [1, "text-center", "mt-5"], [1, "h6"], [1, "mt-5", "border-top"], [1, "row"], [1, "col-md-12", "post-content"], [1, "col-md-12", 3, "innerHTML"]], template: function PostComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "polygon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostComponent_div_9_Template, 4, 0, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PostComponent_div_10_Template, 17, 8, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], encapsulation: 2 });
    return PostComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-post",
                templateUrl: "post.component.html",
                providers: [
                    _services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"]
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_highlight_service__WEBPACK_IMPORTED_MODULE_4__["HighlightService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pricingpage/pricingpage.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/pricingpage/pricingpage.component.ts ***!
  \************************************************************/
/*! exports provided: PricingpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingpageComponent", function() { return PricingpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





var _c0 = function (a0) { return { "focused": a0 }; };
var PricingpageComponent = /** @class */ (function () {
    function PricingpageComponent() {
        this.isCollapsed = true;
    }
    PricingpageComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('pricing-page');
        var navbar = document.getElementById('navbar-main');
        navbar.classList.add('bg-white');
        navbar.classList.remove('navbar-dark');
        var logoImage = document.getElementById('brand-logo');
        logoImage.src = 'assets/img/brand/red.png';
    };
    PricingpageComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('pricing-page');
        var navbar = document.getElementById('navbar-main');
        navbar.classList.remove('bg-white');
        navbar.classList.add('navbar-dark');
        var logoImage = document.getElementById('brand-logo');
        logoImage.src = 'assets/img/brand/argon-white.png';
    };
    PricingpageComponent.ɵfac = function PricingpageComponent_Factory(t) { return new (t || PricingpageComponent)(); };
    PricingpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PricingpageComponent, selectors: [["app-pricingpage"]], decls: 346, vars: 7, consts: [[1, "wrapper"], [1, "header-2", "skew-separator"], [1, "navbar", "navbar-expand-lg", "bg-white", "navbar-absolute"], [1, "container"], [1, "navbar-translate"], ["href", "javascript:;", 1, "navbar-brand"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-header-2", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "example-header-2", 1, "navbar-collapse", 3, "isAnimated", "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "example-header-2", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "javascript:;", 1, "nav-link"], [1, "nav", "navbar-nav", "navbar-right"], ["href", "https://twitter.com/CreativeTim", 1, "nav-link"], [1, "fab", "fa-twitter"], ["href", "https://www.facebook.com/CreativeTim", 1, "nav-link"], [1, "fab", "fa-facebook-square"], ["href", "https://www.instagram.com/CreativeTimOfficial", 1, "nav-link"], [1, "fab", "fa-instagram"], [1, "page-header"], [1, "page-header-image", 2, "background-image", "url('assets/img/ill/p8.svg')"], [1, "container", "pt-300"], [1, "col-md-8", "mx-auto", "text-center"], [1, "display-2"], [1, "floating-box", "bg-default"], [1, "box", "text-center"], [1, "icon", "icon-shape", "bg-success", "icon-xl", "rounded-circle", "text-white"], [1, "ni", "ni-spaceship"], [1, "lead", "text-white", "p-5"], [1, "main", "mt-5"], ["id", "pricing-4", 1, "pricing-3", 2, "background-image", "url('assets/img/ill/1.svg')"], [1, "col-lg-8", "mx-auto", "text-center", "my-5"], [1, "display-3"], [1, "col-md-5", "pr-md-0"], [1, "card", "card-pricing", "text-center", "bg-default"], [1, "card-header", "bg-transparent"], [1, "text-uppercase", "ls-1", "text-primary", "py-3", "mb-0"], [1, "card-body", "px-lg-6"], [1, "display-2", "text-white"], [1, "text-muted"], [1, "list-unstyled", "my-4"], [1, "d-flex", "align-items-center"], [1, "icon", "icon-xs", "icon-shape", "icon-shape-primary", "shadow", "rounded-circle"], [1, "ni", "ni-folder-17", "text-white"], [1, "pl-2", "text-sm"], [1, "ni", "ni-camera-compact", "text-white"], [1, "ni", "ni-chart-pie-35", "text-white"], ["type", "button", 1, "btn", "btn-primary", "mb-3"], [1, "card-footer", "bg-transparent"], ["href", "javascript:;", 1, "text-muted"], [1, "col-md-7", "pl-md-0"], [1, "card", "card-pricing", "border-0", "text-center", "my-5"], [1, "card-description"], [1, "table", "table-bordered", "mt-3"], [1, "card-footer"], ["href", "javascript:;", 1, "text-primary"], [1, "section", "features-1"], [1, "badge", "badge-primary", "badge-pill", "mb-3"], [1, "lead"], [1, "col-md-4"], [1, "info"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-primary", "shadow", "rounded-circle"], [1, "ni", "ni-settings-gear-65"], [1, "info-title", "text-uppercase", "text-primary"], [1, "description", "opacity-8"], [1, "ni", "ni-bold-right", "text-primary"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-success", "shadow", "rounded-circle"], [1, "ni", "ni-atom"], [1, "info-title", "text-uppercase", "text-success"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-warning", "shadow", "rounded-circle"], [1, "ni", "ni-world"], [1, "info-title", "text-uppercase", "text-warning"], [1, "contactus-3"], ["alt", "", "src", "assets/img/ill/bg_contactus3.svg", 1, "bg-image"], [1, "container", "pt-5"], [1, "col-md-12", "text-center", "mb-5"], [1, "display-1"], ["type", "button", 1, "btn", "btn-icon", "btn-primary", "mt-3"], [1, "btn-inner--icon"], [1, "ni", "ni-chat-round"], [1, "btn-inner--text"], [1, "col-lg-3", "col-md-6", "col-6"], [1, "info", "info-hover"], [1, "icon", "icon-shape", "icon-shape-primary", "icon-lg", "shadow", "rounded-circle", "text-primary"], [1, "ni", "ni-square-pin"], [1, "info-title"], [1, "description", "px-0"], [1, "ni", "ni-email-83"], [1, "ni", "ni-mobile-button"], [1, "ni", "ni-circle-08"], [1, "project-2", "my-5"], [1, "col-lg-4", "col-md-6"], [1, "card", "card-project"], ["href", "javascript:;"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-primary", "shadow", "rounded-circle", "mx-auto"], [1, "ni", "ni-favourite-28"], [1, "card-body"], [1, "card-title", "mt-3"], ["type", "button", 1, "btn", "btn-link", "text-primary"], [1, "ni", "ni-glasses-2"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-success", "shadow", "rounded-circle", "mx-auto"], [1, "ni", "ni-books"], ["type", "button", 1, "btn", "btn-link", "text-success"], [1, "ni", "ni-key-25"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-warning", "shadow", "rounded-circle", "mx-auto"], [1, "ni", "ni-trophy"], ["type", "button", 1, "btn", "btn-link", "text-warning"], [1, "ni", "ni-notification-70"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-secondary", "shadow", "rounded-circle", "mx-auto"], ["type", "button", 1, "btn", "btn-link", "text-secondary"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-danger", "shadow", "rounded-circle", "mx-auto"], ["type", "button", 1, "btn", "btn-link", "text-danger"], [1, "icon", "icon-lg", "icon-shape", "icon-shape-info", "shadow", "rounded-circle", "mx-auto"], ["type", "button", 1, "btn", "btn-link", "text-info"], [1, "subscribe-line"], [1, "col-lg-6", "col-md-10", "mx-auto"], [1, "text-center"], [1, "title"], [1, "description"], [1, "card", "card-raised", "card-form-horizontal"], ["action", "", "method", ""], [1, "col-sm-8"], [1, "input-group", 3, "ngClass"], [1, "input-group-prepend"], [1, "input-group-text"], ["placeholder", "Your Email...", "type", "email", 1, "form-control", 3, "blur", "focus"], [1, "col-sm-4"], ["type", "button", 1, "btn", "btn-primary"]], template: function PricingpageComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Creative Tim ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingpageComponent_Template_button_click_7_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Argon ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " PRO ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PricingpageComponent_Template_button_click_18_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Home ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " About Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Products ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Contact Us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ul", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Trello lets you work");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h2", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " As a result of growing greenhouse gas emissions, climate models predict that our planet will get significantly warmer, that ecosystems will be changed or destroyed, and that enormous human and economic costs will be incurred. These scenarios aren't guaranteed, but avoiding them will be very hard. We're trying to take small steps to mitigate our impact. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "section", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Some of Our Pricing Plans");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Bravo pack ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "$49");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " per application ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "ul", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Complete documentation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "i", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, " Working materials in Sketch ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " 2GB cloud storage ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "button", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Start free trial ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, " Request a demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h4", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Enterprise ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " What colors are good, before somebody tells you you shouldn't like pink because that's for girls, or you'd instantly become a gay two-year-old. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "table", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "24/7 Support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Design Tools");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "10K emails");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Private Brand");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Create new account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Insight ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "h3", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Full-Funnel Social Analytics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " The time is now for it to be okay to be great. For being a bright color. For standing out. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "i", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "h6", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, " Social Conversations ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, " More about us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h6", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " Analyze Performance ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Learn about our products ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "h6", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " Measure Conversions ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " Check our documentation ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "i", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h1", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Got a question?");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "h3", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " We'd like to talk more about what you need ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "i", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "span", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " Chat with us ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "i", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h4", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Address");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "12124 First Street, nr 54");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "h4", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "Email");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "hello@email.com");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "i", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "h4", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Phone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "+1(424) 535 3523");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](220, "i", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h4", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Contact");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "Andrew Samian");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](227, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h3", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Some of Our Awesome Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "p", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, " The time is now for it to be okay to be great. People in this world shun people for being great. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "h4", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, "Slack bot");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, " If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "button", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Check more ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "h4", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, "Looking great");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, " You have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's motivating the doers. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "button", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, " Find a opportunity ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "i", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h4", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Developer First");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " For standing out. But the time is now to be okay to be the greatest you. Would you believe in what you believe in, if you were the only one who believed it? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "button", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "i", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Check more ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "i", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "h4", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Prepare launch");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, " Society has put up so many boundaries, so many limitations on what's right and wrong that it's almost impossible to get a pure thought out. It's like a little kid, a little boy. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "button", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Check out now ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "div", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "i", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "h4", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Premium support");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, " Pink is obviously a better color. Everyone's born confident, and everything's taken away from you matters is the people who are sparked by it follow their dreams, too. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "button", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](306, "i", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, " Find a opportunity ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "div", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "h4", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Design tools");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "p", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " Constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams the position that we want to be. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "button", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "i", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Check more ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 121);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "h2", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, "Subscribe to our Newsletter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "p", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " You'll be informed about updates, special offers and planned changes.. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 124);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "div", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "form", 125);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "div", 126);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 127);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 128);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "span", 129);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "input", 130);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function PricingpageComponent_Template_input_blur_342_listener($event) { return ctx.focus = false; })("focus", function PricingpageComponent_Template_input_focus_342_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "div", 131);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "button", 132);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, " Subscribe ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](320);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.focus === true));
        } }, directives: [ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2 });
    return PricingpageComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PricingpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pricingpage',
                templateUrl: 'pricingpage.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var _c0 = function (a0) { return { "focused": a0 }; };
var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('signup');
        var signUpButton = document.getElementById('signUp');
        var signInButton = document.getElementById('signIn');
        var container = document.getElementById('container');
        signUpButton.addEventListener('click', function () {
            container.classList.add('right-panel-active');
        });
        signInButton.addEventListener('click', function () {
            container.classList.remove('right-panel-active');
        });
    };
    SignupComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('signup');
    };
    SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
    SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 88, vars: 15, consts: [[1, "wrapper"], [1, "page-header", "bg-default"], [1, "page-header-image", 2, "background-image", "url('assets/img/ill/register_bg.png')"], ["id", "container", 1, "container"], [1, "form-container", "sign-up-container"], ["action", "javascript:;"], [1, "social-container"], ["type", "button", 1, "btn", "btn-facebook", "btn-sm"], [1, "btn-inner--icon"], [1, "fab", "fa-facebook"], ["type", "button", 1, "btn-instagram", "btn", "btn-sm"], [1, "fab", "fa-instagram"], ["type", "button", 1, "btn", "btn-twitter", "btn-sm"], [1, "fab", "fa-twitter"], [1, "text-default", "mb-4"], [1, "form-group", "mb-3", 3, "ngClass"], [1, "input-group", "input-group-alternative"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "ni", "ni-circle-08"], ["placeholder", "Name", "type", "text", 1, "form-control", 3, "blur", "focus"], [1, "ni", "ni-email-83"], ["placeholder", "Email", "type", "email", 1, "form-control", 3, "blur", "focus"], [1, "form-group", 3, "ngClass"], [1, "ni", "ni-lock-circle-open"], ["placeholder", "Password", "type", "password", 1, "form-control", 3, "blur", "focus"], [1, "btn", "btn-primary"], [1, "form-container", "sign-in-container"], ["action", "#", "role", "form"], ["href", "javascript:;"], [1, "btn", "btn-primary", "mt-3"], [1, "overlay-container"], [1, "overlay"], [1, "overlay-panel", "overlay-left"], [1, "text-white"], ["id", "signIn", 1, "btn", "btn-neutral", "btn-sm"], [1, "overlay-panel", "overlay-right"], ["id", "signUp", 1, "btn", "btn-neutral", "btn-sm"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create Account");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " or use your email for registration ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_25_listener($event) { return ctx.focus = false; })("focus", function SignupComponent_Template_input_focus_25_listener($event) { return ctx.focus = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_31_listener($event) { return ctx.focus1 = false; })("focus", function SignupComponent_Template_input_focus_31_listener($event) { return ctx.focus1 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_37_listener($event) { return ctx.focus2 = false; })("focus", function SignupComponent_Template_input_focus_37_listener($event) { return ctx.focus2 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Sign Up");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "form", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Sign in");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " or use your account ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "input", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_61_listener($event) { return ctx.focus3 = false; })("focus", function SignupComponent_Template_input_focus_61_listener($event) { return ctx.focus3 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "i", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function SignupComponent_Template_input_blur_67_listener($event) { return ctx.focus4 = false; })("focus", function SignupComponent_Template_input_focus_67_listener($event) { return ctx.focus4 = true; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Forgot your password? ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Sign In");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h1", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Welcome Back!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " To keep connected with us please login with your personal info ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Sign In ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h1", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Hello, Friend!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Enter your personal details and start journey with us");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Sign Up ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.focus === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.focus1 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.focus2 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.focus3 === true));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.focus4 === true));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
    return SignupComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: 'signup.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/butterCMS.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/butterCMS.service.ts ***!
  \***********************************************/
/*! exports provided: butterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "butterService", function() { return butterService; });
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buttercms */ "./node_modules/buttercms/lib/butter.js");
/* harmony import */ var buttercms__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buttercms__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


var butterService = buttercms__WEBPACK_IMPORTED_MODULE_0___default()(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api_token);


/***/ }),

/***/ "./src/app/services/highlight.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/highlight.service.ts ***!
  \***********************************************/
/*! exports provided: HighlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightService", function() { return HighlightService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismjs */ "./node_modules/prismjs/prism.js");
/* harmony import */ var prismjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/plugins/toolbar/prism-toolbar */ "./node_modules/prismjs/plugins/toolbar/prism-toolbar.js");
/* harmony import */ var prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_toolbar_prism_toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard */ "./node_modules/prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js");
/* harmony import */ var prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_copy_to_clipboard_prism_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/plugins/line-numbers/prism-line-numbers */ "./node_modules/prismjs/plugins/line-numbers/prism-line-numbers.js");
/* harmony import */ var prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_plugins_line_numbers_prism_line_numbers__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-bash */ "./node_modules/prismjs/components/prism-bash.js");
/* harmony import */ var prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_bash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-css */ "./node_modules/prismjs/components/prism-css.js");
/* harmony import */ var prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prismjs/components/prism-java */ "./node_modules/prismjs/components/prism-java.js");
/* harmony import */ var prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_java__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prismjs/components/prism-markup */ "./node_modules/prismjs/components/prism-markup.js");
/* harmony import */ var prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markup__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! prismjs/components/prism-markdown */ "./node_modules/prismjs/components/prism-markdown.js");
/* harmony import */ var prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_markdown__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var prismjs_components_prism_git__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prismjs/components/prism-git */ "./node_modules/prismjs/components/prism-git.js");
/* harmony import */ var prismjs_components_prism_git__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_git__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! prismjs/components/prism-typescript */ "./node_modules/prismjs/components/prism-typescript.js");
/* harmony import */ var prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_typescript__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! prismjs/components/prism-sass */ "./node_modules/prismjs/components/prism-sass.js");
/* harmony import */ var prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sass__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prismjs/components/prism-scss */ "./node_modules/prismjs/components/prism-scss.js");
/* harmony import */ var prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prismjs/components/prism-pug */ "./node_modules/prismjs/components/prism-pug.js");
/* harmony import */ var prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_pug__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prismjs/components/prism-sql */ "./node_modules/prismjs/components/prism-sql.js");
/* harmony import */ var prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_sql__WEBPACK_IMPORTED_MODULE_18__);



// languages=markup+css+clike+javascript+csharp+bash+docker+markup-templating+git+markdown+sql+powershell+scss+python+jsx+typescript+sass+pug+vim&plugins=line-highlight+line-numbers+data-uri-highlight+custom-class+toolbar+highlight-keywords+unescaped-markup+keep-markup+copy-to-clipboard


















var HighlightService = /** @class */ (function () {
    function HighlightService(platformId) {
        this.platformId = platformId;
    }
    HighlightService.prototype.highlightAll = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            Prism.highlightAll();
        }
    };
    HighlightService.ɵfac = function HighlightService_Factory(t) { return new (t || HighlightService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
    HighlightService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HighlightService, factory: HighlightService.ɵfac });
    return HighlightService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighlightService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");




var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.date = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 23, vars: 4, consts: [[1, "footer"], [1, "container"], [1, "row", "row-grid", "align-items-center", "mb-5"], [1, "col-lg-6"], [1, "mb-0", "font-weight-light"], [1, "col-lg-6", "text-lg-center", "btn-wrapper", "social-footer-buttons"], ["href", "https://twitter.com/imposter_coding", "target", "_blank", 1, "btn", "btn-icon-only", "btn-twitter", "rounded-circle", "mr-3"], [1, "btn-inner--icon"], [1, "fa", "fa-twitter"], ["href", "https://www.facebook.com/impostercoding/", "target", "_blank", 1, "btn-icon-only", "rounded-circle", "btn", "btn-facebook", "mr-3"], [1, "fab", "fa-facebook"], [1, "row", "align-items-center", "justify-content-md-between"], [1, "col-md-6"], [1, "copyright"], ["routerLink", "/"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Don't forget to follow us for our latest post updates! ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Imposter Coding ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " . ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 1, ctx.date, "yyyy"), " ");
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return FooterComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        this.isCollapsed = true;
        router.events.subscribe(function (val) {
            _this.isCollapsed = true;
        });
    }
    NavbarComponent.prototype.mobileView = function () {
        if (window.innerWidth < 992) {
            return true;
        }
        return false;
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 35, vars: 4, consts: [[1, "navbar", "navbar-expand-lg", "bg-white", "navbar-absolute"], [1, "container"], [1, "navbar-translate"], ["routerLink", "/", 1, "navbar-brand"], ["aria-controls", "navbarSupportedContent", "aria-label", "Toggle navigation", "id", "example-header-2", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "nav-container"], ["id", "example-header-2", 1, "navbar-collapse", "navbar-link-container", 3, "isAnimated", "collapse"], [1, "navbar-collapse-header"], [1, "row"], [1, "col-6", "collapse-brand"], ["routerLink", "/"], [1, "col-6", "collapse-close", "text-right"], ["aria-controls", "navigation-index", "aria-label", "Toggle navigation", "id", "example-header-2", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-nav", "mx-auto", "navbar-list"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/categories", 1, "nav-link"], [1, "nav", "navbar-nav", "navbar-right", "navbar-social"], ["href", "https://twitter.com/imposter_coding", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-twitter"], ["href", "https://www.facebook.com/impostercoding", "target", "_blank", 1, "nav-link"], [1, "fab", "fa-facebook-square"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Imposter Coding ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_5_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Imposter Coding ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_15_listener($event) { return ctx.isCollapsed = !ctx.isCollapsed; });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Posts ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Categories ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Tags ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isAnimated", true)("collapse", ctx.isCollapsed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_2__["CollapseDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return NavbarComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.scss"]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
var environment = {
    production: false,
    api_token: '9850fc104dc0353b9437eb965f090f8386f9f1ee'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/*!

=========================================================
 * Argon Desing System PRO Angular - v2.0.0
=========================================================

 * Product Page: https://www.creative-tim.com/product/imposter-coding
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joshlevy/Desktop/impostercoding/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map