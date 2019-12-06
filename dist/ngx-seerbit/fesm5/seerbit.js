import { Injectable, ɵɵdefineInjectable, EventEmitter, Directive, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import { __awaiter, __generator, __spread } from 'tslib';
import { CommonModule } from '@angular/common';

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
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    SeerbitService.ctorParameters = function () { return []; };
    /** @nocollapse */ SeerbitService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SeerbitService_Factory() { return new SeerbitService(); }, token: SeerbitService, providedIn: "root" });
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
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[seer-bit]'
                },] }
    ];
    /** @nocollapse */
    SeerBitButtonDirective.ctorParameters = function () { return [
        { type: SeerbitService }
    ]; };
    SeerBitButtonDirective.propDecorators = {
        options: [{ type: Input }],
        callback: [{ type: Output }],
        close: [{ type: Output }],
        buttonClick: [{ type: HostListener, args: ['click',] }]
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
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'seer-bit',
                    template: "<button [ngClass]=\"class\" [ngStyle]=\"style\"><ng-content></ng-content></button>"
                }] }
    ];
    /** @nocollapse */
    SeerBitComponent.ctorParameters = function () { return [
        { type: SeerbitService }
    ]; };
    SeerBitComponent.propDecorators = {
        class: [{ type: Input }],
        style: [{ type: Input }],
        options: [{ type: Input }],
        callback: [{ type: Output }],
        close: [{ type: Output }],
        buttonClick: [{ type: HostListener, args: ['click',] }]
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
        { type: NgModule, args: [{
                    declarations: [SeerBitButtonDirective, SeerBitComponent],
                    imports: [CommonModule],
                    exports: [SeerBitButtonDirective, SeerBitComponent]
                },] }
    ];
    return NgxSeerbitModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: seerbit.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxSeerbitModule, SeerBitButtonDirective as ɵa, SeerbitService as ɵb, SeerBitComponent as ɵc };
//# sourceMappingURL=seerbit.js.map
