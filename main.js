"use strict";
(self["webpackChunkwineincognito"] = self["webpackChunkwineincognito"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _components_about_the_project_about_the_project_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/about-the-project/about-the-project.component */ 6468);
/* harmony import */ var _components_cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cards/cards-catalog/cards-catalog.component */ 7520);
/* harmony import */ var _components_cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/cards/cards-list/cards-list.component */ 7309);
/* harmony import */ var _components_cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards/cards/cards.component */ 1888);
/* harmony import */ var _components_experts_expert_info_expert_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/experts/expert-info/expert-info.component */ 2563);
/* harmony import */ var _components_experts_expert_experts_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/experts/expert/experts.component */ 5250);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/main.component */ 639);
/* harmony import */ var _components_news_news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/news/news/news.component */ 6590);
/* harmony import */ var _components_procressing_policy_procressing_policy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/procressing-policy/procressing-policy.component */ 641);
/* harmony import */ var _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/terms-of-use/terms-of-use.component */ 9194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);













const routes = [
    {
        path: '', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent, data: { customBreadcrumb: "Main Page" },
    },
    {
        path: 'cards', component: _components_cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_3__.CardsComponent, children: [
            {
                path: 'card-list', component: _components_cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_2__.CardsListComponent
            },
            {
                path: 'card-catalog', component: _components_cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_1__.CardsCatalogComponent
            },
        ]
    },
    {
        path: 'news', component: _components_news_news_news_component__WEBPACK_IMPORTED_MODULE_7__.NewsComponent
    },
    {
        path: 'experts', component: _components_experts_expert_experts_component__WEBPACK_IMPORTED_MODULE_5__.ExpertsComponent
    },
    {
        path: 'expert-info', component: _components_experts_expert_info_expert_info_component__WEBPACK_IMPORTED_MODULE_4__.ExpertInfoComponent
    },
    {
        path: 'about-project', component: _components_about_the_project_about_the_project_component__WEBPACK_IMPORTED_MODULE_0__.AboutTheProjectComponent, data: { customBreadcrumb: 'About Project' }
    },
    {
        path: 'terms-of-use', component: _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_9__.TermsOfUseComponent
    },
    {
        path: 'procressing-policy', component: _components_procressing_policy_procressing_policy_component__WEBPACK_IMPORTED_MODULE_8__.ProcressingPolicyComponent
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class AppComponent {
    constructor() {
        this.title = 'wineincognito';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 7256);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en */ 6980);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-zorro-antd/button */ 1775);
/* harmony import */ var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-zorro-antd/menu */ 6079);
/* harmony import */ var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ng-zorro-antd/icon */ 5500);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ng-zorro-antd/grid */ 1210);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 4701);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ng-zorro-antd/modal */ 3756);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 2439);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 7646);
/* harmony import */ var _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/terms-of-use/terms-of-use.component */ 9194);
/* harmony import */ var _components_procressing_policy_procressing_policy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/procressing-policy/procressing-policy.component */ 641);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ 639);
/* harmony import */ var _components_cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cards/cards-catalog/cards-catalog.component */ 7520);
/* harmony import */ var _components_cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cards/cards-list/cards-list.component */ 7309);
/* harmony import */ var _components_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/news/news-list/news-list.component */ 8107);
/* harmony import */ var _components_news_news_catalog_news_catalog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/news/news-catalog/news-catalog.component */ 6354);
/* harmony import */ var _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/side-menu/side-menu.component */ 8496);
/* harmony import */ var _components_news_news_news_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/news/news/news.component */ 6590);
/* harmony import */ var _components_block_quote_block_quote_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/block-quote/block-quote.component */ 2513);
/* harmony import */ var _components_cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cards/cards/cards.component */ 1888);
/* harmony import */ var _components_about_the_project_about_the_project_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/about-the-project/about-the-project.component */ 6468);
/* harmony import */ var _components_experts_expert_info_expert_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/experts/expert-info/expert-info.component */ 2563);
/* harmony import */ var _components_experts_expert_experts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/experts/expert/experts.component */ 5250);
/* harmony import */ var _components_news_new_info_new_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/news/new-info/new-info.component */ 6787);
/* harmony import */ var _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/carousel/carousel.component */ 1945);
/* harmony import */ var _components_cards_cards_info_cards_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/cards/cards-info/cards-info.component */ 8442);
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ 927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 4001);





































(0,_angular_common__WEBPACK_IMPORTED_MODULE_23__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_2__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({ providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_25__.NZ_I18N, useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_25__.en_US }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_30__.NzButtonModule,
            ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_31__.NzMenuModule,
            ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_32__.NzIconModule,
            ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_33__.NzGridModule,
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_34__.NzBreadCrumbModule,
            ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_35__.NzModalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _components_terms_of_use_terms_of_use_component__WEBPACK_IMPORTED_MODULE_5__.TermsOfUseComponent,
        _components_procressing_policy_procressing_policy_component__WEBPACK_IMPORTED_MODULE_6__.ProcressingPolicyComponent,
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__.MainComponent,
        _components_cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_8__.CardsCatalogComponent,
        _components_cards_cards_list_cards_list_component__WEBPACK_IMPORTED_MODULE_9__.CardsListComponent,
        _components_news_news_list_news_list_component__WEBPACK_IMPORTED_MODULE_10__.NewsListComponent,
        _components_news_news_catalog_news_catalog_component__WEBPACK_IMPORTED_MODULE_11__.NewsCatalogComponent,
        _components_side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_12__.SideMenuComponent,
        _components_news_news_news_component__WEBPACK_IMPORTED_MODULE_13__.NewsComponent,
        _components_block_quote_block_quote_component__WEBPACK_IMPORTED_MODULE_14__.BlockQuoteComponent,
        _components_experts_expert_experts_component__WEBPACK_IMPORTED_MODULE_18__.ExpertsComponent,
        _components_cards_cards_cards_component__WEBPACK_IMPORTED_MODULE_15__.CardsComponent,
        _components_about_the_project_about_the_project_component__WEBPACK_IMPORTED_MODULE_16__.AboutTheProjectComponent,
        _components_experts_expert_info_expert_info_component__WEBPACK_IMPORTED_MODULE_17__.ExpertInfoComponent,
        _components_news_new_info_new_info_component__WEBPACK_IMPORTED_MODULE_19__.NewInfoComponent,
        _components_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_20__.CarouselComponent,
        _components_cards_cards_info_cards_info_component__WEBPACK_IMPORTED_MODULE_21__.CardsInfoComponent,
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__.LoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_28__.HttpClientModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_29__.BrowserAnimationsModule,
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_30__.NzButtonModule,
        ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_31__.NzMenuModule,
        ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_32__.NzIconModule,
        ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_33__.NzGridModule,
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_34__.NzBreadCrumbModule,
        ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_35__.NzModalModule] }); })();


/***/ }),

/***/ 3779:
/*!********************************************************!*\
  !*** ./src/app/components/Services/Api/api.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);



class ApiService {
    constructor(http) {
        this.http = http;
        this.apiVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiVersion;
        this.apiHost = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    }
    get(url) {
        return this.http.get(this.apiHost + '/' + this.apiVersion + '/' + url + '/');
    }
    post(url, body) {
        return this.http.post(this.apiHost + '/' + this.apiVersion + '/' + url + '/', body);
    }
    put(url, body) {
        return this.http.put(this.apiHost + '/' + this.apiVersion + '/' + url + '/', body);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6468:
/*!*****************************************************************************!*\
  !*** ./src/app/components/about-the-project/about-the-project.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutTheProjectComponent": () => (/* binding */ AboutTheProjectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 2439);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 4701);
/* harmony import */ var _block_quote_block_quote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-quote/block-quote.component */ 2513);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../carousel/carousel.component */ 1945);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 7646);






class AboutTheProjectComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutTheProjectComponent.ɵfac = function AboutTheProjectComponent_Factory(t) { return new (t || AboutTheProjectComponent)(); };
AboutTheProjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AboutTheProjectComponent, selectors: [["app-about-the-project"]], decls: 25, vars: 2, consts: [[1, "container"], ["nzSeparator", ">", 3, "nzAutoGenerate", "nzRouteLabel"], [1, "breadcrumb-link-first"], [1, "terms-title"], [1, "about-text-content"], [1, "about-text"], [1, "carousel-block"]], template: function AboutTheProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435 Wineincognito");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " \u041F\u0440\u0438\u0447\u0438\u043D\u043E\u0439 \u0435\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u043B\u043E \u0432\u043E\u0432\u0441\u0435 \u043D\u0435 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0435 \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0432\u0435\u0441\u043E\u043C\u043E\u0439 \u00AB\u0432\u0438\u043D\u043D\u043E\u0439 \u0437\u043E\u043D\u044B\u00BB \u0441 \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044F\u043C\u0438 \u0432\u0438\u043D\u0430 (\u043A\u0441\u0442\u0430\u0442\u0438, \u0437\u0430 \u044D\u0442\u043E \u0440\u0435\u0441\u043F\u0435\u043A\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u0430\u043C!) \u2014 \u0445\u043E\u0442\u044F \u0440\u0430\u0437\u043B\u0438\u0432\u0430\u043B\u0438 \u0432\u0441\u0435\u043C \u0438 \u0431\u044B\u043B\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u0434\u0443\u0448\u043D\u044B. \u0418 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D\u043E\u0432 \u0432\u0438\u043D\u043D\u044B\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432 (\u0447\u0442\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u0441\u044C, \u0442\u043E\u0436\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u043E), \u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F, \u043C\u0430\u043B\u043E \u043A\u043E\u043C\u0443 \u043F\u043E\u043A\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u2014 WineIncognito. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " \u0418\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u043A\u0440\u0430\u0442\u043A\u043E\u0433\u043E \u0430\u043D\u043E\u043D\u0441\u0430 \u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0433\u0434\u0435-\u0442\u043E \u0432 \u043F\u0443\u0447\u0438\u043D\u0430\u0445 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u2014 \u044F \u0438 \u043F\u043E\u0441\u043F\u0435\u0448\u0438\u043B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043F\u043E\u0439\u0442\u0438 \u00AB\u043F\u043E\u0434\u0438\u0432\u0438\u0442\u044C\u0441\u044F\u00BB \u043D\u0430 \u043D\u0435\u0435. \u0412\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E (\u043A\u0430\u043A \u044F \u0434\u0443\u043C\u0430\u043B) \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u0430\u043D\u043E\u043D\u0441\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u00AB\u0432\u0430\u0448 \u043F\u043E\u043A\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u0443\u0433\u0430\u00BB \u043F\u043E\u043F\u0430\u043B \u043F\u0440\u044F\u043C\u0438\u043A\u043E\u043C \u0432 \u0441\u0430\u043C\u0443\u044E \u0433\u0443\u0449\u0443 \u0435\u0435 \u0440\u0430\u0431\u043E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " \u0412 \u0437\u0430\u043B\u0435, \u0437\u0430 \u0434\u044E\u0436\u0438\u043D\u043E\u0439 \u0441\u0442\u043E\u043B\u043E\u0432, \u044F \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u043B \u043E\u043A\u043E\u043B\u043E 30 \u00AB\u043C\u044D\u0442\u0440\u043E\u0432\u00BB \u044D\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430, \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0445 \u00AB\u0441\u043B\u0435\u043F\u0443\u044E\u00BB \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044E \u043E\u043A\u043E\u043B\u043E 300 \u0432\u0438\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0430\u0437\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B Wineinconito, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0442\u0435\u043C \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u00AB\u0432 \u0434\u0435\u043B\u0435\u00BB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "block-quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " \u0418\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u043A\u0440\u0430\u0442\u043A\u043E\u0433\u043E \u0430\u043D\u043E\u043D\u0441\u0430 \u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0433\u0434\u0435-\u0442\u043E \u0432 \u043F\u0443\u0447\u0438\u043D\u0430\u0445 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u2014 \u044F \u0438 \u043F\u043E\u0441\u043F\u0435\u0448\u0438\u043B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043F\u043E\u0439\u0442\u0438 \u00AB\u043F\u043E\u0434\u0438\u0432\u0438\u0442\u044C\u0441\u044F\u00BB \u043D\u0430 \u043D\u0435\u0435. \u0412\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E (\u043A\u0430\u043A \u044F \u0434\u0443\u043C\u0430\u043B) \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u0430\u043D\u043E\u043D\u0441\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u00AB\u0432\u0430\u0448 \u043F\u043E\u043A\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u0443\u0433\u0430\u00BB \u043F\u043E\u043F\u0430\u043B \u043F\u0440\u044F\u043C\u0438\u043A\u043E\u043C \u0432 \u0441\u0430\u043C\u0443\u044E \u0433\u0443\u0449\u0443 \u0435\u0435 \u0440\u0430\u0431\u043E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u0412 \u0437\u0430\u043B\u0435, \u0437\u0430 \u0434\u044E\u0436\u0438\u043D\u043E\u0439 \u0441\u0442\u043E\u043B\u043E\u0432, \u044F \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u043B \u043E\u043A\u043E\u043B\u043E 30 \u00AB\u043C\u044D\u0442\u0440\u043E\u0432\u00BB \u044D\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430, \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0445 \u00AB\u0441\u043B\u0435\u043F\u0443\u044E\u00BB \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044E \u043E\u043A\u043E\u043B\u043E 300 \u0432\u0438\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0430\u0437\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B Wineinconito, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0442\u0435\u043C \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u00AB\u0432 \u0434\u0435\u043B\u0435\u00BB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nzAutoGenerate", true)("nzRouteLabel", "customBreadcrumb");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_5__.NzBreadCrumbItemComponent, _block_quote_block_quote_component__WEBPACK_IMPORTED_MODULE_1__.BlockQuoteComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_2__.CarouselComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: [".container[_ngcontent-%COMP%]{\r\n    max-width: 1255px;\r\n}\r\n.about-text-content[_ngcontent-%COMP%]{\r\n    width: 878px;\r\n}\r\n.about-text-content[_ngcontent-%COMP%]   .about-text[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n    color: #7b7b7b;\r\n    margin-bottom: 40px;\r\n}\r\n.carousel-block[_ngcontent-%COMP%]{\r\n    margin: 86px 0 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LXRoZS1wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJhYm91dC10aGUtcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG1heC13aWR0aDogMTI1NXB4O1xyXG59XHJcbi5hYm91dC10ZXh0LWNvbnRlbnR7XHJcbiAgICB3aWR0aDogODc4cHg7XHJcbn1cclxuXHJcblxyXG4uYWJvdXQtdGV4dC1jb250ZW50IC5hYm91dC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1ibG9ja3tcclxuICAgIG1hcmdpbjogODZweCAwIDIwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 2513:
/*!*****************************************************************!*\
  !*** ./src/app/components/block-quote/block-quote.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockQuoteComponent": () => (/* binding */ BlockQuoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class BlockQuoteComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlockQuoteComponent.ɵfac = function BlockQuoteComponent_Factory(t) { return new (t || BlockQuoteComponent)(); };
BlockQuoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlockQuoteComponent, selectors: [["block-quote"]], decls: 22, vars: 0, consts: [[1, "info"], [1, "info-content"], [1, "content-icon"], [1, "content-icon-left"], [1, "content-text"], [1, "content-title"], [1, "content-subtitle"], [1, "content-icon-right"], [1, "info-banner"], [1, "img-block"], ["src", "../../../assets/img/info-banner.png", "alt", "#"], [1, "info-name"], [1, "info-subtitle"]], template: function BlockQuoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00AB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Wineincognito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " - \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0435\u0446 \u0441 \u0441\u0438\u043B\u043E\u0439 \u0441\u043E\u0442\u043D\u0438 \u0441\u043E\u043C\u0435\u043B\u044C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u041D\u0430\u0448 \u0441\u0435\u0440\u0432\u0438\u0441 \u0432\u044B\u0440\u0443\u0447\u0438\u0442 \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u043E\u0432 \u2014 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u0432 \u043F\u043E \u0437\u0430\u043A\u0443\u043F\u043A\u0435 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F, \u043A\u0430\u0432\u0438\u0441\u0442\u043E\u0432 \u0432 \u0432\u0438\u043D\u043E\u0442\u0435\u043A\u0430\u0445 \u0438 \u0430\u043B\u043A\u043E\u043E\u0442\u0434\u0435\u043B\u0430\u0445 \u0432 \u0441\u0435\u0442\u0435\u0432\u044B\u0445 \u043C\u0430\u0433\u0430\u0437\u0438\u043D\u0430\u0445, \u043A\u0430\u0432\u0438\u0441\u0442\u043E\u0432 \u0432 \u0431\u0430\u0440\u0430\u0445 \u0438 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430\u0445, \u0441\u0430\u043C\u0438\u0445 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u0442\u043E\u0440\u043E\u0432, \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u0437\u0430 \u0432\u0441\u0435, \u0447\u0442\u043E \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u043E\u0435 \u0441 \u0432\u0438\u043D\u043E\u043C \u2013 \u0432 \u043E\u0442\u0435\u043B\u044F\u0445, \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u0430\u0445, \u043E\u0431\u044A\u0435\u043A\u0442\u0430\u0445 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0441\u0444\u0435\u0440\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u043E\u043B\u043E\u0432\u044C\u0435\u0432 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u043F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u043A\u0430\u0432\u0438\u0441\u0442\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    margin: 160px 0 50px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-icon[_ngcontent-%COMP%] {\r\n    font-size: 200px;\r\n    line-height: 234px;\r\n    font-family: \"roboto-500\";\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-icon[_ngcontent-%COMP%]   .content-icon-left[_ngcontent-%COMP%], .info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-icon[_ngcontent-%COMP%]   .content-icon-right[_ngcontent-%COMP%] {\r\n    color: #E4E4E4;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-icon[_ngcontent-%COMP%]   .content-icon-left[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-icon[_ngcontent-%COMP%]   .content-icon-right[_ngcontent-%COMP%] {\r\n    margin-top: 280px;\r\n    margin-left: -320px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%] {\r\n    margin-left: 30px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\r\n    color: #282828;\r\n    font-family: \"inter-600\";\r\n    font-size: 42px;\r\n    line-height: 52px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%]   .content-subtitle[_ngcontent-%COMP%] {\r\n    color: #4E4E4E;\r\n    font-family: \"roboto-400\";\r\n    font-size: 22px;\r\n    line-height: 44px;\r\n    width: 678px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-banner[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-banner[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 300px;\r\n    height: 300px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-banner[_ngcontent-%COMP%]   .info-name[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 30px;\r\n    line-height: 36px;\r\n    color: #6C6C6C;\r\n    margin: 46px 0 12px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%]   .info-banner[_ngcontent-%COMP%]   .info-subtitle[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 21px;\r\n    line-height: 28px;\r\n    color: #A2A2A2;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2NrLXF1b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlCQUFpQjs7QUFFakI7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoiYmxvY2stcXVvdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKiBpbmZvLWNvbnRlbnQgKi9cclxuXHJcbi5pbmZvIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMTYwcHggMCA1MHB4O1xyXG59XHJcblxyXG4uaW5mbyAuaW5mby1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pbmZvIC5pbmZvLWNvbnRlbnQgLmNvbnRlbnQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG59XHJcblxyXG4uaW5mbyAuaW5mby1jb250ZW50IC5jb250ZW50LWljb24gLmNvbnRlbnQtaWNvbi1sZWZ0LFxyXG4uaW5mbyAuaW5mby1jb250ZW50IC5jb250ZW50LWljb24gLmNvbnRlbnQtaWNvbi1yaWdodCB7XHJcbiAgICBjb2xvcjogI0U0RTRFNDtcclxufVxyXG5cclxuLmluZm8gLmluZm8tY29udGVudCAuY29udGVudC1pY29uIC5jb250ZW50LWljb24tbGVmdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uaW5mbyAuaW5mby1jb250ZW50IC5jb250ZW50LWljb24gLmNvbnRlbnQtaWNvbi1yaWdodCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyODBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMzIwcHg7XHJcbn1cclxuXHJcbi5pbmZvIC5pbmZvLWNvbnRlbnQgLmNvbnRlbnQtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLmluZm8gLmluZm8tY29udGVudCAuY29udGVudC10ZXh0IC5jb250ZW50LXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMjgyODI4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaW50ZXItNjAwXCI7XHJcbiAgICBmb250LXNpemU6IDQycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTJweDtcclxufVxyXG5cclxuLmluZm8gLmluZm8tY29udGVudCAuY29udGVudC10ZXh0IC5jb250ZW50LXN1YnRpdGxlIHtcclxuICAgIGNvbG9yOiAjNEU0RTRFO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogNjc4cHg7XHJcbn1cclxuXHJcbi5pbmZvIC5pbmZvLWJhbm5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIC5pbmZvLWJhbm5lciAuaW1nLWJsb2NrIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uaW5mbyAuaW5mby1iYW5uZXIgLmluZm8tbmFtZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNTAwXCI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzZweDtcclxuICAgIGNvbG9yOiAjNkM2QzZDO1xyXG4gICAgbWFyZ2luOiA0NnB4IDAgMTJweDtcclxufVxyXG5cclxuLmluZm8gLmluZm8tYmFubmVyIC5pbmZvLXN1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6ICNBMkEyQTI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7520:
/*!***************************************************************************!*\
  !*** ./src/app/components/cards/cards-catalog/cards-catalog.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsCatalogComponent": () => (/* binding */ CardsCatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function CardsCatalogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 Wi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0430\u0440\u043E\u043C\u0430\u0442\u044B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vino_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vino_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", vino_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vino_r1.ratingNumber);
} }
class CardsCatalogComponent {
    constructor() {
        this.vinoInfo = [
            {
                title: "Вино Каберне Совиньон розовое 2010",
                img: "../../../../assets/img/vino.png",
                ratingNumber: 90,
            },
            {
                title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
                img: "../../../../assets/img/vino2.png",
                ratingNumber: 84,
            },
            {
                title: "Вино Каберне Совиньон розовое 2010",
                img: "../../../../assets/img/vino.png",
                ratingNumber: 90,
            },
            {
                title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
                img: "../../../../assets/img/vino2.png",
                ratingNumber: 84,
            },
            // 
            {
                title: "Вино Каберне Совиньон розовое 2010",
                img: "../../../../assets/img/vino.png",
                ratingNumber: 90,
            },
            {
                title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
                img: "../../../../assets/img/vino2.png",
                ratingNumber: 84,
            },
            {
                title: "Вино Каберне Совиньон розовое 2010",
                img: "../../../../assets/img/vino.png",
                ratingNumber: 90,
            },
            {
                title: "Вино Красное Сухое Левкадия Резерв Крымск 2015",
                img: "../../../../assets/img/vino2.png",
                ratingNumber: 84,
            },
        ];
    }
    ngOnInit() {
    }
}
CardsCatalogComponent.ɵfac = function CardsCatalogComponent_Factory(t) { return new (t || CardsCatalogComponent)(); };
CardsCatalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsCatalogComponent, selectors: [["cards-catalog"]], decls: 2, vars: 1, consts: [[1, "cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "favorite-icon"], ["src", "../../../../assets/img/Union.png", "alt", ""], [1, "card-title"], [1, "card-info"], [1, "card-img-block"], ["alt", "#", 3, "src"], [1, "card-info-text"], [1, "rating-text"], [1, "rating-number"], [1, "main-flavors-text"], [1, "flavors-img-block"], [1, "fruits"], ["src", "../../../../assets/img/003-apple.png", "alt", "#"], ["src", "../../../../assets/img/001-lemon.png", "alt", "#"], ["src", "../../../../assets/img/002-orange.png", "alt", "#"], ["src", "../../../../assets/img/004-green-chili-pepper.png", "alt", "#"]], template: function CardsCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsCatalogComponent_div_1_Template, 22, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vinoInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".cards[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-gap: 30px;\r\n    gap: 30px;\r\n    flex-wrap: wrap;\r\n  \r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    width: 358px;\r\n    height: 512px;\r\n    background: #F5F5F5;\r\n    border-radius: 20px;\r\n    padding: 34px 49px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   h2.card-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    font-family: \"roboto-400\";\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    color: #4D4D4D;\r\n    height: 96px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-align: center;\r\n    margin-top: 49px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%] {\r\n    mix-blend-mode: darken; \r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .flavors-img-block[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%]   .flavors-img-block[_ngcontent-%COMP%]   .fruits[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 0 16px;\r\n    gap: 0 16px;\r\n    margin-top: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLWNhdGFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQVM7SUFBVCxTQUFTO0lBQ1QsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQVc7SUFBWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImNhcmRzLWNhdGFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIFxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICB3aWR0aDogMzU4cHg7XHJcbiAgICBoZWlnaHQ6IDUxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAzNHB4IDQ5cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5mYXZvcml0ZS1pY29uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxufVxyXG5cclxuLmNhcmQgLmZhdm9yaXRlLWljb24gaW1nIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5jYXJkIGgyLmNhcmQtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgY29sb3I6ICM0RDRENEQ7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQ5cHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWltZy1ibG9jayB7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogZGFya2VuOyBcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaW5mbyAuZmxhdm9ycy1pbWctYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1pbmZvIC5mbGF2b3JzLWltZy1ibG9jayAuZnJ1aXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAgMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8442:
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/cards-info/cards-info.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsInfoComponent": () => (/* binding */ CardsInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navbar/navbar.component */ 2439);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 4701);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cards-catalog/cards-catalog.component */ 7520);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ 7646);






function CardsInfoComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", info_r4.type, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](info_r4.title);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function CardsInfoComponent_li_40_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_li_40_a_3_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const fil_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.filterActived(fil_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fil_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, fil_r7.filterActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", fil_r7.typeName, " ");
} }
function CardsInfoComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, CardsInfoComponent_li_40_a_3_Template, 2, 4, "a", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", filter_r5.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", filter_r5.types);
} }
function CardsInfoComponent_div_55_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 80);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r10.carousel.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CardsInfoComponent_div_55_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 80);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r11.carousel.firstImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function CardsInfoComponent_div_55_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 80);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r12.carousel.secondImage, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
const _c1 = function (a0) { return { isActive: a0 }; };
function CardsInfoComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_div_55_Template__svg_svg_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, CardsInfoComponent_div_55_img_6_Template, 1, 1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, CardsInfoComponent_div_55_img_11_Template, 1, 1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, CardsInfoComponent_div_55_img_16_Template, 1, 1, "img", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h4", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "svg", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_div_55_Template__svg_svg_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "path", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c1, ctx_r2.carousel.currentImageIndex === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.carousel.mainImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.carousel.mainName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.carousel.firstImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.carousel.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.carousel.secondImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.carousel.secondName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, ctx_r2.carousel.currentImageIndex === ctx_r2.carouselImg.length - 1));
} }
function CardsInfoComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h4", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "4.0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " \u043E\u0442\u0437\u044B\u0432 \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0435 \u043E\u0442\u0437\u044B\u0432\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "i", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r16.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r16.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r16.text, " ");
} }
const _c2 = function (a0) { return { "favorite": a0 }; };
const _c3 = function (a0) { return { actived: a0 }; };
class CardsInfoComponent {
    constructor() {
        this.img = ".../../../../../../assets/img/vino-about.png";
        this.ratingNumber = 90;
        this.title = "Вино Красное Сухое Левкадия Резерв Крымск 2010";
        this.feedBackTitle = "Отзыв о вино Красное Сухое Левкадия Резерв Крымск, 2015";
        this.productInfo = [
            {
                type: "Категория",
                title: "Вино"
            },
            {
                type: "Цвет",
                title: "Красное"
            },
            {
                type: "Сахар",
                title: "Сухое"
            },
            {
                type: "Регион",
                title: "США, Калифорния, Сонома Кантри"
            },
            {
                type: "Производитель",
                title: "Duckhorn"
            },
            {
                type: "Крепость",
                title: "13,9 %"
            },
            {
                type: "Виноград",
                title: "Каберне Совиньон 1%, Пити Верда 1%, Мерло 10%"
            }
        ];
        this.filters = [
            {
                name: "Винтажи",
                types: [
                    {
                        typeName: "2009",
                        filterActive: false
                    },
                    {
                        typeName: "2010",
                        filterActive: false
                    },
                    {
                        typeName: "2011",
                        filterActive: false
                    },
                    {
                        typeName: "2012",
                        filterActive: false
                    },
                    {
                        typeName: "2013",
                        filterActive: false
                    },
                    {
                        typeName: "2014",
                        filterActive: false
                    },
                    {
                        typeName: "2015",
                        filterActive: false
                    },
                ]
            },
            {
                name: "Объем",
                types: [
                    {
                        typeName: "0.75",
                        filterActive: false
                    },
                    {
                        typeName: "1.0",
                        filterActive: false
                    },
                    {
                        typeName: "1.5",
                        filterActive: false
                    },
                ]
            },
        ];
        this.filterActive = false;
        this.active = false;
        this.favorite = false;
        this.carouselImg = [
            {
                img: "../../../assets/img/expert1.png",
                name: "Роберт Паркер"
            },
            {
                img: "../../../assets/img/expert2.png",
                name: "Игорь Алексенко"
            },
            {
                img: "../../../assets/img/expert3.png",
                name: "Дмитрий Руденко"
            },
            {
                img: "../../../assets/img/expert1.png",
                name: "Роберт Паркер"
            },
            {
                img: "../../../assets/img/expert2.png",
                name: "Игорь Алексенко"
            },
        ];
        this.carousel = {
            mainImage: "",
            firstImage: "",
            secondImage: "",
            mainName: "",
            firstName: "",
            secondName: "",
            currentImageIndex: 0,
            totalImagesNumber: 0
        };
        this.feedBack = [
            {
                name: "Денис",
                date: "2.02.2021 г.",
                text: "Терпкое насыщенное вино. То, что надо. В принципе люблю риоху, но тут совсем другой аромат и насыщенность. Нотки лимона и имбиря присутствуют почти незаметно, всё завершает сладковато-приторный привкус граната, что совсем его не портит. "
            },
            {
                name: "Елена Высоцкая",
                date: "2.02.2021 г.",
                text: "Насыщенное, хорошо сбалансированное, кислотность практически не ощущается , чуть сладковатое, шелковистое.. элегантное.. ягодное.. ежевичный джем..чуть ванили.. Рекомендую!"
            },
            {
                name: "Дмитрий Борисов",
                date: "2.02.2021 г.",
                text: "Терпкое насыщенное вино. То, что надо. В принципе люблю риоху, но тут совсем другой аромат и насыщенность. Нотки лимона и имбиря присутствуют почти незаметно, всё завершает сладковато-приторный привкус граната, что совсем его не портит. "
            },
            {
                name: "Елена Высоцкая",
                date: "2.02.2021 г.",
                text: "Ооочень достойный и интересный вариант! Насыщенное, хорошо сбалансированное, кислотность практически не ощущается , чуть сладковатое, шелковистое"
            },
            {
                name: "Елена Высоцкая",
                date: "2.02.2021 г.",
                text: "Насыщенное, хорошо сбалансированное, кислотность практически не ощущается , чуть сладковатое, шелковистое.. элегантное.. ягодное.. ежевичный джем..чуть ванили.. Рекомендую!"
            },
        ];
    }
    ngOnInit() {
        this.loadCarouselImages();
    }
    filterActived(fil) {
        if (!fil.filterActive) {
            fil.filterActive = true;
        }
        else {
            fil.filterActive = false;
        }
    }
    loadCarouselImages() {
        if (this.carouselImg.length > 0) {
            this.carousel.mainImage = this.carouselImg[0].img;
            this.carousel.firstImage = this.carouselImg[1] ? this.carouselImg[1].img : "";
            this.carousel.secondImage = this.carouselImg[2] ? this.carouselImg[2].img : "";
            this.carousel.mainName = this.carouselImg[0].name;
            this.carousel.firstName = this.carouselImg[1] ? this.carouselImg[1].name : "";
            this.carousel.secondName = this.carouselImg[2] ? this.carouselImg[2].name : "";
            this.carousel.totalImagesNumber = this.carouselImg.length;
        }
    }
    next() {
        if (this.carousel.currentImageIndex < this.carouselImg.length - 1) {
            let i = this.carousel.currentImageIndex;
            this.carousel.mainImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
            this.carousel.firstImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
            this.carousel.secondImage = this.carouselImg[i + 3] ? this.carouselImg[i + 3].img : "";
            this.carousel.mainName = this.carouselImg[i + 1] ? this.carouselImg[i + 1].name : "";
            this.carousel.firstName = this.carouselImg[i + 2] ? this.carouselImg[i + 2].name : "";
            this.carousel.secondName = this.carouselImg[i + 3] ? this.carouselImg[i + 3].name : "";
            this.carousel.currentImageIndex = i + 1;
        }
    }
    prev() {
        if (this.carousel.currentImageIndex > 0) {
            let i = this.carousel.currentImageIndex - 1;
            this.carousel.mainImage = this.carouselImg[i] ? this.carouselImg[i].img : "";
            this.carousel.firstImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
            this.carousel.secondImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
            this.carousel.mainName = this.carouselImg[i] ? this.carouselImg[i].name : "";
            this.carousel.firstName = this.carouselImg[i + 1] ? this.carouselImg[i + 1].name : "";
            this.carousel.secondName = this.carouselImg[i + 2] ? this.carouselImg[i + 2].name : "";
            this.carousel.currentImageIndex = i;
        }
    }
    addComment() {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    favoriteIcon() {
        if (!this.favorite) {
            this.favorite = true;
        }
        else {
            this.favorite = false;
        }
    }
}
CardsInfoComponent.ɵfac = function CardsInfoComponent_Factory(t) { return new (t || CardsInfoComponent)(); };
CardsInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CardsInfoComponent, selectors: [["cards-info"]], decls: 116, vars: 17, consts: [[1, "container"], [1, "wrapper"], ["nzSeparator", ">"], [1, "breadcrumb-link-first"], [1, "breadcrumb-link-second"], [1, "cards-info"], [1, "img-block"], ["alt", "", 3, "src"], [1, "info-content"], [1, "info-header"], [1, "rating"], [1, "rating-text"], [1, "rating-number"], [1, "card-title"], [1, "favorite-icon"], ["width", "15", "height", "27", "viewBox", "0 0 15 27", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "noLike", 3, "ngClass", "click"], ["id", "path-1-inside-1_2005_119", "fill", "white"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.85274 0H7.44015H7.51216H13.0996C17.4654 10.6721 12.9379 14.0677 11.4826 15.0379C10.3184 15.814 8.84121 16.3315 8.24817 16.4932V25.5485H12.2894C12.6467 25.5485 12.9362 25.8381 12.9362 26.1953C12.9362 26.5525 12.6467 26.8421 12.2894 26.8421H2.91098C2.55376 26.8421 2.26418 26.5525 2.26418 26.1953C2.26418 25.8381 2.55376 25.5485 2.91098 25.5485H6.70414V16.4932C6.11109 16.3315 4.63394 15.814 3.46972 15.0379C2.01444 14.0677 -2.5131 10.6721 1.85274 0Z"], ["d", "M1.85274 0V-2H0.510037L0.00164529 -0.757266L1.85274 0ZM13.0996 0L14.9507 -0.757266L14.4423 -2H13.0996V0ZM11.4826 15.0379L10.3732 13.3738L10.3732 13.3738L11.4826 15.0379ZM8.24817 16.4932L7.72205 14.5636L6.24817 14.9655V16.4932H8.24817ZM8.24817 25.5485H6.24817V27.5485H8.24817V25.5485ZM6.70414 25.5485V27.5485H8.70414V25.5485H6.70414ZM6.70414 16.4932H8.70414V14.9655L7.23025 14.5636L6.70414 16.4932ZM3.46972 15.0379L4.57912 13.3738H4.57912L3.46972 15.0379ZM7.44015 -2H1.85274V2H7.44015V-2ZM7.51216 -2H7.44015V2H7.51216V-2ZM13.0996 -2H7.51216V2H13.0996V-2ZM12.592 16.702C13.4749 16.1134 15.3984 14.7084 16.3714 11.7896C17.3383 8.8888 17.2482 4.85893 14.9507 -0.757266L11.2485 0.757266C13.3168 5.81313 13.1458 8.81711 12.5766 10.5247C12.0134 12.2143 10.9456 12.9922 10.3732 13.3738L12.592 16.702ZM8.77428 18.4227C9.48757 18.2283 11.1866 17.6389 12.592 16.702L10.3732 13.3738C9.45011 13.9892 8.19486 14.4347 7.72205 14.5636L8.77428 18.4227ZM10.2482 25.5485V16.4932H6.24817V25.5485H10.2482ZM8.24817 27.5485H12.2894V23.5485H8.24817V27.5485ZM12.2894 27.5485C11.5421 27.5485 10.9362 26.9427 10.9362 26.1953H14.9362C14.9362 24.7335 13.7512 23.5485 12.2894 23.5485V27.5485ZM10.9362 26.1953C10.9362 25.448 11.5421 24.8421 12.2894 24.8421V28.8421C13.7512 28.8421 14.9362 27.6571 14.9362 26.1953H10.9362ZM12.2894 24.8421H2.91098V28.8421H12.2894V24.8421ZM2.91098 24.8421C3.65833 24.8421 4.26418 25.448 4.26418 26.1953H0.264184C0.264184 27.6571 1.44919 28.8421 2.91098 28.8421V24.8421ZM4.26418 26.1953C4.26418 26.9427 3.65833 27.5485 2.91098 27.5485V23.5485C1.44919 23.5485 0.264184 24.7335 0.264184 26.1953H4.26418ZM2.91098 27.5485H6.70414V23.5485H2.91098V27.5485ZM4.70414 16.4932V25.5485H8.70414V16.4932H4.70414ZM2.36032 16.702C3.76569 17.6389 5.46474 18.2283 6.17803 18.4227L7.23025 14.5636C6.75745 14.4347 5.5022 13.9892 4.57912 13.3738L2.36032 16.702ZM0.00164529 -0.757266C-2.29589 4.85893 -2.38599 8.8888 -1.41906 11.7896C-0.446134 14.7084 1.47741 16.1134 2.36032 16.702L4.57912 13.3738C4.00674 12.9922 2.93888 12.2143 2.37567 10.5247C1.80648 8.81711 1.63553 5.81313 3.70383 0.757266L0.00164529 -0.757266Z", "mask", "url(#path-1-inside-1_2005_119)"], ["width", "15", "height", "27", "viewBox", "0 0 15 27", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "like", 3, "ngClass", "click"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M1.85274 0H7.44015H7.51216H13.0996C17.4654 10.6721 12.9379 14.0677 11.4826 15.0379C10.3184 15.814 8.84121 16.3315 8.24817 16.4932V25.5485H12.2894C12.6467 25.5485 12.9362 25.8381 12.9362 26.1953C12.9362 26.5525 12.6467 26.8421 12.2894 26.8421H2.91098C2.55376 26.8421 2.26418 26.5525 2.26418 26.1953C2.26418 25.8381 2.55376 25.5485 2.91098 25.5485H6.70414V16.4932C6.11109 16.3315 4.63394 15.814 3.46972 15.0379C2.01444 14.0677 -2.5131 10.6721 1.85274 0Z", "fill", "#9D4E6D"], [1, "expert-info"], [1, "info-title"], [1, "info-subtitle"], ["src", "../../../../assets/img/003-apple.png", "alt", "#"], ["src", "../../../../assets/img/001-lemon.png", "alt", "#"], ["src", "../../../../assets/img/002-orange.png", "alt", "#"], ["src", "../../../../assets/img/004-green-chili-pepper.png", "alt", "#"], [4, "ngFor", "ngForOf"], [1, "filter-content"], [1, "commentExperts"], [1, "accordingToExpert"], [1, "title"], [1, "subtitle"], [1, "sub-content"], [1, "sub-name"], [1, "sub-date"], [1, "recommendedByExperts"], ["class", "carusel", 4, "ngIf"], [1, "feedBack"], [1, "feedBack-title"], [1, "feedBack-subtitle"], [1, "feedBack-about"], [1, "feedBack-block"], ["class", "feedBack-wrapper", 4, "ngFor", "ngForOf"], [1, "consumer-rating"], [1, "consumer-title"], [1, "rating-block"], [1, "consumer-number"], [1, "far", "fa-star"], [1, "rating-btn", 3, "click"], [1, "comment", 3, "ngClass"], [1, "fas", "fa-times", 3, "click"], [1, "comment-title"], [1, "overal-rating"], [1, "rating-star"], [1, "fas", "fa-star", "fa-2x"], [1, "comment-message"], ["placeholder", "\u0412\u0430\u0448\u0438 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u044F \u043E\u0442 \u0432\u0438\u043D\u0430", 1, "message"], [1, "agreeModerationx"], ["type", "checkbox", 1, "agreeModerationx-checkbox"], [1, "text"], [1, "moderation-text", "text"], [1, "moderation-rules"], [1, "comment-btn"], [1, "card-content"], [1, "load-more"], [1, "load-more-text"], [1, "filter-text"], ["class", "filter-btn", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "filter-btn", 3, "ngClass", "click"], [1, "carusel"], ["width", "50", "height", "16", "viewBox", "0 0 50 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "carusel-btns", 3, "ngClass", "click"], ["d", "M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538404 7.04738 0.538404 6.65685 0.928928L0.292893 7.29289ZM50 7L1 7L1 9L50 9L50 7Z"], [1, "carusel-content"], [1, "img-card"], ["alt", "#", 3, "src", 4, "ngIf"], [1, "carousel-title"], [1, "img-card", "img-hide"], ["d", "M49.7071 8.70711C50.0976 8.31658 50.0976 7.68342 49.7071 7.29289L43.3431 0.928932C42.9526 0.538408 42.3195 0.538408 41.9289 0.928932C41.5384 1.31946 41.5384 1.95262 41.9289 2.34315L47.5858 8L41.9289 13.6569C41.5384 14.0474 41.5384 14.6805 41.9289 15.0711C42.3195 15.4616 42.9526 15.4616 43.3431 15.0711L49.7071 8.70711ZM0 9H49V7H0V9Z"], ["alt", "#", 3, "src"], [1, "feedBack-wrapper"], [1, "feedBack-rating"], [1, "feedBack-name"], [1, "fas", "fa-star", "active"], [1, "fas", "fa-star"], [1, "rating-date"], [1, "previous-reviews"], [1, "previous-text"], [1, "fas", "fa-chevron-down"], [1, "feedBack-info"], [1, "info"], [1, "info-btn"]], template: function CardsInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-breadcrumb", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 Wi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "h4", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "svg", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_Template__svg_svg_click_23_listener() { return ctx.favoriteIcon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mask", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "path", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "svg", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_Template__svg_svg_click_27_listener() { return ctx.favoriteIcon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "path", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0430\u0440\u043E\u043C\u0430\u0442\u044B:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, CardsInfoComponent_li_38_Template, 5, 2, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, CardsInfoComponent_li_40_Template, 4, 2, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "\u041F\u043E \u043C\u043D\u0435\u043D\u0438\u044E \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "\u00AB\u0412\u0438\u043D\u043E \u044F\u0440\u043A\u043E-\u0440\u0443\u0431\u0438\u043D\u043E\u0432\u043E\u0433\u043E \u0446\u0432\u0435\u0442\u0430 \u0441 \u043B\u0438\u043B\u043E\u0432\u044B\u043C \u043E\u0442\u0442\u0435\u043D\u043A\u043E\u043C. \u041E\u0431\u043B\u0430\u0434\u0430\u0435\u0442 \u043C\u043E\u0449\u043D\u044B\u043C \u043F\u0440\u044F\u043D\u043E-\u0444\u0440\u0443\u043A\u0442\u043E\u0432\u044B\u043C \u0430\u0440\u043E\u043C\u0430\u0442\u043E\u043C, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u044B \u043D\u043E\u0442\u044B \u0441\u043F\u0435\u043B\u043E\u0439 \u0432\u0438\u0448\u043D\u0438 \u0438 \u0431\u0435\u043B\u043E\u0433\u043E \u043F\u0435\u0440\u0446\u0430. \u041E\u0431\u044A\u0435\u043C\u043D\u043E\u0435 \u0438 \u0441\u043E\u0447\u043D\u043E\u0435 \u0432\u043E \u0432\u043A\u0443\u0441\u0435 \u0432\u0438\u043D\u043E, \u0441 \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u044B\u043C, \u0441\u043B\u0435\u0433\u043A\u0430 \u043F\u0435\u0440\u0435\u0447\u043D\u044B\u043C \u043F\u043E\u0441\u043B\u0435\u0432\u043A\u0443\u0441\u0438\u0435\u043C\u00BB.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u0420\u0443\u0434\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "10.02.2020 \u0433.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u043E\u0432\u0430\u043D\u043E \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430\u043C\u0438:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, CardsInfoComponent_div_55_Template, 21, 12, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "5 \u043E\u0442\u0437\u044B\u0432\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, CardsInfoComponent_div_64_Template, 27, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "h3", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "h3", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "3.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_Template_button_click_76_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CardsInfoComponent_Template_i_click_79_listener() { return ctx.addComment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "\u041E\u0442\u0437\u044B\u0432 \u043E \u0442\u043E\u0432\u0430\u0440\u0435 \u0412\u0438\u043D\u043E \u041A\u0440\u0430\u0441\u043D\u043E\u0435 \u0421\u0443\u0445\u043E\u0435 \u041B\u0435\u0432\u043A\u0430\u0434\u0438\u044F...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "span", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "\u041E\u0431\u0449\u0430\u044F \u043E\u0446\u0435\u043D\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](88, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](89, "i", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "h3", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, "\u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 \u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "textarea", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "span", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "\u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "\u0412\u0430\u0448 \u043E\u0442\u0437\u044B\u0432 \u0431\u0443\u0434\u0435\u0442 \u0432\u0438\u0434\u0435\u043D \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "\u041E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435 \u0438 \u0440\u0435\u0433\u0438\u043E\u043D\u0435:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "\u0412\u0438\u043D\u043E\u0433\u0440\u0430\u0434 \u0441\u043E\u0431\u0438\u0440\u0430\u044E\u0442 \u0432\u0440\u0443\u0447\u043D\u0443\u044E \u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0438\u043D\u043E\u0433\u0440\u0430\u0434\u043D\u043E\u0435 \u0441\u0443\u0441\u043B\u043E \u043D\u0430\u0441\u0442\u0430\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0437\u0433\u0435 \u043F\u0440\u0438 \u043F\u043E\u043D\u0438\u0436\u0435\u043D\u043D\u044B\u0445 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430\u0445. \u0410\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u044F \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0446\u0435\u043C\u0435\u043D\u0442\u043D\u044B\u0445 \u0447\u0430\u043D\u0430\u0445, \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F \u0447\u0430\u0441\u0442\u044C \u0432\u0438\u043D\u0430 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u043D\u0430 \u043C\u0435\u0437\u0433\u0435 \u043F\u043E\u0441\u043B\u0435 \u0444\u0435\u0440\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438. 40% \u0432\u0438\u043D\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043D\u0430 \u0432\u044B\u0434\u0435\u0440\u0436\u043A\u0443 \u0432 \u0434\u0443\u0431\u0435 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 8 \u043C\u0435\u0441\u044F\u0446\u0435\u0432. \u0424\u0438\u043D\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u043B\u0435\u043D\u0434 \u0440\u0430\u0437\u043B\u0438\u0432\u0430\u044E\u0442 \u043F\u043E \u0431\u0443\u0442\u044B\u043B\u043A\u0430\u043C \u0441\u043F\u0443\u0441\u0442\u044F \u0433\u043E\u0434.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "\u041F\u043E\u0445\u043E\u0436\u0438\u0435 \u0432\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](111, "cards-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "h6", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.img, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.ratingNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c2, !ctx.favorite));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c2, ctx.favorite));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.productInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.carousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.feedBackTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.feedBack);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx.active));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.NzBreadCrumbItemComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_1__.CardsCatalogComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    max-width: 1245px;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%] {\r\n    margin-top: 140px;\r\n    display: flex;\r\n    grid-gap: 0 125px;\r\n    gap: 0 125px;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 42px;\r\n    line-height: 49px;\r\n    color: #333;\r\n    width: 619px;\r\n    margin: 0 70px 0 39px;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   .noLike.favorite[_ngcontent-%COMP%] {\r\n    fill: #4E4E4E;\r\n    display: block;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   .like[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-header[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]   .like.favorite[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%] {\r\n    margin-top: 37px;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-gap: 0 10px;\r\n    gap: 0 10px;\r\n    margin-top: 30px;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   .filter-text[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 17px;\r\n    line-height: 20px;\r\n    color: #4e4e4e;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   a.filter-btn[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    color: #4e4e4e;\r\n    margin-top: 8px;\r\n    cursor: pointer;\r\n    height: 29px;\r\n    padding: 5px 22px;\r\n    transition: 0.5s;\r\n}\r\n\r\n.cards-info[_ngcontent-%COMP%]   .info-content[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]   a.filter-btn.active[_ngcontent-%COMP%] {\r\n    background: #9D4E6D;\r\n    border-radius: 4px;\r\n    color: #fff;\r\n    font-family: \"roboto-500\";\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n.commentExperts[_ngcontent-%COMP%] {\r\n    margin-top: 120px;\r\n}\r\n\r\n\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .accordingToExpert[_ngcontent-%COMP%] {\r\n    width: 902px;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 32px;\r\n    line-height: 37px;\r\n    color: #03050C;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .accordingToExpert[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #2B2B2B;\r\n    margin-top: 44px;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .accordingToExpert[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin: -30px 50px 0 0;\r\n    display: flex;\r\n    grid-gap: 0 10px;\r\n    gap: 0 10px;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .accordingToExpert[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 20px;\r\n    line-height: 32px;\r\n    color: #818181;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .accordingToExpert[_ngcontent-%COMP%]   .sub-content[_ngcontent-%COMP%]   .sub-date[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-300\";\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #404040;\r\n    margin-top: 2px;\r\n}\r\n\r\n\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .recommendedByExperts[_ngcontent-%COMP%] {\r\n    margin: 100px 0;\r\n}\r\n\r\n\r\n\r\n.carusel[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    display: flex;\r\n    grid-gap: 0 20px;\r\n    gap: 0 20px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.carusel-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 0 50px;\r\n    gap: 0 50px;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%] {\r\n    width: 166px;\r\n    height: 300px;\r\n    cursor: pointer;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\r\n    width: 166px;\r\n    height: 166px;\r\n    border-radius: 50%;\r\n    background: grey;\r\n    outline: none;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 166px;\r\n    height: 166px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.img-hide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    opacity: 0.5;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-card[_ngcontent-%COMP%]   .carousel-title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 24px;\r\n    line-height: 32px;\r\n    color: #2B2B2B;\r\n    text-align: center;\r\n    margin-top: 20px;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-card.img-hide[_ngcontent-%COMP%]   .carousel-title[_ngcontent-%COMP%] {\r\n    color: #818181;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .carusel-btns[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    opacity: 1;\r\n    pointer-events: all;\r\n    transition: 0.5s;\r\n    margin-top: 26px;\r\n    fill: #505050;\r\n    margin-top: 80px;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .carusel-btns.isActive[_ngcontent-%COMP%] {\r\n    opacity: 0.3;\r\n    pointer-events: none;\r\n    transition: 0.5s;\r\n}\r\n\r\n\r\n\r\n.feedBack[_ngcontent-%COMP%]   .feedBack-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    text-align: center;\r\n    grid-gap: 0 20px;\r\n    gap: 0 20px;\r\n}\r\n\r\n.feedBack[_ngcontent-%COMP%]   .feedBack-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-700\";\r\n    font-size: 22px;\r\n    line-height: 26px;\r\n    color: #414141;\r\n}\r\n\r\n.feedBack[_ngcontent-%COMP%]   .feedBack-title[_ngcontent-%COMP%]   span.feedBack-subtitle[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 14x;\r\n    line-height: 32px;\r\n    color: #9e9e9e;\r\n}\r\n\r\n.feedBack[_ngcontent-%COMP%]   .feedBack-about[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n}\r\n\r\n.feedBack[_ngcontent-%COMP%]   .feedBack-about[_ngcontent-%COMP%]   .feedBack-block[_ngcontent-%COMP%]   .feedBack-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    grid-gap: 0 80px;\r\n    gap: 0 80px;\r\n    border-top: 1px solid #FFE8F1;\r\n    padding-top: 27px;\r\n    width: 70%;\r\n    margin-top: 30px;\r\n}\r\n\r\n.feedBack[_ngcontent-%COMP%]   .feedBack-about[_ngcontent-%COMP%]   .feedBack-block[_ngcontent-%COMP%] {\r\n    margin-bottom: 120px;\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%] {\r\n    width: 40%;\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   h4.feedBack-name[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    color: #03050C;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-gap: 0 15px;\r\n    gap: 0 15px;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-700\";\r\n    font-size: 26px;\r\n    line-height: 30px;\r\n    color: #9D4E6D;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #c4c4c4;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .rating[_ngcontent-%COMP%]   i.active[_ngcontent-%COMP%] {\r\n    color: #9D4E6D;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .rating-date[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 15x;\r\n    line-height: 18px;\r\n    color: #b4b4b4;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .previous-reviews[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .previous-reviews[_ngcontent-%COMP%]   .previous-text[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 15x;\r\n    line-height: 18px;\r\n    color: #9D4E6D;\r\n    border-bottom: 1px dashed #b8b8b8;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-rating[_ngcontent-%COMP%]   .previous-reviews[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #9D4E6D;\r\n    margin: 5px 0 0 8px;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-info[_ngcontent-%COMP%] {\r\n    width: 676px;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 18x;\r\n    line-height: 26px;\r\n    color: #7a7a7a;\r\n}\r\n\r\n.feedBack-block[_ngcontent-%COMP%]   .feedBack-info[_ngcontent-%COMP%]   .info-btn[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 16x;\r\n    line-height: 19px;\r\n    color: #f5f5f5;\r\n    background: #242424;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 134px;\r\n    height: 27px;\r\n    cursor: pointer;\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .consumer-rating[_ngcontent-%COMP%] {\r\n    margin-top: -50px;\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .consumer-rating[_ngcontent-%COMP%]   .consumer-title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 16x;\r\n    line-height: 19px;\r\n    color: #8c8c8c;\r\n    width: 140px;\r\n    margin: 0 auto 25px;\r\n    text-align: center;\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .consumer-rating[_ngcontent-%COMP%]   .rating-block[_ngcontent-%COMP%] {\r\n    border: 1px solid #9d9d9d;\r\n    width: 275px;\r\n    height: 147px;\r\n    text-align: center;\r\n    border-radius: 10px\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .consumer-rating[_ngcontent-%COMP%]   .rating-block[_ngcontent-%COMP%]   .consumer-number[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 58px;\r\n    line-height: 68px;\r\n    color: #7d7d7d;\r\n    margin: 26px 0 0;\r\n}\r\n\r\n.feedBack-about[_ngcontent-%COMP%]   .consumer-rating[_ngcontent-%COMP%]   .rating-btn[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 18x;\r\n    line-height: 22px;\r\n    color: #f5f5f5;\r\n    background: #242424;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 275px;\r\n    height: 54px;\r\n    margin-top: 40px;\r\n    padding: 5px 0 0;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%] {\r\n    width: 1001px;\r\n    height: 751px;\r\n    background: #E9E9E9;\r\n    border-radius: 20px;\r\n    margin: 53px 0 132px;\r\n    padding: 30px 0 0 90px;\r\n    display: none;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .comment.actived[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.commentExperts[_ngcontent-%COMP%]   .comment[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\r\n    float: right;\r\n    color: #8888;\r\n    margin-right: 22px;\r\n    cursor: pointer;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   h3.comment-title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 32px;\r\n    line-height: 37px;\r\n    color: #03050C;\r\n    margin: 30px 0 66px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   span.overal-rating[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 19px;\r\n    line-height: 32px;\r\n    color: #2B2B2B;\r\n    margin-bottom: 17px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .rating-star[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #D8D8D8;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .comment-message[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 19px;\r\n    line-height: 32px;\r\n    color: #2B2B2B;\r\n    margin: 47px 0 22px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\r\n    width: 773px;\r\n    height: 143px;\r\n    padding: 15px;\r\n    resize: none;\r\n    outline: none;\r\n    background: #FFFFFF;\r\n    border: none;\r\n    box-sizing: border-box;\r\n    border-radius: 4px 0px 0px 4px\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]:placeholder-shown {\r\n    font-family: \"inter-400\";\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    color: #9C9C9C;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .agreeModerationx[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .agreeModerationx[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    color: #777;\r\n    margin-left: 10px;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .agreeModerationx[_ngcontent-%COMP%]   .moderation-text[_ngcontent-%COMP%] {\r\n    text-decoration: underline;\r\n    color: #2B2B2B;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .agreeModerationx[_ngcontent-%COMP%]   .moderation-rules[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-style: italic;\r\n    font-size: 14px;\r\n    line-height: 32px;\r\n    color: #777;\r\n    margin: 0;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .agreeModerationx[_ngcontent-%COMP%]   .agreeModerationx-checkbox[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    accent-color: #000;\r\n}\r\n\r\n.comment[_ngcontent-%COMP%]   .comment-btn[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 18x;\r\n    line-height: 21px;\r\n    color: #f5f5f5;\r\n    background: #242424;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 358px;\r\n    height: 54px;\r\n    margin-top: 20px;\r\n    padding: 5px 0 0;\r\n    cursor: pointer;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%] {\r\n    margin-top: 90px;\r\n}\r\n\r\n.card-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-500\";\r\n    font-size: 46px;\r\n    line-height: 52px;\r\n    color: #282828;\r\n    text-align: center;\r\n    margin-bottom: 130px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQVk7SUFBWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07QUFDVjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFXO0lBQVgsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixnQkFBVztJQUFYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFFQSx5QkFBeUI7O0FBRXpCO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxLQUFLOztBQUNMO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBVztJQUFYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQVc7SUFBWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBR0EsYUFBYTs7QUFDYjtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQVc7SUFBWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixnQkFBVztJQUFYLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBVztJQUFYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUEsWUFBWTs7QUFFWjtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImNhcmRzLWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjQ1cHg7XHJcbn1cclxuXHJcbi5jYXJkcy1pbmZvIHtcclxuICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMCAxMjVweDtcclxufVxyXG5cclxuLmNhcmRzLWluZm8gLmltZy1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uY2FyZHMtaW5mbyAuaW5mby1jb250ZW50IC5pbmZvLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY2FyZHMtaW5mbyAuaW5mby1oZWFkZXIgLmNhcmQtdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ5cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiA2MTlweDtcclxuICAgIG1hcmdpbjogMCA3MHB4IDAgMzlweDtcclxufVxyXG5cclxuLmNhcmRzLWluZm8gLmluZm8taGVhZGVyIC5mYXZvcml0ZS1pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJkcy1pbmZvIC5pbmZvLWhlYWRlciAuZmF2b3JpdGUtaWNvbiAubm9MaWtlLmZhdm9yaXRlIHtcclxuICAgIGZpbGw6ICM0RTRFNEU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNhcmRzLWluZm8gLmluZm8taGVhZGVyIC5mYXZvcml0ZS1pY29uIC5saWtlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbi5jYXJkcy1pbmZvIC5pbmZvLWhlYWRlciAuZmF2b3JpdGUtaWNvbiAubGlrZS5mYXZvcml0ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcbi5jYXJkcy1pbmZvIC5pbmZvLWNvbnRlbnQgLmZpbHRlci1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDM3cHg7XHJcbn1cclxuXHJcbi5jYXJkcy1pbmZvIC5pbmZvLWNvbnRlbnQgLmZpbHRlci1jb250ZW50IGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY2FyZHMtaW5mbyAuaW5mby1jb250ZW50IC5maWx0ZXItY29udGVudCAuZmlsdGVyLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogIzRlNGU0ZTtcclxufVxyXG5cclxuLmNhcmRzLWluZm8gLmluZm8tY29udGVudCAuZmlsdGVyLWNvbnRlbnQgYS5maWx0ZXItYnRuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6ICM0ZTRlNGU7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMjJweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5jYXJkcy1pbmZvIC5pbmZvLWNvbnRlbnQgLmZpbHRlci1jb250ZW50IGEuZmlsdGVyLWJ0bi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzlENEU2RDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcblxyXG4vKiBjb21tZW50RXhwZXJ0cyAqL1xyXG5cclxuLmNvbW1lbnRFeHBlcnRzIHtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG59XHJcblxyXG4vKiBhY2NvcmRpbmdUb0V4cGVydFwiICovXHJcbi5jb21tZW50RXhwZXJ0cyAuYWNjb3JkaW5nVG9FeHBlcnQge1xyXG4gICAgd2lkdGg6IDkwMnB4O1xyXG59XHJcblxyXG4uY29tbWVudEV4cGVydHMgLnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by01MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG4gICAgY29sb3I6ICMwMzA1MEM7XHJcbn1cclxuXHJcbi5jb21tZW50RXhwZXJ0cyAuYWNjb3JkaW5nVG9FeHBlcnQgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgY29sb3I6ICMyQjJCMkI7XHJcbiAgICBtYXJnaW4tdG9wOiA0NHB4O1xyXG59XHJcblxyXG4uY29tbWVudEV4cGVydHMgLmFjY29yZGluZ1RvRXhwZXJ0IC5zdWItY29udGVudCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW46IC0zMHB4IDUwcHggMCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMCAxMHB4O1xyXG59XHJcblxyXG4uY29tbWVudEV4cGVydHMgLmFjY29yZGluZ1RvRXhwZXJ0IC5zdWItY29udGVudCAuc3ViLW5hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBjb2xvcjogIzgxODE4MTtcclxufVxyXG5cclxuLmNvbW1lbnRFeHBlcnRzIC5hY2NvcmRpbmdUb0V4cGVydCAuc3ViLWNvbnRlbnQgLnN1Yi1kYXRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by0zMDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgY29sb3I6ICM0MDQwNDA7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuXHJcbi8qIHJlY29tbWVuZGVkQnlFeHBlcnRzICovXHJcblxyXG4uY29tbWVudEV4cGVydHMgLnJlY29tbWVuZGVkQnlFeHBlcnRzIHtcclxuICAgIG1hcmdpbjogMTAwcHggMDtcclxufVxyXG5cclxuLyogICovXHJcbi5jYXJ1c2VsIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwIDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uY2FydXNlbC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAgNTBweDtcclxufVxyXG5cclxuLmNhcnVzZWwgLmltZy1jYXJkIHtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY2FydXNlbCAuaW1nLWNhcmQgLmltZy1ibG9jayB7XHJcbiAgICB3aWR0aDogMTY2cHg7XHJcbiAgICBoZWlnaHQ6IDE2NnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG4uY2FydXNlbCAuaW1nLWNhcmQgLmltZy1ibG9jayBpbWcge1xyXG4gICAgd2lkdGg6IDE2NnB4O1xyXG4gICAgaGVpZ2h0OiAxNjZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuXHJcbi5pbWctaGlkZSBpbWcge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uY2FydXNlbCAuaW1nLWNhcmQgLmNhcm91c2VsLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgY29sb3I6ICMyQjJCMkI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY2FydXNlbCAuaW1nLWNhcmQuaW1nLWhpZGUgLmNhcm91c2VsLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjODE4MTgxO1xyXG59XHJcblxyXG4uY2FydXNlbCAuY2FydXNlbC1idG5zIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIG1hcmdpbi10b3A6IDI2cHg7XHJcbiAgICBmaWxsOiAjNTA1MDUwO1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLmNhcnVzZWwgLmNhcnVzZWwtYnRucy5pc0FjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcblxyXG4vKiBmZWVkQmFjayAqL1xyXG4uZmVlZEJhY2sgLmZlZWRCYWNrLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAgMjBweDtcclxufVxyXG5cclxuLmZlZWRCYWNrIC5mZWVkQmFjay10aXRsZSBoMyB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNzAwXCI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGNvbG9yOiAjNDE0MTQxO1xyXG59XHJcblxyXG4uZmVlZEJhY2sgLmZlZWRCYWNrLXRpdGxlIHNwYW4uZmVlZEJhY2stc3VidGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIGNvbG9yOiAjOWU5ZTllO1xyXG59XHJcblxyXG4uZmVlZEJhY2sgLmZlZWRCYWNrLWFib3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZlZWRCYWNrIC5mZWVkQmFjay1hYm91dCAuZmVlZEJhY2stYmxvY2sgLmZlZWRCYWNrLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMCA4MHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNGRkU4RjE7XHJcbiAgICBwYWRkaW5nLXRvcDogMjdweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uZmVlZEJhY2sgLmZlZWRCYWNrLWFib3V0IC5mZWVkQmFjay1ibG9jayB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWFib3V0IC5mZWVkQmFjay1ibG9jayAuZmVlZEJhY2stcmF0aW5nIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5mZWVkQmFjay1hYm91dCAuZmVlZEJhY2stYmxvY2sgLmZlZWRCYWNrLXJhdGluZyBoNC5mZWVkQmFjay1uYW1lIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMwMzA1MEM7XHJcbn1cclxuXHJcbi5mZWVkQmFjay1ibG9jayAuZmVlZEJhY2stcmF0aW5nIC5yYXRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAgMTVweDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1yYXRpbmcgLnJhdGluZyBzcGFuIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by03MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgY29sb3I6ICM5RDRFNkQ7XHJcbn1cclxuXHJcbi5mZWVkQmFjay1ibG9jayAuZmVlZEJhY2stcmF0aW5nIC5yYXRpbmcgaSB7XHJcbiAgICBjb2xvcjogI2M0YzRjNDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1yYXRpbmcgLnJhdGluZyBpLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzlENEU2RDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1yYXRpbmcgLnJhdGluZy1kYXRlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTV4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogI2I0YjRiNDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1yYXRpbmcgLnByZXZpb3VzLXJldmlld3Mge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1yYXRpbmcgLnByZXZpb3VzLXJldmlld3MgLnByZXZpb3VzLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNXg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGNvbG9yOiAjOUQ0RTZEO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjYjhiOGI4O1xyXG59XHJcblxyXG4uZmVlZEJhY2stYmxvY2sgLmZlZWRCYWNrLXJhdGluZyAucHJldmlvdXMtcmV2aWV3cyBpIHtcclxuICAgIGNvbG9yOiAjOUQ0RTZEO1xyXG4gICAgbWFyZ2luOiA1cHggMCAwIDhweDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1pbmZvIHtcclxuICAgIHdpZHRoOiA2NzZweDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1pbmZvIC5pbmZvIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTh4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzdhN2E3YTtcclxufVxyXG5cclxuLmZlZWRCYWNrLWJsb2NrIC5mZWVkQmFjay1pbmZvIC5pbmZvLWJ0biB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDE2eDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDEzNHB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmVlZEJhY2stYWJvdXQgLmNvbnN1bWVyLXJhdGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWFib3V0IC5jb25zdW1lci1yYXRpbmcgLmNvbnN1bWVyLXRpdGxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTZ4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mZWVkQmFjay1hYm91dCAuY29uc3VtZXItcmF0aW5nIC5yYXRpbmctYmxvY2sge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlkOWQ5ZDtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogMTQ3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbn1cclxuXHJcbi5mZWVkQmFjay1hYm91dCAuY29uc3VtZXItcmF0aW5nIC5yYXRpbmctYmxvY2sgLmNvbnN1bWVyLW51bWJlciB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDU4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjhweDtcclxuICAgIGNvbG9yOiAjN2Q3ZDdkO1xyXG4gICAgbWFyZ2luOiAyNnB4IDAgMDtcclxufVxyXG5cclxuLmZlZWRCYWNrLWFib3V0IC5jb25zdW1lci1yYXRpbmcgLnJhdGluZy1idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYmFja2dyb3VuZDogIzI0MjQyNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAyNzVweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBjb21tZW50ICovXHJcblxyXG4uY29tbWVudEV4cGVydHMgLmNvbW1lbnQge1xyXG4gICAgd2lkdGg6IDEwMDFweDtcclxuICAgIGhlaWdodDogNzUxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTlFOUU5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogNTNweCAwIDEzMnB4O1xyXG4gICAgcGFkZGluZzogMzBweCAwIDAgOTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb21tZW50RXhwZXJ0cyAuY29tbWVudC5hY3RpdmVkIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uY29tbWVudEV4cGVydHMgLmNvbW1lbnQgLmZhLXRpbWVzIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNvbG9yOiAjODg4ODtcclxuICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbW1lbnQgaDMuY29tbWVudC10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNTAwXCI7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgIGNvbG9yOiAjMDMwNTBDO1xyXG4gICAgbWFyZ2luOiAzMHB4IDAgNjZweDtcclxufVxyXG5cclxuLmNvbW1lbnQgc3Bhbi5vdmVyYWwtcmF0aW5nIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by01MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgY29sb3I6ICMyQjJCMkI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxN3B4O1xyXG59XHJcblxyXG4uY29tbWVudCAucmF0aW5nLXN0YXIgaSB7XHJcbiAgICBjb2xvcjogI0Q4RDhEODtcclxufVxyXG5cclxuLmNvbW1lbnQgLmNvbW1lbnQtbWVzc2FnZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNTAwXCI7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIGNvbG9yOiAjMkIyQjJCO1xyXG4gICAgbWFyZ2luOiA0N3B4IDAgMjJweDtcclxufVxyXG5cclxuLmNvbW1lbnQgLm1lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDc3M3B4O1xyXG4gICAgaGVpZ2h0OiAxNDNweDtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggMHB4IDBweCA0cHhcclxufVxyXG5cclxuLmNvbW1lbnQgLm1lc3NhZ2U6cGxhY2Vob2xkZXItc2hvd24ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiaW50ZXItNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxuICAgIGNvbG9yOiAjOUM5QzlDO1xyXG59XHJcblxyXG4uY29tbWVudCAuYWdyZWVNb2RlcmF0aW9ueCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uY29tbWVudCAuYWdyZWVNb2RlcmF0aW9ueCAudGV4dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNTAwXCI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb21tZW50IC5hZ3JlZU1vZGVyYXRpb254IC5tb2RlcmF0aW9uLXRleHQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzJCMkIyQjtcclxufVxyXG5cclxuLmNvbW1lbnQgLmFncmVlTW9kZXJhdGlvbnggLm1vZGVyYXRpb24tcnVsZXMge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbi5jb21tZW50IC5hZ3JlZU1vZGVyYXRpb254IC5hZ3JlZU1vZGVyYXRpb254LWNoZWNrYm94IHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgYWNjZW50LWNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uY29tbWVudCAuY29tbWVudC1idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGNvbG9yOiAjZjVmNWY1O1xyXG4gICAgYmFja2dyb3VuZDogIzI0MjQyNDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAzNThweDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IDkwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQgLnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDUycHg7XHJcbiAgICBjb2xvcjogIzI4MjgyODtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEzMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 7309:
/*!*********************************************************************!*\
  !*** ./src/app/components/cards/cards-list/cards-list.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsListComponent": () => (/* binding */ CardsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function CardsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 Wi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0430\u0440\u043E\u043C\u0430\u0442\u044B:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vino_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", vino_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vino_r1.ratingNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vino_r1.title, " ");
} }
class CardsListComponent {
    constructor() {
        this.vinoInfo = [
            {
                title: "Вино Красное Сухое Левкадия Резерв Крымск 2010",
                img: "../../../../assets/img/vinocl.png",
                ratingNumber: 86,
            },
            {
                title: "Вино Каберне Совиньон розовое 2010",
                img: "../../../../assets/img/vino2cl.png",
                ratingNumber: 90,
            },
            {
                title: "Вино Красное Сухое Левкадия Резерв Крымск 2010",
                img: "../../../../assets/img/vinocl.png",
                ratingNumber: 86,
            },
            {
                title: "Вино Каберне Совиньон розовое 2010",
                img: "../../../../assets/img/vino2cl.png",
                ratingNumber: 90,
            },
        ];
    }
    ngOnInit() {
    }
}
CardsListComponent.ɵfac = function CardsListComponent_Factory(t) { return new (t || CardsListComponent)(); };
CardsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsListComponent, selectors: [["cards-list"]], decls: 1, vars: 1, consts: [["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "card-img-block"], ["alt", "#", 3, "src"], [1, "rating-info"], [1, "rating-text"], [1, "rating-number"], [1, "main-flavors-info"], [1, "main-flavors-text"], [1, "fruits"], ["src", "../../../../assets/img/003-apple.png", "alt", "#"], ["src", "../../../../assets/img/001-lemon.png", "alt", "#"], ["src", "../../../../assets/img/002-orange.png", "alt", "#"], ["src", "../../../../assets/img/004-green-chili-pepper.png", "alt", "#"], [1, "card-title"], [1, "favorite-icon"], ["src", "../../../../assets/img/Union.png", "alt", ""]], template: function CardsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CardsListComponent_div_0_Template, 20, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vinoInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".card[_ngcontent-%COMP%]{\r\n    width: 1004px;\r\n    height: 220px;\r\n    background: #F5F5F5;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    \r\n    justify-content: space-around;\r\n    margin: 0 auto;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%] {\r\n    mix-blend-mode: darken; \r\n    margin: auto 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .rating-info[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .main-flavors-info[_ngcontent-%COMP%]{\r\n    margin: 51px 0;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .rating-number[_ngcontent-%COMP%]{\r\n    font-size: 80px;\r\n    line-height: 94px;\r\n    font-family: \"roboto-400\";\r\n    color: #9D4E6D;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .main-flavors-info[_ngcontent-%COMP%]   .fruits[_ngcontent-%COMP%]{\r\n    margin: 30px 0;\r\n    display: flex;\r\n    grid-gap: 0 18px;\r\n    gap: 0 18px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 35px;\r\n    line-height: 42px;\r\n    color: #333;\r\n    width: 471px;\r\n    margin-top: 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .favorite-icon[_ngcontent-%COMP%]{\r\n    margin-top: 23px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFXO0lBQVgsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiY2FyZHMtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XHJcbiAgICB3aWR0aDogMTAwNHB4O1xyXG4gICAgaGVpZ2h0OiAyMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY1RjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaW1nLWJsb2NrIHtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBkYXJrZW47IFxyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbn1cclxuXHJcbi5jYXJkIC5yYXRpbmctaW5mbyxcclxuLmNhcmQgLm1haW4tZmxhdm9ycy1pbmZve1xyXG4gICAgbWFyZ2luOiA1MXB4IDA7XHJcbn1cclxuXHJcbi5jYXJkIC5yYXRpbmctbnVtYmVye1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDk0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBjb2xvcjogIzlENEU2RDtcclxufVxyXG5cclxuLmNhcmQgLm1haW4tZmxhdm9ycy1pbmZvIC5mcnVpdHN7XHJcbiAgICBtYXJnaW46IDMwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAgMThweDtcclxufVxyXG5cclxuLmNhcmQgIC5jYXJkLXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIHdpZHRoOiA0NzFweDtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5mYXZvcml0ZS1pY29ue1xyXG4gICAgbWFyZ2luLXRvcDogMjNweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 1888:
/*!***********************************************************!*\
  !*** ./src/app/components/cards/cards/cards.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardsComponent": () => (/* binding */ CardsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navbar/navbar.component */ 2439);
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../side-menu/side-menu.component */ 8496);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ 7646);





const _c0 = function () { return { exact: true }; };
const _c1 = function () { return ["card-catalog"]; };
const _c2 = function () { return ["card-list"]; };
class CardsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], decls: 17, vars: 8, consts: [[1, "container"], [1, "filter-all"], [1, "filter-type"], [1, "terms-title"], [1, "filter-cards"], [1, "filter-icons"], ["routerLinkActive", "actived", 1, "fas", "fa-th-large", 3, "routerLinkActiveOptions", "routerLink"], ["routerLinkActive", "actived", 1, "fas", "fa-list-ul", 3, "routerLinkActiveOptions", "routerLink"], [1, "filter-content"], [1, "load-more"], [1, "load-more-text"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0412\u0438\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__.SideMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".container[_ngcontent-%COMP%]   .terms-title[_ngcontent-%COMP%]{\r\n    margin:46px 0 37px;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 0 66px;\r\n    gap: 0 66px;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%]   .filter-type[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    z-index: 9999;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%]   .filter-cards[_ngcontent-%COMP%] {\r\n    margin: 100px auto;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%]   .filter-cards[_ngcontent-%COMP%]   .filter-icons[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%]   .filter-cards[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n    cursor: pointer;\r\n    color:#BBBBBB;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%]   .filter-cards[_ngcontent-%COMP%]   i.actived[_ngcontent-%COMP%]{\r\n    color: #202020;\r\n}\r\n\r\n.filter-all[_ngcontent-%COMP%]   .filter-cards[_ngcontent-%COMP%]   .filter-content[_ngcontent-%COMP%]{\r\n    margin: 50px 0;\r\n}\r\n\r\n.load-more[_ngcontent-%COMP%] {\r\n    margin-top: -60px;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBVztJQUFYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uY29udGFpbmVyIC50ZXJtcy10aXRsZXtcclxuICAgIG1hcmdpbjo0NnB4IDAgMzdweDtcclxufVxyXG5cclxuLmZpbHRlci1hbGwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMCA2NnB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWFsbCAuZmlsdGVyLXR5cGV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG59XHJcblxyXG4uZmlsdGVyLWFsbCAuZmlsdGVyLWNhcmRzIHtcclxuICAgIG1hcmdpbjogMTAwcHggYXV0bztcclxufVxyXG4uZmlsdGVyLWFsbCAuZmlsdGVyLWNhcmRzIC5maWx0ZXItaWNvbnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZmlsdGVyLWFsbCAuZmlsdGVyLWNhcmRzIGl7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiNCQkJCQkI7XHJcbn1cclxuXHJcbi5maWx0ZXItYWxsIC5maWx0ZXItY2FyZHMgaS5hY3RpdmVke1xyXG4gICAgY29sb3I6ICMyMDIwMjA7XHJcbn1cclxuXHJcbi5maWx0ZXItYWxsIC5maWx0ZXItY2FyZHMgLmZpbHRlci1jb250ZW50e1xyXG4gICAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5sb2FkLW1vcmUge1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 1945:
/*!***********************************************************!*\
  !*** ./src/app/components/carousel/carousel.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function CarouselComponent_div_0_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.carousel.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_img_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r2.carousel.firstImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CarouselComponent_div_0_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.carousel.secondImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "isActive": a0 }; };
function CarouselComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarouselComponent_div_0_img_3_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarouselComponent_div_0_img_5_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarouselComponent_div_0_img_7_Template, 1, 1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_0_Template__svg_svg_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.prev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarouselComponent_div_0_Template__svg_svg_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.carousel.mainImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.carousel.firstImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.carousel.secondImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.carousel.currentImageIndex === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u0444\u043E\u0442\u043E ", ctx_r0.carousel.currentImageIndex + 1, " \u0438\u0437 ", ctx_r0.carousel.totalImagesNumber, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.carousel.currentImageIndex === ctx_r0.carouselImg.length - 1));
} }
class CarouselComponent {
    constructor() {
        this.carouselImg = [
            {
                img: "../../../assets/img/carusel.png"
            },
            {
                img: "../../../assets/img/banner.png"
            },
            {
                img: "../../../assets/img/news1.png"
            },
            {
                img: "../../../assets/img/vino.png"
            },
            {
                img: "../../../assets/img/expert1.png"
            }
        ];
        this.carousel = {
            mainImage: "",
            firstImage: "",
            secondImage: "",
            currentImageIndex: 0,
            totalImagesNumber: 0
        };
    }
    ngOnInit() {
        this.loadCarouselImages();
    }
    loadCarouselImages() {
        if (this.carouselImg.length > 0) {
            this.carousel.mainImage = this.carouselImg[0].img;
            this.carousel.firstImage = this.carouselImg[1] ? this.carouselImg[1].img : "";
            this.carousel.secondImage = this.carouselImg[2] ? this.carouselImg[2].img : "";
            this.carousel.totalImagesNumber = this.carouselImg.length;
        }
    }
    next() {
        if (this.carousel.currentImageIndex < this.carouselImg.length - 1) {
            let i = this.carousel.currentImageIndex;
            this.carousel.mainImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
            this.carousel.firstImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
            this.carousel.secondImage = this.carouselImg[i + 3] ? this.carouselImg[i + 3].img : "";
            this.carousel.currentImageIndex = i + 1;
        }
    }
    prev() {
        if (this.carousel.currentImageIndex > 0) {
            let i = this.carousel.currentImageIndex - 1;
            this.carousel.mainImage = this.carouselImg[i] ? this.carouselImg[i].img : "";
            this.carousel.firstImage = this.carouselImg[i + 1] ? this.carouselImg[i + 1].img : "";
            this.carousel.secondImage = this.carouselImg[i + 2] ? this.carouselImg[i + 2].img : "";
            this.carousel.currentImageIndex = i;
        }
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 1, vars: 1, consts: [["class", "carusel", 4, "ngIf"], [1, "carusel"], [1, "carusel-content"], [1, "img-block"], ["alt", "#", 3, "src", 4, "ngIf"], [1, "img-block", "img-hide"], [1, "carusel-btns"], ["width", "50", "height", "16", "viewBox", "0 0 50 16", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "caruselBtn", 3, "ngClass", "click"], ["d", "M0.292893 7.29289C-0.0976295 7.68341 -0.0976296 8.31658 0.292892 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41422 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.928929C7.68054 0.538404 7.04738 0.538404 6.65685 0.928928L0.292893 7.29289ZM50 7L1 7L1 9L50 9L50 7Z"], ["d", "M49.7071 8.70711C50.0976 8.31658 50.0976 7.68342 49.7071 7.29289L43.3431 0.928932C42.9526 0.538408 42.3195 0.538408 41.9289 0.928932C41.5384 1.31946 41.5384 1.95262 41.9289 2.34315L47.5858 8L41.9289 13.6569C41.5384 14.0474 41.5384 14.6805 41.9289 15.0711C42.3195 15.4616 42.9526 15.4616 43.3431 15.0711L49.7071 8.70711ZM0 9H49V7H0V9Z"], ["alt", "#", 3, "src"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarouselComponent_div_0_Template, 15, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.carousel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass], styles: [".carusel[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n\r\n.carusel-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 0 50px;\r\n    gap: 0 50px;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 372px;\r\n    background: grey;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 578px;\r\n    height: 372px;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .carusel-btns[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    grid-gap: 0 20px;\r\n    gap: 0 20px;\r\n    margin-top: 26px;\r\n    cursor: pointer;\r\n}\r\n\r\n.img-hide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    opacity: 0.5;\r\n}\r\n\r\n.carusel[_ngcontent-%COMP%]   .carusel-btns[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n    color: #7b7b7b;\r\n   margin-top: -10px;\r\n}\r\n\r\n.carusel-btns[_ngcontent-%COMP%]   .caruselBtn.isActive[_ngcontent-%COMP%]{\r\n    fill: #7b7b7b;\r\n}\r\n\r\n.carusel-btns[_ngcontent-%COMP%]   svg.caruselBtn[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n    fill: #494949 ;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQVc7SUFBWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdCQUFXO0lBQVgsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7R0FDZixpQkFBaUI7QUFDcEI7O0FBR0M7SUFDRyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ1c2Vse1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcnVzZWwtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwIDUwcHg7XHJcbn1cclxuXHJcbi5jYXJ1c2VsIC5pbWctYmxvY2t7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzcycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG59XHJcblxyXG4uY2FydXNlbCAuaW1nLWJsb2NrIGltZ3tcclxuICAgIHdpZHRoOiA1NzhweDtcclxuICAgIGhlaWdodDogMzcycHg7XHJcbn1cclxuXHJcblxyXG4uY2FydXNlbCAuY2FydXNlbC1idG5ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMCAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltZy1oaWRlIGltZ3tcclxuICAgIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLmNhcnVzZWwgLmNhcnVzZWwtYnRucyBwe1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgICBjb2xvcjogIzdiN2I3YjtcclxuICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcblxyXG4gLmNhcnVzZWwtYnRucyAuY2FydXNlbEJ0bi5pc0FjdGl2ZXtcclxuICAgIGZpbGw6ICM3YjdiN2I7XHJcbn1cclxuXHJcbi5jYXJ1c2VsLWJ0bnMgc3ZnLmNhcnVzZWxCdG57XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmaWxsOiAjNDk0OTQ5IDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2563:
/*!*************************************************************************!*\
  !*** ./src/app/components/experts/expert-info/expert-info.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpertInfoComponent": () => (/* binding */ ExpertInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navbar/navbar.component */ 2439);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../side-menu/side-menu.component */ 8496);
