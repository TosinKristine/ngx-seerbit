(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('seerbit', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global.seerbit = {}, global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/seerbit-service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MyWindow() { }
    if (false) {
        /** @type {?} */
        MyWindow.prototype.SeerBitPop;
    }
    var SeerbitService = /** @class */ (function () {
        function SeerbitService() {
        }
        /**
         * @return {?}
         */
        SeerbitService.prototype.loadScript = /**
         * @return {?}
         */
        function () {
            return new Promise((/**
             * @param {?} resolve
             * @return {?}
             */
            function (resolve) {
                if (window.SeerBitPop && typeof window.SeerBitPop.setup === 'function') {
                    resolve();
                    return;
                }
                /** @type {?} */
                var script = window.document.createElement('script');
                window.document.head.appendChild(script);
                /** @type {?} */
                var onLoadFunc = (/**
                 * @return {?}
                 */
                function () {
                    script.removeEventListener('load', onLoadFunc);
                    resolve();
                });
                script.addEventListener('load', onLoadFunc);
                //  script.setAttribute('src', 'http://rubic.surge.sh/api/v1/seerbit.js');
                script.setAttribute('src', '/assets/js/seerbit.js');
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    SeerbitPay;
                }), 3000);
            }));
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SeerbitService.prototype.getSeerBitOptions = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            //const seerBitOptions: any = {};
            /** @type {?} */
            var seerBitOptions = {
                amount: obj.amount,
                tranref: obj.tranref,
                public_key: obj.public_key,
                currency: obj.currency || 'NGN',
                callbackurl: obj.callbackurl || '',
                country: obj.country,
                description: obj.description
            };
            return seerBitOptions;
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SeerbitService.prototype.checkInput = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (!obj.public_key) {
                return 'Seerbit: Please insert a your public key';
            }
            if (!obj.amount) {
                return 'Seerbit: Transaction amount cannot be empty';
            }
            if (!obj.tranref) {
                return 'Seerbit: Transaction ref cannot be empty';
            }
            return '';
        };
        SeerbitService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        SeerbitService.ctorParameters = function () { return []; };
        /** @nocollapse */ SeerbitService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function SeerbitService_Factory() { return new SeerbitService(); }, token: SeerbitService, providedIn: "root" });
        return SeerbitService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/seer-bit.directive.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MyWindow$1() { }
    if (false) {
        /** @type {?} */
        MyWindow$1.prototype.SeerbitPay;
    }
    var SeerBitButtonDirective = /** @class */ (function () {
        function SeerBitButtonDirective(seerBitService) {
            this.seerBitService = seerBitService;
            this.callback = new core.EventEmitter();
            this.close = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        SeerBitButtonDirective.prototype.pay = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var errorText;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            errorText = this.validateInput(this.options);
                            this.generateOptions(this.options);
                            if (errorText) {
                                console.error(errorText);
                                return [2 /*return*/, errorText];
                            }
                            return [4 /*yield*/, this.seerBitService.loadScript()];
                        case 1:
                            _a.sent();
                            window.SeerbitPay(this._options, this.closeFn, this.callbackFn);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SeerBitButtonDirective.prototype.generateOptions = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            var _this = this;
            this._options = this.seerBitService.getSeerBitOptions(obj);
            this.closeFn = (/**
             * @param {...?} response
             * @return {?}
             */
            function () {
                var _a;
                var response = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    response[_i] = arguments[_i];
                }
                if (!_this.close.observers.length) {
                    (_a = _this.close).emit.apply(_a, __spread(response));
                }
            });
            this.callbackFn = (/**
             * @param {...?} response
             * @return {?}
             */
            function () {
                var _a;
                var response = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    response[_i] = arguments[_i];
                }
                (_a = _this.callback).emit.apply(_a, __spread(response));
            });
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SeerBitButtonDirective.prototype.validateInput = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (!this.callback.observers.length) {
                return 'Seerbit: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
            }
            return this.seerBitService.checkInput(obj);
        };
        /**
         * @return {?}
         */
        SeerBitButtonDirective.prototype.buttonClick = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.pay();
                    return [2 /*return*/];
                });
            });
        };
        SeerBitButtonDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[seer-bit]'
                    },] }
        ];
        /** @nocollapse */
        SeerBitButtonDirective.ctorParameters = function () { return [
            { type: SeerbitService }
        ]; };
        SeerBitButtonDirective.propDecorators = {
            options: [{ type: core.Input }],
            callback: [{ type: core.Output }],
            close: [{ type: core.Output }],
            buttonClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return SeerBitButtonDirective;
    }());
    if (false) {
        /** @type {?} */
        SeerBitButtonDirective.prototype.options;
        /** @type {?} */
        SeerBitButtonDirective.prototype.callback;
        /** @type {?} */
        SeerBitButtonDirective.prototype.close;
        /**
         * @type {?}
         * @private
         */
        SeerBitButtonDirective.prototype._options;
        /** @type {?} */
        SeerBitButtonDirective.prototype.closeFn;
        /** @type {?} */
        SeerBitButtonDirective.prototype.callbackFn;
        /**
         * @type {?}
         * @private
         */
        SeerBitButtonDirective.prototype.seerBitService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/seer-bit.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function MyWindow$2() { }
    if (false) {
        /** @type {?} */
        MyWindow$2.prototype.SeerbitPay;
    }
    var SeerBitComponent = /** @class */ (function () {
        function SeerBitComponent(seerBitService) {
            this.seerBitService = seerBitService;
            this.callback = new core.EventEmitter();
            this.close = new core.EventEmitter();
        }
        /**
         * @param {?} obj
         * @return {?}
         */
        SeerBitComponent.prototype.generateOptions = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            var _this = this;
            this._options = this.seerBitService.getSeerBitOptions(obj);
            this.closeFn = (/**
             * @param {...?} response
             * @return {?}
             */
            function () {
                var _a;
                var response = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    response[_i] = arguments[_i];
                }
                if (!_this.close.observers.length) {
                    (_a = _this.close).emit.apply(_a, __spread(response));
                }
            });
            this.callbackFn = (/**
             * @param {...?} response
             * @return {?}
             */
            function () {
                var _a;
                var response = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    response[_i] = arguments[_i];
                }
                (_a = _this.callback).emit.apply(_a, __spread(response));
            });
        };
        /**
         * @param {?} obj
         * @return {?}
         */
        SeerBitComponent.prototype.validateInput = /**
         * @param {?} obj
         * @return {?}
         */
        function (obj) {
            if (!this.callback.observers.length) {
                return 'Seerbit: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
            }
            return this.seerBitService.checkInput(obj);
        };
        /**
         * @return {?}
         */
        SeerBitComponent.prototype.buttonClick = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.pay();
                    return [2 /*return*/];
                });
            });
        };
        /**
         * @return {?}
         */
        SeerBitComponent.prototype.pay = /**
         * @return {?}
         */
        function () {
            return __awaiter(this, void 0, void 0, function () {
                var errorText;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            errorText = this.validateInput(this.options);
                            this.generateOptions(this.options);
                            if (errorText) {
                                console.error(errorText);
                                return [2 /*return*/, errorText];
                            }
                            return [4 /*yield*/, this.seerBitService.loadScript()];
                        case 1:
                            _a.sent();
                            window.SeerbitPay(this._options, this.closeFn, this.callbackFn);
                            return [2 /*return*/];
                    }
                });
            });
        };
        SeerBitComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'seer-bit',
                        template: "<button [ngClass]=\"class\" [ngStyle]=\"style\"><ng-content></ng-content></button>"
                    }] }
        ];
        /** @nocollapse */
        SeerBitComponent.ctorParameters = function () { return [
            { type: SeerbitService }
        ]; };
        SeerBitComponent.propDecorators = {
            class: [{ type: core.Input }],
            style: [{ type: core.Input }],
            options: [{ type: core.Input }],
            callback: [{ type: core.Output }],
            close: [{ type: core.Output }],
            buttonClick: [{ type: core.HostListener, args: ['click',] }]
        };
        return SeerBitComponent;
    }());
    if (false) {
        /** @type {?} */
        SeerBitComponent.prototype.class;
        /** @type {?} */
        SeerBitComponent.prototype.style;
        /** @type {?} */
        SeerBitComponent.prototype.options;
        /** @type {?} */
        SeerBitComponent.prototype.callback;
        /** @type {?} */
        SeerBitComponent.prototype.close;
        /**
         * @type {?}
         * @private
         */
        SeerBitComponent.prototype._options;
        /** @type {?} */
        SeerBitComponent.prototype.closeFn;
        /** @type {?} */
        SeerBitComponent.prototype.callbackFn;
        /**
         * @type {?}
         * @private
         */
        SeerBitComponent.prototype.seerBitService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-seerbit.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxSeerbitModule = /** @class */ (function () {
        function NgxSeerbitModule() {
        }
        NgxSeerbitModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SeerBitButtonDirective, SeerBitComponent],
                        imports: [common.CommonModule],
                        exports: [SeerBitButtonDirective, SeerBitComponent]
                    },] }
        ];
        return NgxSeerbitModule;
    }());

    exports.NgxSeerbitModule = NgxSeerbitModule;
    exports.ɵa = SeerBitButtonDirective;
    exports.ɵb = SeerbitService;
    exports.ɵc = SeerBitComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=seerbit.umd.js.map
