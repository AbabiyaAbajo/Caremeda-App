(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [headerTheme]=\"headerTheme\"></app-header>\n\n<div class=\"root\" [@routeAnimations]=\"o.isActivated ? o.activatedRoute : ''\" *ngIf=\"(isLoggedIn && (user$ | async)) || !isLoggedIn\">\n  <router-outlet #o=\"outlet\" (activate)=\"onActivate($event)\"></router-outlet>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/footer/footer.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/footer/footer.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footers-footer-2\" title=\"footers/footer-2.html\">\n  <footer class=\"footer p-0 footer-dark bg-gradient-dark\" id=\"footer-main\">\n    <div class=\"container\">\n      <div class=\"py-4\">\n        <div class=\"row align-items-md-center\">\n          <div class=\"col-md-4 mb-4 mb-md-0\">\n            <div class=\"d-flex align-items-center\">\n              <p class=\"text-sm mb-0\">&copy; {{ currentYear }} Caremada. All rights reserved.</p>\n            </div>\n          </div>\n          <div class=\"col-sm-6 col-md-4 mb-4 mb-sm-0\">\n            <ul class=\"nav justify-content-center\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"pages/utility/support.html\">Support</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"pages/utility/terms.html\">Terms</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"pages/utility/privacy.html\">Privacy</a>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-sm-6 col-md-4\">\n            <ul class=\"nav justify-content-center justify-content-md-end mt-3 mt-md-0\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://dribbble.com/webpixels\" target=\"_blank\">\n                  <i class=\"fab fa-dribbble\"></i>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://www.instagram.com/webpixelsofficial\" target=\"_blank\">\n                  <i class=\"fab fa-instagram\"></i>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://github.com/webpixels\" target=\"_blank\">\n                  <i class=\"fab fa-github\"></i>\n                </a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"https://www.facebook.com/webpixels\" target=\"_blank\">\n                  <i class=\"fab fa-facebook\"></i>\n                </a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/header/header.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/header/header.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-transparent\" id=\"header-main\">\n  <!-- Topbar -->\n  <!-- <div id=\"navbar-top-main\" class=\"navbar-top  navbar-dark bg-dark border-bottom\">\n    <div class=\"container px-0\">\n      <div class=\"navbar-nav align-items-center\">\n        <div class=\"ml-auto\">\n          <ul class=\"nav\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" href=\"pages/utility/support.html\">Support</a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"#\" class=\"nav-link\" data-action=\"omnisearch-open\" data-target=\"#omnisearch\"><i class=\"fas fa-search\"></i></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link pr-0\" href=\"#\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-user-circle\"></i>\n              </a>\n              <div class=\"dropdown-menu dropdown-menu-sm dropdown-menu-right\">\n                <h6 class=\"dropdown-header\">User menu</h6>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-user\"></i>Account\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <span class=\"float-right badge badge-primary\">4</span>\n                  <i class=\"fas fa-envelope\"></i>Messages\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-cog\"></i>Settings\n                </a>\n                <div class=\"dropdown-divider\" role=\"presentation\"></div>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-sign-out-alt\"></i>Sign out\n                </a>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <!-- Main navbar -->\n  <nav class=\"navbar navbar-main navbar-expand-lg navbar-transparent bg-dark\"\n    [ngClass]=\"{'navbar-dark': headerTheme === 'dark', 'navbar-light': headerTheme === 'light'}\" id=\"navbar-main\">\n    <div class=\"container px-lg-0\">\n      <!-- Logo -->\n      <a class=\"navbar-brand mr-lg-5\" routerLink=\"/\">\n        <img *ngIf=\"headerTheme === 'dark'\" src=\"assets/img/brand/logo-white.png\" id=\"navbar-logo\" height=\"20\"\n          alt=\"Caremada logo\">\n        <img *ngIf=\"headerTheme === 'light'\" src=\"assets/img/brand/logo.png\" id=\"navbar-logo\" height=\"20\"\n          alt=\"Caremada logo\">\n      </a>\n      <!-- Navbar collapse trigger -->\n      <button class=\"navbar-toggler pr-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main-collapse\"\n        aria-controls=\"navbar-main-collapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <!-- Navbar nav -->\n      <div class=\"collapse navbar-collapse\" id=\"navbar-main-collapse\">\n        <ul class=\"navbar-nav align-items-lg-center\">\n          <!-- Home - Overview  -->\n          <li *ngIf=\"!isServiceProvider\" class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink=\"/account/upgrade\">Become a Service Provider</a>\n          </li>\n        </ul>\n\n        <ul class=\"navbar-nav align-items-lg-center ml-lg-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/search/work-offer\">Find a Work Offer</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/search/service-provider\">Find a Service Provider</a>\n          </li>\n          <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/work-offer/new\"><i class=\"fas fa-plus\"></i> Work Offer</a>\n          </li>\n          <!-- <li class=\"nav-item d-lg-none d-xl-block\">\n            <a class=\"nav-link\" href=\"#\">Help</a>\n          </li> -->\n          <li *ngIf=\"!isLoggedIn\" class=\"nav-item mr-0\">\n            <a routerLink=\"/login\" class=\"btn btn-sm rounded-pill rounded-pill d-lg-inline-flex\"\n              [ngClass]=\"{'btn-white': headerTheme === 'dark', 'btn-primary': headerTheme === 'light'}\">\n              <span class=\"btn-inner--text\">Login</span>\n            </a>\n          </li>\n\n          <li *ngIf=\"isLoggedIn && user$ | async\" class=\"nav-item dropdown dropdown-animate\" data-toggle=\"hover\">\n            <a class=\"nav-link dropdown-toggle\" routerLink=\"/account/dashboard\" data-toggle=\"dropdown\"\n              aria-haspopup=\"true\" aria-expanded=\"false\">\n              <i class=\"fas fa-user-circle\"></i> {{ (user$ | async).firstName }}\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right dropdown-menu-arrow p-0\">\n              <ul class=\"list-group list-group-flush\">\n                <li>\n                  <a class=\"list-group-item list-group-item-action\" routerLink=\"/account/dashboard\">\n                    <div class=\"media d-flex align-items-center\">\n                      <i class=\"fas fa-id-card\"></i>\n\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0\">Dashboard</h6>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"list-group-item list-group-item-action\" routerLink=\"/account/inbox\">\n                    <div class=\"media d-flex align-items-center\">\n                      <i class=\"fas fa-envelope\"></i>\n\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0\">Inbox</h6>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                <li>\n                  <a class=\"list-group-item list-group-item-action\" routerLink=\"/account/notifications\">\n                    <div class=\"media d-flex align-items-center\">\n                      <i class=\"fas fa-bell\"></i>\n\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0\">Notifications</h6>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <li>\n                  <a class=\"list-group-item list-group-item-action\" routerLink=\"/account/settings\">\n                    <div class=\"media d-flex align-items-center\">\n                      <i class=\"fas fa-cog\"></i>\n\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0\">Settings</h6>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- <a class=\"dropdown-item\" href=\"#\">\n                  <span class=\"float-right badge badge-primary\">4</span>\n                  <i class=\"fas fa-envelope\"></i>Messages\n                </a>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-cog\"></i>Settings\n                </a>\n                <div class=\"dropdown-divider\" role=\"presentation\"></div>\n                <a class=\"dropdown-item\" href=\"#\">\n                  <i class=\"fas fa-sign-out-alt\"></i>Sign out\n                </a> -->\n              </ul>\n\n              <div class=\"dropdown-divider\" role=\"presentation\"></div>\n\n              <ul class=\"list-group list-group-flush\">\n                <li>\n                  <a class=\"list-group-item list-group-item-action\" href=\"javascript:void(0)\" (click)=\"logout()\">\n                    <div class=\"media d-flex align-items-center\">\n                      <i class=\"fas fa-sign-out-alt\"></i>\n\n                      <div class=\"media-body ml-3\">\n                        <h6 class=\"mb-0\">Logout</h6>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n\n<app-toast></app-toast>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/components/toast/toast.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/components/toast/toast.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-toasts aria-live=\"polite\" aria-atomic=\"true\"></app-toasts> -->\n\n<ngb-toast\n  *ngFor=\"let toast of toastService.toasts\"\n  [class]=\"toast.classname\"\n  [autohide]=\"true\"\n  [delay]=\"toast.delay || 5000\"\n  (hide)=\"toastService.remove(toast)\"\n>\n  <ng-template [ngIf]=\"isTemplate(toast)\" [ngIfElse]=\"text\">\n    <ng-template [ngTemplateOutlet]=\"toast.textOrTpl\"></ng-template>\n  </ng-template>\n\n  <ng-template #text>{{ toast.textOrTpl }}</ng-template>\n</ngb-toast>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/account.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/account.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <!-- Header (account) -->\n  <section class=\"header-account-page bg-dark d-flex align-items-end\" data-offset-top=\"#header-main\">\n    <!-- Header container -->\n    <div class=\"container pt-4 pt-lg-0\">\n      <div class=\"row\">\n        <div class=\" col-lg-12\">\n          <!-- Salute + Small stats -->\n          <div class=\"row align-items-center mb-4\">\n            <div class=\"col-md-5 mb-4 mb-md-0\">\n              <span class=\"h2 mb-0 text-white d-block\">Hey, {{ (user$ | async ).firstName }}</span>\n            </div>\n            <!-- <div class=\"col-auto flex-fill d-none d-xl-block\">\n              <ul class=\"list-inline row justify-content-lg-end mb-0\">\n                <li class=\"list-inline-item col-sm-4 col-md-auto px-3 my-2 mx-0\">\n                  <span class=\"badge badge-dot text-white\">\n                    <i class=\"bg-success\"></i>Sales\n                  </span>\n                  <a class=\"d-sm-block h5 text-white font-weight-bold pl-2\" href=\"#\">\n                    20.5%\n                    <small class=\"fas fa-angle-up text-success\"></small>\n                  </a>\n                </li>\n                <li class=\"list-inline-item col-sm-4 col-md-auto px-3 my-2 mx-0\">\n                  <span class=\"badge badge-dot text-white\">\n                    <i class=\"bg-warning\"></i>Tasks\n                  </span>\n                  <a class=\"d-sm-block h5 text-white font-weight-bold pl-2\" href=\"#\">\n                    5.7%\n                    <small class=\"fas fa-angle-up text-warning\"></small>\n                  </a>\n                </li>\n                <li class=\"list-inline-item col-sm-4 col-md-auto px-3 my-2 mx-0\">\n                  <span class=\"badge badge-dot text-white\">\n                    <i class=\"bg-danger\"></i>Sales\n                  </span>\n                  <a class=\"d-sm-block h5 text-white font-weight-bold pl-2\" href=\"#\">\n                    -3.24%\n                    <small class=\"fas fa-angle-down text-danger\"></small>\n                  </a>\n                </li>\n              </ul>\n            </div> -->\n          </div>\n          <!-- Account navigation -->\n          <div class=\"d-flex\">\n            <a routerLink=\"/account/dashboard\" class=\"btn btn-icon btn-group-nav shadow btn-neutral\">\n              <span class=\"btn-inner--icon\"><i class=\"fas fa-id-card\"></i></span>\n              <span class=\"btn-inner--text d-none d-md-inline-block\">Dashboard</span>\n            </a>\n            <div class=\"btn-group btn-group-nav shadow ml-auto\" role=\"group\" aria-label=\"Basic example\">\n              <div class=\"btn-group\" role=\"group\">\n                <div class=\"btn-group\" role=\"group\">\n                  <a routerLink=\"/account/work-offers\" class=\"btn btn-neutral btn-icon\" data-offset=\"0,8\">\n                    <span class=\"btn-inner--icon\"><i class=\"fas fa-list-ul\"></i></span>\n                    <span class=\"btn-inner--text d-none d-sm-inline-block\">Work Offers</span>\n                  </a>\n                </div>\n\n                <div class=\"btn-group\" role=\"group\">\n                  <a routerLink=\"/account/shifts\" class=\"btn btn-neutral btn-icon rounded-right\" data-offset=\"0,8\">\n                    <span class=\"btn-inner--icon\"><i class=\"far fa-calendar-alt\"></i></span>\n                    <span class=\"btn-inner--text d-none d-sm-inline-block\">Shifts</span>\n                  </a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"slice\">\n    <div class=\"container\">\n      <div class=\"row row-grid\">\n        <div class=\"col-lg-9 order-lg-2\">\n          <router-outlet></router-outlet>\n        </div>\n\n        <div class=\"col-lg-3 order-lg-1\">\n          <div data-toggle=\"sticky\" data-sticky-offset=\"30\" data-negative-margin=\".card-profile-cover\">\n            <div class=\"card\">\n              <div class=\"card-header py-3\">\n                <span class=\"h6\">Quick links</span>\n              </div>\n              <div class=\"list-group list-group-sm list-group-flush\">\n                <a routerLink=\"/account/settings\" class=\"list-group-item list-group-item-action d-flex justify-content-between\">\n                  <div>\n                    <i class=\"fas fa-sliders-h mr-2\"></i>\n                    <span>Account settings</span>\n                  </div>\n                  <div>\n                    <i class=\"fas fa-angle-right\"></i>\n                  </div>\n                </a>\n                <a routerLink=\"/account/billing\" class=\"list-group-item list-group-item-action d-flex justify-content-between\">\n                  <div>\n                    <i class=\"fas fa-credit-card mr-2\"></i>\n                    <span>Billing &amp; payment</span>\n                  </div>\n                  <div>\n                    <i class=\"fas fa-angle-right\"></i>\n                  </div>\n                </a>\n                <a routerLink=\"/account/inbox\" class=\"list-group-item list-group-item-action d-flex justify-content-between\">\n                  <div>\n                    <i class=\"fas fa-envelope mr-2\"></i>\n                    <span>Inbox</span>\n                  </div>\n                  <div>\n                    <i class=\"fas fa-angle-right\"></i>\n                  </div>\n                </a>\n                <a routerLink=\"/account/notifications\" class=\"list-group-item list-group-item-action d-flex justify-content-between\">\n                  <div>\n                    <i class=\"fas fa-bell mr-2\"></i>\n                    <span>Notifications</span>\n                  </div>\n                  <div>\n                    <i class=\"fas fa-angle-right\"></i>\n                  </div>\n                </a>\n                <a routerLink=\"/account/security\" class=\"list-group-item list-group-item-action d-flex justify-content-between\">\n                  <div>\n                    <i class=\"fas fa-lock mr-2\"></i>\n                    <span>Security</span>\n                  </div>\n                  <div>\n                    <i class=\"fas fa-angle-right\"></i>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/billing/billing.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/billing/billing.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isUpdated\" class=\"alert alert-success\" role=\"alert\">\n  Your credit card has been updated.\n</div>\n\n<div class=\"actions-toolbar mb-4\">\n  <h2 class=\"mb-1\">Billing &amp; Payment</h2>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-7\">\n    <form #checkout=\"ngForm\" role=\"form\" (ngSubmit)=\"onSubmit(checkout)\">\n      <div id=\"card-info\" #cardInfo></div>\n\n      <div class=\"mt-4\">\n        <button class=\"btn btn-sm btn-primary\" type=\"submit\"\n          [disabled]=\"(working$ | async)\">{{ !(working$ | async) ? 'Update' : 'One moment...' }}</button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"col-md-5\">\n    <div *ngFor=\"let card of (card$ | async)\" class=\"card card-stats\">\n      <div class=\"actions\">\n        <button class=\"action-item\" title=\"Remove credit card\" (click)=\"removeCard()\">\n          <i class=\"fas fa-trash\"></i>\n        </button>\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"d-flex\">\n          <div>\n            <div class=\"icon icon-sm\">\n              <img src=\"assets/img/svg/logos/cc-{{ card.brandSafe}}.svg\" [attr.alt]=\"card.brand\">\n            </div>\n          </div>\n\n          <div class=\"pl-4\">\n            <span class=\"d-block h5  mr-2 mb-1\">**** **** **** {{ card.last4 }}</span>\n            <span class=\"\">Expires: {{ card.exp.month }}/{{ card.exp.year }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger mt-4\" role=\"alert\">\n  {{ msgError }}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/dashboard/dashboard.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/dashboard/dashboard.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card hover-shadow-lg\">\n  <div class=\"card-body py-3\">\n    <div class=\"row row-grid align-items-center\">\n      <div class=\"col-lg-8\">\n        <div class=\"media align-items-center\">\n          <div class=\"avatar avatar-lg rounded-circle mr-3\">\n            <img alt=\"Profile picture\" [src]=\"(user$ | async ).profilePicture\">\n          </div>\n          <div class=\"media-body\">\n            <h5 class=\"mb-0\">{{ (user$ | async ).firstName }} {{ (user$ | async ).lastName }}</h5>\n            <div>\n              <form>\n                <input type=\"file\" name=\"file-1[]\" id=\"file-1\"\n                  class=\"custom-input-file custom-input-file-link\"\n                  data-multiple-caption=\"{count} files selected\" multiple />\n                <!-- <label for=\"file-1\">\n                  <span class=\"text-white\">Change avatar</span>\n                </label> -->\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-auto flex-fill mt-4 mt-sm-0 text-sm-right d-none d-lg-block\">\n        <a *ngIf=\"!isServiceProvider\" routerLink=\"/account/upgrade\" class=\"btn btn-sm btn-primary rounded-pill btn-icon shadow\">\n          <span class=\"btn-inner--icon\"><i class=\"far fa-grin-stars\"></i></span>\n          <span class=\"btn-inner--text\">Become a Service Provider</span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-calendar></app-calendar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/inbox/inbox.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/inbox/inbox.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actions-toolbar mb-4\">\n  <h2 class=\"mb-1\">\n    <span *ngIf=\"!toId\">Inbox</span>\n    <span *ngIf=\"toId\">Send Message</span>\n  </h2>\n</div>\n\n<ng-container *ngIf=\"!toId\">\n  <div class=\"list-group\">\n    <div *ngIf=\"!(threads$ | async)\" class=\"list-group-item\">\n      <div class=\"d-inline-flex align-items-center\">\n        <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n        <strong>Loading...</strong>\n      </div>\n    </div>\n    <div *ngIf=\"(threads$ | async) && (threads$ | async).length === 0\" class=\"list-group-item\">\n      No messages in your inbox.\n    </div>\n    <div *ngFor=\"let offer of threads$ | async\" class=\"list-group-item\">\n      <div class=\"media align-items-center\">\n        <div class=\"media-body\">\n          <h6 class=\"text-sm d-block text-limit mb-0\">{{ offer.title }}</h6>\n          <span class=\"d-block text-sm text-muted\">{{ offer.startTimeLocal | date:'longDate' }} at\n            {{ offer.startTimeLocal | date:'shortTime' }}</span>\n          <!-- <span class=\"badge badge-dark badge-pill mt-2\">{{ offer.wage | currency}} / hour</span> -->\n        </div>\n\n        <div class=\"media-body text-right\">\n          <span class=\"text-sm text-dark font-weight-bold ml-3\">{{ offer.wage | currency}} / hour</span>\n        </div>\n\n        <div class=\"media-body text-right\">\n          <a routerLink=\"/work-offer/{{offer.id}}\">\n            View\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-container>\n\n<ng-container *ngIf=\"toId\">\n  <ng-container *ngIf=\"user$ | async as user\">\n    <p>To: <span class=\"ml-2\"><img [src]=\"user.profilePicture\" class=\"avatar rounded-circle avatar-sm mr-1\" alt=\"\"> {{ user.firstName }}</span></p>\n    <textarea class=\"form-control\" placeholder=\"Your message...\" rows=\"4\" resize=\"none\"></textarea>\n    <button type=\"button\" class=\"btn btn-primary mt-3\">\n      Send\n    </button>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/notifications/notifications.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/notifications/notifications.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"actions-toolbar mb-4\">\n    <h2 class=\"mb-1\">Notifications</h2>\n  </div>\n  \n  <div class=\"list-group\">\n    <div *ngIf=\"!(notifications$ | async)\" class=\"list-group-item\">\n      <div class=\"d-inline-flex align-items-center\">\n        <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n        <strong>Loading...</strong>\n      </div>\n    </div>\n    <div *ngIf=\"(notifications$ | async) && (notifications$ | async).length === 0\" class=\"list-group-item\">\n      No notifications.\n    </div>\n    <div *ngFor=\"let notification of notifications$ | async\" class=\"list-group-item\">\n      <div class=\"media align-items-center\">\n        <div class=\"media-body\">\n          <h6 class=\"text-sm d-block text-limit mb-0\">{{ notification.title }}</h6>\n          <span class=\"d-block text-sm text-muted\">{{ notification.text }}</span>\n        </div>\n  \n        <div class=\"media-body text-right\">\n          <a [href]=\"notification.link\">\n            View\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/security/security.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/security/security.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isUpdated\" class=\"alert alert-success\" role=\"alert\">\n  Your password has been updated.\n</div>\n\n<div class=\"actions-toolbar mb-4\">\n  <h2 class=\"mb-1\">Security Settings</h2>\n</div>\n\n<form role=\"form\" [formGroup]=\"formGroup\" (validSubmit)=\"onSubmit()\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Current password</label>\n        <div class=\"input-group input-group-merge\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n          </div>\n          <input [type]=\"showPasswordCurrent ? 'text' : 'password'\" class=\"form-control\" placeholder=\"********\" formControlName=\"currentPassword\" required>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary btn-icon\" type=\"button\" (click)=\"togglePasswordCurrentVisibility()\">\n              <i class=\"fas fa-eye\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">New password</label>\n        <div class=\"input-group input-group-merge\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n          </div>\n          <input [type]=\"showPasswordConfirm ? 'text' : 'password'\" class=\"form-control\" placeholder=\"********\" formControlName=\"newPassword\" required>\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"togglePasswordConfirmVisibility()\">\n                <i class=\"fas fa-eye\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-4\">\n    <button class=\"btn btn-sm btn-primary\" type=\"submit\"\n      [disabled]=\"(working$ | async)\">{{ !(working$ | async) ? 'Update' : 'One moment...' }}</button>\n  </div>\n</form>\n\n<div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger mt-4\" role=\"alert\">\n  {{ msgError }}\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/settings/settings.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/settings/settings.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isUpdated\" class=\"alert alert-success\" role=\"alert\">\n  Your information has been updated.\n</div>\n\n<div class=\"actions-toolbar mb-4\">\n  <h2 class=\"mb-1\">Account Settings</h2>\n</div>\n\n<form role=\"form\" [formGroup]=\"formGroup\" (validSubmit)=\"onSubmit()\">\n  <h5 class=\"mb-2 mt-4\">Public information</h5>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">About yourself</label>\n        <textarea class=\"form-control\" formControlName=\"about\" placeholder=\"My name is {{ (user$ | async).firstName }} and...\" rows=\"4\" resize=\"none\" maxlength=\"500\"></textarea>\n      </div>\n    </div>\n  </div>\n\n  <h5 class=\"mb-2 mt-4\">Personal details</h5>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">First name</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"firstName\" required>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Last name</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"lastName\" required>\n      </div>\n    </div>\n  </div>\n  <div class=\"row align-items-center\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" required>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Phone number</label>\n        <input type=\"text\" class=\"form-control\" mask=\"(000) 000-0000\" formControlName=\"phoneNumber\" required>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Address</label>\n        <input type=\"text\" class=\"form-control\" ngx-google-places-autocomplete [options]=\"googlePlacesOptions\"\n          #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" formControlName=\"address\"\n          placeholder=\"Enter your address\" required>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Address line 2 (apartment or unit number)</label>\n        <input  type=\"text\" class=\"form-control\" formControlName=\"addressLine2\">\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-4\">\n    <button class=\"btn btn-sm btn-primary\" type=\"submit\"\n      [disabled]=\"(working$ | async)\">{{ !(working$ | async) ? 'Update' : 'One moment...' }}</button>\n  </div>\n</form>\n\n<div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger mt-4\" role=\"alert\">\n  {{ msgError }}\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/shifts/shifts.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/shifts/shifts.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageSuccess !== ''\" class=\"alert alert-success\" role=\"alert\">\n  {{ messageSuccess }}\n</div>\n\n<div class=\"actions-toolbar mb-4\">\n  <h2 class=\"mb-1\">Shifts</h2>\n</div>\n\n<nav class=\"nav nav-pills nav-justified mb-4\">\n  <button class=\"nav-item nav-link border-0\" [ngClass]=\"{'active': activeTab === 1 }\" (click)=\"setTab(1)\">Upcoming</button>\n  <button class=\"nav-item nav-link border-0\" [ngClass]=\"{'active': activeTab === 2 }\" (click)=\"setTab(2)\">Awaiting Confirmation</button>\n  <button class=\"nav-item nav-link border-0\" [ngClass]=\"{'active': activeTab === 3 }\" (click)=\"setTab(3)\">Complete</button>\n</nav>\n\n<!-- <div class=\"form-group mb-4\">\n  <div class=\"input-group input-group-merge\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Sort by</span>\n    </div>\n    <select class=\"custom-select\" (change)=\"onSortChange($event.target.value)\">\n      <option value=\"date-added-oldest\">Date added (oldest on top)</option>\n      <option value=\"date-added-newest\">Date added (newest on top)</option>\n      <option value=\"date-start-latest\">Start date (latest on top)</option>\n      <option value=\"date-start-soonest\">Start date (soonest on top)</option>\n    </select>\n  </div>\n</div> -->\n\n<div class=\"list-group\">\n  <div *ngIf=\"!(shifts$ | async)\" class=\"list-group-item\">\n    <div class=\"d-inline-flex align-items-center\">\n      <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n      <strong>Loading...</strong>\n    </div>\n  </div>\n\n  <div *ngIf=\"(shifts$ | async) && (shifts$ | async).length === 0\" class=\"list-group-item\">\n    No work offers here.\n  </div>\n\n  <div *ngFor=\"let shift of shifts$ | async; let i = index\" class=\"list-group-item\">\n    <div class=\"media align-items-center\">\n      <div class=\"media-body\">\n        <h6 class=\"text-sm d-block text-limit mb-1\">\n          <span class=\"badge badge-dark badge-pill mr-2\">\n            Shift {{ shift.num }}\n          </span>\n\n          {{ shift.title }}\n        </h6>\n        <span class=\"d-block text-sm text-muted\">{{ shift.startTimeLocal | date:'longDate' }} at\n          {{ shift.startTimeLocal | date:'shortTime' }}</span>\n      </div>\n\n      <div class=\"media-body text-right\">\n        <ng-container *ngIf=\"shift.isServiceProvider\">\n          <ng-container *ngIf=\"!shift.isComplete\">\n            <button *ngIf=\"!shift.isClockedIn\" class=\"btn btn-outline-success btn-sm\" (click)=\"clockIn(shift.id, i)\"\n              [disabled]=\"(working$ | async)\">\n              {{ !(working$ | async) ? 'Clock In' : 'Clocking in...' }}\n            </button>\n          \n            <button *ngIf=\"shift.isClockedIn\" class=\"btn btn-outline-dark btn-sm\" (click)=\"clockOut(shift.id, i)\"\n              [disabled]=\"(working$ | async)\">\n              {{ !(working$ | async) ? 'Clock Out' : 'Clocking out...' }}\n            </button>\n          </ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"!shift.isServiceProvider\">\n          <span *ngIf=\"!shift.isClockedIn\" class=\"text-muted\">Awaiting clock in</span>\n          <span *ngIf=\"shift.isClockedIn\" class=\"text-success\">Clocked in</span>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/upgrade/upgrade.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/upgrade/upgrade.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isServiceProvider\" class=\"alert alert-success\" role=\"alert\">\n  Great! You can now start applying for work.\n</div>\n\n<form *ngIf=\"!isServiceProvider\" role=\"form\" [formGroup]=\"formGroup\" (validSubmit)=\"onSubmit()\">\n  <div class=\"actions-toolbar mb-4\">\n    <h2 class=\"mb-1\">Become a Service Provider</h2>\n    <p class=\"text-sm text-muted mb-0\">Please complete this form to start applying to work offers.</p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Hourly wage</label>\n        <div class=\"input-group input-group-merge\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fas fa-dollar-sign\"></i></span>\n          </div>\n          <input class=\"form-control\" type=\"text\" mask=\"comma_separator.2\" placeholder=\"xx.xx\" formControlName=\"requestedWage\" required>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Maximum distance you’re willing to travel</label>\n        <div class=\"input-group input-group-merge\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\">km</span>\n          </div>\n          <input type=\"text\" mask=\"comma_separator.2\" class=\"form-control\" formControlName=\"travelRadius\" required>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Specialty</label>\n        <input class=\"form-control\" type=\"text\" formControlName=\"specialty\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Official occupation</label>\n        <input class=\"form-control\" type=\"text\" placeholder=\"Nurse\" formControlName=\"officialOccupation\" required>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Opt in to <a href=\"javascript:void(0)\" (click)=\"openModal(modalCancellation)\">cancellation policy</a>?</label>\n        <select class=\"custom-select\" formControlName=\"cancellationPolicy\">\n          <option value=\"1\">Yes</option>\n          <option value=\"0\">No</option>\n        </select>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"actions-toolbar py-2 mb-4 mt-4\">\n    <h6 class=\"mb-1\">Personal information</h6>\n    <p class=\"text-sm text-muted mb-0\">This information <strong>WILL NOT</strong> be stored on our server. <br>It is only required to verify where your payments will be deposited.</p>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Social Insurance Number (SIN)</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\" type=\"text\" mask=\"000 000 000\" placeholder=\"000 000 000\" formControlName=\"personalIdNumber\" required>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"actions-toolbar mb-4 mt-4\">\n    <h6>Bank information</h6>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Transit number</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" type=\"text\" mask=\"0*\" formControlName=\"bankTransitNumber\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Institution number</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" type=\"text\" mask=\"0*\" formControlName=\"bankInstitutionNumber\" required>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"form-control-label\">Account number</label>\n        <div class=\"input-group\">\n          <input class=\"form-control\" type=\"text\" mask=\"0*\" formControlName=\"bankAccountNumber\" required>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mt-4\">\n    <button class=\"btn btn-sm btn-primary\" type=\"submit\" [disabled]=\"(working$ | async)\">{{ !(working$ | async) ? 'Save' : 'One moment...' }}</button>\n  </div>\n</form>\n\n<div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger mt-4\" role=\"alert\">\n  {{ msgError }}\n</div>\n\n<ng-template #modalCancellation let-modal>\n  <div class=\"modal-header align-items-center\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Cancellation Policy</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\"><i class=\"fas fa-times\"></i></span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla malesuada venenatis lorem, non mattis metus dignissim a.\n    Mauris viverra nunc ut ante dignissim, quis dapibus lectus aliquam. Phasellus malesuada enim eget ipsum posuere, sit\n    amet consequat ex malesuada. Sed ut porta nisi, ac volutpat ante. Morbi mauris ex, sagittis ac odio sed, congue\n    consectetur est. Integer tincidunt augue vitae placerat maximus. Suspendisse auctor ante sed felis aliquet egestas. Ut\n    eu diam ex. Ut fringilla sem lectus, nec gravida felis sodales et. Vivamus sit amet suscipit magna.</p>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/work-offers/work-offers.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/account/pages/account/work-offers/work-offers.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageSuccess !== ''\" class=\"alert alert-success\" role=\"alert\">\n  {{ messageSuccess }}\n</div>\n\n<div class=\"actions-toolbar mb-4\">\n  <h2 class=\"mb-1\">Work Offers</h2>\n</div>\n\n<nav class=\"nav nav-pills nav-justified mb-4\">\n  <button class=\"nav-item nav-link border-0\" [ngClass]=\"{'active': activeTab === 1 }\" (click)=\"setTab(1)\">Awaiting\n    Service Provider</button>\n  <button class=\"nav-item nav-link border-0\" [ngClass]=\"{'active': activeTab === 2 }\" (click)=\"setTab(2)\">Awaiting\n    Approval</button>\n</nav>\n\n<div class=\"form-group mb-4\">\n  <div class=\"input-group input-group-merge\">\n    <div class=\"input-group-prepend\">\n      <span class=\"input-group-text\">Sort by</span>\n    </div>\n    <select class=\"custom-select\" (change)=\"onSortChange($event.target.value)\">\n      <option value=\"date-added-oldest\">Date added (oldest on top)</option>\n      <option value=\"date-added-newest\">Date added (newest on top)</option>\n      <option value=\"date-start-latest\">Start date (latest on top)</option>\n      <option value=\"date-start-soonest\">Start date (soonest on top)</option>\n    </select>\n  </div>\n</div>\n\n<div class=\"list-group\">\n  <!-- As Client -->\n  <h5 class='mb-2'>As Client</h5>\n\n  <div *ngIf=\"!(workOffersClient$ | async)\" class=\"list-group-item\">\n    <div class=\"d-inline-flex align-items-center\">\n      <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n      <strong>Loading...</strong>\n    </div>\n  </div>\n\n  <div *ngIf=\"(workOffersClient$ | async) && (workOffersClient$ | async).length === 0\" class=\"list-group-item\">\n    No work offers here.\n  </div>\n\n  <div *ngFor=\"let offer of workOffersClient$ | async\" class=\"list-group-item\">\n    <div class=\"media align-items-center\">\n      <div class=\"media-body\">\n        <h6 class=\"text-sm d-block text-limit mb-1\"><img alt=\"\" [src]=\"offer.profilePicture\"\n          class=\"avatar rounded-circle avatar-sm mr-1\"> {{ offer.title }}</h6>\n        <span class=\"d-block text-sm text-muted\">{{ offer.startTimeLocal | date:'longDate' }} at\n          {{ offer.startTimeLocal | date:'shortTime' }}</span>\n        <span class=\"d-block text-sm text-muted\">{{ offer.wage | currency}} / hour</span>\n        <div *ngIf=\"offer.idServiceProviderUser\" class=\"text-m mt-2\">\n          <a class=\"mr-3\" target=\"_blank\" routerLink=\"/profile/{{offer.idServiceProviderUser}}\"><i class=\"fas fa-user\"></i></a>\n          <a href=\"#\"><i class=\"fas fa-envelope\"></i></a>\n        </div>\n      </div>\n\n      <div class=\"media-body text-right\">\n        <a routerLink=\"/work-offer/{{offer.id}}\" class=\"btn btn-outline-primary btn-sm\">\n          View\n        </a>\n\n        <button *ngIf=\"offer.idWorkMessage\" class=\"btn btn-primary btn-sm\" (click)=\"acceptWorkMessage(offer.idWorkMessage, offer.serviceProviderName, offer.title)\" [disabled]=\"(working$ | async)\">\n          {{ !(working$ | async) ? 'Accept' : 'One moment...' }}\n        </button>\n\n        <button *ngIf=\"offer.idWorkMessage\" routerLink=\"/work-offer/{{offer.id}}\" class=\"btn btn-dark btn-sm\">\n          Decline\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <!-- As Service Provider -->\n  <ng-container *ngIf=\"(showAsServiceProvider$ | async) && isServiceProvider\">\n    <h5 class='mb-2 mt-4'>As Service Provider</h5>\n\n    <div *ngIf=\"!(workOffersServiceProvider$ | async)\" class=\"list-group-item\">\n      <div class=\"d-inline-flex align-items-center\">\n        <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n        <strong>Loading...</strong>\n      </div>\n    </div>\n\n    <div *ngIf=\"(workOffersServiceProvider$ | async) && (workOffersServiceProvider$ | async).length === 0\" class=\"list-group-item\">\n      No work offers here.\n    </div>\n\n    <div *ngFor=\"let offer of workOffersServiceProvider$ | async\" class=\"list-group-item\">\n      <div class=\"media align-items-center\">\n        <div class=\"media-body\">\n          <h6 class=\"text-sm d-block text-limit mb-1\"><img alt=\"\" [src]=\"offer.profilePicture\"\n              class=\"avatar rounded-circle avatar-sm mr-1\"> {{ offer.title }}</h6>\n          <span class=\"d-block text-sm text-muted\">{{ offer.startTimeLocal | date:'longDate' }} at\n            {{ offer.startTimeLocal | date:'shortTime' }}</span>\n          <span class=\"d-block text-sm text-muted\">{{ offer.wage | currency}} / hour</span>\n        </div>\n\n        <div class=\"media-body text-right\">\n          <a routerLink=\"/work-offer/{{offer.id}}\">\n            View\n          </a>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/login/login.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <section class=\"slice slice-lg min-vh-100 d-flex align-items-center bg-cover bg-size--cover\" style=\"background-image: url('../../assets/img/backgrounds/bg-auth.jpg');\">\n      <span class=\"mask bg-dark opacity-8\"></span>\n      <div class=\"container py-5 px-md-0 d-flex align-items-center\">\n      <div class=\"w-100\">\n        <div class=\"row row-grid justify-content-center justify-content-lg-between align-items-center\">\n          <div class=\"col-sm-8 col-lg-6 col-xl-5 order-lg-2\">\n            <div class=\"card shadow zindex-100 mb-0\">\n              <div class=\"card-body px-md-5 py-5\">\n                <ng-container *ngIf=\"isVerified; else verifying\">\n                  <div class=\"mb-4\">\n                    <h6 class=\"h3\">Login</h6>\n                    <p *ngIf=\"!verificationMessage\" class=\"text-muted mb-0\">Sign in to your account to continue.</p>\n                    <p *ngIf=\"verificationMessage\" class=\"text-success mb-0\">{{ verificationMessage }}</p>\n                  </div>\n\n                  <div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger\" role=\"alert\">\n                    {{ msgError }}\n                  </div>\n\n                  <span class=\"clearfix\"></span>\n\n                  <form role=\"form\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                      <label class=\"form-control-label\">Email address</label>\n                      <div class=\"input-group input-group-merge\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                        </div>\n                        <input type=\"email\" class=\"form-control\" placeholder=\"name@example.com\" name=\"email\" [(ngModel)]=\"loginData.email\">\n                      </div>\n                    </div>\n                    <div class=\"form-group mb-4\">\n                      <div class=\"d-flex align-items-center justify-content-between\">\n                        <div>\n                          <label class=\"form-control-label\">Password</label>\n                        </div>\n                      </div>\n                      <div class=\"input-group input-group-merge\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n                        </div>\n                        <input type=\"password\" class=\"form-control\" placeholder=\"********\" name=\"password\" [(ngModel)]=\"loginData.password\">\n                      </div>\n                      <div class=\"mt-2 text-right\">\n                        <a routerLink=\"/recover\" class=\"small text-muted text-underline--dashed border-primary\">Forgot password?</a>\n                      </div>\n                    </div>\n                    <div class=\"mt-4\">\n                      <button type=\"submit\" class=\"btn btn-sm btn-primary btn-icon rounded-pill\" [disabled]=\"(working$ | async)\">\n                        <span class=\"btn-inner--text\">{{ !(working$ | async) ? 'Login' : 'One moment...' }}</span>\n                        <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-right\"></i></span>\n                      </button>\n                    </div>\n                  </form>\n                </ng-container>\n\n                <ng-template #verifying>\n                  <div class=\"d-flex align-items-center\">\n                    <strong>Verifying...</strong>\n                    <div class=\"spinner-border ml-auto\" role=\"status\" aria-hidden=\"true\"></div>\n                  </div>\n                </ng-template>\n              </div>\n\n              <div class=\"card-footer px-md-5\"><small>Not registered?</small>&nbsp;<a routerLink=\"/register\" class=\"small font-weight-bold\">Create account</a></div>\n            </div>\n          </div>\n          <div class=\"col-lg-5 order-lg-1 d-none d-lg-block text-white\">\n            <blockquote>\n              <h3 class=\"h2 mb-4 text-white\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl elit, euismod vel mi eget, viverra sollicitudin dolor.</h3>\n              <footer>— <cite class=\"text-lg text-white\">Nulla facilisi</cite></footer>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/recover/recover.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/recover/recover.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <section class=\"slice slice-lg min-vh-100 d-flex align-items-center bg-cover bg-size--cover\"\n    style=\"background-image: url('../../assets/img/backgrounds/bg-auth.jpg');\">\n    <span class=\"mask bg-dark opacity-8\"></span>\n    <div class=\"container py-5 px-md-0 d-flex align-items-center\">\n      <div class=\"w-100\">\n        <div class=\"row row-grid justify-content-center justify-content-lg-between align-items-center\">\n          <div class=\"col-sm-8 col-lg-6 col-xl-5 order-lg-2\">\n            <div class=\"card shadow zindex-100 mb-0\">\n              <div class=\"card-body px-md-5 py-5\">\n                <div class=\"mb-4\">\n                  <h6 class=\"h3\">Password reset</h6>\n                  <p *ngIf=\"recoverStep == 1\" class=\"text-muted mb-0\">Enter your email below to proceed.</p>\n                  <p *ngIf=\"recoverStep == 2\" class=\"text-muted mb-0\">We emailed you a reset code. Please enter it below.</p>\n                </div>\n\n                <span class=\"clearfix\"></span>\n\n                <div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger\" role=\"alert\">\n                  {{ msgError }}\n                </div>\n\n                <!-- Step 1 -->\n                <form *ngIf=\"recoverStep == 1\" [formGroup]=\"formGroup1\" (validSubmit)=\"onSubmit(1)\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Email address</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                      </div>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"name@example.com\" formControlName=\"email\" required>\n                    </div>\n                  </div>\n                  <div class=\"mt-4\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary btn-icon rounded-pill\" [disabled]=\"(working$ | async)\">\n                      <span class=\"btn-inner--text\">{{ !(working$ | async) ? 'Next' : 'Sending reset code...' }}</span>\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-right\"></i></span>\n                    </button>\n                  </div>\n                </form>\n\n                <!-- Step 2 -->\n                <form *ngIf=\"recoverStep == 2\" [formGroup]=\"formGroup2\" (validSubmit)=\"onSubmit(2)\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Reset code</label>\n                    <div class=\"input-group input-group-merge\">\n                      <!-- <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                      </div> -->\n                      <input type=\"text\" class=\"form-control\" formControlName=\"token\" required>\n                    </div>\n                  </div>\n                  <div class=\"mt-4\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary btn-icon rounded-pill\">\n                      <span class=\"btn-inner--text\">Next</span>\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-right\"></i></span>\n                    </button>\n                  </div>\n                </form>\n\n                <!-- Step 3 -->\n                <form *ngIf=\"recoverStep == 3\" [formGroup]=\"formGroup3\" (validSubmit)=\"onSubmit(3)\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Password</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n                      </div>\n                      <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control\" placeholder=\"********\" formControlName=\"password\" required>\n                      <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"togglePasswordVisibility()\">\n                          {{ showPassword ? 'Hide' : 'Show' }}\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"mt-4\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary btn-icon rounded-pill\" [disabled]=\"(working$ | async)\">\n                      <span class=\"btn-inner--text\">{{ !(working$ | async) ? 'Reset password' : 'Resetting...' }}</span>\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-right\"></i></span>\n                    </button>\n                  </div>\n                </form>\n\n                <!-- Step 4 -->\n                <ng-container *ngIf=\"recoverStep === 4\">\n                  <p>Password reset! You can now <a routerLink=\"/login\">login</a>.</p>\n                </ng-container>\n              </div>\n\n              <div class=\"card-footer px-md-5\"><small>Not registered?</small>&nbsp;<a routerLink=\"/register\" class=\"small font-weight-bold\">Create account</a></div>\n            </div>\n          </div>\n          <div class=\"col-lg-5 order-lg-1 d-none d-lg-block text-white\">\n            <blockquote>\n              <h3 class=\"h2 mb-4 text-white\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl elit,\n                euismod vel mi eget, viverra sollicitudin dolor.</h3>\n              <footer>— <cite class=\"text-lg text-white\">Nulla facilisi</cite></footer>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/register/register.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/auth/pages/register/register.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <section class=\"slice slice-lg min-vh-100 d-flex align-items-center bg-cover bg-size--cover\" style=\"background-image: url('../../assets/img/backgrounds/bg-auth.jpg');\">\n    <span class=\"mask bg-dark opacity-8\"></span>\n    <div class=\"container py-5 px-md-0 d-flex align-items-center\">\n      <div class=\"w-100\">\n        <div class=\"row row-grid justify-content-center justify-content-lg-between align-items-center\">\n          <div class=\"col-sm-8 col-lg-6 col-xl-5 order-lg-2\">\n            <div class=\"card shadow zindex-100 mb-0\">\n              <div class=\"card-body px-md-5 py-5\">\n                <div class=\"mb-4\">\n                  <h6 class=\"h3\">Create account</h6>\n                  <p *ngIf=\"registrationStep !== 3\" class=\"text-muted mb-0\">Get started with Caremada.</p>\n                </div>\n\n                <div *ngIf=\"(msgError$ | async) as msgError\" class=\"alert alert-danger\" role=\"alert\">\n                  {{ msgError }}\n                </div>\n                \n                <span class=\"clearfix\"></span>\n\n                <!-- Step 1 -->\n                <form *ngIf=\"registrationStep == 1\" role=\"form\" [formGroup]=\"formGroup1\" (validSubmit)=\"onSubmit(1)\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Email address</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n                      </div>\n                      <input type=\"email\" class=\"form-control\" placeholder=\"name@example.com\" formControlName=\"email\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group mb-4\">\n                    <label class=\"form-control-label\">Password</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n                      </div>\n                      <input [type]=\"showPassword ? 'text' : 'password'\" class=\"form-control\" placeholder=\"********\" formControlName=\"password\" required>\n                      <div class=\"input-group-append\">\n                        <button class=\"btn btn-secondary\" type=\"button\" (click)=\"togglePasswordVisibility()\">\n                          <i class=\"fas fa-eye\"></i>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"mt-4\">\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary btn-icon rounded-pill\">\n                      <span class=\"btn-inner--text\">Next</span>\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-right\"></i></span>\n                    </button>\n                  </div>\n                </form>\n\n                <!-- Step 2 -->\n                <form *ngIf=\"registrationStep == 2\" role=\"form\" [formGroup]=\"formGroup2\" (validSubmit)=\"onSubmit(2)\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">First name</label>\n                    <div class=\"input-group input-group-merge\">\n                      <input id=\"firstName\" type=\"text\" class=\"form-control\" formControlName=\"firstName\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group mb-4\">\n                    <label class=\"form-control-label\">Last name</label>\n                    <div class=\"input-group input-group-merge\">\n                      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Date of birth</label>\n                    <div class=\"input-group input-group-merge\">\n                      <input type=\"text\" mwlFlatpickr class=\"form-control\" data-toggle=\"date\" placeholder=\"Select date\" formControlName=\"birthDate\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Phone number</label>\n                    <div class=\"input-group input-group-merge\">\n                      <input type=\"text\" class=\"form-control\" mask=\"(000) 000-0000\" placeholder=\"(xxx) xxx-xxxx\" formControlName=\"phoneNumber\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Address</label>\n                    <div class=\"input-group input-group-merge\">\n                      <input type=\"text\" class=\"form-control\" ngx-google-places-autocomplete [options]=\"googlePlacesOptions\" #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" formControlName=\"address\" placeholder=\"Enter your address\" required>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Address line 2 (apartment or unit number)</label>\n                    <div class=\"input-group input-group-merge\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Optional\" formControlName=\"addressLine2\">\n                    </div>\n                  </div>\n                  <div class=\"my-4\">\n                    <div class=\"custom-control custom-checkbox mb-3\">\n                      <input id=\"check-terms\" type=\"checkbox\" class=\"custom-control-input\" formControlName=\"terms\" required>\n                      <label class=\"custom-control-label\" for=\"check-terms\">I agree to the <a href=\"#\">terms and conditions</a></label>\n                    </div>\n                    <div class=\"custom-control custom-checkbox\">\n                      <input id=\"check-privacy\" type=\"checkbox\" class=\"custom-control-input\" formControlName=\"privacy\" required>\n                      <label class=\"custom-control-label\" for=\"check-privacy\">I agree to the <a href=\"#\">privacy policy</a></label>\n                    </div>\n                  </div>\n\n                  <div class=\"mt-4\">\n                    <button type=\"button\" class=\"btn btn-sm btn-secondary btn-icon rounded-pill\" (click)=\"onBack()\">\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-left\"></i></span>\n                      <span class=\"btn-inner--text\">Back</span>\n                    </button>\n\n                    <button type=\"submit\" class=\"btn btn-sm btn-primary btn-icon rounded-pill\" [disabled]=\"(working$ | async)\">\n                      <span *ngIf=\"(working$ | async)\" class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n                      <span class=\"btn-inner--text\">{{ !(working$ | async) ? 'Create my account' : 'One moment...' }}</span>\n                      <span class=\"btn-inner--icon\"><i class=\"fas fa-long-arrow-alt-right\"></i></span>\n                    </button>\n                  </div>\n                </form>\n\n                <!-- Step 3 -->\n                <ng-container *ngIf=\"registrationStep === 3\">\n                  <p>Welcome to Caremada!</p>\n                  <p>Before you can sign in, you’ll need to activate your account.</p>\n                  <p>We’ve sent you an email with an activation link.</p>\n                </ng-container>\n              </div>\n\n              <div class=\"card-footer px-md-5\"><small>Already have an acocunt?</small>&nbsp;<a routerLink=\"/login\" class=\"small font-weight-bold\">Login</a></div>\n            </div>\n          </div>\n\n          <div class=\"col-lg-6 order-lg-1 d-none d-lg-block\">\n            <blockquote>\n              <h3 class=\"h2 mb-4 text-white\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisl elit, euismod vel mi eget, viverra sollicitudin dolor.</h3>\n              <footer>— <cite class=\"text-lg text-white\">Nulla facilisi</cite></footer>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/pages/home/home.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/pages/home/home.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <section class=\"slice slice-xl bg-cover bg-size--cover pb-300\" data-offset-top=\"#header-main\" style=\"background-image: url('../../assets/img/backgrounds/bg-home.jpeg');\">\n      <span class=\"mask bg-dark opacity-8\"></span>\n      <div class=\"container pt-7\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"text-center\">\n              <h2 class=\"display-4 text-white mb-2\">Giving families a helping hand.</h2>\n              <div class=\"row justify-content-center\">\n                <div class=\"col-lg-6\">\n                  <p class=\"lead text-white lh-180\">A place for caregiving professionals to build profiles, \n                    find work and get paid wherever they are.</p>\n                  <div _ngcontent-kap-c2=\"\" class=\"mt-5\"><a _ngcontent-kap-c2=\"\" class=\"btn btn-white rounded-pill\" href=\"#\"><span _ngcontent-kap-c2=\"\" class=\"btn-inner--text\">Find a Service Provider</span></a></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"slice slice-lg pt-lg-0\">\n      <div class=\"container\">\n        <div class=\"card-group flex-column flex-lg-row\">\n          <div class=\"card bg-gradient-primary border-0 px-4 py-5 mt--150\">\n            <div class=\"card-body\">\n              <h5 class=\"h4 text-white\">Find a Service Provider</h5>\n              <p class=\"mt-4 mb-0 text-white\">\n                We allow you to find qualified service providers for your loved ones wherever you are.\n              </p>\n            </div>\n          </div>\n          <div class=\"card bg-gradient-dark border-0 px-4 py-5 mt--150\">\n            <div class=\"card-body\">\n              <h5 class=\"h4 text-white\">Build a Schedule</h5>\n              <p class=\"mt-4 mb-0 text-white\">\n                Whether a service provider or a client, you can view your bookings in our calendar.\n              </p>\n            </div>\n          </div>\n          <div class=\"card bg-gradient-primary border-0 px-4 py-5 mt--150\">\n            <div class=\"card-body\">\n              <h5 class=\"h4 text-white\">eCommerce System</h5>\n              <p class=\"mt-4 mb-0 text-white\">\n                Caremada’s payment system allows for one-click booking and payment.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"slice slice-lg\">\n      <div class=\"container\">\n        <div class=\"mb-5 text-center\">\n          <div class=\"fluid-paragraph mt-3\">\n            <p class=\"lead lh-180\">Caremada is a place for caregiving professionals to build profiles, \n              find work and get paid wherever they are. It allows parents, families \n              and members to book and pay for service providers who are fully bonded and \n              have gone through a police records check, whether at home or when \n              traveling anywhere in the world.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n    <section class=\"slice slice-lg\">\n      <div class=\"container no-padding\">\n        <div class=\"card-deck\">\n          <div class=\"card hover-shadow-lg\">\n            <div class=\"card-body\">\n              <div class=\"delimiter-bottom pb-3 mb-2\">\n                <h5 class=\"mt-2\">Search Preferences</h5>\n              </div>\n              <p class=\"mb-0\">Caremada has searchable functionality by location and date for clients seeking service provider and service providers looking for work.</p>\n            </div>\n          </div>\n          <div class=\"card hover-shadow-lg\">\n            <div class=\"card-body\">\n              <div class=\"delimiter-bottom pb-3 mb-2\">\n                <h5 class=\"mt-2\">Create a Profile</h5>\n              </div>\n              <p class=\"mb-0\">Quick account creation with verifications, references and reviews.</p>\n            </div>\n          </div>\n          <div class=\"card hover-shadow-lg\">\n            <div class=\"card-body\">\n              <div class=\"delimiter-bottom pb-3 mb-2\">\n                <h5 class=\"mt-2\">Dashboard</h5>\n              </div>\n              <p class=\"mb-0\">Every user gets access to a dashboard that provides stats on your account.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/profile/pages/profile/profile.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/profile/pages/profile/profile.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <!-- Header (account) -->\n  <section class=\"header-account-page bg-dark d-flex align-items-end\" data-offset-top=\"#header-main\">\n    <!-- Header container -->\n    <div class=\"container pt-4 pt-lg-0\">\n      <div class=\"row\">\n        <div class=\" col-lg-12\">\n          <!-- Salute + Small stats -->\n          <div *ngIf=\"(user$ | async) as user\" class=\"row align-items-center mb-4\">\n            <div class=\"col-md-5 mb-4 mb-md-0\">\n              <span class=\"h2 mb-0 text-white d-block\">{{ user.firstName }} from {{ user.location.city }}</span>\n            </div>\n            <div class=\"col-auto flex-fill d-none d-xl-block\">\n              <ul class=\"list-inline row justify-content-lg-end mb-0\">\n                <li class=\"list-inline-item col-sm-4 col-md-auto m-0\">\n                  <div class=\"d-sm-block h5 text-white font-weight-bold pl-2 m-0\">\n                    <span *ngIf=\"user.totalReviews === 0\">\n                      <i class=\"far fa-star\"></i><i class=\"far fa-star\"></i><i class=\"far fa-star\"></i><i class=\"far fa-star\"></i><i class=\"far fa-star\"></i>\n                    </span>\n                    <span *ngIf=\"user.totalReviews > 0\">\n                      <i *ngFor=\"let i of Arr(user.avgRating).fill(1)\" class=\"fas fa-star\"></i>\n                      <i *ngFor=\"let i of Arr(5-user.avgRating).fill(1)\" class=\"far fa-star\"></i>\n                    </span>\n                    &nbsp;\n                    ({{ user.totalReviews }} reviews)\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section *ngIf=\"(user$ | async) as user; else loading\" class=\"slice\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"card card-profile border-0\">\n            <div class=\"card-profile-cover\" [style.backgroundImage]=\"'url('+user.profilePicture+')'\" style=\"background-position: center center; background-size: cover; filter:blur(3px); height: 200px;\"></div>\n            <div class=\"mx-auto\">\n              <img alt=\"Image placeholder\" [src]=\"user.profilePicture\"\n                class=\"card-profile-image avatar rounded-circle shadow hover-shadow-lg\">\n            </div>\n            <div class=\"card-body p-3 pt-0 text-center\">\n              <h5 class=\"mb-0\">{{ user.firstName }}</h5>\n              <span class=\"d-block text-muted mb-3\">Member since {{ user.registerDate | date:'longDate' }}</span>\n\n              <div class=\"actions d-flex justify-content-between mt-3 pt-3 px-5 delimiter-top\">\n                <button class=\"action-item\" (click)=\"message()\">\n                  <i class=\"fas fa-envelope\"></i>\n                </button>\n                <a href=\"#\" class=\"action-item\">\n                  <i class=\"fas fa-user\"></i>\n                </a>\n                <a href=\"#\" class=\"action-item\">\n                  <i class=\"fas fa-chart-pie\"></i>\n                </a>\n                <a href=\"#\" class=\"action-item text-danger\">\n                  <i class=\"fas fa-trash-alt\"></i>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-8\">\n          <p *ngIf=\"user.about\">{{ user.about }}</p>\n\n          <h2 class=\"mb-3\">Reviews</h2>\n\n          <div class=\"list-group-item\">\n            No reviews.\n          </div>\n\n          <!-- <div class=\"card\">\n            <div class=\"card-header pt-4 pb-2\">\n              <div class=\"d-flex align-items-center\">\n                <a href=\"#\" class=\"avatar rounded-circle shadow\">\n                  <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-1-800x800.jpg\">\n                </a>\n                <div class=\"avatar-content\">\n                  <h6 class=\"mb-0\">Bettie Mavis</h6>\n                  <small class=\"d-block text-muted\"><i class=\"fas fa-clock mr-2\"></i>3 hrs ago</small>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <p>Personal profiles are the perfect way for you to grab their attention and persuade recruiters to\n                continue reading your CV because you’re telling them from the off exactly why they should hire you. Of\n                course, you’ll need to know how to write an effective statement first, but we’ll get on to that in a\n                bit.</p>\n              <div class=\"d-lg-flex mt-4\">\n                <a href=\"#\" class=\"d-flex align-items-center mr-lg-5 mb-3 mb-lg-0\">\n                  <div>\n                    <div class=\"icon icon-sm bg-gradient-success text-white rounded-circle icon-shape\">\n                      <i class=\"fas fa-user-ninja\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-3\">\n                    <span class=\"h6\">10 Skills</span>\n                  </div>\n                </a>\n                <a href=\"#\" class=\"d-flex align-items-center mr-lg-5 mb-3 mb-lg-0\">\n                  <div>\n                    <div class=\"icon icon-sm bg-gradient-warning text-white rounded-circle icon-shape\">\n                      <i class=\"fas fa-user-friends\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-3\">\n                    <span class=\"h6\">57 Endorsements</span>\n                  </div>\n                </a>\n                <a href=\"#\" class=\"d-flex align-items-center mr-lg-5 mb-3 mb-lg-0\">\n                  <div>\n                    <div class=\"icon icon-sm bg-gradient-primary text-white rounded-circle icon-shape\">\n                      <i class=\"fas fa-award\"></i>\n                    </div>\n                  </div>\n                  <div class=\"pl-3\">\n                    <span class=\"h6\">7 Awards</span>\n                  </div>\n                </a>\n              </div>\n              <div class=\"pt-5 mt-5 delimiter-top\">\n                <h6 class=\"mb-4\">\n                  <i class=\"fas fa-file-signature mr-2\"></i>Experience\n                </h6>\n                <div class=\"timeline timeline-one-side\" data-timeline-content=\"axis\">\n                  <div class=\"timeline-block\">\n                    <span class=\"timeline-step border-primary\"></span>\n                    <div class=\"timeline-content\">\n                      <small class=\"text-muted font-weight-bold\">2016 - present</small>\n                      <h6>Web Developer at Webpixels</h6>\n                      <p class=\"text-sm lh-160\">When we strive to become better than we are everything around us becomes\n                        better too. This is a wider card with supporting text below.</p>\n                      <div>\n                        <span class=\"badge badge-soft-primary mr-2 mb-2\">Bootstrap</span>\n                        <span class=\"badge badge-soft-primary mr-2 mb-2\">UI/UX</span>\n                        <span class=\"badge badge-soft-primary mr-2 mb-2\">Market Strategy</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"timeline-block\">\n                    <span class=\"timeline-step timeline-step-sm border-warning\"></span>\n                    <div class=\"timeline-content\">\n                      <small class=\"text-muted font-weight-bold\">2014 - 2016</small>\n                      <h6>Front Designer at Google</h6>\n                      <p class=\"text-sm lh-160\">When we strive to become better than we are everything around us becomes\n                        better too. This is a wider card with supporting text below.</p>\n                      <div>\n                        <span class=\"badge badge-soft-warning mr-2 mb-2\">HTML5</span>\n                        <span class=\"badge badge-soft-warning mr-2 mb-2\">CSS3</span>\n                        <span class=\"badge badge-soft-warning mr-2 mb-2\">Responsive Design</span>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"timeline-block\">\n                    <span class=\"timeline-step timeline-step-sm border-info\"></span>\n                    <div class=\"timeline-content\">\n                      <small class=\"text-muted font-weight-bold\">2013 - 2014</small>\n                      <h6>Internship at Apple</h6>\n                      <p class=\"text-sm lh-160\">When we strive to become better than we are everything around us becomes\n                        better too. This is a wider card with supporting text below.</p>\n                      <div>\n                        <span class=\"badge badge-soft-info mr-2 mb-2\">Product Design</span>\n                        <span class=\"badge badge-soft-info mr-2 mb-2\">Development</span>\n                        <span class=\"badge badge-soft-info mr-2 mb-2\">Market Strategy</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"pt-5 mt-5 delimiter-top\">\n                <h6>\n                  <i class=\"fas fa-user-n mr-2 mb-4\"></i>Skills\n                </h6>\n                <div>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">Web Design</a>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">Development</a>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">UI/UX</a>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">Bootstrap 4</a>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">User Experience</a>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">Psychology</a>\n                  <a href=\"#\" class=\"badge badge-lg badge-soft-primary d-inline-block mr-2 mb-2\">Photoshop</a>\n                </div>\n              </div>\n              <div class=\"pt-5 mt-5 delimiter-top\">\n                <h6 class=\"mb-4\">\n                  <i class=\"fas fa-user-friends mr-2\"></i>Endorsements\n                </h6>\n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n                    <div class=\"card bg-secondary\">\n                      <div class=\"p-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <div>\n                            <a href=\"#\" class=\"avatar rounded-circle d-inline-block\">\n                              <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-1-800x800.jpg\"\n                                class=\"\">\n                            </a>\n                          </div>\n                          <div class=\"pl-3\">\n                            <a href=\"#\" class=\"h6 text-sm\">Betty Mavis</a><span\n                              class=\"static-rating static-rating-sm d-block\"><i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"card bg-secondary\">\n                      <div class=\"p-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <div>\n                            <a href=\"#\" class=\"avatar rounded-circle d-inline-block\">\n                              <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-2-800x800.jpg\"\n                                class=\"\">\n                            </a>\n                          </div>\n                          <div class=\"pl-3\">\n                            <a href=\"#\" class=\"h6 text-sm\">Heather Wright</a><span\n                              class=\"static-rating static-rating-sm d-block\"><i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"card bg-secondary\">\n                      <div class=\"p-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <div>\n                            <a href=\"#\" class=\"avatar rounded-circle d-inline-block\">\n                              <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-3-800x800.jpg\"\n                                class=\"\">\n                            </a>\n                          </div>\n                          <div class=\"pl-3\">\n                            <a href=\"#\" class=\"h6 text-sm\">John Sullivan</a><span\n                              class=\"static-rating static-rating-sm d-block\"><i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-lg-4\">\n                    <div class=\"card bg-secondary\">\n                      <div class=\"p-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <div>\n                            <a href=\"#\" class=\"avatar rounded-circle d-inline-block\">\n                              <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-4-800x800.jpg\"\n                                class=\"\">\n                            </a>\n                          </div>\n                          <div class=\"pl-3\">\n                            <a href=\"#\" class=\"h6 text-sm\">George Squier</a><span\n                              class=\"static-rating static-rating-sm d-block\"><i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star\"></i>\n                              <i class=\"star fas fa-star\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"card bg-secondary\">\n                      <div class=\"p-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <div>\n                            <a href=\"#\" class=\"avatar rounded-circle d-inline-block\">\n                              <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-5-800x800.jpg\"\n                                class=\"\">\n                            </a>\n                          </div>\n                          <div class=\"pl-3\">\n                            <a href=\"#\" class=\"h6 text-sm\">Jesse Stevens</a><span\n                              class=\"static-rating static-rating-sm d-block\"><i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-4\">\n                    <div class=\"card bg-secondary\">\n                      <div class=\"p-3\">\n                        <div class=\"d-flex align-items-center\">\n                          <div>\n                            <a href=\"#\" class=\"avatar rounded-circle d-inline-block\">\n                              <img alt=\"Image placeholder\" src=\"../../assets/img/theme/light/team-6-800x800.jpg\"\n                                class=\"\">\n                            </a>\n                          </div>\n                          <div class=\"pl-3\">\n                            <a href=\"#\" class=\"h6 text-sm\">Monroe Parker</a><span\n                              class=\"static-rating static-rating-sm d-block\"><i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i>\n                              <i class=\"star fas fa-star voted\"></i></span>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <ng-template #loading>\n    <section class=\"slice slice-lg\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-inline-flex align-items-center\">\n              <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n              <strong>Loading...</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/search/pages/search/search.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/search/pages/search/search.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <!-- Spotlight -->\n  <section class=\"slice slice-lg bg-gradient-primary\" data-offset-top=\"#header-main\">\n    <div class=\"container pt-5\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-4 text-white\">\n            Find a \n            <ng-container *ngIf=\"type === 'work-offer'; then workOffer; else serviceProvider\"></ng-container>\n            <ng-template #workOffer>Work Offer</ng-template>\n            <ng-template #serviceProvider>Service Provider</ng-template>\n          </h2>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"slice slice-lg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <ng-container *ngIf=\"type === 'work-offer'\">\n          <div *ngIf=\"(workOffers$ | async) && (workOffers$ | async).length === 0\" class=\"col-12\">\n            No results.\n          </div>\n\n          <div class=\"col-xl-3 col-lg-4 col-sm-6\">\n            <a *ngFor=\"let workOffer of workOffers$ | async\" class=\"card hover-shadow-lg hover-translate-y-n10\" routerLink=\"/work-offer/{{workOffer.id}}\">\n              <div class=\"card-body text-center\">\n                <h6>{{ workOffer.title }}</h6>\n                <span class=\"badge badge-primary badge-pill d-inline-block mb-3\">\n                  {{ workOffer.careType }}\n                </span>\n                <p class=\"text-sm\">\n                  {{ workOffer.startTimeLocal | date:'longDate' }}\n                </p>\n                <span class=\"card-price\">{{workOffer.wage | currency}}/hour</span>\n              </div>\n            </a>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"type === 'service-provider'\">\n          <div *ngIf=\"(serviceProviders$ | async) && (serviceProviders$ | async).length === 0\" class=\"col-12\">\n            No results.\n          </div>\n\n          <div class=\"col-xl-3 col-lg-4 col-sm-6\">\n            <a *ngFor=\"let user of serviceProviders$ | async\" class=\"card hover-shadow-lg hover-translate-y-n10\" routerLink=\"\">\n              <div class=\"card-body text-center\">\n                <h6>{{ user.firstName }}</h6>\n                <!-- <span class=\"badge badge-primary badge-pill d-inline-block mb-3\">\n                  {{ workOffer.careType }}\n                </span> -->\n                <!-- <p class=\"text-sm\">\n                  {{ workOffer.startTimeLocal | date:'longDate' }}\n                </p> -->\n                <!-- <span class=\"card-price\">{{workOffer.wage | currency}}/hour</span> -->\n              </div>\n            </a>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/work-offer/pages/new/new.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/work-offer/pages/new/new.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <!-- Spotlight -->\n  <section class=\"slice slice-lg bg-gradient-primary\" data-offset-top=\"#header-main\">\n    <div class=\"container pt-5\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <h2 class=\"display-4 text-white\">New Work Offer</h2>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"slice slice-lg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <ng-container *ngIf=\"hasCreditCard === null\">\n          <div class=\"d-flex align-items-center justify-content-center\">\n            <div class=\"d-inline-flex align-items-center h-100\">\n              <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n              <strong>Loading...</strong>\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"hasCreditCard === false\">\n          <div class=\"col-12\">\n            <div class=\"alert alert-group alert-warning\" role=\"alert\">\n              <div class=\"alert-content\">\n                  You must have a credit card in your account to create a work offer.\n              </div>\n              <div class=\"alert-action\">\n                <button type=\"button\" class=\"btn btn-warning\" aria-label=\"Add Credit Card\">Add Credit Card</button>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n\n        <ng-container *ngIf=\"hasCreditCard === true\">\n          <div class=\"col-md-8\">\n            <form role=\"form\" [formGroup]=\"formGroup\" (validSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Title</label>\n                <div class=\"input-group\">\n                  <input class=\"form-control\" type=\"text\" formControlName=\"title\" maxlength=\"100\" required>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Description</label>\n                <textarea class=\"form-control\" rows=\"7\" formControlName=\"description\" required></textarea>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Service type</label>\n                <div class=\"input-group\">\n                  <select class=\"custom-select\" formControlName=\"careType\">\n                    <option *ngIf=\"!(careTypes$ | async)\" disabled selected>Loading...</option>\n                    <ng-container *ngFor=\"let item of careTypes$ | async\">\n                      <option *ngIf=\"item.isVisible\" [value]=\"item.name\">{{ item.name }}</option>\n                    </ng-container>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Responsibilities</label>\n                <textarea class=\"form-control\" rows=\"7\" formControlName=\"responsibilities\" required></textarea>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Ward details</label>\n                <input class=\"form-control\" type=\"text\" formControlName=\"wardDetails\" required>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Rules</label>\n                <textarea class=\"form-control\" rows=\"7\" formControlName=\"rules\" required></textarea>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Initial meeting address</label>\n                <div class=\"input-group input-group-merge\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fas fa-map-marker\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" ngx-google-places-autocomplete [options]=\"googlePlacesOptions\"\n                    #placesRef=\"ngx-places\" (onAddressChange)=\"handleMeetingLocationChange($event)\"\n                    formControlName=\"meetingLocation\" placeholder=\"\" required>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Work location</label>\n                <div class=\"input-group input-group-merge\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"fas fa-map-marker\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" ngx-google-places-autocomplete [options]=\"googlePlacesOptions\"\n                    #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" formControlName=\"address\"\n                    placeholder=\"\" required>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Start time</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"far fa-calendar\"></i></span>\n                      </div>\n                      <input type=\"text\" mwlFlatpickr class=\"form-control\" [enableTime]=\"true\" dateFormat=\"Y-m-d H:i\"\n                        formControlName=\"startTimeLocal\" required>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">End time</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"far fa-calendar\"></i></span>\n                      </div>\n                      <input type=\"text\" mwlFlatpickr class=\"form-control\" [enableTime]=\"true\" dateFormat=\"Y-m-d H:i\"\n                        formControlName=\"endTimeLocal\" required>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Hourly rate</label>\n                    <div class=\"input-group input-group-merge\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\"><i class=\"fas fa-dollar-sign\"></i></span>\n                      </div>\n                      <input class=\"form-control\" type=\"text\" mask=\"comma_separator.2\" placeholder=\"xx.xx\"\n                        formControlName=\"wage\" required>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-6\">\n                  <div class=\"form-group\">\n                    <label class=\"form-control-label\">Continuous?</label>\n                    <select class=\"custom-select\" formControlName=\"isContinuous\">\n                      <option value=\"1\">Yes</option>\n                      <option value=\"0\">No</option>\n                    </select>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"mt-4\">\n                <button class=\"btn btn-sm btn-primary\" type=\"submit\"\n                  [disabled]=\"(working$ | async)\">{{ !(working$ | async) ? 'Save' : 'One moment...' }}</button>\n              </div>\n            </form>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/work-offer/pages/view/view.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/work-offer/pages/view/view.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <!-- Spotlight -->\n  <section class=\"slice slice-lg bg-gradient-primary\" data-offset-top=\"#header-main\">\n    <div class=\"container pt-5\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\" *ngIf=\"workOffer$ | async as workOffer\">\n          <h2 class=\"display-4 text-white\">{{ workOffer.title }}</h2>\n          <h3 class=\"display-5 text-white\">{{ workOffer.careType }}</h3>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <ng-container *ngIf=\"{workOffer: workOffer$ | async, userOffering: userOffering$ | async} as data\">\n    <section *ngIf=\"data.workOffer && data.userOffering; else loading\" class=\"slice slice-lg\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"card\">\n              <div class=\"card-header\">\n                <div class=\"d-flex align-items-center\">\n                  <a routerLink=\"/profile/{{data.userOffering.id}}\">\n                    <img alt=\"\" [src]=\"data.userOffering.profilePicture\" class=\"avatar rounded-circle avatar-lg hover-shadow-lg hover-scale-110\">\n                  </a>\n\n                  <div class=\"avatar-content ml-3\">\n                    <h6 class=\"mb-0\">{{ data.userOffering.firstName }}</h6>\n                    <span class=\"badge badge-pill badge-soft-dark mt-2 d-block\">Member since {{ data.userOffering.registerDate | date:'longDate' }}</span>\n                  </div>\n\n                  <button *ngIf=\"(user$ | async).id !== data.userOffering.id && (user$ | async).isCaregiver && !(didApply$ | async)\" type=\"button\" class=\"btn btn-primary ml-auto\" [disabled]=\"(working$ | async)\" (click)=\"apply()\">\n                    {{ !(working$ | async) ? 'Apply' : 'One moment...' }}\n                  </button>\n\n                  <div *ngIf=\"(didApply$ | async)\" class=\"alert alert-success mb-0 ml-auto\" role=\"alert\">\n                    Applied!\n                  </div>\n\n                  <a *ngIf=\"!(user$ | async).isCaregiver\" routerLink=\"/account/upgrade\" class=\"btn btn-primary ml-auto\">\n                    Become a service provider to apply\n                  </a>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <p>{{ data.workOffer.description }}</p>\n\n                <h6 class=\"h6 mt-4\">Ward details</h6>\n                <p>{{ data.workOffer.wardDetails }}</p>\n\n                <h6 class=\"h6 mt-4\">Responsibilities</h6>\n                <p>{{ data.workOffer.responsibilities }}</p>\n\n                <h6 class=\"h6 mt-4\">Rules</h6>\n                <p>{{ data.workOffer.rules }}</p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-4\">\n            <div class=\"card overflow-hidden\" data-animate-hover=\"2\">\n              <div class=\"overflow-hidden\">\n                <agm-map [latitude]=\"data.workOffer.lat\" [longitude]=\"data.workOffer.lng\" [scrollwheel]=\"false\" [disableDoubleClickZoom]=\"true\"\n                  [disableDefaultUI]=\"true\" [clickableIcons]=\"false\" [mapDraggable]=\"false\" [streetViewControl]=\"false\"\n                  [zoomControl]=\"false\" [styles]=\"mapStyles\" [zoom]=\"11\" style=\"height: 300px;\">\n                  <agm-circle [latitude]=\"data.workOffer.lat\" [longitude]=\"data.workOffer.lng\" [radius]=\"3000\" [clickable]=\"false\"\n                    fillColor=\"#ec6d5f\"></agm-circle>\n                </agm-map>\n              </div>\n              <div class=\"card-body\">\n                <div class=\"row align-items-center mb-4\">\n                  <div class=\"col\">\n                    <span class=\"badge badge-pill badge-soft-dark\">{{ data.workOffer.wage | currency }}&nbsp;/&nbsp;hour</span>\n                  </div>\n                  <div class=\"col text-right\">\n                    <span class=\"badge badge-pill badge-soft-success\">{{ data.workOffer.total | currency }}</span>\n                  </div>\n                </div>\n\n                <div class=\"row align-items-center\">\n                  <div class=\"col-md-5\">\n                    <p class=\"text-center text-sm m-0\">{{ data.workOffer.startTimeLocal | date:'longDate' }}\n                      <br>{{ data.workOffer.startTimeLocal | date:'shortTime' }}</p>\n                  </div>\n\n                  <div class=\"col-md-2 hidden-sm\">\n                    to\n                  </div>\n\n                  <div class=\"col-md-5\">\n                    <p class=\"text-center text-sm m-0\">{{ data.workOffer.endTimeLocal | date:'longDate' }}\n                      <br>{{ data.workOffer.endTimeLocal | date:'shortTime' }}</p>\n                  </div>\n                </div>\n\n                <div *ngIf=\"data.workOffer.isContinuous\" class=\"alert alert-warning mt-4\" role=\"alert\">\n                  <strong>Heads up!</strong> This is a single, contiuous shift, which may include multiple overnight stays.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </ng-container>\n\n  <ng-template #loading>\n    <section class=\"slice slice-lg\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"d-inline-flex align-items-center\">\n              <div class=\"spinner-border mr-4\" role=\"status\" aria-hidden=\"true\" fill=\"{color: '#ffffff'}\"></div>\n              <strong>Loading...</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/calendar/calendar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/calendar/calendar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-sm btn-dark\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\">\n        Previous\n      </button>\n      <button class=\"btn btn-sm btn-outline-dark\" mwlCalendarToday [(viewDate)]=\"viewDate\">\n        Today\n      </button>\n      <button class=\"btn btn-sm btn-dark\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"closeOpenMonthViewDay()\">\n        Next\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-sm btn-dark\" (click)=\"setView(CalendarView.Month)\" [class.active]=\"view === CalendarView.Month\">\n        Month\n      </button>\n      <button class=\"btn btn-sm btn-dark\" (click)=\"setView(CalendarView.Week)\" [class.active]=\"view === CalendarView.Week\">\n        Week\n      </button>\n      <button class=\"btn btn-sm btn-dark\" (click)=\"setView(CalendarView.Day)\" [class.active]=\"view === CalendarView.Day\">\n        Day\n      </button>\n    </div>\n  </div>\n</div>\n\n<br>\n\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events$ | async\"\n    [cellTemplate]=\"customCellTemplate\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events$ | async\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events$ | async\">\n  </mwl-calendar-day-view>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/modal/modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/modal/modal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-smart-modal class=\"modal\" customClass=\"nsm-centered\" identifier=\"{{ modalIdentifier }}\">\n  <div class=\"modal__hero\" [style.backgroundImage]=\"'url('+ modalHeaderBg +')'\">\n    <h1 class=\"modal__hero__title\">{{ modalTitle }}</h1>\n  </div>\n\n  <div class=\"modal__inner\">\n    <!-- <h1 class=\"modal__title\">{{ modalTitle }}</h1> -->\n\n    <ng-content></ng-content>\n  </div>\n</ngx-smart-modal>"

/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _core_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/animations */ "./src/app/core/animations.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");