/* harmony import */ var _cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/cards-catalog/cards-catalog.component */ 7520);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ 7646);






function ExpertInfoComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](info_r1.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](info_r1.title);
} }
class ExpertInfoComponent {
    constructor() {
        this.systemInfo = [
            {
                number: "22",
                title: "проведенных исследований"
            },
            {
                number: "40",
                title: "участий в конкурсах"
            },
            {
                number: "103",
                title: "оцененных образцов"
            },
            {
                number: "456",
                title: "дня работы в системе"
            },
            {
                number: "91",
                title: "средняя оценка оцененных вин"
            },
        ];
    }
    ngOnInit() {
    }
}
ExpertInfoComponent.ɵfac = function ExpertInfoComponent_Factory(t) { return new (t || ExpertInfoComponent)(); };
ExpertInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExpertInfoComponent, selectors: [["expert-info"]], decls: 48, vars: 1, consts: [[1, "container"], [1, "expert"], [1, "img-block"], ["src", "../../../../assets/img/expert1.png", "alt", "#"], [1, "expert-icon"], [1, "fab", "fa-instagram"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-youtube"], [1, "expert-text-content"], [1, "expert-name"], [1, "expert-subtitle"], [1, "expert-info"], [1, "info-title"], [1, "info-subtitle"], [1, "system-info"], [1, "system-title"], ["src", "../../../../assets/img/systemlogo.png", "alt", "#"], ["class", "system-content", 4, "ngFor", "ngForOf"], [1, "cards-filters"], [1, "terms-title"], [1, "filter-all"], [1, "filter-type"], [1, "filter-cards"], [1, "load-more"], [1, "load-more-text"], [1, "system-content"], [1, "system-number"], [1, "system-subtitle"]], template: function ExpertInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h3", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u0420\u043E\u0431\u0435\u0440\u0442 \u041F\u0430\u0440\u043A\u0435\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "\u041E\u043F\u044B\u0442\u043D\u044B\u0439 \u043F\u0440\u0435\u043F\u043E\u0434\u0430\u0432\u0430\u0442\u0435\u043B\u044C \u0438 \u0432\u0438\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442. \u041E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0439 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u0441\u043E\u043C\u0435\u043B\u044C\u0435 (ASI), \u043F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u0421\u043E\u043C\u0435\u043B\u044C\u0435, \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u00AB\u0420\u043E\u0441\u0441\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u0441\u043E\u043C\u0435\u043B\u044C\u0435 \u2013 2021\u00BB, \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u00AB\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043A\u0443\u0431\u043A\u0430 \u0441\u043E\u043C\u0435\u043B\u044C\u0435 \u2013 2020\u00BB, \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044C \u00AB\u0411\u0430\u043B\u0442\u0438\u0439\u0441\u043A\u043E\u0433\u043E \u043A\u0443\u0431\u043A\u0430 \u0441\u043E\u043C\u0435\u043B\u044C\u0435 \u2013 2019\u00BB, \u0441\u0435\u0440\u0435\u0431\u0440\u044F\u043D\u044B\u0439 \u043F\u0440\u0438\u0437\u0435\u0440 \u00AB\u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0433\u043E \u043A\u0443\u0431\u043A\u0430 \u0441\u043E\u043C\u0435\u043B\u044C\u0435 \u2013 2019\u00BB \u0438 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u0433\u043E \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 The Great Steppe Sommelier Cup 2019.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u042D\u043A\u0441\u043F\u0435\u0440\u0442 \u0432\u0438\u043D\u043D\u043E\u0439 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "\u041E\u0431\u043B\u0430\u0441\u0442\u044C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u041A\u0430\u0432\u0438\u0441\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "\u042D\u043A\u0441\u043F\u0435\u0440\u0442 \u043F\u043E \u0440\u0435\u0433\u0438\u043E\u043D\u0443:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u0421\u0428\u0410, \u0424\u0440\u0430\u043D\u0446\u0438\u044F, \u0420\u043E\u0441\u0441\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "\u0412 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, ExpertInfoComponent_div_35_Template, 5, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "\u0420\u043E\u0431\u0435\u0440\u0442 \u041F\u0430\u0440\u043A\u0435\u0440 \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "side-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "cards-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h6", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.systemInfo);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _side_menu_side_menu_component__WEBPACK_IMPORTED_MODULE_1__.SideMenuComponent, _cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_2__.CardsCatalogComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: [".expert[_ngcontent-%COMP%] {\r\n    margin-top: 83px;\r\n}\r\n\r\n.expert[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\r\n\r\n.expert[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   .expert-icon[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-gap: 0 36px;\r\n    gap: 0 36px;\r\n    color:#969696;\r\n    font-size: 18px;\r\n}\r\n\r\n.expert[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   .expert-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    cursor: pointer;\r\n}\r\n\r\n.expert[_ngcontent-%COMP%]   .expert-subtitle[_ngcontent-%COMP%] {\r\n    width: 869px;\r\n}\r\n\r\n.system-info[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    text-align: center;\r\n    border: 1px solid #656565;\r\n    border-radius: 20px;\r\n    height: 176px;\r\n    padding: 33px;\r\n}\r\n\r\n.system-info[_ngcontent-%COMP%]   .system-title[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 35px;\r\n    line-height: 41px;\r\n    color: #000;\r\n}\r\n\r\n.system-info[_ngcontent-%COMP%]   .system-content[_ngcontent-%COMP%]{ \r\n    width: 133px;\r\n}\r\n\r\n.system-info[_ngcontent-%COMP%]   .system-number[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-300\";\r\n    font-size: 50px;\r\n    line-height: 59px;\r\n    color: #000;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n.system-info[_ngcontent-%COMP%]   .system-subtitle[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color: #4E4E4E;\r\n}\r\n\r\n.cards-filters[_ngcontent-%COMP%]{\r\n    margin-top: 90px;\r\n}\r\n\r\n.cards-filters[_ngcontent-%COMP%]   .terms-title[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    color: #414141;\r\n    font-size: 32px;\r\n    line-height: 37px;\r\n}\r\n\r\n.cards-filters[_ngcontent-%COMP%]   .filter-all[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    grid-gap: 0 45px;\r\n    gap: 0 45px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVydC1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQVc7SUFBWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBVztJQUFYLFdBQVc7QUFDZiIsImZpbGUiOiJleHBlcnQtaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVydCB7XHJcbiAgICBtYXJnaW4tdG9wOiA4M3B4O1xyXG59XHJcblxyXG4uZXhwZXJ0IC5pbWctYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmV4cGVydCAuaW1nLWJsb2NrIC5leHBlcnQtaWNvbntcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwIDM2cHg7XHJcbiAgICBjb2xvcjojOTY5Njk2O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uZXhwZXJ0IC5pbWctYmxvY2sgLmV4cGVydC1pY29uIGl7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5leHBlcnQgLmV4cGVydC1zdWJ0aXRsZSB7XHJcbiAgICB3aWR0aDogODY5cHg7XHJcbn1cclxuXHJcbi5zeXN0ZW0taW5mb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY1NjU2NTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDE3NnB4O1xyXG4gICAgcGFkZGluZzogMzNweDtcclxufVxyXG5cclxuLnN5c3RlbS1pbmZvIC5zeXN0ZW0tdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDFweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4uc3lzdGVtLWluZm8gIC5zeXN0ZW0tY29udGVudHsgXHJcbiAgICB3aWR0aDogMTMzcHg7XHJcbn1cclxuXHJcbi5zeXN0ZW0taW5mbyAuc3lzdGVtLW51bWJlcntcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by0zMDBcIjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1OXB4O1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5zeXN0ZW0taW5mbyAuc3lzdGVtLXN1YnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjogIzRFNEU0RTtcclxufVxyXG5cclxuLmNhcmRzLWZpbHRlcnN7XHJcbiAgICBtYXJnaW4tdG9wOiA5MHB4O1xyXG59XHJcblxyXG4uY2FyZHMtZmlsdGVycyAudGVybXMtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzQxNDE0MTtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzN3B4O1xyXG59XHJcblxyXG4uY2FyZHMtZmlsdGVycyAuZmlsdGVyLWFsbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDAgNDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 5250:
/*!****************************************************************!*\
  !*** ./src/app/components/experts/expert/experts.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpertsComponent": () => (/* binding */ ExpertsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navbar/navbar.component */ 2439);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../footer/footer.component */ 7646);




function ExpertsComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](filter_r2.name);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function ExpertsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const expert_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, expert_r3.isActive));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", expert_r3.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](expert_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](expert_r3.subtitle);
} }
class ExpertsComponent {
    constructor() {
        this.expertFilter = [
            {
                name: "Закупщики"
            },
            {
                name: "Виноделы"
            },
            {
                name: "Сомелье"
            },
            {
                name: "Кавист"
            }
        ];
        this.experts = [
            {
                id: 1,
                img: "../../../assets/img/expert1.png",
                name: "Роберт Паркер",
                subtitle: `Роберт Паркер - самый известным человеком в мире вина, новатором и даже немного революционером.
      Юрист по образованию. Поэтому свое издание, а потом и сайт он назвал Wine Advocate. Винная тема настолько увлекла юриста, что он начал выпускать свои заметки о вине, которые в 1970-е стали очень популярными благодаря понятному языку, простому изложению и четкой структуре и логике, которых в те времена так не хватало. 
      `,
                isActive: false
            },
            {
                id: 2,
                img: "../../../assets/img/expert2.png",
                name: "Сергей Антонов",
                subtitle: `Сергей Антонов в качестве шеф-сомелье составлял винные карты таких популярных мест, как Wine and Crab, «Винный базар» и Blush, регулярно задает жару соперникам на слепых дегустациях Wine Wrestling и пишет остроумные колонки для винных неофитов и серьезных ценителей под псевдонимом «Деревенский сомелье». Сергей присоединился к команде Wineincognito и будет удивлять вас неожиданными эногастрономическими сочетаниями. 
      `,
                isActive: true
            },
            {
                id: 3,
                img: "../../../assets/img/expert3.png",
                name: "Роберт Паркер",
                subtitle: `Роберт Паркер - самый известным человеком в мире вина, новатором и даже немного революционером.
      Юрист по образованию. Поэтому свое издание, а потом и сайт он назвал Wine Advocate. Винная тема настолько увлекла юриста, что он начал выпускать свои заметки о вине, которые в 1970-е стали очень популярными благодаря понятному языку, простому изложению и четкой структуре и логике, которых в те времена так не хватало. 
      `,
                isActive: false
            },
            {
                id: 4,
                img: "../../../assets/img/expert2.png",
                name: "Сергей Антонов",
                subtitle: `Сергей Антонов в качестве шеф-сомелье составлял винные карты таких популярных мест, как Wine and Crab, «Винный базар» и Blush, регулярно задает жару соперникам на слепых дегустациях Wine Wrestling и пишет остроумные колонки для винных неофитов и серьезных ценителей под псевдонимом «Деревенский сомелье». Сергей присоединился к команде Wineincognito и будет удивлять вас неожиданными эногастрономическими сочетаниями.
      `,
                isActive: true
            },
        ];
    }
    ngOnInit() {
    }
}
ExpertsComponent.ɵfac = function ExpertsComponent_Factory(t) { return new (t || ExpertsComponent)(); };
ExpertsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ExpertsComponent, selectors: [["app-expert"]], decls: 15, vars: 2, consts: [[1, "container"], [1, "experts"], [1, "expert-main-title"], [1, "terms-title"], [1, "expert-question-title"], [1, "expert-filter"], ["class", "expert-filter-btn", 4, "ngFor", "ngForOf"], ["class", "expert", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "load-more"], [1, "load-more-text"], [1, "expert-filter-btn"], [1, "expert", 3, "ngClass"], [1, "img-block"], ["alt", "#", 1, "expert-img", 3, "src"], [1, "expert-text-content"], [1, "expert-name"], [1, "expert-subtitle"], [1, "more"]], template: function ExpertsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u0412\u044B \u044D\u043A\u0441\u043F\u0435\u0440\u0442?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ExpertsComponent_button_9_Template, 2, 1, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ExpertsComponent_div_10_Template, 10, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.expertFilter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.experts);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: [".container[_ngcontent-%COMP%]{\r\n    max-width: 1295px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .expert-main-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .expert-main-title[_ngcontent-%COMP%]   .expert-question-title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 20px;\r\n    line-height: 23px;\r\n    color: #373737;\r\n    -webkit-text-decoration: underline dashed #B9B9B9;\r\n            text-decoration: underline dashed #B9B9B9;;\r\n    margin: 0;\r\n    margin-top: 80px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .experts[_ngcontent-%COMP%]   .expert-filter[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-gap: 0 15px;\r\n    gap: 0 15px;\r\n    margin-bottom: 70px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .experts[_ngcontent-%COMP%]   .expert-filter-btn[_ngcontent-%COMP%] {\r\n    width: 168px;\r\n    height: 36px;\r\n    background: #FFFFFF;\r\n    color: #7D7D7D;\r\n    border: 1px solid #9D9D9D;\r\n    border-radius: 10px;\r\n    font-family: \"roboto-400\";\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    cursor: pointer;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .expert.active[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n    grid-gap: 0 76px;\r\n    gap: 0 76px;\r\n    margin-bottom: 120px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .expert[_ngcontent-%COMP%]   .expert-subtitle[_ngcontent-%COMP%] {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .expert[_ngcontent-%COMP%]   .expert-subtitle[_ngcontent-%COMP%]::-webkit-scrollbar{\r\n    display: none;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .expert[_ngcontent-%COMP%]   .expert-text-content[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\r\n    width: 309px;\r\n    height: 54px;\r\n    background: #242424;\r\n    color: #f5f5f5;\r\n    border-radius: 4px;\r\n    font-family: \"roboto-500\";\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    margin-top: 30px;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGVydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaURBQXlDO1lBQXpDLHlDQUF5QztJQUN6QyxTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBVztJQUFYLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUdBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixnQkFBVztJQUFYLFdBQVc7SUFDWCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQiIsImZpbGUiOiJleHBlcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMjk1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmV4cGVydC1tYWluLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmV4cGVydC1tYWluLXRpdGxlIC5leHBlcnQtcXVlc3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzM3MzczNztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRhc2hlZCAjQjlCOUI5OztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmV4cGVydHMgLmV4cGVydC1maWx0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAgMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmV4cGVydHMgLmV4cGVydC1maWx0ZXItYnRuIHtcclxuICAgIHdpZHRoOiAxNjhweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBjb2xvcjogIzdEN0Q3RDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5RDlEOUQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIC5leHBlcnQuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbiAgICBnYXA6IDAgNzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIC5leHBlcnQgLmV4cGVydC1zdWJ0aXRsZSB7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmV4cGVydCAuZXhwZXJ0LXN1YnRpdGxlOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLmV4cGVydCAuZXhwZXJ0LXRleHQtY29udGVudCAubW9yZSB7XHJcbiAgICB3aWR0aDogMzA5cHg7XHJcbiAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xyXG4gICAgY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNTAwXCI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7646:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


const _c0 = function () { return { exact: true }; };
class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    terms() {
        this.router.navigate(['terms-of-use'], { queryParams: { order: 'popular' } });
    }
    procressingPolicy() {
        this.router.navigate(['procressing-policy'], { queryParams: { order: 'popular' } });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 49, vars: 2, consts: [[1, "footer"], [1, "container"], [1, "footer-content"], [1, "logo"], [1, "logo-item"], [1, "main-sections"], [1, "main-section-title"], [1, "main-catalog"], [1, "main-sections-catalog"], ["routerLinkActive", "active current", "routerLink", "/", 1, "main-sections-catalog-item", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active current", "routerLink", "/cards/card-catalog", 1, "main-sections-catalog-item"], ["routerLinkActive", "active current", "routerLink", "/news", 1, "main-sections-catalog-item"], ["routerLinkActive", "active current", "routerLink", "/experts", 1, "main-sections-catalog-item"], ["routerLinkActive", "active current", "routerLink", "/about-project", 1, "main-sections-catalog-item"], [1, "personal-area"], [1, "personal-area-title"], [1, "personal-area-catalog"], [1, "personal-area-catalog-item"], [1, "write-to-us"], [1, "write-title"], [1, "write-icons"], [1, "fab", "fa-telegram-plane"], [1, "fab", "fa-whatsapp"], [1, "fab", "fa-instagram"], [1, "far", "fa-envelope"], ["routerLinkActive", "active current", 1, "write-subtitle", 3, "click"], [1, "cookie"], [1, "cookie-title"], [1, "cookieBtn"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041B\u041E\u0413\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u041B\u0438\u0447\u043D\u044B\u0439 \u043A\u0430\u0431\u0438\u043D\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0412\u0441\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_40_listener() { return ctx.terms(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_p_click_42_listener() { return ctx.procressingPolicy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u041F\u043E\u043B\u044C\u0437\u0443\u044F\u0441\u044C \u043D\u0430\u0448\u0438\u043C \u0441\u0430\u0439\u0442\u043E\u043C, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u0442\u0435\u043C, \u0447\u0442\u043E \u043C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C cookies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: [".footer[_ngcontent-%COMP%] {\r\n    background: #282828;\r\n    height: 384px;\r\n    padding: 85px 0 50px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .footer-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-item[_ngcontent-%COMP%] {\r\n    font-size: 32px;\r\n    line-height: 39px;\r\n    color: #fff;\r\n}\r\n\r\n.main-sections[_ngcontent-%COMP%]   .main-section-title[_ngcontent-%COMP%], .personal-area[_ngcontent-%COMP%]   .personal-area-title[_ngcontent-%COMP%], .write-to-us[_ngcontent-%COMP%]   .write-title[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    cursor: pointer;\r\n    font-family: 'inter-600';\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n}\r\n\r\n.personal-area-catalog[_ngcontent-%COMP%], .write-to-us[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    cursor: pointer;\r\n}\r\n\r\n.personal-area[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n.personal-area-catalog[_ngcontent-%COMP%] {\r\n    margin-top: 25px;\r\n}\r\n\r\n.main-sections[_ngcontent-%COMP%]   .main-catalog[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    color: #fff;\r\n    grid-gap: 0 100px;\r\n    gap: 0 100px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.main-sections-catalog[_ngcontent-%COMP%]   .main-sections-catalog-item[_ngcontent-%COMP%], .personal-area-catalog[_ngcontent-%COMP%]   .personal-area-catalog-item[_ngcontent-%COMP%], .write-to-us[_ngcontent-%COMP%]   .write-subtitle[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-family: 'roboto-400';\r\n}\r\n\r\n.write-to-us[_ngcontent-%COMP%]   .write-icons[_ngcontent-%COMP%] {\r\n    margin: 35px 0;\r\n    display: flex;\r\n    grid-gap: 0 36px;\r\n    gap: 0 36px;\r\n    font-size: 18px;\r\n}\r\n\r\n.write-to-us[_ngcontent-%COMP%], .write-title[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n.cookie[_ngcontent-%COMP%]{\r\n    border-radius: 50px;\r\n    height: 59px;\r\n    width: 792px;\r\n    background: #fff;\r\n    margin: 40px auto 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n.cookie[_ngcontent-%COMP%]   .cookie-title[_ngcontent-%COMP%]{\r\n    font-family: 'roboto-500';\r\n    font-size: 16px;\r\n    line-height: 40px;\r\n    color: #2E2E2E;\r\n    margin-top: 15px;\r\n    cursor: pointer;\r\n}\r\n\r\n.cookie[_ngcontent-%COMP%]   .cookieBtn[_ngcontent-%COMP%]{\r\n    background: #03050C;\r\n    color: #fff;\r\n    width: 82px;\r\n    height: 32px;\r\n    border-radius: 4px;\r\n    border: none;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    font-family: 'inter-500';\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztBQUNmOztBQUVBOzs7SUFHSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBWTtJQUFaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7OztJQUdJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQVc7SUFBWCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzI4MjgyODtcclxuICAgIGhlaWdodDogMzg0cHg7XHJcbiAgICBwYWRkaW5nOiA4NXB4IDAgNTBweDtcclxufVxyXG5cclxuLmZvb3RlciAuZm9vdGVyLWNvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZvb3RlciAubG9nbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvb3RlciAubG9nbyAubG9nby1pdGVtIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5tYWluLXNlY3Rpb25zIC5tYWluLXNlY3Rpb24tdGl0bGUsXHJcbi5wZXJzb25hbC1hcmVhIC5wZXJzb25hbC1hcmVhLXRpdGxlLFxyXG4ud3JpdGUtdG8tdXMgLndyaXRlLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdpbnRlci02MDAnO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1hcmVhLWNhdGFsb2csXHJcbi53cml0ZS10by11cyBpe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wZXJzb25hbC1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnBlcnNvbmFsLWFyZWEtY2F0YWxvZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ubWFpbi1zZWN0aW9ucyAubWFpbi1jYXRhbG9nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGdhcDogMCAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5tYWluLXNlY3Rpb25zLWNhdGFsb2cgLm1haW4tc2VjdGlvbnMtY2F0YWxvZy1pdGVtLFxyXG4ucGVyc29uYWwtYXJlYS1jYXRhbG9nICAucGVyc29uYWwtYXJlYS1jYXRhbG9nLWl0ZW0sXHJcbi53cml0ZS10by11cyAud3JpdGUtc3VidGl0bGUge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90by00MDAnO1xyXG59XHJcblxyXG4ud3JpdGUtdG8tdXMgLndyaXRlLWljb25zIHtcclxuICAgIG1hcmdpbjogMzVweCAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMCAzNnB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4ud3JpdGUtdG8tdXMsXHJcbi53cml0ZS10aXRsZSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNvb2tpZXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDU5cHg7XHJcbiAgICB3aWR0aDogNzkycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuXHJcbi5jb29raWUgLmNvb2tpZS10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLTUwMCc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiAjMkUyRTJFO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvb2tpZSAuY29va2llQnRue1xyXG4gICAgYmFja2dyb3VuZDogIzAzMDUwQztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDgycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnaW50ZXItNTAwJztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 927:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 2, vars: 0, template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 639:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _Services_Api_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/Api/api.service */ 3779);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _block_quote_block_quote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../block-quote/block-quote.component */ 2513);
/* harmony import */ var _cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cards/cards-catalog/cards-catalog.component */ 7520);
/* harmony import */ var _news_news_catalog_news_catalog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../news/news-catalog/news-catalog.component */ 6354);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 7646);







const _c0 = function () { return { exact: true }; };
class MainComponent {
    constructor(apiService) {
        this.apiService = apiService;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.apiService.get('articles').subscribe(response => {
            this.data = response;
            console.log(this.data);
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_Services_Api_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 58, vars: 2, consts: [[1, "header"], [1, "container"], [1, "main-menu"], [1, "logo"], [1, "logo-item"], [1, "menu"], ["routerLinkActive", "active current", "routerLink", "/", 1, "menu-item", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active current", "routerLink", "/cards/card-catalog", 1, "menu-item"], ["routerLinkActive", "active current", "routerLink", "/news", 1, "menu-item"], ["routerLinkActive", "active current", "routerLink", "/experts", 1, "menu-item"], ["routerLinkActive", "active current", "routerLink", "/about-project", 1, "menu-item"], [1, "register"], [1, "register-title"], [1, "userIcon"], ["width", "12", "height", "13", "viewBox", "0 0 12 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.9285 11.4809V10.3789C10.9285 9.79433 10.6778 9.23372 10.2316 8.82037C9.78548 8.40702 9.18035 8.1748 8.54937 8.1748H3.7912C3.16022 8.1748 2.55509 8.40702 2.10893 8.82037C1.66276 9.23372 1.41211 9.79433 1.41211 10.3789V11.4809", "stroke", "white", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6.17057 5.97167C7.48449 5.97167 8.54963 4.98486 8.54963 3.76757C8.54963 2.55028 7.48449 1.56348 6.17057 1.56348C4.85665 1.56348 3.7915 2.55028 3.7915 3.76757C3.7915 4.98486 4.85665 5.97167 6.17057 5.97167Z", "stroke", "white", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "banner"], [1, "banner-block"], ["src", "../../../assets/img/banner.png", "alt", "#"], [1, "banner-search"], [1, "search-title"], [1, "search"], ["type", "text", "placeholder", "\u0412\u0438\u043D\u043E \u043A\u0440\u0430\u0441\u043D\u043E\u0435, \u0443\u0440\u043E\u0436\u0430\u0439 2015 \u0433\u043E\u0434\u0430", 1, "search-inp"], [1, "search-btn"], [1, "fas", "fa-search"], [1, "cards-info"], [1, "cards-title"], [1, "load-more"], [1, "load-more-text"], [1, "news-info"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u041B\u041E\u0413\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "\u043A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "\u043D\u043E\u0432\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "\u0432\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "svg", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "\u041F\u043E\u0438\u0441\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](36, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](40, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "block-quote");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Wineincognito \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](46, "cards-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "h4", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "news-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "h6", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _block_quote_block_quote_component__WEBPACK_IMPORTED_MODULE_1__.BlockQuoteComponent, _cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_2__.CardsCatalogComponent, _news_news_catalog_news_catalog_component__WEBPACK_IMPORTED_MODULE_3__.NewsCatalogComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent], styles: [".header[_ngcontent-%COMP%] {\r\n    background: #C4C4C4;\r\n    height: 92px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    grid-gap: 0 212px;\r\n    gap: 0 212px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu.active[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-item[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    grid-gap: 0 44px;\r\n    gap: 0 44px;\r\n    list-style: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%] {\r\n    color: #2C2C2C;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    cursor: pointer;\r\n    font-family: 'roboto-400';\r\n}\r\n\r\n.register[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    grid-gap: 0 10px;\r\n    gap: 0 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.register.active[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%] {\r\n    margin-top: -5px;\r\n    cursor: pointer;\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    background: #03050C;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixpQkFBWTtJQUFaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdCQUFXO0lBQVgsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZ0JBQVc7SUFBWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgICBoZWlnaHQ6IDkycHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlciAubWFpbi1tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAwIDIxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuLmhlYWRlciAubWFpbi1tZW51LmFjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIC5tYWluLW1lbnUgLmxvZ28gLmxvZ28taXRlbSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLmhlYWRlciAubWFpbi1tZW51IC5tZW51IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBnYXA6IDAgNDRweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1lbnUgLm1lbnUtaXRlbSBhLFxyXG4ucmVnaXN0ZXIgLnJlZ2lzdGVyLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjMkMyQzJDO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90by00MDAnO1xyXG59XHJcblxyXG4ucmVnaXN0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6IDAgMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnJlZ2lzdGVyIC51c2VySWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDMwNTBDO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 2439:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/modal */ 3756);




function NavbarComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0412\u0445\u043E\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Content two");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Content three");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
const _c1 = function () { return { exact: true }; };
class NavbarComponent {
    constructor() {
        this.isVisible = false;
        this.searchActive = false;
    }
    ngOnInit() {
    }
    searchActived() {
        if (!this.searchActive) {
            this.searchActive = true;
        }
        else {
            this.searchActive = false;
        }
    }
    showModal() {
        this.isVisible = true;
    }
    handleOk() {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }
    handleCancel() {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 40, vars: 18, consts: [[1, "header"], [1, "container"], [1, "main-menu", 3, "ngClass"], [1, "logo"], [1, "logo-item"], [1, "menu"], ["routerLinkActive", "active current", "routerLink", "/", 1, "menu-item", 3, "routerLinkActiveOptions"], ["routerLinkActive", "active current", "routerLink", "/cards/card-catalog", 1, "menu-item"], ["routerLinkActive", "active current", "routerLink", "/news", 1, "menu-item"], ["routerLinkActive", "active current", "routerLink", "/experts", 1, "menu-item"], ["routerLinkActive", "active current", "routerLink", "/about-project", 1, "menu-item"], [1, "search-content"], [1, "search", 3, "ngClass"], ["type", "text", "placeholder", "\u0412\u0438\u043D\u043E \u043A\u0440\u0430\u0441\u043D\u043E\u0435, \u0443\u0440\u043E\u0436\u0430\u0439 2015 \u0433\u043E\u0434\u0430", 1, "search-inp"], [1, "search-btn"], [1, "fas", "fa-search"], [1, "search-icons"], [1, "fas", "fa-search", 3, "ngClass", "click"], [1, "fas", "fa-times-circle", "fa-6x", 3, "ngClass", "click"], [1, "register", 3, "ngClass"], [1, "register-title", 3, "click"], [3, "nzVisible", "nzVisibleChange", "nzOnCancel", "nzOnOk"], [4, "nzModalContent"], [1, "userIcon"], ["width", "12", "height", "13", "viewBox", "0 0 12 13", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M10.9285 11.4809V10.3789C10.9285 9.79433 10.6778 9.23372 10.2316 8.82037C9.78548 8.40702 9.18035 8.1748 8.54937 8.1748H3.7912C3.16022 8.1748 2.55509 8.40702 2.10893 8.82037C1.66276 9.23372 1.41211 9.79433 1.41211 10.3789V11.4809", "stroke", "white", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6.17057 5.97167C7.48449 5.97167 8.54963 4.98486 8.54963 3.76757C8.54963 2.55028 7.48449 1.56348 6.17057 1.56348C4.85665 1.56348 3.7915 2.55028 3.7915 3.76757C3.7915 4.98486 4.85665 5.97167 6.17057 5.97167Z", "stroke", "white", "stroke-width", "1.4", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041B\u041E\u0413\u041E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u043A\u0430\u0442\u0430\u043B\u043E\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u043D\u043E\u0432\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u044D\u043A\u0441\u043F\u0435\u0440\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_28_listener() { return ctx.searchActived(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_i_click_29_listener() { return ctx.searchActived(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_h5_click_31_listener() { return ctx.showModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u0432\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "nz-modal", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("nzVisibleChange", function NavbarComponent_Template_nz_modal_nzVisibleChange_34_listener($event) { return ctx.isVisible = $event; })("nzOnCancel", function NavbarComponent_Template_nz_modal_nzOnCancel_34_listener() { return ctx.handleCancel(); })("nzOnOk", function NavbarComponent_Template_nz_modal_nzOnOk_34_listener() { return ctx.handleOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, NavbarComponent_ng_container_35_Template, 7, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "svg", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.searchActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.searchActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.searchActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.searchActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.searchActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzVisible", ctx.isVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalComponent, ng_zorro_antd_modal__WEBPACK_IMPORTED_MODULE_3__.NzModalContentDirective], styles: [".header[_ngcontent-%COMP%] {\r\n    background: #C4C4C4;\r\n    height: 92px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    grid-gap: 0 212px;\r\n    gap: 0 212px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu.active[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .logo-item[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .main-menu[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    grid-gap: 0 44px;\r\n    gap: 0 44px;\r\n    list-style: none;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%] {\r\n    color: #2C2C2C;\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    cursor: pointer;\r\n    font-family: 'roboto-400';\r\n}\r\n\r\n.register[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    grid-gap: 0 10px;\r\n    gap: 0 10px;\r\n    margin-top: 25px;\r\n}\r\n\r\n.register.active[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.register[_ngcontent-%COMP%]   .userIcon[_ngcontent-%COMP%] {\r\n    margin-top: -5px;\r\n    cursor: pointer;\r\n    width: 26px;\r\n    height: 26px;\r\n    border-radius: 50%;\r\n    border: none;\r\n    background: #03050C;\r\n}\r\n\r\n.search-content[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    margin: 10px auto;\r\n}\r\n\r\n.search[_ngcontent-%COMP%]{\r\n    margin-top: 10px;\r\n}\r\n\r\n.search[_ngcontent-%COMP%], .fa-times-circle[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.search.active[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n\r\n.fa-times-circle.active[_ngcontent-%COMP%]{\r\n    font-size: 39px !important;\r\n    color: #dcdcdc;\r\n    margin-left: 117px;\r\n    display: block;\r\n}\r\n\r\n.search-content[_ngcontent-%COMP%]   .search-icons[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin: 15px 0 0 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-content[_ngcontent-%COMP%]   .search-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    font-size: 13px;\r\n}\r\n\r\n.search-icons[_ngcontent-%COMP%]   .fa-search.active[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFZO0lBQVosWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQVc7SUFBWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixnQkFBVztJQUFYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNDNEM0QzQ7XHJcbiAgICBoZWlnaHQ6IDkycHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1haW4tbWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMCAyMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1haW4tbWVudS5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmhlYWRlciAubWFpbi1tZW51IC5sb2dvIC5sb2dvLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgLm1haW4tbWVudSAubWVudSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgZ2FwOiAwIDQ0cHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIC5tZW51IC5tZW51LWl0ZW0gYSxcclxuLnJlZ2lzdGVyIC5yZWdpc3Rlci10aXRsZSB7XHJcbiAgICBjb2xvcjogIzJDMkMyQztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tNDAwJztcclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXIuYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWdpc3RlciAudXNlckljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAyNnB4O1xyXG4gICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzAzMDUwQztcclxufVxyXG5cclxuLnNlYXJjaC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxufVxyXG5cclxuLnNlYXJjaHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gsIC5mYS10aW1lcy1jaXJjbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC5hY3RpdmV7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZhLXRpbWVzLWNpcmNsZS5hY3RpdmV7XHJcbiAgICBmb250LXNpemU6IDM5cHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZGNkY2RjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDExN3B4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zZWFyY2gtY29udGVudCAuc2VhcmNoLWljb25zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTVweCAwIDAgMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaWNvbnMgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtaWNvbnMgLmZhLXNlYXJjaC5hY3RpdmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6787:
/*!****************************************************************!*\
  !*** ./src/app/components/news/new-info/new-info.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInfoComponent": () => (/* binding */ NewInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navbar/navbar.component */ 2439);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../carousel/carousel.component */ 1945);
/* harmony import */ var _cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cards/cards-catalog/cards-catalog.component */ 7520);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer/footer.component */ 7646);





class NewInfoComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewInfoComponent.ɵfac = function NewInfoComponent_Factory(t) { return new (t || NewInfoComponent)(); };
NewInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NewInfoComponent, selectors: [["new-info"]], decls: 55, vars: 0, consts: [[1, "container"], [1, "news-info"], [1, "terms-title"], [1, "img-block"], ["src", "../../../../assets/img/news-info.png", "alt", "#"], [1, "news-content"], [1, "subtitle"], [1, "subtitle", "isTitle"], [1, "share-block"], [1, "share-text"], [1, "share"], [1, "fab", "fa-vk"], [1, "fab", "fa-twitter"], [1, "fab", "fa-facebook-f"], [1, "carousel-block"], [1, "cards-block"], [1, "card-content"], [1, "load-more"], [1, "load-more-text"], [1, "banner"], [1, "banner-search"], [1, "search-title"], [1, "search-subtitle"], [1, "search"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 e-mail, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 yakovlev@yandex.ru", 1, "search-inp"], [1, "search-btn"], [1, "btn-subtitle"]], template: function NewInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Wineincognito \u2013 \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u0435\u0446 \u0441 \u0441\u0438\u043B\u043E\u0439 \u0441\u043E\u0442\u043D\u0438 \u0441\u043E\u043C\u0435\u043B\u044C\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "\u041F\u0440\u0438\u0447\u0438\u043D\u043E\u0439 \u0435\u0435 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u0441\u0442\u0430\u043B\u043E \u0432\u043E\u0432\u0441\u0435 \u043D\u0435 \u043D\u0430\u043B\u0438\u0447\u0438\u0435 \u043D\u0430 \u0432\u044B\u0441\u0442\u0430\u0432\u043A\u0435 \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0432\u0435\u0441\u043E\u043C\u043E\u0439 \u00AB\u0432\u0438\u043D\u043D\u043E\u0439 \u0437\u043E\u043D\u044B\u00BB \u0441 \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044F\u043C\u0438 \u0432\u0438\u043D\u0430 (\u043A\u0441\u0442\u0430\u0442\u0438, \u0437\u0430 \u044D\u0442\u043E \u0440\u0435\u0441\u043F\u0435\u043A\u0442 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0442\u043E\u0440\u0430\u043C!) \u2014 \u0445\u043E\u0442\u044F \u0440\u0430\u0437\u043B\u0438\u0432\u0430\u043B\u0438 \u0432\u0441\u0435\u043C \u0438 \u0431\u044B\u043B\u0438 \u043E\u0447\u0435\u043D\u044C \u0440\u0430\u0434\u0443\u0448\u043D\u044B. \u0418 \u0441\u043E\u0432\u0441\u0435\u043C \u043D\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043F\u0430\u0432\u0438\u043B\u044C\u043E\u043D\u043E\u0432 \u0432\u0438\u043D\u043D\u044B\u0445 \u043F\u043E\u0441\u0442\u0430\u0432\u0449\u0438\u043A\u043E\u0432 (\u0447\u0442\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0435\u0441\u044C, \u0442\u043E\u0436\u0435 \u0437\u0434\u043E\u0440\u043E\u0432\u043E), \u0430 \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0430\u044F, \u043C\u0430\u043B\u043E \u043A\u043E\u043C\u0443 \u043F\u043E\u043A\u0430 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u2014 WineIncognito. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " \u0418\u043C\u0435\u043D\u043D\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0447\u0442\u0435\u043D\u0438\u044F \u043A\u0440\u0430\u0442\u043A\u043E\u0433\u043E \u0430\u043D\u043E\u043D\u0441\u0430 \u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 \u0433\u0434\u0435-\u0442\u043E \u0432 \u043F\u0443\u0447\u0438\u043D\u0430\u0445 \u0418\u043D\u0442\u0435\u0440\u043D\u0435\u0442\u0430 \u2014 \u044F \u0438 \u043F\u043E\u0441\u043F\u0435\u0448\u0438\u043B \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043F\u043E\u0439\u0442\u0438 \u00AB\u043F\u043E\u0434\u0438\u0432\u0438\u0442\u044C\u0441\u044F\u00BB \u043D\u0430 \u043D\u0435\u0435. \u0412\u043C\u0435\u0441\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E\u0433\u043E (\u043A\u0430\u043A \u044F \u0434\u0443\u043C\u0430\u043B) \u043F\u0440\u043E\u0441\u043B\u0443\u0448\u0438\u0432\u0430\u043D\u0438\u044F \u0430\u043D\u043E\u043D\u0441\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u00AB\u0432\u0430\u0448 \u043F\u043E\u043A\u043E\u0440\u043D\u044B\u0439 \u0441\u043B\u0443\u0433\u0430\u00BB \u043F\u043E\u043F\u0430\u043B \u043F\u0440\u044F\u043C\u0438\u043A\u043E\u043C \u0432 \u0441\u0430\u043C\u0443\u044E \u0433\u0443\u0449\u0443 \u0435\u0435 \u0440\u0430\u0431\u043E\u0442\u044B. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " \u0412 \u0437\u0430\u043B\u0435, \u0437\u0430 \u0434\u044E\u0436\u0438\u043D\u043E\u0439 \u0441\u0442\u043E\u043B\u043E\u0432, \u044F \u043E\u0431\u043D\u0430\u0440\u0443\u0436\u0438\u043B \u043E\u043A\u043E\u043B\u043E 30 \u00AB\u043C\u044D\u0442\u0440\u043E\u0432\u00BB \u044D\u043D\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0440\u044B\u043D\u043A\u0430, \u043F\u0440\u043E\u0432\u043E\u0434\u044F\u0449\u0438\u0445 \u00AB\u0441\u043B\u0435\u043F\u0443\u044E\u00BB \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044E \u043E\u043A\u043E\u043B\u043E 300 \u0432\u0438\u043D, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u043B\u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043D\u0430\u0447\u0430\u043B\u044C\u043D\u0443\u044E \u0431\u0430\u0437\u0443 \u0441\u0438\u0441\u0442\u0435\u043C\u044B Wineinconito, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u0442\u0435\u043C \u2014 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u043D\u0430\u0433\u043B\u044F\u0434\u043D\u043E \u0432\u0435\u0441\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430, \u0442\u0430\u043A \u0441\u043A\u0430\u0437\u0430\u0442\u044C, \u00AB\u0432 \u0434\u0435\u043B\u0435\u00BB. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438, \u043F\u0440\u0430\u0432\u0434\u0430, \u0443\u043F\u043E\u043C\u044F\u043D\u0443\u043B\u0438, \u0447\u0442\u043E \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0435\u0449\u0435 \u0434\u043E\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043E\u0434\u043D\u0430\u043A\u043E \u0430\u043B\u0433\u043E\u0440\u0438\u0442\u043C \u0430\u043D\u0430\u043B\u0438\u0437\u0430 \u0438 \u0432\u044B\u0434\u0430\u0447\u0438 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u2014 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u043E! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, " \u0421\u0440\u0435\u0434\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0445 \u043C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0432\u0438\u0434\u0435\u0442\u044C \u0410\u0440\u0442\u0443\u0440\u0430 \u0421\u0430\u0440\u043A\u0438\u0441\u044F\u043D\u0430, \u0415\u0432\u0433\u0435\u043D\u0438\u044F \u0411\u043E\u0433\u0434\u0430\u043D\u043E\u0432\u0430, \u0414\u0435\u043D\u0438\u0441\u0430 \u0420\u0443\u0434\u0435\u043D\u043A\u043E, \u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430 \u0421\u0442\u0430\u0432\u0446\u0435\u0432\u0430, \u041E\u043B\u0435\u0433\u0430 \u041E\u0441\u043E\u043A\u0438\u043D\u0430, \u041A\u0438\u0440\u0438\u043B\u043B\u0430 \u041C\u0435\u0440\u0435\u0436\u043A\u043E, \u0413\u0440\u0438\u0433\u043E\u0440\u0438\u044F \u0427\u0430\u0433\u0430\u0434\u0430\u0435\u0432\u0430, \u042E\u0440\u0438\u044F \u042E\u0434\u0438\u0447\u0430, \u041A\u0438\u0440\u0438\u043B\u043B\u0430 \u0411\u0443\u0440\u043B\u0443\u0446\u043A\u043E\u0433\u043E, \u0421\u0435\u0440\u0433\u0435\u044F \u041E\u043A\u0441\u0438\u043D\u043E\u0432\u0441\u043A\u043E\u0433\u043E, \u0418\u0440\u0438\u043D\u0443 \u0413\u043E\u0434\u0443\u043D\u043E\u0432\u0443, \u0410\u043D\u0436\u0435\u043B\u0438\u043A\u0443 \u0421\u0443\u0431\u0431\u043E\u0442\u0438\u043D\u0443, \u0412\u0438\u043A\u0442\u043E\u0440\u0430 \u0421\u0443\u0445\u043E\u0440\u0443\u0447\u0435\u043D\u043A\u043E\u0432\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " \u0422\u0430\u043A\u0436\u0435 \u0432 \u0437\u0430\u043B\u0435 \u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u043B\u0438 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043D\u044B\u0435 \u0433\u043E\u0441\u0442\u0438 \u2014 \u0433\u043B\u0430\u0432\u0430 \u0441\u043E\u044E\u0437\u0430 \u0441\u043E\u043C\u0435\u043B\u044C\u0435 \u0413\u0440\u0443\u0437\u0438\u0438 \u0438 \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0432\u0438\u043D\u043E\u0434\u0435\u043B\u0435\u043D \u0413\u0440\u0435\u0446\u0438\u0438. \u0418\u0434\u0435\u044F \u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u044B \u043F\u043E \u0432\u0438\u043D\u0430\u043C \u0432\u043E\u0437\u043D\u0438\u043A\u043B\u0430 2015 \u0433\u043E\u0434\u0430, \u043A\u043E\u0433\u0434\u0430 \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u043B\u0430 \u043E\u0447\u0435\u0440\u0435\u0434\u043D\u0430\u044F \u043A\u0440\u0443\u043F\u043D\u0430\u044F \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044F. \u0412\u0438\u0434\u044F, \u043A\u0430\u043A \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438, \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0442\u043E\u0440\u044B \u00AB\u043F\u044B\u0445\u0442\u044F\u0442\u00BB \u043D\u0430\u0434 \u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0441\u0432\u043E\u0438\u0445 \u0432\u043F\u0435\u0447\u0430\u0442\u043B\u0435\u043D\u0438\u0439 \u043E \u0432\u0438\u043D\u0430\u0445, \u0430 \u0437\u0430\u0442\u0435\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u0430 \u043F\u044B\u0442\u0430\u044E\u0442\u0441\u044F \u00AB\u0432\u0431\u0438\u0442\u044C\u00BB \u044D\u0442\u0438 \u0437\u0430\u043C\u0435\u0442\u043A\u0438, \u0434\u0430 \u0435\u0449\u0435 \u043F\u043E\u0440\u043E\u0439 \u2014 \u0441 \u043D\u0435\u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0445 \u0430\u043D\u043A\u0435\u0442, \u0438 \u043F\u043E\u044F\u0432\u0438\u043B\u0430\u0441\u044C \u043C\u044B\u0441\u043B\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C Wineincognito. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " \u0417\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0432\u0437\u044F\u043B\u0441\u044F \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0421\u043E\u043B\u043E\u0432\u044C\u0435\u0432 (\u041F\u0440\u0435\u0437\u0438\u0434\u0435\u043D\u0442 \u0410\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u043A\u0430\u0432\u0438\u0441\u0442\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438) \u0441\u043E \u0441\u0432\u043E\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u043E\u0439, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0438\u0437\u0432\u0435\u0441\u0442\u043D\u0430\u044F \u0432 IT-\u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F AUVIX. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "\u0414\u0430\u0442\u0430:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, " 9 \u0434\u0435\u043A\u0430\u0431\u0440\u044F 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "\u0412\u0438\u043D\u0430 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "cards-catalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "h3", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "\u041F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u043D\u0430\u0448\u0443 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "\u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438, \u0430\u043D\u043E\u043D\u0441\u044B \u043D\u043E\u0432\u044B\u0445 \u0438 \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0438\u0445 \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u043E\u0432 \u0438 \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u043F\u043E\u0447\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "h4", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](54, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, _cards_cards_catalog_cards_catalog_component__WEBPACK_IMPORTED_MODULE_2__.CardsCatalogComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    max-width: 1245px;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]{\r\n    height: 280px;\r\n    width: 600px;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]{\r\n    margin-top: 45px;\r\n    width: 878px;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n    color: #7b7b7b;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]   .subtitle.isTitle[_ngcontent-%COMP%]{\r\n    color: #000;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .share-block[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    width: 500px;\r\n    margin: 64px 0 81px;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .share-block[_ngcontent-%COMP%]   .share-text[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .share-block[_ngcontent-%COMP%]   .share-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #D4D4D4;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .share-block[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    grid-gap: 0 30px;\r\n    gap: 0 30px;\r\n}\r\n\r\n\r\n.news-info[_ngcontent-%COMP%]   .share-block[_ngcontent-%COMP%]   .share[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    margin-top: -10px;\r\n    color: #D4D4D4;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.cards-block[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin-bottom: 120px;\r\n}\r\n\r\n\r\n.banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   .btn-subtitle[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-700\";\r\n    margin-top: 8px;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n}\r\n\r\n\r\n.banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   .search-title[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    line-height: 30px;\r\n    font-family: \"roboto-700\";\r\n    color: #232323;\r\n}\r\n\r\n\r\n.banner[_ngcontent-%COMP%]   .banner-search[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    margin-top: 46px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1pbmZvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGdCQUFXO0lBQVgsV0FBVztBQUNmOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoibmV3LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjQ1cHg7XHJcbn1cclxuXHJcblxyXG4ubmV3cy1pbmZvIC5pbWctYmxvY2t7XHJcbiAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG59XHJcbi5uZXdzLWluZm8gLmltZy1ibG9jayBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5ld3MtaW5mbyAubmV3cy1jb250ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNDVweDtcclxuICAgIHdpZHRoOiA4NzhweDtcclxufVxyXG5cclxuLm5ld3MtaW5mbyAubmV3cy1jb250ZW50IC5zdWJ0aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgY29sb3I6ICM3YjdiN2I7XHJcbn1cclxuXHJcbi5uZXdzLWluZm8gLm5ld3MtY29udGVudCAuc3VidGl0bGUuaXNUaXRsZXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ubmV3cy1pbmZvIC5zaGFyZS1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiA2NHB4IDAgODFweDtcclxufVxyXG5cclxuLm5ld3MtaW5mbyAuc2hhcmUtYmxvY2sgLnNoYXJlLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxufVxyXG5cclxuLm5ld3MtaW5mbyAuc2hhcmUtYmxvY2sgLnNoYXJlLXRleHQgc3BhbntcclxuICAgIGNvbG9yOiAjRDRENEQ0O1xyXG59XHJcblxyXG4ubmV3cy1pbmZvIC5zaGFyZS1ibG9jayAuc2hhcmV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMCAzMHB4O1xyXG59XHJcblxyXG5cclxuLm5ld3MtaW5mbyAuc2hhcmUtYmxvY2sgLnNoYXJlIGl7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIGNvbG9yOiAjRDRENEQ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLmNhcmRzLWJsb2Nre1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXIgLmJhbm5lci1zZWFyY2ggLnNlYXJjaCAuc2VhcmNoLWJ0biAuYnRuLXN1YnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTcwMFwiO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweDtcclxufVxyXG5cclxuLmJhbm5lciAuYmFubmVyLXNlYXJjaCAuc2VhcmNoLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTcwMFwiO1xyXG4gICAgY29sb3I6ICMyMzIzMjM7XHJcbn1cclxuXHJcbi5iYW5uZXIgLmJhbm5lci1zZWFyY2ggLnNlYXJjaCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0NnB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 6354:
/*!************************************************************************!*\
  !*** ./src/app/components/news/news-catalog/news-catalog.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsCatalogComponent": () => (/* binding */ NewsCatalogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function NewsCatalogComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const new_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", new_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r1.subtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r1.date, "");
} }
class NewsCatalogComponent {
    constructor() {
        this.news = [
            {
                title: "Исследование винодельни Alma Valley",
                img: "../../../../assets/img/news1.png",
                subtitle: "Задача - оценка всего ассортимента винодельни. ",
                date: "6.12.2021"
            },
            {
                title: "Исследование пива для ритейла",
                img: "../../../../assets/img/news2.png",
                subtitle: "Мы создаём новое уникальное исследование с Сырным сомелье @chesom_ru @akrupetskov по сочетанию сыра и вина.  ",
                date: "14.12.2021"
            },
            {
                title: "Исследование гастросочетания вина и чипсов",
                img: "../../../../assets/img/news3.png",
                subtitle: "Цель - найти наилучшие гастрономические сочетания различных видов игристых вин и вкусов чипсов. ",
                date: "6.12.2021"
            },
            {
                title: "«Wineincognito» планирует провести дегустацию сыров и красных вин ",
                img: "../../../../assets/img/news4.png",
                subtitle: "Мы создаём новое уникальное исследование с Сырным сомелье @chesom_ru @akrupetskov по сочетанию сыра и вина.  ",
                date: "14.12.2021"
            },
        ];
    }
    ngOnInit() {
    }
}
NewsCatalogComponent.ɵfac = function NewsCatalogComponent_Factory(t) { return new (t || NewsCatalogComponent)(); };
NewsCatalogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsCatalogComponent, selectors: [["news-catalog"]], decls: 2, vars: 1, consts: [[1, "cards"], ["class", "news-card", 4, "ngFor", "ngForOf"], [1, "news-card"], [1, "new-img-block"], ["alt", "#", 3, "src"], [1, "new-title"], [1, "new-subtitle"], [1, "new-read-more"], [1, "read-more"], [1, "new-date"]], template: function NewsCatalogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsCatalogComponent_div_1_Template, 12, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".cards[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-gap: 0 54px;\r\n    gap: 0 54px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]{\r\n    width: 298px;\r\n    background: none;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .new-img-block[_ngcontent-%COMP%]{\r\n    width: 267px;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .news-card[_ngcontent-%COMP%]   .new-img-block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    border-radius: 4px;\r\n    width: 100%;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .new-title[_ngcontent-%COMP%]{\r\n    margin-top: 55px;\r\n    font-family: \"roboto-500\";\r\n    font-size: 22px;\r\n    line-height: 26px;\r\n    color: #2B2B2B;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .new-subtitle[_ngcontent-%COMP%]{\r\n    margin: 42px 0 27px;\r\n    font-family: \"roboto-400\";\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n    color:#8A8A8A;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%]   .new-date[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 18px;\r\n    line-height: 21px;\r\n    color:#252525;\r\n    margin-left: 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtY2F0YWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBVztJQUFYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Im5ld3MtY2F0YWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAwIDU0cHg7XHJcbn1cclxuXHJcbi5jYXJkcyAubmV3cy1jYXJke1xyXG4gICAgd2lkdGg6IDI5OHB4O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmNhcmRzIC5uZXdzLWNhcmQgLm5ldy1pbWctYmxvY2t7XHJcbiAgICB3aWR0aDogMjY3cHg7XHJcbn1cclxuLmNhcmRzIC5uZXdzLWNhcmQgLm5ldy1pbWctYmxvY2sgaW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNhcmRzIC5uZXctdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzJCMkIyQjtcclxufVxyXG5cclxuLmNhcmRzIC5uZXctc3VidGl0bGV7XHJcbiAgICBtYXJnaW46IDQycHggMCAyN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2xvcjojOEE4QThBO1xyXG59XHJcblxyXG4uY2FyZHMgLm5ldy1kYXRle1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBjb2xvcjojMjUyNTI1O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8107:
/*!******************************************************************!*\
  !*** ./src/app/components/news/news-list/news-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsListComponent": () => (/* binding */ NewsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);


function NewsListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const new_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", new_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r1.subtitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", new_r1.date, "");
} }
class NewsListComponent {
    constructor() {
        this.news = [
            {
                title: "Wineincognito – незнакомец с силой сотни сомелье",
                img: "../../../../assets/img/newscl.png",
                subtitle: `Причиной ее посещения стало вовсе не наличие на выставке довольно весомой «винной зоны» с дегустациями вина (кстати, за это респект организаторам!) — хотя разливали всем и были очень радушны.
      И совсем не присутствие нескольких павильонов винных поставщиков (что согласитесь, тоже здорово), а небольшая, мало кому пока известная программа — WineIncognito.`,
                date: "22.03.2022"
            },
            {
                title: "Победители I дегустационного конкурса WINEINCOGNITO в Москве",
                img: "../../../../assets/img/newscl2.png",
                subtitle: `20 марта в рамках выставки Metro Expo 2019 состоялась первая масштабная экспертная дегустация вин с использованием программы WineIncognito. В числе экспертов стоит отметить Дениса Руденко, Артура Саркисяна, Александра Ставцева, Юрия Юдича, Дмитрия Мережко, Евгения Богданова, Олега Осокина ....`,
                date: "22.03.2022"
            },
            {
                title: "Wineincognito – незнакомец с силой сотни сомелье",
                img: "../../../../assets/img/newscl.png",
                subtitle: `Причиной ее посещения стало вовсе не наличие на выставке довольно весомой «винной зоны» с дегустациями вина (кстати, за это респект организаторам!) — хотя разливали всем и были очень радушны.
      И совсем не присутствие нескольких павильонов винных поставщиков (что согласитесь, тоже здорово), а небольшая, мало кому пока известная программа — WineIncognito.`,
                date: "22.03.2022"
            },
            {
                title: "Победители I дегустационного конкурса WINEINCOGNITO в Москве",
                img: "../../../../assets/img/newscl2.png",
                subtitle: `20 марта в рамках выставки Metro Expo 2019 состоялась первая масштабная экспертная дегустация вин с использованием программы WineIncognito. В числе экспертов стоит отметить Дениса Руденко, Артура Саркисяна, Александра Ставцева, Юрия Юдича, Дмитрия Мережко, Евгения Богданова, Олега Осокина ....`,
                date: "22.03.2022"
            },
        ];
    }
    ngOnInit() {
    }
}
NewsListComponent.ɵfac = function NewsListComponent_Factory(t) { return new (t || NewsListComponent)(); };
NewsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewsListComponent, selectors: [["news-list"]], decls: 1, vars: 1, consts: [["class", "cards", 4, "ngFor", "ngForOf"], [1, "cards"], [1, "news-list-card"], [1, "news-img-block"], ["alt", "#", 3, "src"], [1, "news-list-info"], [1, "new-title"], [1, "new-subtitle"], [1, "new-read-more"], [1, "read-more"], [1, "new-date"], [1, "line"]], template: function NewsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewsListComponent_div_0_Template, 15, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".news-list-card[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    grid-gap: 0 34px;\r\n    gap: 0 34px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.news-list-card[_ngcontent-%COMP%]   .news-list-info[_ngcontent-%COMP%]   .new-title[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 24px;\r\n    line-height: 44px;\r\n    color:#212121;\r\n    width: 662px;\r\n    margin: 0;\r\n}\r\n\r\n.news-list-card[_ngcontent-%COMP%]   .news-list-info[_ngcontent-%COMP%]   .new-subtitle[_ngcontent-%COMP%]{\r\n    font-family: \"roboto-400\";\r\n    font-size: 18px;\r\n    line-height: 34px;\r\n    color:#7B7B7B;\r\n    margin: 0;\r\n    margin-top: 14px;\r\n    width: 743px;\r\n}\r\n\r\n.news-list-card[_ngcontent-%COMP%]   .news-list-info[_ngcontent-%COMP%]   .new-read-more[_ngcontent-%COMP%]   .read-more[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    line-height: 44px;\r\n    color: #212121;\r\n}\r\n\r\n.news-list-card[_ngcontent-%COMP%]   .news-list-info[_ngcontent-%COMP%]   .new-read-more[_ngcontent-%COMP%]   .new-date[_ngcontent-%COMP%]{\r\n    color:#7B7B7B;\r\n    margin-left: 34px;\r\n}\r\n\r\n.line[_ngcontent-%COMP%]{\r\n    height: 2px;\r\n    width: 1002px;\r\n    background: #FFE8F1;\r\n     margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBVztJQUFYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7S0FDbEIsY0FBYztBQUNuQiIsImZpbGUiOiJuZXdzLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXdzLWxpc3QtY2FyZHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMCAzNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLm5ld3MtbGlzdC1jYXJkIC5uZXdzLWxpc3QtaW5mbyAubmV3LXRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTQwMFwiO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XHJcbiAgICBjb2xvcjojMjEyMTIxO1xyXG4gICAgd2lkdGg6IDY2MnB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubmV3cy1saXN0LWNhcmQgLm5ld3MtbGlzdC1pbmZvIC5uZXctc3VidGl0bGV7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIGNvbG9yOiM3QjdCN0I7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgd2lkdGg6IDc0M3B4O1xyXG59XHJcblxyXG4ubmV3cy1saXN0LWNhcmQgLm5ld3MtbGlzdC1pbmZvIC5uZXctcmVhZC1tb3JlIC5yZWFkLW1vcmV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcblxyXG4ubmV3cy1saXN0LWNhcmQgLm5ld3MtbGlzdC1pbmZvIC5uZXctcmVhZC1tb3JlIC5uZXctZGF0ZXtcclxuICAgIGNvbG9yOiM3QjdCN0I7XHJcbiAgICBtYXJnaW4tbGVmdDogMzRweDtcclxufVxyXG5cclxuLmxpbmV7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAxMDAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZFOEYxO1xyXG4gICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6590:
/*!********************************************************!*\
  !*** ./src/app/components/news/news/news.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewsComponent": () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../navbar/navbar.component */ 2439);
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ 4701);
/* harmony import */ var _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news-list/news-list.component */ 8107);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../footer/footer.component */ 7646);






function NewsComponent_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const year_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](year_r1.name);
} }
class NewsComponent {
    constructor() {
        this.years = [
            {
                name: "2022"
            },
            {
                name: "2021"
            },
            {
                name: "2020"
            },
            {
                name: "2019"
            },
            {
                name: "2018"
            },
        ];
    }
    ngOnInit() {
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(); };
NewsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 19, vars: 1, consts: [[1, "container"], ["nzSeparator", ">"], [1, "breadcrumb-link-first"], [1, "breadcrumb-link-second"], [1, "terms-title"], [1, "news-content"], [1, "year-filter"], ["class", "year-filter-text", 4, "ngFor", "ngForOf"], [1, "load-more"], [1, "load-more-text"], [1, "year-filter-text"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "nz-breadcrumb", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "nz-breadcrumb-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u041D\u043E\u0432\u043E\u0441\u0442\u0438, \u0434\u0435\u0433\u0443\u0441\u0442\u0430\u0446\u0438\u0438, \u043A\u043E\u043D\u043A\u0443\u0440\u0441\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "news-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, NewsComponent_p_14_Template, 2, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "h6", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0435\u0449\u0451 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.years);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.NzBreadCrumbComponent, ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_4__.NzBreadCrumbItemComponent, _news_list_news_list_component__WEBPACK_IMPORTED_MODULE_1__.NewsListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".container[_ngcontent-%COMP%] {\r\n    max-width: 1245px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .news-content[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-around;  \r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .year-filter[_ngcontent-%COMP%]{\r\n    width: 170px;\r\n    height: 303px;\r\n    background: #f9f9f9;\r\n    border-radius: 10px;\r\n    text-align: center;\r\n    padding: 21px 52px 11px;\r\n    margin-top: 35px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   .year-filter[_ngcontent-%COMP%]   .year-filter-text[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    font-family: \"roboto-400\";\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCIiwiZmlsZSI6Im5ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjQ1cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgLm5ld3MtY29udGVudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgIFxyXG59XHJcblxyXG4uY29udGFpbmVyIC55ZWFyLWZpbHRlcntcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGhlaWdodDogMzAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIxcHggNTJweCAxMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAueWVhci1maWx0ZXIgLnllYXItZmlsdGVyLXRleHR7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 641:
/*!*******************************************************************************!*\
  !*** ./src/app/components/procressing-policy/procressing-policy.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcressingPolicyComponent": () => (/* binding */ ProcressingPolicyComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 2439);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 7646);



class ProcressingPolicyComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProcressingPolicyComponent.ɵfac = function ProcressingPolicyComponent_Factory(t) { return new (t || ProcressingPolicyComponent)(); };
ProcressingPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProcressingPolicyComponent, selectors: [["app-procressing-policy"]], decls: 30, vars: 0, consts: [[1, "container"], [1, "text-content"], [1, "terms-title"], [1, "text"], [1, "subtitle"]], template: function ProcressingPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u041D\u0430 \u0441\u0430\u0439\u0442\u0435 https://wineincognito.ru/ \u0438 \u0435\u0433\u043E \u043F\u043E\u0434\u0434\u043E\u043C\u0435\u043D\u0430\u0445 (\u0434\u0430\u043B\u0435\u0435 \u2014 \u0421\u0430\u0439\u0442) \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0444\u0430\u0439\u043B\u044B cookie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u0424\u0430\u0439\u043B\u044B cookie \u2014 \u044D\u0442\u043E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u0432\u044B\u0435 \u0444\u0430\u0439\u043B\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0441\u043B\u0435 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u043C \u0444\u0440\u0430\u0433\u043C\u0435\u043D\u0442\u043E\u0432 \u0421\u0430\u0439\u0442\u0430 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0435\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0435. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u041E\u041E\u041E \u00ABWineincognito\u00BB (\u0434\u0430\u043B\u0435\u0435 \u2013 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440) \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E\u0441\u0442\u044C \u0421\u0430\u0439\u0442\u0430, \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u0442\u044C, \u043A\u0430\u043A \u0440\u0430\u0437\u0432\u0438\u0432\u0430\u0442\u044C \u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u043C\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u041D\u0430 \u0421\u0430\u0439\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0442\u0438\u043F\u044B \u0444\u0430\u0439\u043B\u043E\u0432 cookie: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " 1. \u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0444\u0430\u0439\u043B\u044B cookie: \u043E\u043D\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B \u0434\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0421\u0430\u0439\u0442\u0430 \u0438 \u0432\u0441\u043F\u043E\u043C\u043E\u0433\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043E\u0432. \u0422\u0430\u043A\u0438\u0435 \u0444\u0430\u0439\u043B\u044B cookie \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C \u0430\u043F\u043F\u0430\u0440\u0430\u0442\u043D\u043E\u0435 \u0438 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u043D\u043E\u0435 \u043E\u0431\u0435\u0441\u043F\u0435\u0447\u0435\u043D\u0438\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F; \u0432\u044B\u044F\u0432\u043B\u044F\u0442\u044C \u043E\u0448\u0438\u0431\u043A\u0438 \u043F\u0440\u0438 \u0440\u0430\u0431\u043E\u0442\u0435 \u0421\u0430\u0439\u0442\u0430; \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0434\u043B\u044F \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0421\u0430\u0439\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " 2. \u0424\u0430\u0439\u043B\u044B cookie \u0434\u043B\u044F \u0430\u0443\u0442\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438: \u043E\u043D\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0442\u044C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F \u0442\u0430\u043A\u0438\u043C \u0444\u0430\u0439\u043B\u0430\u043C \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044E \u043F\u0440\u0438 \u043D\u043E\u0432\u043E\u043C \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u043D\u043E\u0432\u043E \u0432\u0432\u043E\u0434\u0438\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " 3. \u0410\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0444\u0430\u0439\u043B\u044B cookie: \u043E\u043D\u0438 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0442 \u043F\u043E\u0434\u0441\u0447\u0438\u0442\u044B\u0432\u0430\u0442\u044C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u0421\u0430\u0439\u0442\u0430; \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u044F\u0442\u044C, \u043A\u0430\u043A\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435 (\u043F\u043E\u0441\u0435\u0449\u0430\u0435\u043C\u044B\u0435 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B, \u0432\u0440\u0435\u043C\u044F \u0438 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043D\u043D\u044B\u0445 \u0441\u0442\u0440\u0430\u043D\u0438\u0446). \u0421\u0431\u043E\u0440 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0435\u0440\u0435\u0437 \u043F\u0430\u0440\u0442\u043D\u0435\u0440\u043E\u0432, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 Google Analytics, Yandex Metrika. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " 4. \u0420\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B cookie: \u043E\u043D\u0438 \u043F\u043E\u043C\u043E\u0433\u0430\u044E\u0442 \u0430\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0438\u0437 \u043A\u0430\u043A\u0438\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u0435\u0440\u0435\u0448\u0435\u043B \u043D\u0430 \u0421\u0430\u0439\u0442, \u0430 \u0442\u0430\u043A\u0436\u0435 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0440\u0435\u043A\u043B\u0430\u043C\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0421\u0440\u043E\u043A \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0433\u043E \u0442\u0438\u043F\u0430, \u043D\u043E \u0432 \u043B\u044E\u0431\u043E\u043C \u0441\u043B\u0443\u0447\u0430\u0435 \u043D\u0435 \u043F\u0440\u0435\u0432\u044B\u0448\u0430\u0435\u0442 \u0441\u0440\u043E\u043A\u0430, \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E\u0433\u043E \u0434\u043B\u044F \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0446\u0435\u043B\u0435\u0439 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " \u041F\u0440\u0438 \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u041E\u043F\u0435\u0440\u0430\u0442\u043E\u0440 \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u043D\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0444\u0430\u0439\u043B\u043E\u0432 cookie. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u0414\u043B\u044F \u043F\u0440\u0435\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043C\u043E\u0436\u0435\u0442 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0445 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u043E\u0432 \u043D\u0430 \u0432\u0441\u0435\u0445 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430\u0445 (\u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440, \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0435 \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u0412\u0410\u0416\u041D\u041E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u043F\u0440\u0438 \u043E\u0442\u043A\u0430\u0437\u0435 \u043E\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u043E\u0432 cookie \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438 \u0421\u0430\u0439\u0442\u0430 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u043C\u0438, \u0447\u0442\u043E \u043F\u043E\u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u044F \u0421\u0430\u0439\u0442\u0430. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".container[_ngcontent-%COMP%]{\r\n    max-width: 1265px;\r\n}\r\n.text-content[_ngcontent-%COMP%] {\r\n    margin-bottom: 200px;\r\n}\r\n.text-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    font-family: 'roboto-400';\r\n    font-size: 22px;\r\n    line-height: 38px;\r\n    color: #3D3D3D;\r\n}\r\n.text-content[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{\r\n    font-family: 'roboto-500';\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2NyZXNzaW5nLXBvbGljeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJwcm9jcmVzc2luZy1wb2xpY3kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXgtd2lkdGg6IDEyNjVweDtcclxufVxyXG4udGV4dC1jb250ZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG59XHJcbi50ZXh0LWNvbnRlbnQgLnRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tNDAwJztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgY29sb3I6ICMzRDNEM0Q7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRlbnQgLnRleHQgLnN1YnRpdGxle1xyXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tNTAwJztcclxufSJdfQ== */"] });


/***/ }),

/***/ 8496:
/*!*************************************************************!*\
  !*** ./src/app/components/side-menu/side-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideMenuComponent": () => (/* binding */ SideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);



