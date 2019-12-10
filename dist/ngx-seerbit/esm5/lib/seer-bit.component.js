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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlZXJiaXQvIiwic291cmNlcyI6WyJsaWIvc2Vlci1iaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUNuRCx1QkFLQzs7O0lBSkMsOEJBR0U7O0FBR0o7SUFZRSwwQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSnhDLGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFLN0QsQ0FBQzs7Ozs7SUFDRCwwQ0FBZTs7OztJQUFmLFVBQWdCLEdBQVE7UUFBeEIsaUJBVUM7UUFUQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRzs7WUFBQyxrQkFBVztpQkFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO2dCQUFYLDZCQUFXOztZQUN6QixJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxDQUFBLEtBQUEsS0FBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLElBQUksNEJBQUksUUFBUSxHQUFFO2FBQzlCO1FBQ0gsQ0FBQyxDQUFBLENBQUE7UUFDRCxJQUFJLENBQUMsVUFBVTs7OztRQUFHOztZQUFDLGtCQUFXO2lCQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7Z0JBQVgsNkJBQVc7O1lBQzVCLENBQUEsS0FBQSxLQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsSUFBSSw0QkFBSSxRQUFRLEdBQUU7UUFDbEMsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7OztJQUNELHdDQUFhOzs7O0lBQWIsVUFBYyxHQUFtQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sMEdBQTBHLENBQUM7U0FDbkg7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFSyxzQ0FBVzs7O0lBRGpCOzs7Z0JBRUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7O0tBQ1o7Ozs7SUFDTyw4QkFBRzs7O0lBQVQ7Ozs7Ozt3QkFDSSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsSUFBSSxTQUFTLEVBQUU7NEJBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDekIsc0JBQU8sU0FBUyxFQUFDO3lCQUNsQjt3QkFDRCxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdEMsU0FBc0MsQ0FBQzt3QkFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7OztLQUNoRTs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLG9GQUFnRjtpQkFDM0Y7Ozs7Z0JBWFEsY0FBYzs7O3dCQWFwQixLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxNQUFNO3dCQUNOLE1BQU07OEJBdUJOLFlBQVksU0FBQyxPQUFPOztJQWN2Qix1QkFBQztDQUFBLEFBOUNELElBOENDO1NBMUNZLGdCQUFnQjs7O0lBQzNCLGlDQUF1Qjs7SUFDdkIsaUNBQXVCOztJQUN2QixtQ0FBc0I7O0lBQ3RCLG9DQUFnRTs7SUFDaEUsaUNBQTZEOzs7OztJQUM3RCxvQ0FBaUQ7O0lBQ2pELG1DQUFhOztJQUFDLHNDQUFnQjs7Ozs7SUFDbEIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml2YXRlU2VlckJpdE9wdGlvbnMsIFNlZXJCaXRPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvU2VlckJpdE9wdGlvbnMnO1xuaW1wb3J0IHsgU2VlcmJpdFNlcnZpY2UgfSBmcm9tICcuL3NlZXJiaXQtc2VydmljZSc7XG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBTZWVyYml0UGF5OlxuICB7XG4gICAgKG9wdGlvbnM6IGFueSwgY2xvc2U6IGFueSwgY2FsbGJhY2s6IGFueSlcbiAgfTtcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWVyLWJpdCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBbbmdDbGFzc109XCJjbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlZXJCaXRDb21wb25lbnQge1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVTZWVyQml0T3B0aW9ucz47XG4gIGNsb3NlRm46IGFueTsgY2FsbGJhY2tGbjogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZXJCaXRTZXJ2aWNlOiBTZWVyYml0U2VydmljZSkge1xuXG4gIH1cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuc2VlckJpdFNlcnZpY2UuZ2V0U2VlckJpdE9wdGlvbnMob2JqKTtcbiAgICB0aGlzLmNsb3NlRm4gPSAoLi4ucmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghdGhpcy5jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCguLi5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FsbGJhY2tGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICB9O1xuICB9XG4gIHZhbGlkYXRlSW5wdXQob2JqOiBTZWVyQml0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IEluc2VydCBhIGNhbGxiYWNrIG91dHB1dCBsaWtlIHNvIChjYWxsYmFjayk9XFwnUGF5bWVudENvbXBsZXRlKCRldmVudClcXCcgdG8gY2hlY2sgcGF5bWVudCBzdGF0dXMnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWVyQml0U2VydmljZS5jaGVja0lucHV0KG9iaik7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhc3luYyBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLnBheSgpO1xuICB9XG4gICAgYXN5bmMgcGF5KCkge1xuICAgIGxldCBlcnJvclRleHQgPSB0aGlzLnZhbGlkYXRlSW5wdXQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xuICAgIGlmIChlcnJvclRleHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUZXh0KTtcbiAgICAgIHJldHVybiBlcnJvclRleHQ7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2VlckJpdFNlcnZpY2UubG9hZFNjcmlwdCgpO1xuICAgIHdpbmRvdy5TZWVyYml0UGF5KHRoaXMuX29wdGlvbnMsIHRoaXMuY2xvc2VGbiwgdGhpcy5jYWxsYmFja0ZuKVxuICB9XG59XG4iXX0=