let AppComponent = class AppComponent {
    constructor(activatedRoute, authService, broadcastService, router, userService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.broadcastService = broadcastService;
        this.router = router;
        this.userService = userService;
        this.title = 'caremada';
        this.user$ = this.userService.user$;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).forEach(e => {
            let headerTheme = this.activatedRoute.root.firstChild.snapshot.data['headerTheme'];
            if (!headerTheme) {
                headerTheme = 'light';
            }
            this.headerTheme = headerTheme;
            this.broadcastService.reset();
        });
    }
    onActivate(event) {
        window.scrollTo(0, 0);
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__["BroadcastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        animations: [_core_animations__WEBPACK_IMPORTED_MODULE_4__["routeTransition"]]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__["BroadcastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm2015/ng-bootstrap-form-validation.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_4__["NgBootstrapFormValidationModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/configs/settings.config.ts":
/*!********************************************!*\
  !*** ./src/app/configs/settings.config.ts ***!
  \********************************************/
/*! exports provided: appSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appSettings", function() { return appSettings; });
const appSettings = {
    appTitle: 'Caremada',
    authKeys: {
        auth: 'caremada-auth',
        user: 'caremada-user',
    }
};


/***/ }),

/***/ "./src/app/core/animations.ts":
/*!************************************!*\
  !*** ./src/app/core/animations.ts ***!
  \************************************/
/*! exports provided: routeTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeTransition", function() { return routeTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const routeAnimation = [
// query('.hero__h1', [
//   style({ transform: 'translateY(100px)', opacity: 0 }),
// ], { optional: true }),
// query('.hero__h1', [
//   animate('800ms 0s ease', style({ transform: 'translateY(0)', opacity: 1 })),
// ], { optional: true }),
];
const routeTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', routeAnimation),
]);


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
        this.currentYear = new Date().getFullYear();
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/footer/footer.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/guards/client-auth.guard */ "./src/app/core/guards/client-auth.guard.ts");







