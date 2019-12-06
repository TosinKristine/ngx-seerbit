import { Injectable, ɵɵdefineInjectable, EventEmitter, Directive, Input, Output, HostListener, Component, NgModule } from '@angular/core';
import { __awaiter } from 'tslib';
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
class SeerbitService {
    constructor() { }
    /**
     * @return {?}
     */
    loadScript() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (window.SeerBitPop && typeof window.SeerBitPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            const script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            const onLoadFunc = (/**
             * @return {?}
             */
            () => {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            //  script.setAttribute('src', 'http://rubic.surge.sh/api/v1/seerbit.js');
            script.setAttribute('src', '/assets/js/seerbit.js');
            setTimeout((/**
             * @return {?}
             */
            () => {
                SeerbitPay;
            }), 3000);
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getSeerBitOptions(obj) {
        //const seerBitOptions: any = {};
        /** @type {?} */
        const seerBitOptions = {
            amount: obj.amount,
            tranref: obj.tranref,
            public_key: obj.public_key,
            currency: obj.currency || 'NGN',
            callbackurl: obj.callbackurl || '',
            country: obj.country,
            description: obj.description
        };
        return seerBitOptions;
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    checkInput(obj) {
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
    }
}
SeerbitService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SeerbitService.ctorParameters = () => [];
/** @nocollapse */ SeerbitService.ngInjectableDef = ɵɵdefineInjectable({ factory: function SeerbitService_Factory() { return new SeerbitService(); }, token: SeerbitService, providedIn: "root" });

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
class SeerBitButtonDirective {
    /**
     * @param {?} seerBitService
     */
    constructor(seerBitService) {
        this.seerBitService = seerBitService;
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @return {?}
     */
    pay() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = this.validateInput(this.options);
            this.generateOptions(this.options);
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.seerBitService.loadScript();
            window.SeerbitPay(this._options, this.closeFn, this.callbackFn);
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._options = this.seerBitService.getSeerBitOptions(obj);
        this.closeFn = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            if (!this.close.observers.length) {
                this.close.emit(...response);
            }
        });
        this.callbackFn = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    validateInput(obj) {
        if (!this.callback.observers.length) {
            return 'Seerbit: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.seerBitService.checkInput(obj);
    }
    /**
     * @return {?}
     */
    buttonClick() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pay();
        });
    }
}
SeerBitButtonDirective.decorators = [
    { type: Directive, args: [{
                selector: '[seer-bit]'
            },] }
];
/** @nocollapse */
SeerBitButtonDirective.ctorParameters = () => [
    { type: SeerbitService }
];
SeerBitButtonDirective.propDecorators = {
    options: [{ type: Input }],
    callback: [{ type: Output }],
    close: [{ type: Output }],
    buttonClick: [{ type: HostListener, args: ['click',] }]
};
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
class SeerBitComponent {
    /**
     * @param {?} seerBitService
     */
    constructor(seerBitService) {
        this.seerBitService = seerBitService;
        this.callback = new EventEmitter();
        this.close = new EventEmitter();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._options = this.seerBitService.getSeerBitOptions(obj);
        this.closeFn = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            if (!this.close.observers.length) {
                this.close.emit(...response);
            }
        });
        this.callbackFn = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    validateInput(obj) {
        if (!this.callback.observers.length) {
            return 'Seerbit: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.seerBitService.checkInput(obj);
    }
    /**
     * @return {?}
     */
    buttonClick() {
        return __awaiter(this, void 0, void 0, function* () {
            this.pay();
        });
    }
    /**
     * @return {?}
     */
    pay() {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = this.validateInput(this.options);
            this.generateOptions(this.options);
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.seerBitService.loadScript();
            window.SeerbitPay(this._options, this.closeFn, this.callbackFn);
        });
    }
}
SeerBitComponent.decorators = [
    { type: Component, args: [{
                selector: 'seer-bit',
                template: `<button [ngClass]="class" [ngStyle]="style"><ng-content></ng-content></button>`
            }] }
];
/** @nocollapse */
SeerBitComponent.ctorParameters = () => [
    { type: SeerbitService }
];
SeerBitComponent.propDecorators = {
    class: [{ type: Input }],
    style: [{ type: Input }],
    options: [{ type: Input }],
    callback: [{ type: Output }],
    close: [{ type: Output }],
    buttonClick: [{ type: HostListener, args: ['click',] }]
};
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
class NgxSeerbitModule {
}
NgxSeerbitModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SeerBitButtonDirective, SeerBitComponent],
                imports: [CommonModule],
                exports: [SeerBitButtonDirective, SeerBitComponent]
            },] }
];

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
