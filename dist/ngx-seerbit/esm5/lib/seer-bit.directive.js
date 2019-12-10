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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlZXJiaXQvIiwic291cmNlcyI6WyJsaWIvc2Vlci1iaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVuRCx1QkFPQzs7O0lBTkMsOEJBS0U7O0FBR0o7SUFpQkUsZ0NBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUp4QyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSzdELENBQUM7Ozs7SUFFSyxvQ0FBRzs7O0lBQVQ7Ozs7Ozt3QkFDTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFbkMsSUFBSSxTQUFTLEVBQUU7NEJBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQzs0QkFDekIsc0JBQU8sU0FBUyxFQUFDO3lCQUNsQjt3QkFDRCxxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFBOzt3QkFBdEMsU0FBc0MsQ0FBQzt3QkFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBOzs7OztLQUNoRTs7Ozs7SUFDRCxnREFBZTs7OztJQUFmLFVBQWdCLEdBQVE7UUFBeEIsaUJBVUM7UUFUQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRzs7WUFBQyxrQkFBVztpQkFBWCxVQUFXLEVBQVgscUJBQVcsRUFBWCxJQUFXO2dCQUFYLDZCQUFXOztZQUN6QixJQUFJLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxDQUFBLEtBQUEsS0FBSSxDQUFDLEtBQUssQ0FBQSxDQUFDLElBQUksNEJBQUksUUFBUSxHQUFFO2FBQzlCO1FBQ0gsQ0FBQyxDQUFBLENBQUE7UUFDRCxJQUFJLENBQUMsVUFBVTs7OztRQUFHOztZQUFDLGtCQUFXO2lCQUFYLFVBQVcsRUFBWCxxQkFBVyxFQUFYLElBQVc7Z0JBQVgsNkJBQVc7O1lBQzVCLENBQUEsS0FBQSxLQUFJLENBQUMsUUFBUSxDQUFBLENBQUMsSUFBSSw0QkFBSSxRQUFRLEdBQUU7UUFDbEMsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7OztJQUNELDhDQUFhOzs7O0lBQWIsVUFBYyxHQUFtQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sMEdBQTBHLENBQUM7U0FDbkg7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFSyw0Q0FBVzs7O0lBRGpCOzs7Z0JBRUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDOzs7O0tBQ1o7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQWJRLGNBQWM7OzswQkF1QnBCLEtBQUs7MkJBQ0wsTUFBTTt3QkFDTixNQUFNOzhCQW1DTixZQUFZLFNBQUMsT0FBTzs7SUFJdkIsNkJBQUM7Q0FBQSxBQXJERCxJQXFEQztTQWxEWSxzQkFBc0I7OztJQVNqQyx5Q0FBc0I7O0lBQ3RCLDBDQUFnRTs7SUFDaEUsdUNBQTZEOzs7OztJQUM3RCwwQ0FBaUQ7O0lBQ2pELHlDQUFZOztJQUFDLDRDQUFlOzs7OztJQUNoQixnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWVyYml0U2VydmljZSB9IGZyb20gJy4vc2VlcmJpdC1zZXJ2aWNlJztcbmltcG9ydCB7IFNlZXJCaXRPcHRpb25zLCBQcml2YXRlU2VlckJpdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9TZWVyQml0T3B0aW9ucyc7XG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBTZWVyYml0UGF5OlxuICB7XG4gICAgKG9wdGlvbnM6IGFueSxcbiAgICAgIGNsb3NlOiBhbnksXG4gICAgICBjYWxsYmFjazogYW55KVxuICB9O1xufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzZWVyLWJpdF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlZXJCaXRCdXR0b25EaXJlY3RpdmUge1xuXG4gIC8vIEBJbnB1dCgpIHRyYW5yZWY6IHN0cmluZztcbiAgLy8gQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgLy8gQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBhbW91bnQ6IHN0cmluZztcbiAgLy8gQElucHV0KCkgY2FsbGJhY2t1cmw6IHN0cmluZztcbiAgLy8gQElucHV0KCkgcHVibGljX2tleTogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVTZWVyQml0T3B0aW9ucz47XG4gIGNsb3NlRm46YW55OyBjYWxsYmFja0ZuOmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWVyQml0U2VydmljZTogU2VlcmJpdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgYXN5bmMgcGF5KCkge1xuICAgIGxldCBlcnJvclRleHQgPSB0aGlzLnZhbGlkYXRlSW5wdXQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKGVycm9yVGV4dCkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvclRleHQpO1xuICAgICAgcmV0dXJuIGVycm9yVGV4dDtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZWVyQml0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgd2luZG93LlNlZXJiaXRQYXkodGhpcy5fb3B0aW9ucywgdGhpcy5jbG9zZUZuLCB0aGlzLmNhbGxiYWNrRm4pXG4gIH1cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuc2VlckJpdFNlcnZpY2UuZ2V0U2VlckJpdE9wdGlvbnMob2JqKTtcbiAgICB0aGlzLmNsb3NlRm4gPSAoLi4ucmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghdGhpcy5jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCguLi5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FsbGJhY2tGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICB9O1xuICB9XG4gIHZhbGlkYXRlSW5wdXQob2JqOiBTZWVyQml0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IEluc2VydCBhIGNhbGxiYWNrIG91dHB1dCBsaWtlIHNvIChjYWxsYmFjayk9XFwnUGF5bWVudENvbXBsZXRlKCRldmVudClcXCcgdG8gY2hlY2sgcGF5bWVudCBzdGF0dXMnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWVyQml0U2VydmljZS5jaGVja0lucHV0KG9iaik7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhc3luYyBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLnBheSgpO1xuICB9XG59XG4iXX0=