let HeaderComponent = class HeaderComponent {
    constructor(activatedRoute, authService, workOfferService, clientAuthGuard, router, userService) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.workOfferService = workOfferService;
        this.clientAuthGuard = clientAuthGuard;
        this.router = router;
        this.userService = userService;
        this.isSticky = false;
        // auth$ = null;
        // user$ = null;
        this.loginData = {
            email: 'jasonmac5@gmail.com',
            password: 'fhRwLiwerf049346',
            remember: true,
        };
    }
    ngOnInit() {
        // this.auth$ = this.authService.auth$;
        // this.user$ = this.userService.userData$;
        this.user$ = this.userService.user$;
        if (this.authService.isLoggedIn()) {
            this.userService.getSelf().subscribe((resp) => {
                // console.log(resp);
            });
        }
    }
    ngAfterViewInit() {
        // this.auth$.subscribe((isLoggedIn) => {
        //   if (isLoggedIn) {
        //     this.userService.getSelf();
        //     // this.modalLogin.close();
        //   }
        // });
        // this.user$.subscribe((user) => {
        //   // if (user) {
        //   //   this.workOfferService.getBookedOffersAsClient();
        //   //
        //   //   if (this.userService.isServiceProvider()) {
        //   //     this.workOfferService.getBookedOffersAsServiceProvider();
        //   //   }
        //   // }
        // });
    }
    onWindowScroll() {
        if (window.pageYOffset > 50) {
            this.isSticky = true;
        }
        else {
            this.isSticky = false;
        }
    }
    // TODO Temperary... remove when login page is created.
    login() {
        this.authService.login(this.loginData).subscribe((resp) => {
            // this.user$.next(resp.data.user);
            this.userService.setSelf(resp.data.user);
        });
    }
    logout() {
        this.authService.logout();
        this.userService.destroySelf();
        this.clientAuthGuard.canActivate(this.activatedRoute.snapshot, this.router.routerState.snapshot);
    }
    get isLoggedIn() {
        return this.authService.isLoggedIn();
    }
    get isServiceProvider() {
        return this.userService.isServiceProvider();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_4__["WorkOfferService"] },
    { type: _core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_6__["ClientAuthGuard"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HeaderComponent.prototype, "headerTheme", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], HeaderComponent.prototype, "onWindowScroll", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/header/header.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_4__["WorkOfferService"],
        _core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_6__["ClientAuthGuard"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], HeaderComponent);



