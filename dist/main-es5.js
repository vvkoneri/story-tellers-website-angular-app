function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-bar></app-top-bar>\r\n\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-event-booking/photo-event-booking-form.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-event-booking/photo-event-booking-form.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoEventBookingPhotoEventBookingFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form [formGroup]=\"bookingForm\" (ngSubmit)=\"onSubmit(bookingForm.value)\" class=\"\">\n    <div>\n        <label for=\"name\">\n          Name\n        </label>\n        <input id=\"name\" type=\"text\" formControlName=\"Name\" ngModel required>\n      </div>\n    \n      <div>\n        <label for=\"place\">\n          Place\n        </label>\n        <input id=\"place\" type=\"text\" formControlName=\"Place\">\n        \n      </div>\n\n      <div>\n        <label for=\"event_date\">\n          Event Date\n        </label>\n        <input id=\"event_date\" type=\"date\" formControlName=\"Event Date\">\n\n      </div>\n\n      <div>\n        <label for=\"contact\">\n          Contact Number\n        </label>\n        <input id=\"contact\" type=\"text\" formControlName=\"Contact Number\" required>\n      </div>\n\n      <div>\n        <label for=\"type\">\n          Event Type\n        </label>\n        <input id=\"type\" type=\"text\" formControlName=\"Event Type\">\n      </div>\n    \n    <button [disabled]=\"bookingForm.form.invalid\" class=\"button\" type=\"submit\">Book</button>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-event-booking/photo-event-booking.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-event-booking/photo-event-booking.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoEventBookingPhotoEventBookingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button (click)=\"activate()\">\n    Book an event\n</button>\n<app-booking *ngIf=\"activateForm\" [skill]=\"skill\" (notify)=\"deactivate()\">\n</app-booking>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoGalleryPhotoGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"gallery\">\n<div class=\"row\">\n    <h2>a picture can speak a thousand words and countless emotions</h2>\n</div>\n\n<div class=\"row\">\n<div *ngFor=\"let photo of photos\" class=\"vertical\" >\n    <div *ngFor=\"let pl of photo.photoLink\" class=\"vertical\">\n        <div class=\"col span-1-of-4\">\n            <meta [content]=\"photo.meta\" />\n            <figure>\n                <img class=\"image-column\" [src]=\"pl.link\">\n            </figure>\n        </div>\n</div>\n</div>\n</div>\n\n<a [routerLink]=\"['/home']\">Go Back</a>\n\n</section>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-skills-discount/photo-skills-discount.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-skills-discount/photo-skills-discount.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoSkillsDiscountPhotoSkillsDiscountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h5 *ngIf=\"skill.discount != 0; else elseBlock\">Avail Discount upto {{skill.discount}}%</h5>\n<ng-template #elseBlock><h5>No discounts running at the moment</h5></ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-skills-list/photo-skills.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-skills-list/photo-skills.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoSkillsListPhotoSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"features\">\r\n<div class=\"row\">\r\n    <h2>Let us be a part of your beautiful journey</h2>\r\n</div>\r\n\r\n<div class=\"row\">\r\n<div *ngFor=\"let skill of skills; trackBy: trackBySkillId\">\r\n<div class=\"col span-1-of-4 feature-box\" [ngStyle]=\"{ 'opacity' : highlight(skill.name) }\">\r\n    \r\n                <h3>\r\n                    {{skill.name}}\r\n                </h3>\r\n                <p>\r\n                    {{skill.description}}\r\n                </p>\r\n                <a [routerLink]=\"['/gallery']\">View Gallery</a>\r\n    </div>\r\n</div>\r\n</div>\r\n</section>\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-work/photo-work.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-work/photo-work.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotoWorkPhotoWorkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div *ngIf=\"skill\">\n  <h3>{{ skill.name }}</h3>\n  <p>{{ skill.description}}</p>\n  <h4>We have covered upto {{skill.eventsCovered}} events</h4>\n\n  <div>\n    <button (click)=\"getQuote(skill.name)\" class=\"button-pw\">\n        Get a Quote\n    </button>\n    <app-event-book [skill]=\"skill\" (notify)=\"onNotify()\" style=\"margin-right: 25px;\">\n    </app-event-book>\n  </div>\n\n  <h5 *ngIf=\"quotePrice\"> Best price : {{ quotePrice | currency: 'INR' }}  </h5>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopBarTopBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<a [routerLink]=\"['/home']\">\r\n  <div class=\"header\" [ngStyle]=\"{ 'backgroundImage' : getBackGroundImage() }\" >\r\n    <div class=\"row\">\r\n      <h2 class=\"logo\">Story Tellers</h2>\r\n    </div>\r\n    <div class=\"row\">\r\n        <h1 class=\"story-teller-title\">Celebrating Life!</h1>\r\n    </div>\r\n  </div>\r\n</a>\r\n\r\n<!-- \r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->";
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "p {\r\n  font-family: Lato;\r\n}\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7Q0FJQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgZm9udC1mYW1pbHk6IExhdG87XHJcbn1cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _photo_skills_list_photo_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./photo-skills-list/photo-skills.component */
    "./src/app/photo-skills-list/photo-skills.component.ts");
    /* harmony import */


    var _photo_skills_discount_photo_skills_discount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./photo-skills-discount/photo-skills-discount.component */
    "./src/app/photo-skills-discount/photo-skills-discount.component.ts");
    /* harmony import */


    var _photo_event_booking_photo_event_booking_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./photo-event-booking/photo-event-booking.component */
    "./src/app/photo-event-booking/photo-event-booking.component.ts");
    /* harmony import */


    var _photo_work_photo_work_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./photo-work/photo-work.component */
    "./src/app/photo-work/photo-work.component.ts");
    /* harmony import */


    var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./photo-gallery/photo-gallery.component */
    "./src/app/photo-gallery/photo-gallery.component.ts");
    /* harmony import */


    var _photo_event_booking_photo_event_booking_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./photo-event-booking/photo-event-booking-form.component */
    "./src/app/photo-event-booking/photo-event-booking-form.component.ts");
    /* harmony import */


    var _directives_search_query_content_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./directives/search-query-content.directive */
    "./src/app/directives/search-query-content.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{
        path: 'home',
        component: _photo_skills_list_photo_skills_component__WEBPACK_IMPORTED_MODULE_9__["PhotoSkillsComponent"]
      }, {
        path: 'gallery',
        component: _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_13__["PhotoGalleryComponent"]
      }])],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_8__["TopBarComponent"], _photo_skills_list_photo_skills_component__WEBPACK_IMPORTED_MODULE_9__["PhotoSkillsComponent"], _photo_skills_discount_photo_skills_discount_component__WEBPACK_IMPORTED_MODULE_10__["PhotoSkillsDiscount"], _photo_event_booking_photo_event_booking_component__WEBPACK_IMPORTED_MODULE_11__["PhotoEventBooking"], _photo_work_photo_work_component__WEBPACK_IMPORTED_MODULE_12__["PhotoWorkComponent"], _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_13__["PhotoGalleryComponent"], _photo_event_booking_photo_event_booking_form_component__WEBPACK_IMPORTED_MODULE_14__["BookingFormComponent"], _directives_search_query_content_directive__WEBPACK_IMPORTED_MODULE_15__["SearchQueryContentDirective"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/constants/header-background-images.ts":
  /*!*******************************************************!*\
    !*** ./src/app/constants/header-background-images.ts ***!
    \*******************************************************/

  /*! exports provided: bk_imgs */

  /***/
  function srcAppConstantsHeaderBackgroundImagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bk_imgs", function () {
      return bk_imgs;
    });

    var bk_imgs = [{
      "link": "../../assets/images/maternity1.jpg",
      "meta": ["Maternity", "Pregnancy"]
    }, {
      "link": "../../assets/images/maternity2.jpg",
      "meta": ["Maternity", "Pregnancy"]
    }, {
      "link": "../../assets/images/newborn1.jpg",
      "meta": ["Newborn"]
    }, {
      "link": "../../assets/images/newborn2.jpg",
      "meta": ["Newborn"]
    }, {
      "link": "../../assets/images/wedding1.jpg",
      "meta": ["Wedding", "Marriage"]
    }, {
      "link": "../../assets/images/wedding2.jpg",
      "meta": ["Wedding", "Marriage"]
    }, {
      "link": "../../assets/images/corporate1.jpg",
      "meta": ["Office", "Corporate"]
    }, {
      "link": "../../assets/images/corporate2.jpg",
      "meta": ["Office", "Corporate"]
    }];
    /***/
  },

  /***/
  "./src/app/constants/photos.ts":
  /*!*************************************!*\
    !*** ./src/app/constants/photos.ts ***!
    \*************************************/

  /*! exports provided: photos */

  /***/
  function srcAppConstantsPhotosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "photos", function () {
      return photos;
    });

    var photos = [{
      "photoLink": [{
        "link": '../../assets/images/baby1.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Newborn", "Baby", "Toddler"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/wedding-gallery1.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Wedding", "Marriage"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/mother1.jpg',
        'caption': "Walk in the park - Mom to be"
      }],
      "meta": ["Maternity", "Mother", "Soon to be mom", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/baby2.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Newborn", "Baby", "Toddler"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/baby3.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Newborn", "Baby", "Toddler"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/pregnancy.jpg',
        'caption': "Walk in the park - Mom to be"
      }],
      "meta": ["Maternity", "Mother", "Soon to be mom", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/office2.jpg',
        'caption': "All set for Monday!"
      }],
      "meta": ["Business", "Office", "Corporate", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/wedding-gallery2.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Wedding", "Marriage"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/mother2.jpg',
        'caption': "Walk in the park - Mom to be"
      }],
      "meta": ["Maternity", "Mother", "Soon to be mom", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/wedding-gallery3.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Wedding", "Marriage"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/baby4.jpg',
        'caption': "Baby loving Mum's music"
      }],
      "meta": ["Newborn", "Baby", "Toddler"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/office1.jpg',
        'caption': "All set for Monday!"
      }],
      "meta": ["Business", "Office", "Corporate", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/wedding.jpg',
        'caption': "Down the river"
      }],
      "meta": ["Wedding", "Marriage"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/corporate.jpg',
        'caption': "All set for Monday!"
      }],
      "meta": ["Business", "Office", "Corporate", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/mother3.jpg',
        'caption': "Walk in the park - Mom to be"
      }],
      "meta": ["Maternity", "Mother", "Soon to be mom", "Mom", "Preganancy", "Pregnant"]
    }, {
      "photoLink": [{
        "link": '../../assets/images/office.jpg',
        'caption': "All set for Monday!"
      }],
      "meta": ["Business", "Office", "Corporate", "Mom", "Preganancy", "Pregnant"]
    }];
    /***/
  },

  /***/
  "./src/app/constants/quotes.ts":
  /*!*************************************!*\
    !*** ./src/app/constants/quotes.ts ***!
    \*************************************/

  /*! exports provided: quotes */

  /***/
  function srcAppConstantsQuotesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "quotes", function () {
      return quotes;
    });

    var quotes = [{
      "type": "Wedding",
      "price": 100000
    }, {
      "type": "Maternity",
      "price": 50000
    }, {
      "type": "Newborn",
      "price": 25000
    }, {
      "type": "Corporate",
      "price": 75000
    }];
    /***/
  },

  /***/
  "./src/app/constants/skills.ts":
  /*!*************************************!*\
    !*** ./src/app/constants/skills.ts ***!
    \*************************************/

  /*! exports provided: skills */

  /***/
  function srcAppConstantsSkillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "skills", function () {
      return skills;
    });

    var skills = [{
      id: 1,
      name: 'Wedding',
      eventsCovered: 799,
      description: 'Marriage are made in heaven, and we gather evidences, A great marriage is not when the ‘perfect couple’ comes together. It is when an imperfect couple learns to enjoy their differences',
      discount: 50
    }, {
      id: 2,
      name: 'Newborn',
      eventsCovered: 699,
      description: 'Capturing the cutest moments of your lil ones, Making the decision to have a child is momentous. It is to decide forever to have your heart go walking around outside your body',
      discount: 25
    }, {
      id: 3,
      name: 'Maternity',
      eventsCovered: 299,
      description: 'Mom to be is most beautiful feeling in the world, No matter how bad my day\'s been, it takes one little kick to make everything feel alright and fill with happiness and blessings',
      discount: 0
    }, {
      id: 4,
      name: 'Corporate',
      eventsCovered: 299,
      description: 'Sometimes I\'ll start a sentence, and I don\'t even know where it\'s going. I just hope I find it along the way. Like an improv conversation. An improversation act one\'s self',
      discount: 0
    }];
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/directives/search-query-content.directive.ts":
  /*!**************************************************************!*\
    !*** ./src/app/directives/search-query-content.directive.ts ***!
    \**************************************************************/

  /*! exports provided: SearchQueryContentDirective */

  /***/
  function srcAppDirectivesSearchQueryContentDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchQueryContentDirective", function () {
      return SearchQueryContentDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchQueryContentDirective = function SearchQueryContentDirective(_elementRef) {
      _classCallCheck(this, SearchQueryContentDirective);

      this._elementRef = _elementRef;
      console.log(this._elementRef);
    };

    SearchQueryContentDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    SearchQueryContentDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[searchAnalyzeContent]'
    })], SearchQueryContentDirective);
    /***/
  },

  /***/
  "./src/app/photo-event-booking/photo-event-booking-form.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/photo-event-booking/photo-event-booking-form.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoEventBookingPhotoEventBookingFormComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".event-form {\n    margin-top: 50 px;\n    padding-top: 50 px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZXZlbnQtYm9va2luZy9waG90by1ldmVudC1ib29raW5nLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9waG90by1ldmVudC1ib29raW5nL3Bob3RvLWV2ZW50LWJvb2tpbmctZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50LWZvcm0ge1xuICAgIG1hcmdpbi10b3A6IDUwIHB4O1xuICAgIHBhZGRpbmctdG9wOiA1MCBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/photo-event-booking/photo-event-booking-form.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/photo-event-booking/photo-event-booking-form.component.ts ***!
    \***************************************************************************/

  /*! exports provided: BookingFormComponent */

  /***/
  function srcAppPhotoEventBookingPhotoEventBookingFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingFormComponent", function () {
      return BookingFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BookingFormComponent = /*#__PURE__*/function () {
      function BookingFormComponent(formBuilder) {
        _classCallCheck(this, BookingFormComponent);

        this.formBuilder = formBuilder;
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(BookingFormComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.bookingForm = this.formBuilder.group({
            'Name': '',
            'Place': '',
            'Event Date': 12 / 11 / 2020,
            'Contact Number': '8746945490',
            'Event Type': this.skill.name
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(customerData) {
          this.bookingForm.reset();
          window.alert("Your event booking is confirmed!!");
          this.notify.emit();
        }
      }]);

      return BookingFormComponent;
    }();

    BookingFormComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], BookingFormComponent.prototype, "notify", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], BookingFormComponent.prototype, "skill", void 0);
    BookingFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-event-booking-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-event-booking/photo-event-booking-form.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-event-booking-form.component.css */
      "./src/app/photo-event-booking/photo-event-booking-form.component.css"))["default"]]
    })], BookingFormComponent);
    /***/
  },

  /***/
  "./src/app/photo-event-booking/photo-event-booking.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/photo-event-booking/photo-event-booking.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoEventBookingPhotoEventBookingComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWV2ZW50LWJvb2tpbmcvcGhvdG8tZXZlbnQtYm9va2luZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/photo-event-booking/photo-event-booking.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/photo-event-booking/photo-event-booking.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PhotoEventBooking */

  /***/
  function srcAppPhotoEventBookingPhotoEventBookingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoEventBooking", function () {
      return PhotoEventBooking;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PhotoEventBooking = /*#__PURE__*/function () {
      function PhotoEventBooking() {
        _classCallCheck(this, PhotoEventBooking);
      }

      _createClass(PhotoEventBooking, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.activateForm = null;
        }
      }, {
        key: "activate",
        value: function activate() {
          this.activateForm = true;
        }
      }, {
        key: "deactivate",
        value: function deactivate() {
          this.activateForm = null;
        }
      }]);

      return PhotoEventBooking;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PhotoEventBooking.prototype, "skill", void 0);
    PhotoEventBooking = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-book',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-event-booking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-event-booking/photo-event-booking.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-event-booking.component.css */
      "./src/app/photo-event-booking/photo-event-booking.component.css"))["default"]]
    })], PhotoEventBooking);
    /***/
  },

  /***/
  "./src/app/photo-gallery/photo-gallery.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/photo-gallery/photo-gallery.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoGalleryPhotoGalleryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  text-align: center;\n  font-size: 40px;\n  margin-bottom: 35px;\n  color: rgb(44, 43, 43);\n  font-weight: 300;\n  text-transform: uppercase;\n}\n\nh2::after {\n  display: block;\n  width: 20%;\n  margin-left: 40%;\n  padding-top: 30px;\n  text-align: center;\n  content: '';\n  border-bottom: 2px solid #EB0364;\n}\n\n.gallery {\n    margin-top: 25px;\n  }\n\n.image-column {\n    display: block;\n    text-align: center;\n    width: 140%;\n    height: 225px;\n  }\n\na {\n    text-decoration: none;\n    display: block;\n    text-align: center;\n    background-color: #EB0364;\n    margin-left: 45%;\n    height: 40px;\n    color: #fff;\n    padding-top: 5px;\n    margin-bottom: 20px;\n    width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdDQUFnQztBQUNsQzs7QUFFRTtJQUNFLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7RUFDZjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9waG90by1nYWxsZXJ5L3Bob3RvLWdhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQwcHg7XG4gIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIGNvbG9yOiByZ2IoNDQsIDQzLCA0Myk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgyOjphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb250ZW50OiAnJztcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQjAzNjQ7XG59XG5cbiAgLmdhbGxlcnkge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gIH1cblxuICAuaW1hZ2UtY29sdW1uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE0MCU7XG4gICAgaGVpZ2h0OiAyMjVweDtcbiAgfVxuXG4gIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VCMDM2NDtcbiAgICBtYXJnaW4tbGVmdDogNDUlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDE2MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/photo-gallery/photo-gallery.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/photo-gallery/photo-gallery.component.ts ***!
    \**********************************************************/

  /*! exports provided: PhotoGalleryComponent */

  /***/
  function srcAppPhotoGalleryPhotoGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function () {
      return PhotoGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _services_search_keywords_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/search-keywords.service */
    "./src/app/services/search-keywords.service.ts");

    var PhotoGalleryComponent = /*#__PURE__*/function () {
      function PhotoGalleryComponent(photoservice, __searchSvc) {
        _classCallCheck(this, PhotoGalleryComponent);

        this.photoservice = photoservice;
        this.__searchSvc = __searchSvc;
        this.photos = [];
        this.searchParams = [];
      }

      _createClass(PhotoGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var searchRecord;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.__searchSvc.getSearchKeywords();

                  case 2:
                    searchRecord = _context.sent;

                    if (searchRecord) {
                      this.searchParams = searchRecord['search_query'].split(" ");
                    }

                    _context.next = 6;
                    return this.filterPhotos();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "filterPhotos",
        value: function filterPhotos() {
          if (this.searchParams.length === 0) {
            this.photos = this.photoservice.getPhotos();
            return;
          }

          var photoRecords = this.photoservice.getPhotos();

          var _iterator = _createForOfIteratorHelper(photoRecords),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var photo = _step.value;

              var _iterator2 = _createForOfIteratorHelper(this.searchParams),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var param = _step2.value;

                  if (photo.meta.indexOf(param) > -1) {
                    this.photos.push(photo);
                    break;
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          console.log(this.photos);
        }
      }]);

      return PhotoGalleryComponent;
    }();

    PhotoGalleryComponent.ctorParameters = function () {
      return [{
        type: _services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
      }, {
        type: _services_search_keywords_service__WEBPACK_IMPORTED_MODULE_3__["SearchKeywordsService"]
      }];
    };

    PhotoGalleryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-gallery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-gallery.component.css */
      "./src/app/photo-gallery/photo-gallery.component.css"))["default"]]
    })], PhotoGalleryComponent);
    /***/
  },

  /***/
  "./src/app/photo-skills-discount/photo-skills-discount.component.css":
  /*!***************************************************************************!*\
    !*** ./src/app/photo-skills-discount/photo-skills-discount.component.css ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoSkillsDiscountPhotoSkillsDiscountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLXNraWxscy1kaXNjb3VudC9waG90by1za2lsbHMtZGlzY291bnQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/photo-skills-discount/photo-skills-discount.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/photo-skills-discount/photo-skills-discount.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PhotoSkillsDiscount */

  /***/
  function srcAppPhotoSkillsDiscountPhotoSkillsDiscountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoSkillsDiscount", function () {
      return PhotoSkillsDiscount;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PhotoSkillsDiscount = /*#__PURE__*/function () {
      function PhotoSkillsDiscount() {
        _classCallCheck(this, PhotoSkillsDiscount);
      }

      _createClass(PhotoSkillsDiscount, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PhotoSkillsDiscount;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PhotoSkillsDiscount.prototype, "skill", void 0);
    PhotoSkillsDiscount = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-discount-label',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-skills-discount.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-skills-discount/photo-skills-discount.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-skills-discount.component.css */
      "./src/app/photo-skills-discount/photo-skills-discount.component.css"))["default"]]
    })], PhotoSkillsDiscount);
    /***/
  },

  /***/
  "./src/app/photo-skills-list/photo-skills.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/photo-skills-list/photo-skills.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoSkillsListPhotoSkillsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".link-gallery {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  padding: 8px 16px;\r\n  border-radius: 2px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  background-color: #1976d2;\r\n  color: white;\r\n  border: none;\r\n}\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\n.features {\r\n    margin-top: 25px;\r\n}\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 40px;\r\n    margin-bottom: 35px;\r\n    color: rgb(44, 43, 43);\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n}\r\n\r\nh2::after {\r\n    display: block;\r\n    width: 20%;\r\n    margin-left: 40%;\r\n    padding-top: 30px;\r\n    text-align: center;\r\n    content: '';\r\n    border-bottom: 2px solid #EB0364;\r\n}\r\n\r\n.feature-box h3 {\r\n    text-align: center;\r\n    font-size: 30px;\r\n    font-weight: 300;\r\n    color: #EB0364;\r\n    padding-bottom: 10px;\r\n}\r\n\r\n.feature-box {\r\n    padding-left: 15px;\r\n    display: inline-block;\r\n    border: 1px solid #e6e6e6;\r\n    height: 350px;\r\n    padding-top: 5px;\r\n    background-color: rgb(253, 253, 253);\r\n    margin-right: 12px;\r\n    box-shadow: -3px 5px #e6e6e6;\r\n}\r\n\r\n.feature-box {\r\n    display: inline-block;\r\n}\r\n\r\n.feature-box p {\r\n    text-decoration: none;\r\n    text-align: center;\r\n    line-height: 30px;    \r\n}\r\n\r\n.feature-box a {\r\n    text-decoration: none;\r\n    display: block;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n    background-color: #EB0364;\r\n    margin-left: 40px;\r\n    height: 40px;\r\n    color: #fff;\r\n    padding-top: 5px;\r\n    width: 160px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8tc2tpbGxzLWxpc3QvcGhvdG8tc2tpbGxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTs7OztDQUlDOztBQUVEO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLXNraWxscy1saXN0L3Bob3RvLXNraWxscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmstZ2FsbGVyeSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi8qXHJcbkNvcHlyaWdodCBHb29nbGUgTExDLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG5Vc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0XHJcbmNhbiBiZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuKi9cclxuXHJcbi5mZWF0dXJlcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgY29sb3I6IHJnYig0NCwgNDMsIDQzKTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5oMjo6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwJTtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0VCMDM2NDtcclxufVxyXG5cclxuLmZlYXR1cmUtYm94IGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogI0VCMDM2NDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS1ib3gge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MywgMjUzLCAyNTMpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgYm94LXNoYWRvdzogLTNweCA1cHggI2U2ZTZlNjtcclxufVxyXG5cclxuLmZlYXR1cmUtYm94IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmZlYXR1cmUtYm94IHAge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7ICAgIFxyXG59XHJcblxyXG4uZmVhdHVyZS1ib3ggYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUIwMzY0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/photo-skills-list/photo-skills.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/photo-skills-list/photo-skills.component.ts ***!
    \*************************************************************/

  /*! exports provided: PhotoSkillsComponent */

  /***/
  function srcAppPhotoSkillsListPhotoSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoSkillsComponent", function () {
      return PhotoSkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/skills */
    "./src/app/constants/skills.ts");
    /* harmony import */


    var _services_search_keywords_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/search-keywords.service */
    "./src/app/services/search-keywords.service.ts");

    var PhotoSkillsComponent = /*#__PURE__*/function () {
      function PhotoSkillsComponent(__searchSvc) {
        _classCallCheck(this, PhotoSkillsComponent);

        this.__searchSvc = __searchSvc;
        this.skills = _constants_skills__WEBPACK_IMPORTED_MODULE_2__["skills"];
        this.searchParams = [];
      }

      _createClass(PhotoSkillsComponent, [{
        key: "trackBySkillId",
        value: function trackBySkillId(index, skill) {
          return skill.id;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var searchRecord;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.__searchSvc.getSearchKeywords();

                  case 2:
                    searchRecord = _context2.sent;

                    if (searchRecord) {
                      this.searchParams = searchRecord['search_query'].split(" ");
                    }

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "highlight",
        value: function highlight(skillName) {
          if (this.searchParams.length === 0) {
            return 1;
          }

          if (this.searchParams.indexOf(skillName) > -1) {
            return 1;
          } else {
            return 0.3;
          }
        }
      }]);

      return PhotoSkillsComponent;
    }();

    PhotoSkillsComponent.ctorParameters = function () {
      return [{
        type: _services_search_keywords_service__WEBPACK_IMPORTED_MODULE_3__["SearchKeywordsService"]
      }];
    };

    PhotoSkillsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-skills',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-skills-list/photo-skills.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-skills.component.css */
      "./src/app/photo-skills-list/photo-skills.component.css"))["default"]]
    })], PhotoSkillsComponent);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/photo-work/photo-work.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/photo-work/photo-work.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotoWorkPhotoWorkComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-pw {\n    margin-right: 15px;\n    margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG8td29yay9waG90by13b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8td29yay9waG90by13b3JrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLXB3IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/photo-work/photo-work.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/photo-work/photo-work.component.ts ***!
    \****************************************************/

  /*! exports provided: PhotoWorkComponent */

  /***/
  function srcAppPhotoWorkPhotoWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoWorkComponent", function () {
      return PhotoWorkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _constants_skills__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../constants/skills */
    "./src/app/constants/skills.ts");
    /* harmony import */


    var _services_quotes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/quotes.service */
    "./src/app/services/quotes.service.ts");

    var PhotoWorkComponent = /*#__PURE__*/function () {
      function PhotoWorkComponent(route, quoteService) {
        _classCallCheck(this, PhotoWorkComponent);

        this.route = route;
        this.quoteService = quoteService;
      }

      _createClass(PhotoWorkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            var _iterator3 = _createForOfIteratorHelper(_constants_skills__WEBPACK_IMPORTED_MODULE_3__["skills"]),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var skill = _step3.value;

                if (skill.name == params.get('category')) {
                  _this.skill = skill;
                  break;
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          });
        }
      }, {
        key: "getQuote",
        value: function getQuote(skill) {
          this.quotePrice = this.quoteService.getQuote(skill);
        }
      }]);

      return PhotoWorkComponent;
    }();

    PhotoWorkComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_quotes_service__WEBPACK_IMPORTED_MODULE_4__["QuoteService"]
      }];
    };

    PhotoWorkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-work',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-work.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-work/photo-work.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-work.component.css */
      "./src/app/photo-work/photo-work.component.css"))["default"]]
    })], PhotoWorkComponent);
    /***/
  },

  /***/
  "./src/app/services/network.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/network.service.ts ***!
    \*********************************************/

  /*! exports provided: NetworkService */

  /***/
  function srcAppServicesNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var NetworkService = /*#__PURE__*/function () {
      function NetworkService(__httpClient) {
        _classCallCheck(this, NetworkService);

        this.__httpClient = __httpClient;
      }

      _createClass(NetworkService, [{
        key: "getIpAddress",
        value: function getIpAddress() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var __localIp;

            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.getIpUsingIpify();

                  case 2:
                    __localIp = _context3.sent;
                    return _context3.abrupt("return", __localIp);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
        /* getIpUsingIpify(): Observable<IpAddress> {
           return this.__httpClient.get<IpAddress>('http://api.ipify.org/?format=json');
        } */

      }, {
        key: "getIpUsingIpify",
        value: function getIpUsingIpify() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this2 = this;

            var __localIp;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return new Promise(function (resolve, reject) {
                      var apiURL = 'http://api.ipify.org/?format=json';

                      _this2.__httpClient.get(apiURL).toPromise().then(function (res) {
                        __localIp = res.ip;
                        resolve();
                      });
                    });

                  case 2:
                    return _context4.abrupt("return", __localIp);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    NetworkService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NetworkService);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_photos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/photos */
    "./src/app/constants/photos.ts");

    var PhotoService = /*#__PURE__*/function () {
      function PhotoService() {
        _classCallCheck(this, PhotoService);

        this.photos = _constants_photos__WEBPACK_IMPORTED_MODULE_2__["photos"];
      }

      _createClass(PhotoService, [{
        key: "getPhotos",
        value: function getPhotos() {
          return this.photos;
        }
      }]);

      return PhotoService;
    }();

    PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PhotoService);
    /***/
  },

  /***/
  "./src/app/services/quotes.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/quotes.service.ts ***!
    \********************************************/

  /*! exports provided: QuoteService */

  /***/
  function srcAppServicesQuotesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuoteService", function () {
      return QuoteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_quotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/quotes */
    "./src/app/constants/quotes.ts");

    var QuoteService = /*#__PURE__*/function () {
      function QuoteService() {
        _classCallCheck(this, QuoteService);

        this.quotes = _constants_quotes__WEBPACK_IMPORTED_MODULE_2__["quotes"];
      }

      _createClass(QuoteService, [{
        key: "getQuote",
        value: function getQuote(skill) {
          var _iterator4 = _createForOfIteratorHelper(_constants_quotes__WEBPACK_IMPORTED_MODULE_2__["quotes"]),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var quote = _step4.value;

              if (quote.type == skill) {
                return quote.price;
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      }]);

      return QuoteService;
    }();

    QuoteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], QuoteService);
    /***/
  },

  /***/
  "./src/app/services/search-keywords.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/search-keywords.service.ts ***!
    \*****************************************************/

  /*! exports provided: SearchKeywordsService */

  /***/
  function srcAppServicesSearchKeywordsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchKeywordsService", function () {
      return SearchKeywordsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _network_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./network.service */
    "./src/app/services/network.service.ts");

    var SearchKeywordsService = /*#__PURE__*/function () {
      function SearchKeywordsService(__netSvc, __httpClient) {
        _classCallCheck(this, SearchKeywordsService);

        this.__netSvc = __netSvc;
        this.__httpClient = __httpClient;
      }

      _createClass(SearchKeywordsService, [{
        key: "getSearchKeywords",
        value: function getSearchKeywords() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this3 = this;

            var searchRec;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.__netSvc.getIpAddress();

                  case 2:
                    this.__userIp = _context5.sent;
                    _context5.next = 5;
                    return new Promise(function (resolve, reject) {
                      _this3.__httpClient.get("http://localhost:8000/search/records/" + _this3.__userIp).toPromise().then(function (res) {
                        var searchRecords = res.search_keywords;

                        if (searchRecords['records'] && searchRecords['records'].length > 0) {
                          var searchRecord = searchRecords['records'][searchRecords['records'].length - 1];
                          var timeDiffMins = (new Date().getTime() - searchRecord['search_timestamp']) / 1000 / 60;

                          if (timeDiffMins <= 30) {
                            searchRec = searchRecord;
                          } //Search done lesser than 30 mins

                        }

                        resolve();
                      });
                    });

                  case 5:
                    return _context5.abrupt("return", searchRec);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return SearchKeywordsService;
    }();

    SearchKeywordsService.ctorParameters = function () {
      return [{
        type: _network_service__WEBPACK_IMPORTED_MODULE_3__["NetworkService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SearchKeywordsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchKeywordsService);
    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopBarTopBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\n.header {\r\n    /* background-image: -webkit-linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(../../assets/images/alasdair-elmes-ULHxWq8reao-unsplash.jpg); */\r\n    /* background-image: linear-gradient(rgba(255, 255, 255), rgb(255, 255, 255)), url(../../assets/images/maternity1.jpg);  */\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 100vh;\r\n    transition: background-image 2s;\r\n    /* transition: all .2s ease;\r\n    -webkit-animation: fade 5s infinite;\r\n    -moz-animation: fade 5s infinite;\r\n    -o-animation: fade 5s infinite; \r\n    animation: fade 5s infinite; */\r\n    z-index: -1;\r\n}\r\n\r\n@keyframes fade {\r\n    0% {\r\n      \r\n      opacity: 0;\r\n    }\r\n    50% {\r\n      \r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      \r\n      opacity: 0;\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes fade {\r\n    0% {\r\n        \r\n        opacity: 0;\r\n      }\r\n      50% {\r\n        \r\n        opacity: 1;\r\n      }\r\n      100% {\r\n        \r\n        opacity: 0;\r\n      }\r\n  }\r\n\r\n.logo {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    font-size: 180%;\r\n    display: inline-block;\r\n    width: 40%;\r\n    padding-top: 60px;\r\n    -webkit-text-decoration-color: transparent; \r\n    text-decoration-color: transparent;\r\n    letter-spacing: 1px;\r\n    font-family: 'MuseoModerno', cursive;\r\n}\r\n\r\n.story-teller-title {\r\n    text-decoration: underline;\r\n    -webkit-text-decoration-color: transparent; \r\n    text-decoration-color: transparent;\r\n    color: #fff; \r\n    font-size: 60px;\r\n    display: inline-block;\r\n    width: 100%;\r\n    text-align: center;\r\n    margin-top: 175px;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.story-teller-title:after {\r\n    display: block;\r\n    height: 4px;\r\n    background-color: rgb(235, 3, 100);\r\n    content: \" \";\r\n    width: 100px;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n}\r\n\r\n.story-teller-title:before {\r\n    display: block;\r\n    height: 4px;\r\n    background-color: rgb(235, 3, 100);\r\n    content: \" \";\r\n    width: 100px;\r\n    margin: 0 auto;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7OztDQUlDOztBQUVEO0lBQ0ksMkpBQTJKO0lBQzNKLDBIQUEwSDtJQUMxSCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0I7Ozs7a0NBSThCO0lBQzlCLFdBQVc7QUFDZjs7QUFnQkU7SUFDRTs7TUFFRSxVQUFVO0lBQ1o7SUFDQTs7TUFFRSxVQUFVO0lBQ1o7SUFDQTs7TUFFRSxVQUFVO0lBQ1o7RUFDRjs7QUFpQkY7SUFDSTs7UUFFSSxVQUFVO01BQ1o7TUFDQTs7UUFFRSxVQUFVO01BQ1o7TUFDQTs7UUFFRSxVQUFVO01BQ1o7RUFDSjs7QUFFRjtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFDbEMsbUJBQW1CO0lBQ25CLG9DQUFvQztBQUN4Qzs7QUFHQTtJQUNJLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC90b3AtYmFyL3RvcC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qL1xyXG5cclxuLmhlYWRlciB7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNjApLCByZ2JhKDAsIDAsIDAsIDAuNjApKSwgdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvYWxhc2RhaXItZWxtZXMtVUxIeFdxOHJlYW8tdW5zcGxhc2guanBnKTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUpLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9tYXRlcm5pdHkxLmpwZyk7ICAqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDJzO1xyXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgNXMgaW5maW5pdGU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogZmFkZSA1cyBpbmZpbml0ZTtcclxuICAgIC1vLWFuaW1hdGlvbjogZmFkZSA1cyBpbmZpbml0ZTsgXHJcbiAgICBhbmltYXRpb246IGZhZGUgNXMgaW5maW5pdGU7ICovXHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuQC1vLWtleWZyYW1lcyBmYWRlIHtcclxuICAgIDAlIHtcclxuICAgICAgICBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgIFxyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgXHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgXHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGZhZGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICAgICAgNTAlIHtcclxuICAgICAgICBcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbi5sb2dvIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxODAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6IHRyYW5zcGFyZW50OyBcclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNdXNlb01vZGVybm8nLCBjdXJzaXZlO1xyXG59XHJcblxyXG5cclxuLnN0b3J5LXRlbGxlci10aXRsZSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB0cmFuc3BhcmVudDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNmZmY7IFxyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLnN0b3J5LXRlbGxlci10aXRsZTphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMywgMTAwKTtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uc3RvcnktdGVsbGVyLXRpdGxlOmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMywgMTAwKTtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _constants_header_background_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../constants/header-background-images */
    "./src/app/constants/header-background-images.ts");
    /* harmony import */


    var _services_search_keywords_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/search-keywords.service */
    "./src/app/services/search-keywords.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(__searchSvc) {
        _classCallCheck(this, TopBarComponent);

        this.__searchSvc = __searchSvc;
        this.backGroundImageArrayIndex = 1;
        this.backGroundImagesArray = [];
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(5000);
        this.title = 'Story Tellers';
      }

      _createClass(TopBarComponent, [{
        key: "changeBackgroundImage",
        value: function changeBackgroundImage() {
          if (this.backGroundImageArrayIndex < this.backGroundImagesArray.length) {
            this.backGroundImage = this.backGroundImagesArray[this.backGroundImageArrayIndex].link;
          }

          if (this.backGroundImageArrayIndex === this.backGroundImagesArray.length - 1) {
            this.backGroundImageArrayIndex = 0;
          } else {
            this.backGroundImageArrayIndex = this.backGroundImageArrayIndex + 1;
          }
        }
      }, {
        key: "getBackGroundImage",
        value: function getBackGroundImage() {
          return "linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url(".concat(this.backGroundImage, ")");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            var _this4 = this;

            var searchRecord;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.__searchSvc.getSearchKeywords();

                  case 2:
                    searchRecord = _context6.sent;
                    this.filterBackGroundImages(searchRecord);
                    this.subscription = this.source.subscribe(function (value) {
                      return _this4.changeBackgroundImage();
                    });

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "filterBackGroundImages",
        value: function filterBackGroundImages(searchRecord) {
          var searchParams = [];

          if (searchRecord) {
            searchParams = searchRecord['search_query'].split(" ");
          }

          if (searchParams.length > 0) {
            var _iterator5 = _createForOfIteratorHelper(_constants_header_background_images__WEBPACK_IMPORTED_MODULE_2__["bk_imgs"]),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var bkImg = _step5.value;
                var imgMeta = bkImg['meta'];

                var _iterator6 = _createForOfIteratorHelper(imgMeta),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var element = _step6.value;

                    if (searchParams.indexOf(element) > -1) {
                      this.backGroundImagesArray.push(bkImg);
                      this.backGroundImage = bkImg['link'];
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          } else {
            this.backGroundImagesArray = _constants_header_background_images__WEBPACK_IMPORTED_MODULE_2__["bk_imgs"];
            this.backGroundImage = _constants_header_background_images__WEBPACK_IMPORTED_MODULE_2__["bk_imgs"][0].link;
          }
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ctorParameters = function () {
      return [{
        type: _services_search_keywords_service__WEBPACK_IMPORTED_MODULE_3__["SearchKeywordsService"]
      }];
    };

    TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-bar.component.css */
      "./src/app/top-bar/top-bar.component.css"))["default"]]
    })], TopBarComponent);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vekoneri/Documents/Google Search Engine Project/photo-portofolio-angular-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map