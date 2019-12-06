/**
 * @fileoverview added by tsickle
 * Generated from: lib/seer-bit.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { SeerbitService } from './seerbit-service';
/**
 * @record
 */
function MyWindow() { }
if (false) {
    /** @type {?} */
    MyWindow.prototype.SeerbitPay;
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
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
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
export { SeerBitComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyLWJpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBQ25ELHVCQUtDOzs7SUFKQyw4QkFHRTs7QUFHSjtJQVlFLDBCQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKeEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUs3RCxDQUFDOzs7OztJQUNELDBDQUFlOzs7O0lBQWYsVUFBZ0IsR0FBUTtRQUF4QixpQkFVQztRQVRDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTzs7OztRQUFHOztZQUFDLGtCQUFXO2lCQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7Z0JBQVgsNkJBQVc7O1lBQ3pCLElBQUksQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLENBQUEsS0FBQSxLQUFJLENBQUMsS0FBSyxDQUFBLENBQUMsSUFBSSw0QkFBSSxRQUFRLEdBQUU7YUFDOUI7UUFDSCxDQUFDLENBQUEsQ0FBQTtRQUNELElBQUksQ0FBQyxVQUFVOzs7O1FBQUc7O1lBQUMsa0JBQVc7aUJBQVgsVUFBVyxFQUFYLHFCQUFXLEVBQVgsSUFBVztnQkFBWCw2QkFBVzs7WUFDNUIsQ0FBQSxLQUFBLEtBQUksQ0FBQyxRQUFRLENBQUEsQ0FBQyxJQUFJLDRCQUFJLFFBQVEsR0FBRTtRQUNsQyxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0Qsd0NBQWE7Ozs7SUFBYixVQUFjLEdBQW1CO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTywwR0FBMEcsQ0FBQztTQUNuSDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVLLHNDQUFXOzs7SUFEakI7OztnQkFFRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Ozs7S0FDWjs7OztJQUNPLDhCQUFHOzs7SUFBVDs7Ozs7O3dCQUNJLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNuQyxJQUFJLFNBQVMsRUFBRTs0QkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUN6QixzQkFBTyxTQUFTLEVBQUM7eUJBQ2xCO3dCQUNELHFCQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUE7O3dCQUF0QyxTQUFzQyxDQUFDO3dCQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Ozs7O0tBQ2hFOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsb0ZBQWdGO2lCQUMzRjs7OztnQkFYUSxjQUFjOzs7d0JBYXBCLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzJCQUNMLE1BQU07d0JBQ04sTUFBTTs4QkF1Qk4sWUFBWSxTQUFDLE9BQU87O0lBY3ZCLHVCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0ExQ1ksZ0JBQWdCOzs7SUFDM0IsaUNBQXVCOztJQUN2QixpQ0FBdUI7O0lBQ3ZCLG1DQUFzQjs7SUFDdEIsb0NBQWdFOztJQUNoRSxpQ0FBNkQ7Ozs7O0lBQzdELG9DQUFpRDs7SUFDakQsbUNBQWE7O0lBQUMsc0NBQWdCOzs7OztJQUNsQiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByaXZhdGVTZWVyQml0T3B0aW9ucywgU2VlckJpdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9TZWVyQml0T3B0aW9ucyc7XG5pbXBvcnQgeyBTZWVyYml0U2VydmljZSB9IGZyb20gJy4vc2VlcmJpdC1zZXJ2aWNlJztcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIFNlZXJiaXRQYXk6XG4gIHtcbiAgICAob3B0aW9uczogYW55LCBjbG9zZTogYW55LCBjYWxsYmFjazogYW55KVxuICB9O1xufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlZXItYml0JyxcbiAgdGVtcGxhdGU6IGA8YnV0dG9uIFtuZ0NsYXNzXT1cImNsYXNzXCIgW25nU3R5bGVdPVwic3R5bGVcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9idXR0b24+YCxcbn0pXG5leHBvcnQgY2xhc3MgU2VlckJpdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiBvYmplY3Q7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgX29wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVNlZXJCaXRPcHRpb25zPjtcbiAgY2xvc2VGbjogYW55OyBjYWxsYmFja0ZuOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VlckJpdFNlcnZpY2U6IFNlZXJiaXRTZXJ2aWNlKSB7XG5cbiAgfVxuICBnZW5lcmF0ZU9wdGlvbnMob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5zZWVyQml0U2VydmljZS5nZXRTZWVyQml0T3B0aW9ucyhvYmopO1xuICAgIHRoaXMuY2xvc2VGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYWxsYmFja0ZuID0gKC4uLnJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQoLi4ucmVzcG9uc2UpO1xuICAgIH07XG4gIH1cbiAgdmFsaWRhdGVJbnB1dChvYmo6IFNlZXJCaXRPcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogSW5zZXJ0IGEgY2FsbGJhY2sgb3V0cHV0IGxpa2Ugc28gKGNhbGxiYWNrKT1cXCdQYXltZW50Q29tcGxldGUoJGV2ZW50KVxcJyB0byBjaGVjayBwYXltZW50IHN0YXR1cyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlZXJCaXRTZXJ2aWNlLmNoZWNrSW5wdXQob2JqKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGFzeW5jIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KCk7XG4gIH1cbiAgICBhc3luYyBwYXkoKSB7XG4gICAgbGV0IGVycm9yVGV4dCA9IHRoaXMudmFsaWRhdGVJbnB1dCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHRoaXMub3B0aW9ucyk7XG4gICAgaWYgKGVycm9yVGV4dCkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvclRleHQpO1xuICAgICAgcmV0dXJuIGVycm9yVGV4dDtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZWVyQml0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgd2luZG93LlNlZXJiaXRQYXkodGhpcy5fb3B0aW9ucywgdGhpcy5jbG9zZUZuLCB0aGlzLmNhbGxiYWNrRm4pXG4gIH1cbn1cbiJdfQ==