/***/ }),

/***/ "./src/app/core/components/toast/toast.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/components/toast/toast.component.ts ***!
  \**********************************************************/
/*! exports provided: ToastComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastComponent", function() { return ToastComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");



let ToastComponent = class ToastComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    isTemplate(toast) { return toast.textOrTpl instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]; }
    showStandard(msg) {
        this.toastService.show(msg);
    }
    showSuccess(msg) {
        this.toastService.show(msg, { classname: 'bg-success text-light', delay: 10000 });
    }
    showDanger(msg) {
        this.toastService.show(msg, { classname: 'bg-danger text-light', delay: 15000 });
    }
};
ToastComponent.ctorParameters = () => [
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"] }
];
ToastComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toast',
        template: __webpack_require__(/*! raw-loader!./toast.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/components/toast/toast.component.html"),
        host: { '[class.ngb-toasts]': 'true' },
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_toast_service__WEBPACK_IMPORTED_MODULE_2__["ToastService"]])
], ToastComponent);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _core_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/module-loaded-once.guard */ "./src/app/core/module-loaded-once.guard.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_modules_account_account_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @app/modules/account/account.module */ "./src/app/modules/account/account.module.ts");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _app_modules_home_home_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @app/modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _app_modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @app/modules/profile/profile.module */ "./src/app/modules/profile/profile.module.ts");
/* harmony import */ var _app_modules_search_search_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @app/modules/search/search.module */ "./src/app/modules/search/search.module.ts");
/* harmony import */ var _app_modules_work_offer_work_offer_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @app/modules/work-offer/work-offer.module */ "./src/app/modules/work-offer/work-offer.module.ts");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _core_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/components/toast/toast.component */ "./src/app/core/components/toast/toast.component.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_care_type_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @core/services/care-type.service */ "./src/app/core/services/care-type.service.ts");
/* harmony import */ var _core_services_geolocation_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @core/services/geolocation.service */ "./src/app/core/services/geolocation.service.ts");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _core_services_shift_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @core/services/shift.service */ "./src/app/core/services/shift.service.ts");
/* harmony import */ var _core_services_thread_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @core/services/thread.service */ "./src/app/core/services/thread.service.ts");
/* harmony import */ var _core_services_title_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @core/services/title.service */ "./src/app/core/services/title.service.ts");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @core/services/work-message.service */ "./src/app/core/services/work-message.service.ts");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");
/* harmony import */ var _core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @core/guards/client-auth.guard */ "./src/app/core/guards/client-auth.guard.ts");
/* harmony import */ var _core_interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @core/interceptors/error-handler.interceptor */ "./src/app/core/interceptors/error-handler.interceptor.ts");
/* harmony import */ var _core_interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @core/interceptors/api-prefix.interceptor */ "./src/app/core/interceptors/api-prefix.interceptor.ts");
/* harmony import */ var _core_interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @core/interceptors/http-token.interceptor */ "./src/app/core/interceptors/http-token.interceptor.ts");









