const _c0 = function (a0) { return { "isActive": a0 }; };
function SideMenuComponent_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const fil_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, fil_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
function SideMenuComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_div_17_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const fil_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.filterActive(fil_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SideMenuComponent_div_17_div_5_Template, 4, 5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fil_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, fil_r1.active));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](fil_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", fil_r1.children);
} }
const _c1 = function (a0) { return { "actived": a0 }; };
class SideMenuComponent {
    constructor() {
        this.active = false;
        this.selectedItems = [];
        this.filter = [
            {
                id: 1,
                name: "Тип",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "1980",
                    },
                    {
                        id: 2,
                        name: "1949",
                    },
                ]
            },
            {
                id: 2,
                name: "Цвет",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "Красное",
                    },
                    {
                        id: 2,
                        name: "Белое",
                    },
                ]
            },
            {
                id: 3,
                name: "Сахар",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "Сахар1",
                    },
                    {
                        id: 2,
                        name: "Сахар2",
                    },
                ]
            },
            {
                id: 4,
                name: "Страна",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "Россия",
                    },
                    {
                        id: 2,
                        name: "Узбекистан",
                    },
                ]
            },
            {
                id: 5,
                name: "Регион",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "Москва",
                    },
                    {
                        id: 2,
                        name: "Ташкент",
                    },
                ]
            },
            {
                id: 6,
                name: "Сорт винограда",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "Высший сорт",
                    },
                    {
                        id: 2,
                        name: "первый сорт",
                    },
                ]
            },
            {
                id: 7,
                name: "Производитель",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "Аврора",
                    },
                    {
                        id: 2,
                        name: "Белвино",
                    },
                ]
            },
            {
                id: 8,
                name: "Год",
                active: false,
                children: [
                    {
                        id: 1,
                        name: "1920 год",
                    },
                    {
                        id: 2,
                        name: "1855 год",
                    },
                ]
            },
        ];
    }
    ngOnInit() {
    }
    filterActive(fil) {
        if (!fil.active) {
            fil.active = true;
        }
        else {
            fil.active = false;
        }
    }
    question() {
        if (!this.active) {
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
}
SideMenuComponent.ɵfac = function SideMenuComponent_Factory(t) { return new (t || SideMenuComponent)(); };
SideMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SideMenuComponent, selectors: [["side-menu"]], decls: 20, vars: 4, consts: [[1, "rating-wi"], [1, "rating-text"], [1, "fas", "fa-question-circle", "question", 3, "click"], [1, "rating-info", 3, "ngClass"], [1, "rating-info-subtitle"], [1, "fas", "fa-times", 3, "click"], [1, "filter-rating"], [1, "from"], [1, "from-text"], ["type", "number", 1, "filter-rating-inp"], [1, "before"], ["class", "filter", 4, "ngFor", "ngForOf"], [1, "reseting-all-filter"], [1, "filter"], [1, "filter-btn", 3, "click"], [1, "fas", "fa-chevron-down", 3, "ngClass"], [1, "filter-title"], ["class", "filterContent", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "filterContent", 3, "ngClass"], ["type", "checkbox", 1, "filter-checkbox", 3, "value"], [1, "filter-text"]], template: function SideMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 Wi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_i_click_3_listener() { return ctx.question(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u042D\u0442\u043E \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0431\u0430\u043B\u043B \u043E\u0442 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u043E\u0432 WI \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0434\u043E\u0431\u0440\u0435\u043D\u043D\u044B\u0445 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0439. \u0412 \u0440\u0430\u0441\u0447\u0435\u0442 \u0431\u0435\u0440\u0435\u0442\u0441\u044F \u0432\u0438\u043D\u043E \u043E\u0434\u043D\u043E\u0433\u043E \u0432\u0438\u043D\u0442\u0430\u0436\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideMenuComponent_Template_i_click_7_listener() { return ctx.question(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u043E\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0434\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, SideMenuComponent_div_17_Template, 6, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0431\u0440\u043E\u0441 \u0432\u0441\u0435\u0445 \u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx.active));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".rating-wi[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    grid-gap: 10px;\r\n    gap: 10px;\r\n    position: relative;\r\n}\r\n\r\n.rating-wi[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%] {\r\n    color: #909090;\r\n    font-size: 19px;\r\n    cursor: pointer;\r\n}\r\n\r\n.rating-wi[_ngcontent-%COMP%]   .question[_ngcontent-%COMP%]:active {\r\n    color: #000;\r\n}\r\n\r\n.rating-wi[_ngcontent-%COMP%]   .rating-info[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.rating-wi[_ngcontent-%COMP%]   .rating-info.actived[_ngcontent-%COMP%] {\r\n    width: 191px;\r\n    height: 143px;\r\n    background: #f3f3f3;\r\n    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.1);\r\n    border-radius: 10px;\r\n    display: flex;\r\n    margin-left: 130px;\r\n    cursor: pointer;\r\n    position: absolute;\r\n}\r\n\r\n.rating-wi[_ngcontent-%COMP%]   .rating-info[_ngcontent-%COMP%]   .rating-info-subtitle[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    line-height: 18px;\r\n    font-family: \"robot-400\";\r\n    color: #4E4E4E;\r\n    margin: 20px 0 10px 18px;\r\n}\r\n\r\n.rating-wi[_ngcontent-%COMP%]   .rating-info[_ngcontent-%COMP%]   .fa-times[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin: 10px;\r\n    color: #4E4E4E;\r\n}\r\n\r\n.filter-rating[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    grid-gap: 0 12px;\r\n    gap: 0 12px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.filter-rating[_ngcontent-%COMP%]   .from-text[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #888888;\r\n    font-family: \"roboto-400\";\r\n    font-size: 12px;\r\n    line-height: 14px;\r\n}\r\n\r\n.filter-rating[_ngcontent-%COMP%]   .filter-rating-inp[_ngcontent-%COMP%] {\r\n    width: 54px;\r\n    height: 32px;\r\n    border: 1px solid #B8B8B8;\r\n    border-radius: 4px;\r\n    outline: none;\r\n    padding: 6px 7px;\r\n}\r\n\r\n.filter-rating[_ngcontent-%COMP%]   .filter-rating-inp[_ngcontent-%COMP%]::-webkit-outer-spin-button, .filter-rating[_ngcontent-%COMP%]   .filter-rating-inp[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\n\r\n\r\n.filterContent[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.isActive.fa-chevron-down[_ngcontent-%COMP%] {\r\n    transform: rotate(180deg);\r\n\r\n}\r\n\r\n.isActive.filterContent[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%] {\r\n    margin-top: 47px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%] {\r\n    color: #474747;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   .filter-btn[_ngcontent-%COMP%]   .filter-title[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-500\";\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    color: #4E4E4E;\r\n    margin-left: 10px;\r\n    border-bottom: 1px dashed;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   .filterContent[_ngcontent-%COMP%] {\r\n    margin: 15px 0 0 20px;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   .filterContent[_ngcontent-%COMP%]   .filter-checkbox[_ngcontent-%COMP%] {\r\n    width: 18px;\r\n    height: 18px;\r\n    accent-color: #000;\r\n}\r\n\r\n.filter[_ngcontent-%COMP%]   .filterContent[_ngcontent-%COMP%]   .filter-text[_ngcontent-%COMP%] {\r\n    font-family: \"roboto-400\";\r\n    font-size: 16px;\r\n    line-height: 36px;\r\n    color: #454545;\r\n    margin: auto 10px 0;\r\n\r\n}\r\n\r\n.reseting-all-filter[_ngcontent-%COMP%] {\r\n    width: 228px;\r\n    height: 50px;\r\n    background-color: #e3e3e3;\r\n    color: #212121;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    font-family: \"roboto-500\";\r\n    font-size: 16px;\r\n    line-height: 19px;\r\n    margin-top: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixjQUFTO0lBQVQsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGdCQUFXO0lBQVgsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsU0FBUztBQUNiOztBQUdBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCOztBQUU3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzaWRlLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ucmF0aW5nLXdpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5yYXRpbmctd2kgLnF1ZXN0aW9uIHtcclxuICAgIGNvbG9yOiAjOTA5MDkwO1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmF0aW5nLXdpIC5xdWVzdGlvbjphY3RpdmUge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5yYXRpbmctd2kgLnJhdGluZy1pbmZvIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5yYXRpbmctd2kgLnJhdGluZy1pbmZvLmFjdGl2ZWQge1xyXG4gICAgd2lkdGg6IDE5MXB4O1xyXG4gICAgaGVpZ2h0OiAxNDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmM2YzZjM7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5yYXRpbmctd2kgLnJhdGluZy1pbmZvIC5yYXRpbmctaW5mby1zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90LTQwMFwiO1xyXG4gICAgY29sb3I6ICM0RTRFNEU7XHJcbiAgICBtYXJnaW46IDIwcHggMCAxMHB4IDE4cHg7XHJcbn1cclxuXHJcbi5yYXRpbmctd2kgLnJhdGluZy1pbmZvIC5mYS10aW1lcyB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjb2xvcjogIzRFNEU0RTtcclxufVxyXG5cclxuLmZpbHRlci1yYXRpbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAgMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItcmF0aW5nIC5mcm9tLXRleHQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM4ODg4ODg7XHJcbiAgICBmb250LWZhbWlseTogXCJyb2JvdG8tNDAwXCI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxufVxyXG5cclxuLmZpbHRlci1yYXRpbmcgLmZpbHRlci1yYXRpbmctaW5wIHtcclxuICAgIHdpZHRoOiA1NHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0I4QjhCODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHggN3B4O1xyXG59XHJcblxyXG4uZmlsdGVyLXJhdGluZyAuZmlsdGVyLXJhdGluZy1pbnA6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbi5maWx0ZXItcmF0aW5nIC5maWx0ZXItcmF0aW5nLWlucDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4vKiBmaWx0ZXIgKi9cclxuXHJcbi5maWx0ZXJDb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pc0FjdGl2ZS5mYS1jaGV2cm9uLWRvd24ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHJcbn1cclxuXHJcbi5pc0FjdGl2ZS5maWx0ZXJDb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZmlsdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDQ3cHg7XHJcbn1cclxuXHJcbi5maWx0ZXIgLmZpbHRlci1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbHRlciAuZmlsdGVyLWJ0biAuZmEtY2hldnJvbi1kb3duIHtcclxuICAgIGNvbG9yOiAjNDc0NzQ3O1xyXG59XHJcblxyXG4uZmlsdGVyIC5maWx0ZXItYnRuIC5maWx0ZXItdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBjb2xvcjogIzRFNEU0RTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZDtcclxufVxyXG5cclxuLmZpbHRlciAuZmlsdGVyQ29udGVudCB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAwIDIwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXIgLmZpbHRlckNvbnRlbnQgLmZpbHRlci1jaGVja2JveCB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIGFjY2VudC1jb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi5maWx0ZXIgLmZpbHRlckNvbnRlbnQgLmZpbHRlci10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJvYm90by00MDBcIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgY29sb3I6ICM0NTQ1NDU7XHJcbiAgICBtYXJnaW46IGF1dG8gMTBweCAwO1xyXG5cclxufVxyXG5cclxuLnJlc2V0aW5nLWFsbC1maWx0ZXIge1xyXG4gICAgd2lkdGg6IDIyOHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTNlMztcclxuICAgIGNvbG9yOiAjMjEyMTIxO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwicm9ib3RvLTUwMFwiO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 9194:
/*!*******************************************************************!*\
  !*** ./src/app/components/terms-of-use/terms-of-use.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TermsOfUseComponent": () => (/* binding */ TermsOfUseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/navbar.component */ 2439);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../footer/footer.component */ 7646);



class TermsOfUseComponent {
    constructor() { }
    ngOnInit() {
    }
}
TermsOfUseComponent.ɵfac = function TermsOfUseComponent_Factory(t) { return new (t || TermsOfUseComponent)(); };
TermsOfUseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TermsOfUseComponent, selectors: [["app-terms-of-use"]], decls: 30, vars: 0, consts: [[1, "container"], [1, "text-content"], [1, "terms-title"], [1, "terms-text"], [1, "terms-subtitle"], [1, "text"]], template: function TermsOfUseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0441 \u0443\u0447\u0435\u0442\u043E\u043C \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0420\u0424 \"\u041E \u0440\u0435\u043A\u043B\u0430\u043C\u0435\" \u043E\u0442 13.03.2006 N 38-\u0424\u0417 \u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u0440\u0435\u043A\u043B\u0430\u043C\u043E\u0439 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438. wineincognito.ru \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0430\u0439\u0442\u043E\u043C \u041F\u0440\u043E\u0434\u0430\u0432\u0446\u0430 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438, \u0438\u043C\u0435\u044E\u0449\u0435\u0433\u043E \u0440\u043E\u0437\u043D\u0438\u0447\u043D\u044B\u0439 \u043C\u0430\u0433\u0430\u0437\u0438\u043D. \u0421\u0430\u0439\u0442 wineincognito.ru \u0441\u043E\u0437\u0434\u0430\u043D \u0434\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043E\u0431 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0435 \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u0438 \u0443\u0447\u0435\u0442\u0430 \u043C\u043D\u0435\u043D\u0438\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043E \u0422\u043E\u0432\u0430\u0440\u0435 \u0441 \u0446\u0435\u043B\u044C\u044E \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 \u0438\u043D\u044B\u0445 \u0443\u0441\u043B\u043E\u0432\u0438\u0439 \u043F\u0440\u043E\u0434\u0430\u0436 \u0432 \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u043F\u043E\u0434 \u0441\u043F\u0440\u043E\u0441 \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0430 \u0442\u0430\u043A\u0436\u0435 \u0441\u0431\u043E\u0440\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " \u0421\u0442\u043E\u0440\u043E\u043D\u0430\u043C\u0438 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0433\u043E \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u041A\u043B\u0438\u0435\u043D\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u2014 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E, \u0438\u043C\u0435\u044E\u0449\u0435\u0435 \u043D\u0430\u043C\u0435\u0440\u0435\u043D\u0438\u0435 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0438/\u0438\u043B\u0438 \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u044E\u0449\u0435\u0435 \u0417\u0430\u044F\u0432\u043A\u0438, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 wineincognito.ru, \u0438 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0449\u0435\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u043C \u043E\u0431\u044A\u0435\u043C\u043E\u043C \u0434\u0435\u0435\u0441\u043F\u043E\u0441\u043E\u0431\u043D\u043E\u0441\u0442\u0438 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0437\u0430\u043A\u043E\u043D\u043E\u0434\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E\u043C \u0420\u0424.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, " \u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "\u2014 \u041E\u0434\u043D\u043E \u0438\u0437 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0445 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446: \u041E\u041E\u041E \u00AB\u0411\u0443\u0442\u0438\u043A \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7713790026, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100010390 \u043E\u0442 05.11.2014 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 05.11.2014 \u043F\u043E 04.11.2024, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u041B\u0435\u043D\u0438\u043D\u0441\u043A\u0438\u0439 \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 52, \u044D\u0442\u0430\u0436 2, \u043F\u043E\u043C. III, \u043A\u043E\u043C. 1-4; \u041E\u041E\u041E \u00AB\u0420\u0438\u0442\u0435\u0439\u043B \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7716816628, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100012148 \u043E\u0442 26.04.2016 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 26.04.2016 \u043F\u043E 25.04.2026, \u0433.\u041C\u043E\u0441\u043A\u0432\u0430, \u0448\u043E\u0441\u0441\u0435 \u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u043E\u0435, \u0434. 72, \u044D\u0442\u0430\u0436 1, \u043F\u043E\u043C. IVa, \u043A\u043E\u043C. 1-5; \u041E\u041E\u041E \u00AB\u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7715808800, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100010437 \u043E\u0442 16.10.2019 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 14.11.2014 \u0434\u043E 13.11.2024, \u041E\u0413\u0420\u041D: 1107746352141, \u0433.\u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B.\u0421\u043A\u043B\u0430\u0434\u043E\u0447\u043D\u0430\u044F, \u0434.1, \u0441\u0442\u0440.1, \u044D\u0442\u0430\u0436 1, \u0447\u0430\u0441\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F I\u0432; \u041E\u041E\u041E \u00AB\u0421\u0442\u043E\u0440 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 9717017438, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100012229 \u043E\u0442 08.06.2016 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 08.06.2016 \u043F\u043E 08.06.2021, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041B\u044E\u0441\u0438\u043D\u043E\u0432\u0441\u043A\u0430\u044F, \u0434. 53, \u044D\u0442\u0430\u0436 1, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 VI; \u041E\u041E\u041E \u00AB\u0420\u0435\u0434 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 9717049616, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100012971 \u043E\u0442 23.03.2017 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 23.03.2017 \u043F\u043E 22.03.2022, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0448\u043E\u0441\u0441\u0435 \u042D\u043D\u0442\u0443\u0437\u0438\u0430\u0441\u0442\u043E\u0432, \u0434. 74/2, \u044D\u0442\u0430\u0436 1, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 V; \u041E\u041E\u041E \u00AB\u0413\u0440\u0438\u043D \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 9718061246, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100013267 \u043E\u0442 04.08.2017 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 04.08.2017 \u043F\u043E 03.08.2022, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0421\u0442\u0430\u0440\u0430\u044F \u0411\u0430\u0441\u043C\u0430\u043D\u043D\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u0434. 25, \u0441\u0442\u0440. 1, \u044D\u0442\u0430\u0436 \u043F\u0435\u0440\u0432\u044B\u0439, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 1, \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0441 1 \u043F\u043E 9; \u041E\u041E\u041E \u00AB\u0420\u043E\u0443\u0437 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 9718046294, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100013315 \u043E\u0442 24.08.2017 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 24.08.2017 \u043F\u043E 23.08.2022, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u043F\u0440\u043E\u0441\u043F\u0435\u043A\u0442 \u041C\u0438\u0440\u0430, \u0434. 70, \u044D\u0442\u0430\u0436 1, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 IV, \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0441 1 \u043F\u043E 4; \u041E\u041E\u041E \u00AB\u041D\u0430\u0439\u0441 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7716856204, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100013269 \u043E\u0442 04.08.2017 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 04.08.2017 \u043F\u043E 03.08.2022, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0421\u0430\u0434\u043E\u0432\u0430\u044F-\u0421\u0443\u0445\u0430\u0440\u0435\u0432\u0441\u043A\u0430\u044F \u0443\u043B\u0438\u0446\u0430, \u0434. 13/15, \u0446\u043E\u043A\u043E\u043B\u044C, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 VII, \u043A\u043E\u043C\u043D\u0430\u0442\u044B \u0441 1 \u043F\u043E 3; \u041E\u041E\u041E \u00AB\u0421\u043E\u0444\u0442 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7719485100, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100014417 \u043E\u0442 22.03.2019 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 22.03.2019 \u043F\u043E 22.03.2024, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0418\u0437\u043C\u0430\u0439\u043B\u043E\u0432\u0441\u043A\u0438\u0439 \u0431\u0443\u043B\u044C\u0432\u0430\u0440, \u0434. 1/28, \u044D\u0442\u0430\u0436 1, \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 I, \u043A\u043E\u043C\u043D\u0430\u0442\u044B 1, 2, 2\u0410, 3-5; \u041E\u041E\u041E \u00AB\u0410\u0440\u0442 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7730259175, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100015061 \u043E\u0442 12.11.2020 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 12.11.2020 \u0434\u043E 11.11.2025, 121096, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u041A\u0430\u0441\u0442\u0430\u043D\u0430\u0435\u0432\u0441\u043A\u0430\u044F, \u0434. 17, \u044D\u0442\u0430\u0436 1, \u043F\u043E\u043C. II, \u043A\u043E\u043C\u043D. 1-8; \u041E\u041E\u041E \u00AB\u0421\u0438\u0442\u0438 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 7734439080, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: 77\u0420\u041F\u04100015355 \u043E\u0442 25.06.2021 \u0434\u043E 24.06.2026, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u043A\u0430 \u042F\u043D\u0433\u0435\u043B\u044F, \u0434. 2, \u044D\u0442\u0430\u0436 1, \u0447\u0430\u0441\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F 1; \u041E\u041E\u041E \u00AB\u041D\u0430\u0442 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E\u00BB, \u0418\u041D\u041D: 5024214120, \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u044F: \u2116 77\u0420\u041F\u04100015592, \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0441 01.10.2021 \u043F\u043E 30.09.2026, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0443\u043B. \u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440\u0430 \u0429\u0443\u0441\u0435\u0432\u0430, \u0434. 1, \u044D\u0442\u0430\u0436 1, \u0447\u0430\u0441\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u044F 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " \u0422\u0435\u0440\u043C\u0438\u043D\u044B: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " \u0421\u0430\u0439\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u0421\u0430\u0439\u0442 \u2014 wineincognito.ru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u0422\u0435\u0440\u043C\u0438\u043D\u044B: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "h6", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u0417\u0430\u044F\u0432\u043A\u0430 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " \u2014 \u0434\u043E\u043B\u0436\u043D\u044B\u043C \u043E\u0431\u0440\u0430\u0437\u043E\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u043D\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441 \u041A\u043B\u0438\u0435\u043D\u0442\u0430, \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u0430 \u043E\u0431 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0435 \u0422\u043E\u0432\u0430\u0440\u0430 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0441\u0432\u043E\u0439\u0441\u0442\u0432\u0430\u0445 \u0422\u043E\u0432\u0430\u0440\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u041A\u043B\u0438\u0435\u043D\u0442 \u0436\u0435\u043B\u0430\u043B \u0431\u044B \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0441\u0442\u0438 \u0432 \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u041F\u0440\u043E\u0434\u0430\u0432\u0446\u0430. \u0417\u0430\u044F\u0432\u043A\u0430 \u0441\u043B\u0443\u0436\u0438\u0442 \u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u043E\u043C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0442\u043E\u0447\u043D\u043E\u0439 \u0446\u0435\u043D\u0435 \u0422\u043E\u0432\u0430\u0440\u0430 \u0438 \u0435\u0433\u043E \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0432 \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0435 \u041F\u0440\u043E\u0434\u0430\u0432\u0446\u0430. \u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0435 \u0432\u043B\u0435\u0447\u0435\u0442 \u0432\u043E\u0437\u043D\u0438\u043A\u043D\u043E\u0432\u0435\u043D\u0438\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043A\u0443\u043F\u043B\u0435\u0439-\u043F\u0440\u043E\u0434\u0430\u0436\u0435\u0439 \u0422\u043E\u0432\u0430\u0440\u0430, \u0430 \u043D\u043E\u0441\u0438\u0442 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440 \u0438 \u0443\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u041F\u0440\u043E\u0434\u0430\u0432\u0446\u043E\u043C \u0434\u043B\u044F \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u0430 \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0430. \u041E\u0431\u0449\u0438\u0435 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F. \u041F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u0430\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u044F (\u043E\u0431\u0440\u0430\u0437\u0446\u044B \u043F\u0440\u043E\u0434\u0443\u043A\u0446\u0438\u0438) \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D\u0430 \u0434\u043B\u044F \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0441 \u0430\u0441\u0441\u043E\u0440\u0442\u0438\u043C\u0435\u043D\u0442\u043E\u043C \u0438 \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u0440\u0430\u0437\u0446\u0430\u043C\u0438 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u0438\u044F \u0441\u0434\u0435\u043B\u043E\u043A \u043A\u0443\u043F\u043B\u0438-\u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u043E\u043D\u043D\u044B\u043C \u0441\u043F\u043E\u0441\u043E\u0431\u043E\u043C. \u0421\u0434\u0435\u043B\u043A\u0438 \u043A\u0443\u043F\u043B\u0438-\u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0440\u043E\u0437\u043D\u0438\u0447\u043D\u043E\u0433\u043E \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u043B\u0438\u0447\u043D\u043E. \u041D\u0430\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0437\u0430\u044F\u0432\u043A\u0438 \u0447\u0435\u0440\u0435\u0437 C\u0430\u0439\u0442, \u041A\u043B\u0438\u0435\u043D\u0442 \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0441\u044F \u0441 \u041F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438 \u0441\u0430\u0439\u0442\u0430 \u0412\u0430\u0439\u043D\u0438\u043D\u043A\u043E\u0433\u043D\u0438\u0442\u043E (\u0434\u0430\u043B\u0435\u0435 \u2014 \u0423\u0441\u043B\u043E\u0432\u0438\u044F), \u0438\u0437\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u043C\u0438 \u043D\u0438\u0436\u0435. \u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u0435 \u043D\u0430 \u0421\u0430\u0439\u0442\u0435, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u043E\u0439 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441\u043E \u0441\u0442. 435 \u0438 \u0447. 2 \u0441\u0442. 437 \u0413\u041A \u0420\u0424. \u041C\u0435\u0441\u0442\u043E\u043C \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0422\u043E\u0432\u0430\u0440\u043E\u0432 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u044F \u041C\u0430\u0433\u0430\u0437\u0438\u043D\u0430 \u041F\u0440\u043E\u0434\u0430\u0432\u0446\u0430. \u041F\u0440\u043E\u0434\u0430\u0432\u0435\u0446 \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0437\u0430 \u0441\u043E\u0431\u043E\u0439 \u043F\u0440\u0430\u0432\u043E \u0432\u043D\u043E\u0441\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F \u0432 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u0421\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: [".container[_ngcontent-%COMP%]{\r\n    max-width: 1265px;\r\n}\r\n.text-content[_ngcontent-%COMP%] {\r\n    margin: 0 auto 200px;\r\n}\r\n.text-content[_ngcontent-%COMP%]   h4.terms-text[_ngcontent-%COMP%] {\r\n    color: #3D3D3D;\r\n    font-family: 'roboto-400';\r\n    font-size: 28px;\r\n    line-height: 38px;\r\n}\r\n.text-content[_ngcontent-%COMP%]   h5.terms-subtitle[_ngcontent-%COMP%] {\r\n    color: #3D3D3D;\r\n    font-family: 'roboto-500';\r\n    font-size: 24px;\r\n    line-height: 38px;\r\n    margin: 40px 0;\r\n}\r\n.text-content[_ngcontent-%COMP%]   h6.terms-subtitle[_ngcontent-%COMP%] {\r\n    color: #3D3D3D;\r\n    font-family: 'roboto-500';\r\n    font-size: 24px;\r\n    line-height: 38px;\r\n    margin: 30px 0;\r\n}\r\n.text-content[_ngcontent-%COMP%]   h6.terms-subtitle[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\r\n    color: #3D3D3D;\r\n    font-family: 'roboto-400';\r\n    font-size: 22px;\r\n    line-height: 38px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlcm1zLW9mLXVzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7QUFDckIiLCJmaWxlIjoidGVybXMtb2YtdXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAxMjY1cHg7XHJcbn1cclxuLnRleHQtY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgYXV0byAyMDBweDtcclxufVxyXG4udGV4dC1jb250ZW50IGg0LnRlcm1zLXRleHQge1xyXG4gICAgY29sb3I6ICMzRDNEM0Q7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90by00MDAnO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbn1cclxuXHJcbi50ZXh0LWNvbnRlbnQgaDUudGVybXMtc3VidGl0bGUge1xyXG4gICAgY29sb3I6ICMzRDNEM0Q7XHJcbiAgICBmb250LWZhbWlseTogJ3JvYm90by01MDAnO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxufVxyXG5cclxuLnRleHQtY29udGVudCBoNi50ZXJtcy1zdWJ0aXRsZSB7XHJcbiAgICBjb2xvcjogIzNEM0QzRDtcclxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvLTUwMCc7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbjogMzBweCAwO1xyXG59XHJcblxyXG4udGV4dC1jb250ZW50IGg2LnRlcm1zLXN1YnRpdGxlIC50ZXh0IHtcclxuICAgIGNvbG9yOiAjM0QzRDNEO1xyXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8tNDAwJztcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    apiHost: 'http://localhost:4200',
    apiUrl: 'api',
    apiVersion: 'v1'
};


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map