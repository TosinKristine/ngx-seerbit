/**
 * @fileoverview added by tsickle
 * Generated from: lib/seer-bit.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SeerbitService } from './seerbit-service';
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.SeerbitPay;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var errorText;
            return tslib_1.__generator(this, function (_a) {
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
                (_a = _this.close).emit.apply(_a, tslib_1.__spread(response));
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
            (_a = _this.callback).emit.apply(_a, tslib_1.__spread(response));
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
export { SeerBitButtonDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyLWJpdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRW5ELHVCQU9DOzs7SUFOQyw4QkFLRTs7QUFHSjtJQWlCRSxnQ0FBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSnhDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFLN0QsQ0FBQzs7OztJQUVLLG9DQUFHOzs7SUFBVDs7Ozs7O3dCQUNNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUVuQyxJQUFJLFNBQVMsRUFBRTs0QkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN6QixzQkFBTyxTQUFTLEVBQUM7eUJBQ2xCO3dCQUNELHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUF0QyxTQUFzQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Ozs7O0tBQ2hFOzs7OztJQUNELGdEQUFlOzs7O0lBQWYsVUFBZ0IsR0FBUTtRQUF4QixpQkFVQztRQVRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTzs7OztRQUFHOztZQUFDLGtCQUFXO2lCQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7Z0JBQVgsNkJBQVc7O1lBQ3pCLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLENBQUEsS0FBQSxLQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsSUFBSSw0QkFBSSxRQUFRLEdBQUU7YUFDOUI7UUFDSCxDQUFDLENBQUEsQ0FBQTtRQUNELElBQUksQ0FBQyxVQUFVOzs7O1FBQUc7O1lBQUMsa0JBQVc7aUJBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztnQkFBWCw2QkFBVzs7WUFDNUIsQ0FBQSxLQUFBLEtBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLDRCQUFJLFFBQVEsR0FBRTtRQUNsQyxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0QsOENBQWE7Ozs7SUFBYixVQUFjLEdBQW1CO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTywwR0FBMEcsQ0FBQztTQUNuSDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVLLDRDQUFXOzs7SUFEakI7OztnQkFFRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7S0FDWjs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtpQkFDdkI7Ozs7Z0JBYlEsY0FBYzs7OzBCQXVCcEIsS0FBSzsyQkFDTCxNQUFNO3dCQUNOLE1BQU07OEJBbUNOLFlBQVksU0FBQyxPQUFPOztJQUl2Qiw2QkFBQztDQUFBLEFBckRELElBcURDO1NBbERZLHNCQUFzQjs7O0lBU2pDLHlDQUFzQjs7SUFDdEIsMENBQWdFOztJQUNoRSx1Q0FBNkQ7Ozs7O0lBQzdELDBDQUFpRDs7SUFDakQseUNBQVk7O0lBQUMsNENBQWU7Ozs7O0lBQ2hCLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlZXJiaXRTZXJ2aWNlIH0gZnJvbSAnLi9zZWVyYml0LXNlcnZpY2UnO1xuaW1wb3J0IHsgU2VlckJpdE9wdGlvbnMsIFByaXZhdGVTZWVyQml0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL1NlZXJCaXRPcHRpb25zJztcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIFNlZXJiaXRQYXk6XG4gIHtcbiAgICAob3B0aW9uczogYW55LFxuICAgICAgY2xvc2U6IGFueSxcbiAgICAgIGNhbGxiYWNrOiBhbnkpXG4gIH07XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NlZXItYml0XSdcbn0pXG5leHBvcnQgY2xhc3MgU2VlckJpdEJ1dHRvbkRpcmVjdGl2ZSB7XG5cbiAgLy8gQElucHV0KCkgdHJhbnJlZjogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIC8vIEBJbnB1dCgpIGFtb3VudDogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBjYWxsYmFja3VybDogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBwdWJsaWNfa2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgX29wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVNlZXJCaXRPcHRpb25zPjtcbiAgY2xvc2VGbjphbnk7IGNhbGxiYWNrRm46YW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZXJCaXRTZXJ2aWNlOiBTZWVyYml0U2VydmljZSkge1xuXG4gIH1cblxuICBhc3luYyBwYXkoKSB7XG4gICAgbGV0IGVycm9yVGV4dCA9IHRoaXMudmFsaWRhdGVJbnB1dCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAoZXJyb3JUZXh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yVGV4dCk7XG4gICAgICByZXR1cm4gZXJyb3JUZXh0O1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlZXJCaXRTZXJ2aWNlLmxvYWRTY3JpcHQoKTtcbiAgICB3aW5kb3cuU2VlcmJpdFBheSh0aGlzLl9vcHRpb25zLCB0aGlzLmNsb3NlRm4sIHRoaXMuY2FsbGJhY2tGbilcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbnMob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5zZWVyQml0U2VydmljZS5nZXRTZWVyQml0T3B0aW9ucyhvYmopO1xuICAgIHRoaXMuY2xvc2VGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYWxsYmFja0ZuID0gKC4uLnJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQoLi4ucmVzcG9uc2UpO1xuICAgIH07XG4gIH1cbiAgdmFsaWRhdGVJbnB1dChvYmo6IFNlZXJCaXRPcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogSW5zZXJ0IGEgY2FsbGJhY2sgb3V0cHV0IGxpa2Ugc28gKGNhbGxiYWNrKT1cXCdQYXltZW50Q29tcGxldGUoJGV2ZW50KVxcJyB0byBjaGVjayBwYXltZW50IHN0YXR1cyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlZXJCaXRTZXJ2aWNlLmNoZWNrSW5wdXQob2JqKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGFzeW5jIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KCk7XG4gIH1cbn1cbiJdfQ==