let CoreModule = class CoreModule extends _core_module_loaded_once_guard__WEBPACK_IMPORTED_MODULE_13__["EnsureModuleLoadedOnceGuard"] {
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once).
    constructor(parentModule, titleService) {
        super(parentModule);
        titleService.init();
    }
};
CoreModule.ctorParameters = () => [
    { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
    { type: _core_services_title_service__WEBPACK_IMPORTED_MODULE_32__["TitleService"] }
];
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _app_modules_account_account_module__WEBPACK_IMPORTED_MODULE_16__["AccountModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAQL4w7oQ6y58esuR_U4nz5YPGz9_3ec54'
            }),
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_17__["AuthModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11__["adapterFactory"]
            }),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _app_modules_home_home_module__WEBPACK_IMPORTED_MODULE_18__["HomeModule"],
            _app_modules_profile_profile_module__WEBPACK_IMPORTED_MODULE_19__["ProfileModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"].forRoot(),
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_9__["NgxSmartModalModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _app_modules_search_search_module__WEBPACK_IMPORTED_MODULE_20__["SearchModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _app_modules_work_offer_work_offer_module__WEBPACK_IMPORTED_MODULE_21__["WorkOfferModule"],
        ],
        exports: [
            _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        ],
        providers: [
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_25__["AuthService"],
            _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_26__["BroadcastService"],
            _core_services_care_type_service__WEBPACK_IMPORTED_MODULE_27__["CareTypeService"],
            _core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_37__["ClientAuthGuard"],
            _core_services_geolocation_service__WEBPACK_IMPORTED_MODULE_28__["GeoLocationService"],
            _core_services_notification_service__WEBPACK_IMPORTED_MODULE_29__["NotificationService"],
            _core_services_shift_service__WEBPACK_IMPORTED_MODULE_30__["ShiftService"],
            _core_services_thread_service__WEBPACK_IMPORTED_MODULE_31__["ThreadService"],
            _core_services_toast_service__WEBPACK_IMPORTED_MODULE_33__["ToastService"],
            _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_35__["WorkMessageService"],
            _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_36__["WorkOfferService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_40__["HttpTokenInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_error_handler_interceptor__WEBPACK_IMPORTED_MODULE_38__["ErrorHandlerInterceptor"],
                multi: true,
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptors_api_prefix_interceptor__WEBPACK_IMPORTED_MODULE_39__["ApiPrefixInterceptor"],
                multi: true,
            },
            _core_services_title_service__WEBPACK_IMPORTED_MODULE_32__["TitleService"],
            _core_services_user_service__WEBPACK_IMPORTED_MODULE_34__["UserService"],
        ],
        declarations: [
            _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_22__["HeaderComponent"],
            _core_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_24__["ToastComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"],
        ],
        entryComponents: [
            _core_components_toast_toast_component__WEBPACK_IMPORTED_MODULE_24__["ToastComponent"],
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule, _core_services_title_service__WEBPACK_IMPORTED_MODULE_32__["TitleService"]])
], CoreModule);



/***/ }),

/***/ "./src/app/core/guards/client-auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/core/guards/client-auth.guard.ts ***!
  \**************************************************/
/*! exports provided: ClientAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientAuthGuard", function() { return ClientAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");




let ClientAuthGuard = class ClientAuthGuard {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    canActivate(route, state) {
        return this.chekUser(route, state);
    }
    canActivateChild(route, state) {
        return this.chekUser(route, state);
    }
    chekUser(route, state) {
        const isLoggedIn = this.authService.isLoggedIn();
        if (isLoggedIn) {
            return true;
        }
        this.router.navigateByUrl('/');
        return false;
    }
};
ClientAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
ClientAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], ClientAuthGuard);



/***/ }),

/***/ "./src/app/core/interceptors/api-prefix.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/api-prefix.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: ApiPrefixInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiPrefixInterceptor", function() { return ApiPrefixInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");



/**
 * Prefixes all requests with `environment.host`.
 */
let ApiPrefixInterceptor = class ApiPrefixInterceptor {
    intercept(request, next) {
        request = request.clone({ url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].host + request.url });
        return next.handle(request);
    }
};
ApiPrefixInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApiPrefixInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/error-handler.interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/interceptors/error-handler.interceptor.ts ***!
  \****************************************************************/
/*! exports provided: ErrorHandlerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerInterceptor", function() { return ErrorHandlerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/toast.service */ "./src/app/core/services/toast.service.ts");









/**
* Adds a default error handler to all requests.
*/
let ErrorHandlerInterceptor = class ErrorHandlerInterceptor {
    constructor(authService, broadcastService, router, toastService) {
        this.authService = authService;
        this.broadcastService = broadcastService;
        this.router = router;
        this.toastService = toastService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => this.errorHandler(error)));
    }
    // Customize the default error handler here if needed
    errorHandler(resp) {
        // if (!environment.production) {
        //   // Do something with the error
        //   this.logger.logError('Request error ' + JSON.stringify(response));
        // }
        if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            const httpErrorCode = resp['status'];
            switch (httpErrorCode) {
                case 401:
                    if (this.authService.isLoggedIn()) {
                        this.authService.logout();
                    }
                    this.router.navigate(['/']);
                    break;
                case 403:
                    this.router.navigate(['/login']);
                    break;
                case 404:
                    this.router.navigate(['/']);
                    break;
                default:
                    break;
            }
            // console.log(response);
            // this.toastr.error(response['error']['error']['message']);
            // this.toastService.show(response['error']['error']['message'], { classname: 'bg-danger', delay: 15000 });
            this.broadcastService.setErrorMsg(resp['error']['error']['message']);
            this.broadcastService.setWorking(false);
        }
        // switch (httpErrorCode) {
        //   case UNAUTHORIZED:
        //     this.router.navigateByUrl('/auth/login');
        //     break;
        //
        //   case FORBIDDEN:
        //     this.router.navigateByUrl('/auth/403');
        //     break;
        //   // case BAD_REQUEST:
        //   //    this.showError(error.message);
        //   //     break;
        //   default:
        //
        //   // this.toasterService.pop('error', appToaster.errorHead, response['error']['error']['message']);
        // }
        // throw response;
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["empty"]();
    }
};
ErrorHandlerInterceptor.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__["BroadcastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }
];
ErrorHandlerInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_6__["BroadcastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _core_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]])
], ErrorHandlerInterceptor);



/***/ }),

/***/ "./src/app/core/interceptors/http-token.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http-token.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");



let HttpTokenInterceptor = class HttpTokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(req, next) {
        const headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        const token = this.authService.getToken();
        if (token) {
            headersConfig['Authorization'] = `Bearer ${token}`;
        }
        const request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    }
};
HttpTokenInterceptor.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], HttpTokenInterceptor);



/***/ }),

/***/ "./src/app/core/module-loaded-once.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/core/module-loaded-once.guard.ts ***!
  \**************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard, throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
class EnsureModuleLoadedOnceGuard {
    constructor(targetModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}
EnsureModuleLoadedOnceGuard.ctorParameters = () => [
    { type: undefined }
];
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _configs_settings_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @configs/settings.config */ "./src/app/configs/settings.config.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");








let AuthService = class AuthService {
    // private authSubject = new BehaviorSubject<boolean>(this.isLoggedIn());
    // public readonly auth$ = this.authSubject.asObservable();
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    /**
     * Logs in a user.
     * @param data request body
     */
    login(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.auth}`;
        const storage = data.remember ? localStorage : sessionStorage;
        return this.http.post(href, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((resp) => {
            if (resp.data.token) {
                storage.setItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth, resp.data.token);
                this.userService.user = resp.data.user;
            }
        }));
    }
    /**
     * Logs out a user.
     */
    logout() {
        sessionStorage.removeItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth);
        localStorage.removeItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth);
        // this.authSubject.next(false);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
    }
    /**
     * Checks if a user is logged in.
     * @returns true if logged in, false otherwise
     */
    isLoggedIn() {
        if (localStorage.getItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth) || sessionStorage.getItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth)) {
            return true;
        }
        return false;
    }
    /**
     * Verifies a user's email.
     * @param data request body
     */
    verify(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.auth}/verification`;
        return this.http.patch(href, data);
    }
    recover(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.auth}/recover`;
        return this.http.patch(href, data);
    }
    /**
     * Gets the auth token.
     * @returns the auth token
     */
    getToken() {
        const token = sessionStorage.getItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth) || localStorage.getItem(_configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].authKeys.auth);
        return token;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], AuthService);



/***/ }),

/***/ "./src/app/core/services/broadcast.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/broadcast.service.ts ***!
  \****************************************************/
/*! exports provided: BroadcastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BroadcastService", function() { return BroadcastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let BroadcastService = class BroadcastService {
    constructor() {
        this.reset();
    }
    setErrorMsg(msg) {
        this.msgErrorSubject.next(msg);
    }
    setWorking(isWorking) {
        this.workingSubject.next(isWorking);
    }
    reset() {
        this.msgErrorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.msgError$ = this.msgErrorSubject.asObservable();
        this.workingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.working$ = this.workingSubject.asObservable();
    }
};
BroadcastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BroadcastService);



/***/ }),

/***/ "./src/app/core/services/care-type.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/care-type.service.ts ***!
  \****************************************************/
/*! exports provided: CareTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareTypeService", function() { return CareTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let CareTypeService = class CareTypeService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Gets all the care types.
     * @returns care types
     */
    getAll() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.careType}`;
        // return this.http.get(href).pipe(
        //   map((data: any) => data.data.items.map(item => this.careTypeAdapter.adapt(item))),
        //   tap((data: any) => {
        //     // this.careTypesSubject.next(data);
        //   })
        // );
        return this.http.get(href);
    }
};
CareTypeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CareTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CareTypeService);



/***/ }),

/***/ "./src/app/core/services/caregiver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/caregiver.service.ts ***!
  \****************************************************/
/*! exports provided: CaregiverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaregiverService", function() { return CaregiverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let CaregiverService = class CaregiverService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Creates a new caregiver.
     * @param data request body
     */
    create(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.caregivers}`;
        return this.http.post(href, data);
    }
    /**
     * Gets a caregiver.
     * @param id caregiver ID
     */
    get(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.caregivers}/${id}`;
        return this.http.get(href);
    }
    // TODO Change to GET request with URL params
    /**
     * Searches for caregivers.
     * @param data request body
     */
    search(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.caregivers}/search`;
        return this.http.post(href, data);
    }
    /**
     * Updates a caregiver's availability.
     * @param data request body
     */
    updateAvailability(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.caregivers}/availability`;
        return this.http.post(href, data).pipe(
        // TODO
        );
    }
};
CaregiverService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CaregiverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], CaregiverService);



/***/ }),

/***/ "./src/app/core/services/geolocation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/geolocation.service.ts ***!
  \******************************************************/
/*! exports provided: GeoLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoLocationService", function() { return GeoLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let GeoLocationService = class GeoLocationService {
    constructor() {
        // coordinates: any;
        this.positionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.position$ = this.positionSubject.asObservable();
    }
    /**
     * Sets the current geo position.
     */
    setCurrentPosition() {
        navigator.geolocation.watchPosition((pos) => {
            this.positionSubject.next(pos);
        }),
            () => {
                console.log('Position is not available');
            },
            {
                enableHighAccuracy: true
            };
    }
};
GeoLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GeoLocationService);



/***/ }),

/***/ "./src/app/core/services/notification.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/notification.service.ts ***!
  \*******************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let NotificationService = class NotificationService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Gets all notifications.
     */
    getNotifications() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.notifications}`;
        return this.http.get(href);
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], NotificationService);



/***/ }),

/***/ "./src/app/core/services/shift.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/shift.service.ts ***!
  \************************************************/
/*! exports provided: ShiftService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftService", function() { return ShiftService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let ShiftService = class ShiftService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Clocks into a shift.
     * @param id shift ID
     */
    clockIn(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.shifts}/${id}/clock-in`;
        return this.http.patch(href, null);
    }
    /**
     * Clocks out of a shift.
     * @param id shift ID
     */
    clockOut(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.shifts}/${id}/clock-out`;
        return this.http.patch(href, null);
    }
    /**
     * Confirms the completion of a shift.
     * @param id shift ID
     */
    confirm(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.shifts}/${id}/confirm`;
        return this.http.patch(href, null);
    }
    /**
     * Gets a shift.
     * @param  id shift ID
     */
    get(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.shifts}/${id}`;
        return this.http.get(href);
    }
};
ShiftService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ShiftService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ShiftService);



/***/ }),

/***/ "./src/app/core/services/thread.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/thread.service.ts ***!
  \*************************************************/
/*! exports provided: ThreadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadService", function() { return ThreadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let ThreadService = class ThreadService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Creates a new message.
     * @param id thread ID
     * @param data request body
     */
    createMessage(id, data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.threads}/${id}`;
        return this.http.post(href, data);
    }
    /**
     * Creates a new thread.
     * @param data request body
     */
    create(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.threads}`;
        return this.http.post(href, data);
    }
    /**
     * Gets messages for a given thread.
     * @param id thread ID
     */
    getMessages(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.threads}/${id}`;
        return this.http.get(href).pipe(
        // TODO
        );
    }
    /**
     * Gets all threads.
     */
    getAll() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.threads}`;
        return this.http.get(href);
    }
};
ThreadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ThreadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ThreadService);



/***/ }),

/***/ "./src/app/core/services/title.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/title.service.ts ***!
  \************************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _configs_settings_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @configs/settings.config */ "./src/app/configs/settings.config.ts");

var TitleService_1;






const APP_TITLE = _configs_settings_config__WEBPACK_IMPORTED_MODULE_6__["appSettings"].appTitle;
const SEPARATOR = ' | ';
let TitleService = TitleService_1 = class TitleService {
    constructor(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
    }
    static ucFirst(string) {
        if (!string) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    init() {
        const onNavigationEnd = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]));
        // Change page title on navigation or language change, based on route data
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(onNavigationEnd)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(() => {
            let route = this.activatedRoute;
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(route => route.data))
            .subscribe(event => {
            const title = event['title'];
            if (title) {
                this.titleService.setTitle(`${title} ${SEPARATOR} ${APP_TITLE} `);
            }
            else {
                // If not, we do a little magic on the url to create an approximation
                return this.router.url.split('/').reduce((acc, frag) => {
                    if (acc && frag) {
                        acc += SEPARATOR;
                    }
                    return this.router.url.split('/').reduce((acc, frag) => {
                        if (acc && frag) {
                            acc += SEPARATOR;
                        }
                        return acc + TitleService_1.ucFirst(frag);
                    });
                });
            }
        });
    }
};
TitleService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
TitleService = TitleService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
], TitleService);



/***/ }),

/***/ "./src/app/core/services/toast.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/toast.service.ts ***!
  \************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToastService = class ToastService {
    constructor() {
        this.toasts = [];
    }
    show(textOrTpl, options = {}) {
        this.toasts.push(Object.assign({ textOrTpl }, options));
    }
    remove(toast) {
        this.toasts = this.toasts.filter(t => t !== toast);
    }
};
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");






let UserService = class UserService {
    // private user: User;
    constructor(http) {
        this.http = http;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.user$ = this.userSubject.asObservable();
    }
    set user(user) {
        this.userSubject.next(user);
    }
    /**
     * Reports a user.
     * @param id user ID
     */
    report(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/${id}/reports`;
        return this.http.post(href, null);
    }
    /**
     * Creates a review for a given user.
     * @param id user ID
     * @param data request body
     */
    createReview(id, data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/${id}/reviews`;
        return this.http.post(href, data);
    }
    /**
     * Creates a user.
     * @param registrationData request body
     */
    create(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}`;
        return this.http.post(href, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            // console.log(data);
        }));
    }
    /**
     * Gets all unread notifications.
     */
    getNotifiationsUnread() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/notifications/unread`;
        return this.http.get(href).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            // console.log(data);
        }));
    }
    /**
     * Gets all notifications.
     */
    getNotifications() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/notifications`;
        return this.http.get(href);
    }
    /**
     * Gets reviews for a given user.
     * @param id user ID
     */
    getReviews(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/${id}/reviews`;
        return this.http.get(href).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            // console.log(data);
        }));
    }
    setSelf(data) {
        this.userSubject.next(data);
    }
    getCardSelf() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/card`;
        return this.http.get(href);
    }
    deleteCard() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/card`;
        return this.http.delete(href);
    }
    /**
     * Gets self.
     * @param refresh should fetch user from server?
     */
    getSelf(refresh = false) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me`;
        return this.http.get(href).pipe(
        // map((data: any) => this.userAdapter.adapt(data.data)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            // this.user = data;
            this.userSubject.next(data.data);
            // TODO
        }));
    }
    /**
     * Gets self upcoming shifts.
     */
    getShiftsUpcoming() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/shifts/upcoming`;
        return this.http.get(href);
    }
    /**
     * Gets self shifts awaiting confirmation.
     */
    getShiftsAwaitingConfirmation() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/shifts/awaiting-confirmation`;
        return this.http.get(href);
    }
    /**
     * Gets self completed shifts.
     */
    getShiftsComplete() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/shifts/complete`;
        return this.http.get(href);
    }
    // /**
    //  * Gets the shifts for a given user.
    //  * @param id user ID
    //  */
    // getShifts(id: number) {
    //   const href = `${environment.api.users}/${id}/shifts`;
    //   return this.http.get(href).pipe(
    //     // map((data: any) => this.userAdapter.adapt(data.data)),
    //     tap((data: any) => {
    //       // this.user = data;
    //       // this.userDataSubject.next(data);
    //       // TODO
    //     })
    //   );
    // }
    /**
     * Gets a user.
     * @param id user ID
     */
    get(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/${id}`;
        return this.http.get(href);
    }
    /**
     * Resets a user password if forgotten.
     * Pass the user's email to generate a reset token.
     * Pass the user's email, reset token and new password to reset it.
     * @param data request body
     */
    resetPassword(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/password`;
        return this.http.patch(href, data);
    }
    /**
     * Updates the user's credentials.
     * @param data updated credentials data (email and password)
     */
    updateCredentials(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/credentials`;
        return this.http.patch(href, data);
    }
    /**
     * Updates the user's credit card.
     * @param data request body
     */
    updateCreditCard(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me/card`;
        return this.http.put(href, data);
    }
    /**
     * Updates a user.
     * @param data request body
     */
    update(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me`;
        return this.http.patch(href, data);
    }
    /**
     * Destroys the logged in user.
     */
    destroySelf() {
        // this.userDataSubject.next(null);
        // this.user = null;
    }
    /**
     * Checks if logged in user is a service provider.
     */
    isServiceProvider() {
        if (!this.userSubject.getValue()) {
            return null;
        }
        return this.userSubject.getValue().isCaregiver;
    }
    reloadSelf() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api.users}/me`;
        this.http.get(href).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])(), 
        // map((data: any) => this.userAdapter.adapt(data.data)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((data) => {
            // this.user = data;
            this.userSubject.next(data);
            // TODO
        })).subscribe();
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], UserService);



/***/ }),

/***/ "./src/app/core/services/work-message.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/services/work-message.service.ts ***!
  \*******************************************************/
/*! exports provided: WorkMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkMessageService", function() { return WorkMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let WorkMessageService = class WorkMessageService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Accepts a work message.
     * @param id work message ID
     */
    accept(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workMessages}/${id}/accept`;
        return this.http.patch(href, null);
    }
    /**
     * Creates a work message.
     * @param data request body
     */
    create(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workMessages}`;
        return this.http.post(href, data);
    }
    /**
     * Deletes a work message.
     * @param id work message ID
     */
    delete(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workMessages}/${id}`;
        return this.http.delete(href);
    }
};
WorkMessageService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WorkMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WorkMessageService);



/***/ }),

/***/ "./src/app/core/services/work-offer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/work-offer.service.ts ***!
  \*****************************************************/
/*! exports provided: WorkOfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOfferService", function() { return WorkOfferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");




let WorkOfferService = class WorkOfferService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Cancels a work offer.
     * @param id work offer ID
     */
    cancel(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/${id}/cancel`;
        return this.http.patch(href, null);
    }
    /**
     * Creates a work offer.
     * @param data request body
     */
    create(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}`;
        return this.http.post(href, data);
    }
    /**
     * Deletes a work offer.
     * @param id work offer ID
     */
    delete(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/${id}`;
        return this.http.delete(href);
    }
    /**
     * Gets booked work offers (as client).
     */
    getBookedAsClient() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/client/booked`;
        return this.http.get(href);
    }
    /**
     * Gets booked work offers (as service provider).
     */
    getBookedAsServiceProvider() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/service-provider/booked`;
        return this.http.get(href);
    }
    /**
     * Gets the penalty dollar amount if a work offer is cancelled.
     * @param id work offer ID
     */
    getCancellationPenaltyAmount(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/${id}/cancel`;
        return this.http.get(href).pipe(
        // TODO
        );
    }
    /**
     * Gets the shifts for a given work offer.
     * @param id work offer ID
     */
    getShifts(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/${id}/shifts`;
        return this.http.get(href).pipe(
        // TODO
        );
    }
    /**
     * Get work offer history (as client).
     */
    getHistoryAsClient() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/client/history`;
        return this.http.get(href).pipe(
        // TODO
        );
    }
    /**
     * Gets work offer history (as service provider).
     */
    getHistoryAsServiceProvider() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/service-provider/history`;
        return this.http.get(href).pipe(
        // TODO
        );
    }
    /**
     * Gets a work offer.
     * @param id work offer ID
     */
    get(id) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/${id}`;
        return this.http.get(href);
    }
    /**
     * Gets work offers awaiting approval (as client).
     */
    getAwaitingApprovalAsClient() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/client/awaiting-approval`;
        return this.http.get(href);
    }
    /**
     * Gets work offer awaiting approval (as service provider).
     */
    getAwaitingApprovalAsServiceProvider() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/service-provider/awaiting-approval`;
        return this.http.get(href);
    }
    /**
     * Gets work offers that haven't been applied to yet by a service provider.
     */
    getAwaitingServiceProvider() {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/client/awaiting-service-provider`;
        return this.http.get(href).pipe(
        // TODO
        );
    }
    // TODO Change to GET request with URL params
    /**
     * Searches for work offers.
     * @param query request body
     */
    search(data) {
        const href = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api.workOffers}/search`;
        return this.http.post(href, data).pipe(
        // TODO
        );
    }
};
WorkOfferService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
WorkOfferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], WorkOfferService);



/***/ }),

/***/ "./src/app/modules/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm2015/ng-bootstrap-form-validation.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/modules/account/pages/account/account.component.ts");
/* harmony import */ var _pages_account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/account/dashboard/dashboard.component */ "./src/app/modules/account/pages/account/dashboard/dashboard.component.ts");
/* harmony import */ var _account_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account.routing */ "./src/app/modules/account/account.routing.ts");
/* harmony import */ var _pages_account_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/account/upgrade/upgrade.component */ "./src/app/modules/account/pages/account/upgrade/upgrade.component.ts");
/* harmony import */ var _pages_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/account/settings/settings.component */ "./src/app/modules/account/pages/account/settings/settings.component.ts");
/* harmony import */ var _pages_account_security_security_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/account/security/security.component */ "./src/app/modules/account/pages/account/security/security.component.ts");
/* harmony import */ var _pages_account_billing_billing_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/account/billing/billing.component */ "./src/app/modules/account/pages/account/billing/billing.component.ts");
/* harmony import */ var _pages_account_work_offers_work_offers_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/account/work-offers/work-offers.component */ "./src/app/modules/account/pages/account/work-offers/work-offers.component.ts");
/* harmony import */ var _pages_account_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/account/inbox/inbox.component */ "./src/app/modules/account/pages/account/inbox/inbox.component.ts");
/* harmony import */ var _pages_account_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/account/notifications/notifications.component */ "./src/app/modules/account/pages/account/notifications/notifications.component.ts");
/* harmony import */ var _pages_account_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/account/shifts/shifts.component */ "./src/app/modules/account/pages/account/shifts/shifts.component.ts");



















let AccountModule = class AccountModule {
};
AccountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
            _pages_account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
            _pages_account_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_11__["UpgradeComponent"],
            _pages_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"],
            _pages_account_security_security_component__WEBPACK_IMPORTED_MODULE_13__["SecurityComponent"],
            _pages_account_billing_billing_component__WEBPACK_IMPORTED_MODULE_14__["BillingComponent"],
            _pages_account_work_offers_work_offers_component__WEBPACK_IMPORTED_MODULE_15__["WorkOffersComponent"],
            _pages_account_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_16__["InboxComponent"],
            _pages_account_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsComponent"],
            _pages_account_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_18__["ShiftsComponent"],
        ],
        imports: [
            _account_routing__WEBPACK_IMPORTED_MODULE_10__["AccountRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__["GooglePlaceModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__["NgBootstrapFormValidationModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        exports: [],
        providers: [],
        entryComponents: []
    })
], AccountModule);



/***/ }),

/***/ "./src/app/modules/account/account.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/account/account.routing.ts ***!
  \****************************************************/
/*! exports provided: routes, AccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function() { return AccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/guards/client-auth.guard */ "./src/app/core/guards/client-auth.guard.ts");
/* harmony import */ var _pages_account_account_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/account/account.component */ "./src/app/modules/account/pages/account/account.component.ts");
/* harmony import */ var _pages_account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/account/dashboard/dashboard.component */ "./src/app/modules/account/pages/account/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/account/settings/settings.component */ "./src/app/modules/account/pages/account/settings/settings.component.ts");
/* harmony import */ var _pages_account_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/account/upgrade/upgrade.component */ "./src/app/modules/account/pages/account/upgrade/upgrade.component.ts");
/* harmony import */ var _pages_account_security_security_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/account/security/security.component */ "./src/app/modules/account/pages/account/security/security.component.ts");
/* harmony import */ var _pages_account_billing_billing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/account/billing/billing.component */ "./src/app/modules/account/pages/account/billing/billing.component.ts");
/* harmony import */ var _pages_account_work_offers_work_offers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/account/work-offers/work-offers.component */ "./src/app/modules/account/pages/account/work-offers/work-offers.component.ts");
/* harmony import */ var _pages_account_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/account/inbox/inbox.component */ "./src/app/modules/account/pages/account/inbox/inbox.component.ts");
/* harmony import */ var _pages_account_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/account/notifications/notifications.component */ "./src/app/modules/account/pages/account/notifications/notifications.component.ts");
/* harmony import */ var _pages_account_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/account/shifts/shifts.component */ "./src/app/modules/account/pages/account/shifts/shifts.component.ts");














const routes = [
    {
        path: 'account',
        component: _pages_account_account_component__WEBPACK_IMPORTED_MODULE_4__["AccountComponent"],
        canActivate: [_core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_3__["ClientAuthGuard"]],
        data: { headerTheme: 'dark' },
        children: [
            {
                path: 'billing',
                component: _pages_account_billing_billing_component__WEBPACK_IMPORTED_MODULE_9__["BillingComponent"],
            },
            {
                path: 'dashboard',
                component: _pages_account_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            },
            {
                path: 'inbox',
                component: _pages_account_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_11__["InboxComponent"],
            },
            {
                path: 'notifications',
                component: _pages_account_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_12__["NotificationsComponent"],
            },
            {
                path: 'security',
                component: _pages_account_security_security_component__WEBPACK_IMPORTED_MODULE_8__["SecurityComponent"],
            },
            {
                path: 'settings',
                component: _pages_account_settings_settings_component__WEBPACK_IMPORTED_MODULE_6__["SettingsComponent"],
            },
            {
                path: 'shifts',
                component: _pages_account_shifts_shifts_component__WEBPACK_IMPORTED_MODULE_13__["ShiftsComponent"],
            },
            {
                path: 'upgrade',
                component: _pages_account_upgrade_upgrade_component__WEBPACK_IMPORTED_MODULE_7__["UpgradeComponent"],
            },
            {
                path: 'work-offers',
                component: _pages_account_work_offers_work_offers_component__WEBPACK_IMPORTED_MODULE_10__["WorkOffersComponent"],
            },
        ],
    },
];
let AccountRoutingModule = class AccountRoutingModule {
};
AccountRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AccountRoutingModule);



/***/ }),

/***/ "./src/app/modules/account/pages/account/account.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/account/pages/account/account.component.ts ***!
  \********************************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");



let AccountComponent = class AccountComponent {
    constructor(userService) {
        this.userService = userService;
        this.user$ = null;
    }
    // private reset() {
    //   this.user$ = null;
    //
    //   this.workOffersBookedAsServiceProvider$ = null;
    //   this.workOffersBookedAsClient$ = null;
    // }
    ngOnInit() {
        this.user$ = this.userService.user$;
    }
    isServiceProvider() {
        return this.userService.isServiceProvider();
    }
};
AccountComponent.ctorParameters = () => [
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/account.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
], AccountComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/billing/billing.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/billing/billing.component.ts ***!
  \****************************************************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let BillingComponent = class BillingComponent {
    constructor(broadcastService, cd, userService) {
        this.broadcastService = broadcastService;
        this.cd = cd;
        this.userService = userService;
        this.stripe = Stripe('pk_test_zvdI4ud9WoMrWi404o4y0y1G');
        this.elements = this.stripe.elements();
        this.cardHandler = this.onChange.bind(this);
        this.isUpdated = false;
        this.cardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.card$ = this.cardSubject.asObservable();
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        this.userService.getCardSelf().subscribe((resp) => {
            this.cardSubject.next(resp.data.items);
        });
    }
    ngAfterViewInit() {
        this.card = this.elements.create('card');
        this.card.mount(this.cardInfo.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
    }
    ngOnDestroy() {
        this.card.removeEventListener('change', this.cardHandler);
        this.card.destroy();
    }
    onChange({ error }) {
        if (error) {
            this.error = error.message;
        }
        else {
            this.error = null;
        }
        this.cd.detectChanges();
    }
    onSubmit(form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.broadcastService.setWorking(true);
            const { token, err } = yield this.stripe.createToken(this.card);
            if (err) {
                this.broadcastService.setWorking(false);
                return;
            }
            let data = { token: token };
            this.userService.updateCreditCard(data).subscribe(resp => {
                this.broadcastService.setErrorMsg(null);
                this.broadcastService.setWorking(false);
                this.isUpdated = true;
                this.userService.reloadSelf();
                this.userService.getCardSelf().subscribe((resp) => {
                    this.cardSubject.next(resp.data);
                });
            });
        });
    }
    removeCard() {
        // TODO when removing card, ensure there's no work offers associated with it.
        // If there is, cancel them and warn user about cancellation policy.
        if (confirm('Are you sure you want to remove your card?')) {
            this.userService.deleteCard().subscribe(resp => {
                this.cardSubject.next(null);
            });
        }
    }
};
BillingComponent.ctorParameters = () => [
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardInfo', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], BillingComponent.prototype, "cardInfo", void 0);
BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billing',
        template: __webpack_require__(/*! raw-loader!./billing.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/billing/billing.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_2__["BroadcastService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], BillingComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/dashboard/dashboard.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/dashboard/dashboard.component.ts ***!
  \********************************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");




let DashboardComponent = class DashboardComponent {
    constructor(workOfferService, userService) {
        this.workOfferService = workOfferService;
        this.userService = userService;
        this.user$ = null;
    }
    ngOnInit() {
        this.user$ = this.userService.user$;
    }
    get isServiceProvider() {
        return this.userService.isServiceProvider();
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_2__["WorkOfferService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/dashboard/dashboard.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_2__["WorkOfferService"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/inbox/inbox.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/inbox/inbox.component.ts ***!
  \************************************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_thread_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/thread.service */ "./src/app/core/services/thread.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");






let InboxComponent = class InboxComponent {
    constructor(activatedRoute, router, threadService, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.threadService = threadService;
        this.userService = userService;
        this.threadsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.threads$ = this.threadsSubject.asObservable();
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.user$ = this.userSubject.asObservable();
        this.toId = null;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            let id = parseInt(params['to']);
            if (!isNaN(id)) {
                this.toId = id;
                this.userService.get(id).subscribe((resp) => {
                    console.log(resp.data);
                    this.userSubject.next(resp.data);
                });
            }
            else {
                this.threadService.getAll().subscribe((resp) => {
                    this.threadsSubject.next(resp.data.items);
                });
            }
        });
    }
};
InboxComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_thread_service__WEBPACK_IMPORTED_MODULE_4__["ThreadService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbox',
        template: __webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/inbox/inbox.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_thread_service__WEBPACK_IMPORTED_MODULE_4__["ThreadService"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], InboxComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/notifications/notifications.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/notifications/notifications.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/notification.service */ "./src/app/core/services/notification.service.ts");




let NotificationsComponent = class NotificationsComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.notificationsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.notifications$ = this.notificationsSubject.asObservable();
    }
    ngOnInit() {
        this.notificationService.getNotifications().subscribe((resp) => {
            console.log(resp.data.items);
            this.notificationsSubject.next(resp.data.items);
        });
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notifications',
        template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/notifications/notifications.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]])
], NotificationsComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/security/security.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/security/security.component.ts ***!
  \******************************************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/caregiver.service */ "./src/app/core/services/caregiver.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");








let SecurityComponent = class SecurityComponent {
    constructor(broadcastService, caregiverService, modalService, router, userService) {
        this.broadcastService = broadcastService;
        this.caregiverService = caregiverService;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.securityData = {
            currentPassword: null,
            newPassword: null,
        };
        this.showPasswordCurrent = false;
        this.showPasswordConfirm = false;
        this.isUpdated = false;
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'currentPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.securityData.currentPassword, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'newPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.securityData.newPassword, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
        });
    }
    togglePasswordCurrentVisibility() {
        this.showPasswordCurrent = !this.showPasswordCurrent;
    }
    togglePasswordConfirmVisibility() {
        this.showPasswordConfirm = !this.showPasswordConfirm;
    }
    onSubmit() {
        this.broadcastService.setWorking(true);
        let data = this.formGroup.value;
        this.userService.updateCredentials(data).subscribe(resp => {
            this.broadcastService.setErrorMsg(null);
            this.broadcastService.setWorking(false);
            this.isUpdated = true;
            this.userService.reloadSelf();
        });
    }
};
SecurityComponent.ctorParameters = () => [
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
    { type: _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__["CaregiverService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
SecurityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-security',
        template: __webpack_require__(/*! raw-loader!./security.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/security/security.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
        _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__["CaregiverService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], SecurityComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/settings/settings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/settings/settings.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/caregiver.service */ "./src/app/core/services/caregiver.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");








let SettingsComponent = class SettingsComponent {
    constructor(broadcastService, caregiverService, modalService, router, userService) {
        this.broadcastService = broadcastService;
        this.caregiverService = caregiverService;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.settingsData = {
            about: null,
            firstName: null,
            lastName: null,
            email: null,
            phoneNumber: null,
            address: null,
            addressLine2: null,
        };
        this.addressParts = {
            addressLine1: null,
            city: null,
            area: null,
            postalCode: null,
            country: null,
        };
        this.googlePlacesOptions = {
            types: [],
            componentRestrictions: { country: 'CA' },
        };
        this.isUpdated = false;
    }
    ngOnInit() {
        this.user$ = this.userService.user$;
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        this.user$.subscribe(data => {
            this.settingsData.about = data.about;
            this.settingsData.firstName = data.firstName;
            this.settingsData.lastName = data.lastName;
            this.settingsData.email = data.email;
            this.settingsData.phoneNumber = data.phone;
            this.settingsData.address = `${data.location.addressLine1}, ${data.location.city} ${data.location.area}`;
            this.settingsData.addressLine2 = data.location.addressLine2;
        });
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'about': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.about, []),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
            ]),
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.firstName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.lastName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'phoneNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.phoneNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.address, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'addressLine2': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.settingsData.addressLine2, [
            // Optional.
            ]),
        });
    }
    handleAddressChange(addr) {
        const addrComponents = addr.address_components;
        for (let comp of addrComponents) {
            switch (comp.types[0]) {
                case 'street_number':
                    this.addressParts.addressLine1 += comp.short_name;
                    break;
                case 'route':
                    this.addressParts.addressLine1 += ' ' + comp.short_name;
                    break;
                case 'locality':
                    this.addressParts.city = comp.short_name;
                    break;
                case 'administrative_area_level_1':
                    this.addressParts.area = comp.short_name;
                    break;
                case 'country':
                    this.addressParts.country = comp.short_name;
                    break;
                case 'postal_code':
                    this.addressParts.postalCode = comp.short_name;
                    break;
                default:
                    break;
            }
        }
        // this.addressParts.addressLine1 = `${addrComponents[0].long_name} ${addrComponents[1].long_name}`;
        // this.addressParts.city = addrComponents[2].long_name;
        // this.addressParts.area = addrComponents[4].short_name;
        // this.addressParts.country = addrComponents[5].short_name;
        // this.addressParts.postalCode = addrComponents[6].long_name;
    }
    onSubmit() {
        this.broadcastService.setWorking(true);
        let data = Object.assign({}, this.formGroup.value, this.addressParts);
        this.userService.update(data).subscribe(resp => {
            this.broadcastService.setErrorMsg(null);
            this.broadcastService.setWorking(false);
            this.isUpdated = true;
            this.userService.reloadSelf();
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
    { type: _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__["CaregiverService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/settings/settings.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
        _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__["CaregiverService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/shifts/shifts.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/shifts/shifts.component.ts ***!
  \**************************************************************************/
/*! exports provided: ShiftsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShiftsComponent", function() { return ShiftsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_shift_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/shift.service */ "./src/app/core/services/shift.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");






let ShiftsComponent = class ShiftsComponent {
    constructor(broadcastService, shiftService, userService) {
        this.broadcastService = broadcastService;
        this.shiftService = shiftService;
        this.userService = userService;
        this.shiftsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.shifts$ = this.shiftsSubject.asObservable();
        this.activeTab = 1;
        this.messageSuccess = '';
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.setTab(1);
    }
    setTab(num) {
        switch (num) {
            case 1:
                this.fetchUpcoming();
                this.activeTab = num;
                break;
            case 2:
                this.fetchAwaitingConfirmation();
                this.activeTab = num;
                break;
            case 3:
                this.fetchComplete();
                this.activeTab = num;
                break;
            default:
                break;
        }
    }
    clockIn(id, index) {
        this.broadcastService.setWorking(true);
        this.shiftService.clockIn(id).subscribe((resp) => {
            this.messageSuccess = 'Great! You’re clocked in. Don’t forget to clock out when you’re finished your shift.';
            this.broadcastService.setWorking(false);
            let shifts = this.shiftsSubject.getValue();
            shifts[index].isClockedIn = true;
            this.shiftsSubject.next(shifts);
        });
    }
    clockOut(id) {
    }
    fetchUpcoming() {
        this.shiftsSubject.next(null);
        this.userService.getShiftsUpcoming().subscribe((resp) => {
            this.shiftsSubject.next(resp.data.items);
        });
    }
    fetchAwaitingConfirmation() {
        this.shiftsSubject.next(null);
        this.userService.getShiftsAwaitingConfirmation().subscribe((resp) => {
            this.shiftsSubject.next(resp.data.items);
        });
    }
    fetchComplete() {
        this.shiftsSubject.next(null);
        this.userService.getShiftsComplete().subscribe((resp) => {
            this.shiftsSubject.next(resp.data.items);
        });
    }
};
ShiftsComponent.ctorParameters = () => [
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"] },
    { type: _core_services_shift_service__WEBPACK_IMPORTED_MODULE_4__["ShiftService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] }
];
ShiftsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shifts',
        template: __webpack_require__(/*! raw-loader!./shifts.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/shifts/shifts.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_3__["BroadcastService"],
        _core_services_shift_service__WEBPACK_IMPORTED_MODULE_4__["ShiftService"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
], ShiftsComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/upgrade/upgrade.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/upgrade/upgrade.component.ts ***!
  \****************************************************************************/
/*! exports provided: UpgradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradeComponent", function() { return UpgradeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/caregiver.service */ "./src/app/core/services/caregiver.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");








let UpgradeComponent = class UpgradeComponent {
    constructor(broadcastService, caregiverService, modalService, router, userService) {
        this.broadcastService = broadcastService;
        this.caregiverService = caregiverService;
        this.modalService = modalService;
        this.router = router;
        this.userService = userService;
        this.caregiverData = {
            requestedWage: null,
            travelRadius: null,
            specialty: null,
            officialOccupation: null,
            cancellationPolicy: 1,
            personalIdNumber: null,
            bankTransitNumber: null,
            bankInstitutionNumber: null,
            bankAccountNumber: null,
        };
    }
    ngOnInit() {
        if (this.userService.isServiceProvider()) {
            this.router.navigate(['/account/dashboard']);
        }
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'requestedWage': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.requestedWage, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'travelRadius': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.travelRadius, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'specialty': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.specialty, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'officialOccupation': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.officialOccupation, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'cancellationPolicy': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.cancellationPolicy),
            'personalIdNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.personalIdNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'bankTransitNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.bankTransitNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'bankInstitutionNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.bankInstitutionNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
            'bankAccountNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.caregiverData.bankAccountNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ]),
        });
    }
    openModal(modal) {
        this.modalService.open(modal, { centered: true });
    }
    get isServiceProvider() {
        return this.userService.isServiceProvider();
    }
    onSubmit() {
        this.broadcastService.setWorking(true);
        let data = this.formGroup.value;
        this.caregiverService.create(data).subscribe(resp => {
            this.broadcastService.setErrorMsg(null);
            this.userService.reloadSelf();
        });
    }
};
UpgradeComponent.ctorParameters = () => [
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
    { type: _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__["CaregiverService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] }
];
UpgradeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upgrade',
        template: __webpack_require__(/*! raw-loader!./upgrade.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/upgrade/upgrade.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
        _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_6__["CaregiverService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]])
], UpgradeComponent);



/***/ }),

/***/ "./src/app/modules/account/pages/account/work-offers/work-offers.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/account/pages/account/work-offers/work-offers.component.ts ***!
  \************************************************************************************/
/*! exports provided: WorkOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOffersComponent", function() { return WorkOffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/work-message.service */ "./src/app/core/services/work-message.service.ts");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");








let WorkOffersComponent = class WorkOffersComponent {
    constructor(activatedRoute, broadcastService, userService, workMessageService, workOfferService, router) {
        this.activatedRoute = activatedRoute;
        this.broadcastService = broadcastService;
        this.userService = userService;
        this.workMessageService = workMessageService;
        this.workOfferService = workOfferService;
        this.router = router;
        this.workOffersClientSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.workOffersClient$ = this.workOffersClientSubject.asObservable();
        this.workOffersServiceProviderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.workOffersServiceProvider$ = this.workOffersServiceProviderSubject.asObservable();
        this.showAsServiceProviderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.showAsServiceProvider$ = this.showAsServiceProviderSubject.asObservable();
        this.activeTab = 1;
        this.messageSuccess = '';
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.setTab(1);
    }
    setTab(num) {
        switch (num) {
            case 1:
                this.fetchAwaitingServiceProvider();
                this.activeTab = num;
                break;
            case 2:
                this.fetchAwaitingApproval();
                this.activeTab = num;
                break;
            default:
                break;
        }
    }
    onSortChange(value) {
        let workOffersClient = this.workOffersClientSubject.getValue();
        let workOffersServiceProvider = this.workOffersServiceProviderSubject.getValue();
        let workOffersClientSorted = this.sort(workOffersClient, value);
        this.workOffersClientSubject.next(workOffersClientSorted);
        let workOffersServiceProviderSorted = this.sort(workOffersServiceProvider, value);
        this.workOffersServiceProviderSubject.next(workOffersServiceProviderSorted);
    }
    get isServiceProvider() {
        return this.userService.isServiceProvider();
    }
    acceptWorkMessage(id, name, title) {
        this.broadcastService.setWorking(true);
        this.workMessageService.accept(id).subscribe((resp) => {
            this.broadcastService.setWorking(false);
            this.messageSuccess = `You have accepted ${name} for "${title}."`;
            this.fetchAwaitingApproval();
        });
    }
    fetchAwaitingServiceProvider() {
        this.workOffersClientSubject.next(null);
        this.showAsServiceProviderSubject.next(false);
        this.workOfferService.getAwaitingServiceProvider().subscribe((resp) => {
            this.workOffersClientSubject.next(resp.data.items);
        });
    }
    fetchAwaitingApproval() {
        this.workOffersClientSubject.next(null);
        this.workOffersServiceProviderSubject.next(null);
        this.showAsServiceProviderSubject.next(true);
        this.workOfferService.getAwaitingApprovalAsClient().subscribe((resp) => {
            this.workOffersClientSubject.next(resp.data.items);
        });
        if (this.isServiceProvider) {
            this.workOfferService.getAwaitingApprovalAsServiceProvider().subscribe((resp) => {
                this.workOffersServiceProviderSubject.next(resp.data.items);
            });
        }
    }
    sort(workOffers, value) {
        switch (value) {
            case 'date-added-oldest':
                workOffers.sort((a, b) => {
                    if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
                        return -1;
                    }
                    else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case 'date-added-newest':
                workOffers.sort((a, b) => {
                    if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
                        return 1;
                    }
                    else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case 'date-start-latest':
                workOffers.sort((a, b) => {
                    if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
                        return 1;
                    }
                    else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            case 'date-start-soonest':
                workOffers.sort((a, b) => {
                    if (Date.parse(a.startTimeLocal) < Date.parse(b.startTimeLocal)) {
                        return -1;
                    }
                    else if (Date.parse(a.startTimeLocal) > Date.parse(b.startTimeLocal)) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
                break;
            default:
                break;
        }
        return workOffers;
    }
};
WorkOffersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_6__["WorkMessageService"] },
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_7__["WorkOfferService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WorkOffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-offers',
        template: __webpack_require__(/*! raw-loader!./work-offers.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/account/pages/account/work-offers/work-offers.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_6__["WorkMessageService"],
        _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_7__["WorkOfferService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WorkOffersComponent);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm2015/ng-bootstrap-form-validation.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth.routing */ "./src/app/modules/auth/auth.routing.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/modules/auth/pages/register/register.component.ts");
/* harmony import */ var _pages_recover_recover_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/recover/recover.component */ "./src/app/modules/auth/pages/recover/recover.component.ts");







// import { CalendarModule, DateAdapter } from 'angular-calendar';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';






// import { SharedModule } from '@app/shared';
// import { ProjectItemComponent } from './pages/project-item/project-item.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _pages_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
            _pages_recover_recover_component__WEBPACK_IMPORTED_MODULE_12__["RecoverComponent"],
        ],
        imports: [
            _auth_routing__WEBPACK_IMPORTED_MODULE_10__["AuthRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_4__["FlatpickrModule"].forRoot(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__["NgBootstrapFormValidationModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        ],
        exports: [],
        providers: [],
        entryComponents: []
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.routing.ts ***!
  \**********************************************/
/*! exports provided: routes, AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/modules/auth/pages/register/register.component.ts");
/* harmony import */ var _pages_recover_recover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/recover/recover.component */ "./src/app/modules/auth/pages/recover/recover.component.ts");



// import { ProjectResolver } from './project-resolver.service';


// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';

const routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { headerTheme: 'dark' },
    },
    {
        path: 'login/verify',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: { headerTheme: 'dark', verify: true },
    },
    {
        path: 'register',
        component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
        data: { headerTheme: 'dark' },
    },
    {
        path: 'recover',
        component: _pages_recover_recover_component__WEBPACK_IMPORTED_MODULE_5__["RecoverComponent"],
        data: { headerTheme: 'dark' },
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");





let LoginComponent = class LoginComponent {
    constructor(authService, activatedRoute, broadcastService, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.broadcastService = broadcastService;
        this.router = router;
        this.loginData = {
            email: '',
            password: '',
            remember: true,
        };
        this.verification = {
            email: '',
            token: '',
        };
        this.isVerified = false;
        this.activatedRoute.data.subscribe(data => {
            if (data.verify && data.verify === true) {
                this.activatedRoute.queryParams.subscribe(params => {
                    this.verification.email = params.email;
                    this.verification.token = params.token;
                    this.authService.verify(this.verification).subscribe(() => {
                        this.verificationMessage = 'Your account has been verified. You can now login.';
                        this.isVerified = true;
                    });
                });
            }
            else {
                this.isVerified = true;
            }
        });
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }
    onSubmit() {
        if (!this.loginData.email || !this.loginData.password) {
            return;
        }
        this.broadcastService.setWorking(true);
        this.authService.login(this.loginData).subscribe((resp) => {
            this.router.navigate(['/account/dashboard']);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/login/login.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/auth/pages/recover/recover.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/auth/pages/recover/recover.component.ts ***!
  \*****************************************************************/
/*! exports provided: RecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecoverComponent", function() { return RecoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");






let RecoverComponent = class RecoverComponent {
    constructor(authService, broadcastService, router) {
        this.authService = authService;
        this.broadcastService = broadcastService;
        this.router = router;
        this.recoverData = {
            email: null,
            token: null,
            password: null,
        };
        this.showPassword = false;
        this.recoverStep = 1;
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        this.formGroup1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
        });
        this.formGroup2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'token': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.formGroup3 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
            ]),
        });
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    onSubmit(step) {
        if (step === 1) {
            this.broadcastService.setWorking(true);
            let data = this.formGroup1.value;
            this.authService.recover(data).subscribe((resp) => {
                this.broadcastService.setWorking(false);
                ++this.recoverStep;
            });
        }
        else if (step === 2) {
            ++this.recoverStep;
        }
        else if (step === 3) {
            this.broadcastService.setWorking(true);
            let data = Object.assign({}, this.formGroup1.value, this.formGroup2.value, this.formGroup3.value);
            this.authService.recover(data).subscribe((resp) => {
                this.broadcastService.setWorking(false);
                ++this.recoverStep;
            });
        }
    }
};
RecoverComponent.ctorParameters = () => [
    { type: _app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recover',
        template: __webpack_require__(/*! raw-loader!./recover.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/recover/recover.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _app_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RecoverComponent);



/***/ }),

/***/ "./src/app/modules/auth/pages/register/register.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/auth/pages/register/register.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");







let RegisterComponent = class RegisterComponent {
    constructor(authService, broadcastService, userService, router) {
        this.authService = authService;
        this.broadcastService = broadcastService;
        this.userService = userService;
        this.router = router;
        this.registrationData = {
            email: null,
            password: null,
            firstName: null,
            lastName: null,
            birthDate: null,
            phoneNumber: null,
            address: null,
            addressLine2: null,
        };
        this.addressParts = {
            addressLine1: null,
            city: null,
            area: null,
            postalCode: null,
            country: 'CA',
        };
        this.showPassword = false;
        this.googlePlacesOptions = {
            types: [],
            componentRestrictions: { country: 'CA' },
        };
        this.registrationStep = 1;
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        if (this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        this.formGroup1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
            ]),
        });
        this.formGroup2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.firstName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.lastName, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'birthDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.birthDate, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'phoneNumber': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.phoneNumber, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.address, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'addressLine2': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.registrationData.addressLine2, [
            // Optional.
            ]),
            'terms': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'privacy': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
    }
    onBack() {
        --this.registrationStep;
    }
    handleAddressChange(addr) {
        const addrComponents = addr.address_components;
        this.addressParts.addressLine1 = `${addrComponents[0].long_name} ${addrComponents[1].long_name}`;
        this.addressParts.city = addrComponents[2].long_name;
        this.addressParts.area = addrComponents[4].short_name;
        this.addressParts.country = addrComponents[5].short_name;
        this.addressParts.postalCode = addrComponents[6].long_name;
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    onSubmit(step) {
        if (step === 1) {
            ++this.registrationStep;
        }
        else if (step === 2) {
            this.broadcastService.setWorking(true);
            let data = Object.assign({}, this.formGroup1.value, this.formGroup2.value, this.addressParts);
            this.userService.create(data).subscribe((resp) => {
                this.broadcastService.setWorking(false);
                ++this.registrationStep;
            });
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/auth/pages/register/register.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/modules/home/pages/home/home.component.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.routing */ "./src/app/modules/home/home.routing.ts");





// import { SharedModule } from '@app/shared';
// import { ProjectItemComponent } from './pages/project-item/project-item.component';
// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _home_routing__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]
        ],
        exports: [],
        providers: [],
        entryComponents: []
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/home.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/home/home.routing.ts ***!
  \**********************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/modules/home/pages/home/home.component.ts");



// import { ProjectResolver } from './project-resolver.service';

// import { ProjectDetailsComponent } from './pages/project-details/project-details.component';
const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        data: { headerTheme: 'dark' },
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/pages/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/home/pages/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/pages/home/home.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/profile/pages/profile/profile.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/profile/pages/profile/profile.component.ts ***!
  \********************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");





let ProfileComponent = class ProfileComponent {
    constructor(activatedRoute, userService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.user$ = this.userSubject.asObservable();
    }
    ngOnInit() {
        let id = this.activatedRoute.snapshot.params.id;
        if (!parseInt(id)) {
            this.router.navigate(['/']);
        }
        this.userService.get(id).subscribe((resp) => {
            this.userSubject.next(resp.data);
        });
    }
    message() {
        this.router.navigate(['/account/inbox'], { queryParams: { to: this.userSubject.getValue().id } });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/profile/pages/profile/profile.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/profile/profile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/profile/profile.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm2015/ng-bootstrap-form-validation.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/modules/profile/pages/profile/profile.component.ts");
/* harmony import */ var _profile_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile.routing */ "./src/app/modules/profile/profile.routing.ts");










let ProfileModule = class ProfileModule {
};
ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"],
        ],
        imports: [
            _profile_routing__WEBPACK_IMPORTED_MODULE_9__["ProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_4__["GooglePlaceModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_6__["NgBootstrapFormValidationModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_5__["NgxMaskModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ],
        exports: [],
        providers: [],
        entryComponents: []
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/modules/profile/profile.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/profile/profile.routing.ts ***!
  \****************************************************/
/*! exports provided: routes, ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/modules/profile/pages/profile/profile.component.ts");




const routes = [
    {
        path: 'profile/:id',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
        data: { headerTheme: 'dark' },
    },
];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/modules/search/pages/search/search.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/search/pages/search/search.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/geolocation.service */ "./src/app/core/services/geolocation.service.ts");
/* harmony import */ var _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/caregiver.service */ "./src/app/core/services/caregiver.service.ts");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");







let SearchComponent = class SearchComponent {
    constructor(activatedRoute, caregiverService, geoLocationService, router, workOfferService) {
        this.activatedRoute = activatedRoute;
        this.caregiverService = caregiverService;
        this.geoLocationService = geoLocationService;
        this.router = router;
        this.workOfferService = workOfferService;
        this.types = ['service-provider', 'work-offer'];
        this.workOffersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.workOffers$ = this.workOffersSubject.asObservable();
        this.serviceProvidersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.serviceProviders$ = this.serviceProvidersSubject.asObservable();
        this.position$ = null;
        this.type = null;
    }
    ngOnInit() {
        this.position$ = this.geoLocationService.position$;
        this.activatedRoute.params.subscribe(params => {
            let type = params['type'];
            if (!this.types.includes(type)) {
                this.router.navigate(['/']);
                return;
            }
            // this.initMap();
            this.type = type;
            this.geoLocationService.setCurrentPosition();
            this.geoLocationService.position$.subscribe((data) => {
                if (!data) {
                    return;
                }
                let body = {
                    lat: data.coords.latitude,
                    lng: data.coords.longitude,
                    radius: 50,
                };
                if (type === 'work-offer') {
                    this.workOfferService.search(body).subscribe((resp) => {
                        this.workOffersSubject.next(resp.data.items);
                    });
                }
                else {
                    this.caregiverService.search(body).subscribe((resp) => {
                        console.log(resp);
                        this.serviceProvidersSubject.next(resp.data.items);
                    });
                }
            });
        });
    }
};
SearchComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_5__["CaregiverService"] },
    { type: _core_services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeoLocationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_6__["WorkOfferService"] }
];
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/search/pages/search/search.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_caregiver_service__WEBPACK_IMPORTED_MODULE_5__["CaregiverService"],
        _core_services_geolocation_service__WEBPACK_IMPORTED_MODULE_4__["GeoLocationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_6__["WorkOfferService"]])
], SearchComponent);



/***/ }),

/***/ "./src/app/modules/search/search.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/search/search.module.ts ***!
  \*************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/modules/search/pages/search/search.component.ts");
/* harmony import */ var _search_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search.routing */ "./src/app/modules/search/search.routing.ts");







let SearchModule = class SearchModule {
};
SearchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
        ],
        imports: [
            _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _search_routing__WEBPACK_IMPORTED_MODULE_6__["SearchRoutingModule"],
        ],
        exports: [],
        providers: [],
        entryComponents: []
    })
], SearchModule);



/***/ }),

/***/ "./src/app/modules/search/search.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/search/search.routing.ts ***!
  \**************************************************/
/*! exports provided: routes, SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/modules/search/pages/search/search.component.ts");



// import { ProjectResolver } from './project-resolver.service';

const routes = [
    {
        path: 'search/:type',
        component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"],
        data: { headerTheme: 'dark' },
    },
];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SearchRoutingModule);



/***/ }),

/***/ "./src/app/modules/work-offer/pages/new/new.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/work-offer/pages/new/new.component.ts ***!
  \***************************************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_care_type_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/care-type.service */ "./src/app/core/services/care-type.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");









let NewComponent = class NewComponent {
    constructor(broadcastService, careTypeService, router, userService, workOfferService) {
        this.broadcastService = broadcastService;
        this.careTypeService = careTypeService;
        this.router = router;
        this.userService = userService;
        this.workOfferService = workOfferService;
        this.careTypesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.careTypes$ = this.careTypesSubject.asObservable();
        this.hasCreditCard = null;
        this.googlePlacesOptions = {
            types: [],
            componentRestrictions: { country: 'CA' },
        };
        this.workOfferData = {
            title: null,
            description: null,
            careType: 'Child care',
            responsibilities: null,
            wardDetails: null,
            rules: null,
            meetingLocation: null,
            startTimeLocal: null,
            endTimeLocal: null,
            wage: null,
            address: null,
            isContinuous: 1,
        };
    }
    ngOnInit() {
        this.working$ = this.broadcastService.working$;
        this.msgError$ = this.broadcastService.msgError$;
        this.userService.getCardSelf().subscribe((resp) => {
            if (resp.data.items.length) {
                this.hasCreditCard = true;
                this.careTypeService.getAll().subscribe((resp) => {
                    this.careTypesSubject.next(resp.data.items);
                });
            }
            else {
                this.hasCreditCard = false;
            }
        });
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.title, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'description': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.description, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'careType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.careType, []),
            'responsibilities': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.responsibilities, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'wardDetails': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.wardDetails, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'rules': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.rules, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'meetingLocation': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.meetingLocation, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.address, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'startTimeLocal': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.startTimeLocal, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'endTimeLocal': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.endTimeLocal, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'wage': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.wage, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            'isContinuous': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.workOfferData.isContinuous, []),
        });
    }
    handleMeetingLocationChange(addr) {
        this.formGroup.get('meetingLocation').setValue(addr.formatted_address);
    }
    handleAddressChange(addr) {
        this.formGroup.get('address').setValue(addr.formatted_address);
    }
    onSubmit() {
        this.broadcastService.setWorking(true);
        let data = this.formGroup.value;
        this.workOfferService.create(data).subscribe((resp) => {
            this.router.navigate([`/work-offer/${resp.data.id}`]);
            this.broadcastService.setWorking(false);
        });
    }
};
NewComponent.ctorParameters = () => [
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"] },
    { type: _core_services_care_type_service__WEBPACK_IMPORTED_MODULE_6__["CareTypeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"] },
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_8__["WorkOfferService"] }
];
NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new',
        template: __webpack_require__(/*! raw-loader!./new.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/work-offer/pages/new/new.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_5__["BroadcastService"],
        _core_services_care_type_service__WEBPACK_IMPORTED_MODULE_6__["CareTypeService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_8__["WorkOfferService"]])
], NewComponent);



/***/ }),

/***/ "./src/app/modules/work-offer/pages/view/view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/work-offer/pages/view/view.component.ts ***!
  \*****************************************************************/
/*! exports provided: WorkOfferViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOfferViewComponent", function() { return WorkOfferViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/broadcast.service */ "./src/app/core/services/broadcast.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/services/work-message.service */ "./src/app/core/services/work-message.service.ts");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");








let WorkOfferViewComponent = class WorkOfferViewComponent {
    constructor(activatedRoute, broadcastService, userService, workMessageService, workOfferService, router) {
        this.activatedRoute = activatedRoute;
        this.broadcastService = broadcastService;
        this.userService = userService;
        this.workMessageService = workMessageService;
        this.workOfferService = workOfferService;
        this.router = router;
        this.workOfferSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.workOffer$ = this.workOfferSubject.asObservable();
        this.userOfferingSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userOffering$ = this.userOfferingSubject.asObservable();
        this.didApplySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.didApply$ = this.didApplySubject.asObservable();
    }
    ngOnInit() {
        this.user$ = this.userService.user$;
        this.working$ = this.broadcastService.working$;
        let id = this.activatedRoute.snapshot.params.id;
        // TODO Redirect home if work offer is already accepted.
        if (!parseInt(id)) {
            this.router.navigate(['/']);
        }
        this.workOfferService.get(id).subscribe((resp) => {
            this.workOfferSubject.next(resp.data);
            let idUserOffering = resp.data.idUserOffering;
            this.userService.get(idUserOffering).subscribe((resp) => {
                this.userOfferingSubject.next(resp.data);
            });
        });
        this.workOfferService.getAwaitingApprovalAsServiceProvider().subscribe((resp) => {
            let items = resp.data.items;
            // TODO Create API endpoint to check if user applied to work offer to avoid long loops.
            for (let item of items) {
                if (item.id === parseInt(id)) {
                    this.didApplySubject.next(true);
                    return;
                }
            }
        });
        this.initMap();
    }
    apply() {
        this.broadcastService.setWorking(true);
        let id = this.activatedRoute.snapshot.params.id;
        let data = { idWorkOffer: id };
        this.workMessageService.create(data).subscribe((resp) => {
            this.didApplySubject.next(true);
            this.broadcastService.setWorking(false);
        });
    }
    initMap() {
        this.mapStyles = [
            {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "administrative.land_parcel",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "administrative.locality",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "simplified"
                    }
                ]
            },
            {
                featureType: "administrative.neighborhood",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "landscape",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "simplified"
                    }
                ]
            },
            {
                featureType: "landscape.natural.terrain",
                elementType: "geometry.fill",
                stylers: [
                    {
                        visibility: "simplified"
                    }
                ]
            },
            {
                featureType: "poi",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "poi",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road",
                elementType: "labels.icon",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.arterial",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#f5b333"
                    },
                    {
                        visibility: "simplified"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.highway",
                elementType: "labels.text",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.local",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "road.local",
                elementType: "labels",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "transit",
                stylers: [
                    {
                        visibility: "off"
                    }
                ]
            },
            {
                featureType: "water",
                elementType: "geometry.fill",
                stylers: [
                    {
                        color: "#7dd9d0"
                    }
                ]
            },
        ];
    }
};
WorkOfferViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_6__["WorkMessageService"] },
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_7__["WorkOfferService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WorkOfferViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-offer-view',
        template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/work-offer/pages/view/view.component.html"),
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _core_services_broadcast_service__WEBPACK_IMPORTED_MODULE_4__["BroadcastService"],
        _core_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
        _core_services_work_message_service__WEBPACK_IMPORTED_MODULE_6__["WorkMessageService"],
        _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_7__["WorkOfferService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WorkOfferViewComponent);



/***/ }),

/***/ "./src/app/modules/work-offer/work-offer.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/work-offer/work-offer.module.ts ***!
  \*********************************************************/
/*! exports provided: WorkOfferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOfferModule", function() { return WorkOfferModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-bootstrap-form-validation */ "./node_modules/ng-bootstrap-form-validation/fesm2015/ng-bootstrap-form-validation.js");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mask */ "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _work_offer_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work-offer.routing */ "./src/app/modules/work-offer/work-offer.routing.ts");
/* harmony import */ var _pages_view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/view/view.component */ "./src/app/modules/work-offer/pages/view/view.component.ts");
/* harmony import */ var _pages_new_new_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/new/new.component */ "./src/app/modules/work-offer/pages/new/new.component.ts");










// import { SearchComponent } from './pages/search/search.component';



let WorkOfferModule = class WorkOfferModule {
};
WorkOfferModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            // SearchComponent,
            _pages_view_view_component__WEBPACK_IMPORTED_MODULE_11__["WorkOfferViewComponent"],
            _pages_new_new_component__WEBPACK_IMPORTED_MODULE_12__["NewComponent"],
        ],
        imports: [
            _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_5__["FlatpickrModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_8__["NgxMaskModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_7__["NgBootstrapFormValidationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _work_offer_routing__WEBPACK_IMPORTED_MODULE_10__["WorkOfferRoutingModule"],
        ],
        exports: [],
        providers: [],
        entryComponents: []
    })
], WorkOfferModule);



/***/ }),

/***/ "./src/app/modules/work-offer/work-offer.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/work-offer/work-offer.routing.ts ***!
  \**********************************************************/
/*! exports provided: routes, WorkOfferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkOfferRoutingModule", function() { return WorkOfferRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/view/view.component */ "./src/app/modules/work-offer/pages/view/view.component.ts");
/* harmony import */ var _app_core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/guards/client-auth.guard */ "./src/app/core/guards/client-auth.guard.ts");
/* harmony import */ var _pages_new_new_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/new/new.component */ "./src/app/modules/work-offer/pages/new/new.component.ts");






const routes = [
    {
        path: 'work-offer/new',
        component: _pages_new_new_component__WEBPACK_IMPORTED_MODULE_5__["NewComponent"],
        canActivate: [_app_core_guards_client_auth_guard__WEBPACK_IMPORTED_MODULE_4__["ClientAuthGuard"]],
        data: { headerTheme: 'dark' },
    },
    {
        path: 'work-offer/:id',
        component: _pages_view_view_component__WEBPACK_IMPORTED_MODULE_3__["WorkOfferViewComponent"],
        data: { headerTheme: 'dark' },
    }
];
let WorkOfferRoutingModule = class WorkOfferRoutingModule {
};
WorkOfferRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WorkOfferRoutingModule);



/***/ }),

/***/ "./src/app/shared/components/calendar/calendar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/calendar/calendar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/calendar/calendar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/calendar/calendar.component.ts ***!
  \******************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/services/work-offer.service */ "./src/app/core/services/work-offer.service.ts");
/* harmony import */ var _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let CalendarComponent = class CalendarComponent {
    constructor(workOfferService, userService) {
        this.workOfferService = workOfferService;
        this.userService = userService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_2__["CalendarView"];
        this.viewDate = new Date();
        this.colors = {
            red: {
                primary: '#ad2121',
                secondary: '#FAE3E3'
            },
            blue: {
                primary: '#1e90ff',
                secondary: '#D1E8FF'
            },
            yellow: {
                primary: '#e3bc08',
                secondary: '#FDF1BA'
            }
        };
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.events$ = this.eventsSubject.asObservable();
        this.activeDayIsOpen = true;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        // let calendarApi = this.calendar.getApi();
        // calendarApi.removeAllEvents();
        // if (this.userService.isServiceProvider()) {
        //   this.initBookedOffersAsServiceProvider(calendarApi);
        // }
        // this.initBookedOffersAsClient(calendarApi);
        this.initBookedOffersAsClient();
        // this.workOfferService.getBookedAsServiceProvider().subscribe((resp: any) => {
        //   console.log('as service provider');
        //   console.log(resp);
        // });
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
    // private initBookedOffersAsServiceProvider(calendarApi) {
    //   let events: CalendarEvent[] = [];
    //   this.workOfferService.getBookedAsServiceProvider().subscribe(data => {
    //     if (data === null) return;
    //     for (let workOffer of data) {
    //       events.push({
    //         id: workOffer.id,
    //         allDay: true,
    //         start: workOffer.startTimeUTC, // Automatically converst to user's local time
    //         end: workOffer.endTimeUTC, // Automatically converst to user's local time
    //         title: workOffer.title,
    //         color: { primary: '#61cbbe', secondary: '#ff0000' },
    //       });
    //     }
    //     calendarApi.addEventSource(events);
    //   });
    // }
    initBookedOffersAsClient() {
        let events = [];
        this.workOfferService.getBookedAsClient().subscribe((resp) => {
            if (resp === null) {
                return;
            }
            for (let workOffer of resp.data.items) {
                events.push({
                    id: workOffer.id,
                    allDay: true,
                    start: new Date(workOffer.startTimeUTC),
                    end: new Date(workOffer.endTimeUTC),
                    title: workOffer.title,
                    color: { primary: '#000', secondary: '#555' },
                });
            }
            let eventsValue = this.eventsSubject.getValue();
            eventsValue.push(...events);
            this.eventsSubject.next(eventsValue);
            console.log(eventsValue);
            // this.events.push(...events);
            // console.log(this.events);
        });
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_3__["WorkOfferService"] },
    { type: _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: __webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/calendar/calendar.component.html"),
        styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/shared/components/calendar/calendar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_work_offer_service__WEBPACK_IMPORTED_MODULE_3__["WorkOfferService"], _core_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
], CalendarComponent);



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");



let ModalComponent = class ModalComponent {
    constructor(ngxSmartModalService) {
        this.ngxSmartModalService = ngxSmartModalService;
    }
    ngOnInit() { }
    open() {
        this.ngxSmartModalService.getModal(this.modalIdentifier).open();
    }
    close() {
        this.ngxSmartModalService.getModal(this.modalIdentifier).close();
    }
};
ModalComponent.ctorParameters = () => [
    { type: ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "modalIdentifier", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "modalTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ModalComponent.prototype, "modalHeaderBg", void 0);
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/modal/modal.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/components/modal/modal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_smart_modal__WEBPACK_IMPORTED_MODULE_2__["NgxSmartModalService"]])
], ModalComponent);



/***/ }),

/***/ "./src/app/shared/directives/select-placeholder/select-placeholder.directive.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/directives/select-placeholder/select-placeholder.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: SelectPlaceholderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPlaceholderDirective", function() { return SelectPlaceholderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let SelectPlaceholderDirective = class SelectPlaceholderDirective {
    constructor(el, renderer, document) {
        this.el = el;
        this.renderer = renderer;
        this.document = document;
    }
    ngOnInit() {
        const option = document.createElement('option');
        option.innerHTML = this.appSelectPlaceholder;
        option.value = null;
        option.disabled = true;
        this.renderer.addClass(this.el.nativeElement, 'select-placeholder');
        this.renderer.insertBefore(this.el.nativeElement, option, this.el.nativeElement.firstChild);
    }
    onChange() {
        this.renderer.removeClass(this.el.nativeElement, 'select-placeholder');
    }
};
SelectPlaceholderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SelectPlaceholderDirective.prototype, "appSelectPlaceholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('change'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], SelectPlaceholderDirective.prototype, "onChange", null);
SelectPlaceholderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appSelectPlaceholder]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], Object])
], SelectPlaceholderDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-modal */ "./node_modules/ngx-smart-modal/esm2015/ngx-smart-modal.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/calendar/calendar.component */ "./src/app/shared/components/calendar/calendar.component.ts");
/* harmony import */ var _shared_directives_select_placeholder_select_placeholder_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/directives/select-placeholder/select-placeholder.directive */ "./src/app/shared/directives/select-placeholder/select-placeholder.directive.ts");




// import { FullCalendarModule } from '@fullcalendar/angular';
// import { DpDatePickerModule } from 'ng2-date-picker';




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            // DpDatePickerModule,
            // FullCalendarModule,
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_3__["NgxSmartModalModule"],
        ],
        declarations: [
            _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],
            _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
            _shared_directives_select_placeholder_select_placeholder_directive__WEBPACK_IMPORTED_MODULE_7__["SelectPlaceholderDirective"],
        ],
        entryComponents: [],
        exports: [
            _shared_components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"],
            // DpDatePickerModule,
            // FullCalendarModule,
            _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"],
            _shared_directives_select_placeholder_select_placeholder_directive__WEBPACK_IMPORTED_MODULE_7__["SelectPlaceholderDirective"],
        ],
    })
], SharedModule);



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
const apiUrl = 'http://localhost:3000';
const environment = {
    production: false,
    host: 'http://localhost:3001',
    api: {
        auth: '/auth',
        caregivers: '/caregivers',
        careType: '/care-types',
        notifications: '/notifications',
        shifts: '/shifts',
        threads: '/threads',
        users: '/users',
        workMessages: '/work-messages',
        workOffers: '/work-offers',
    },
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/home/WebstormProjects/our_caremada_website/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map