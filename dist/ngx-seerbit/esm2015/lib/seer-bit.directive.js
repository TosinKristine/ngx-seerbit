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
export class SeerBitButtonDirective {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlZXJiaXQvIiwic291cmNlcyI6WyJsaWIvc2Vlci1iaXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUVuRCx1QkFPQzs7O0lBTkMsOEJBS0U7O0FBTUosTUFBTSxPQUFPLHNCQUFzQjs7OztJQWNqQyxZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKeEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUs3RCxDQUFDOzs7O0lBRUssR0FBRzs7O2dCQUNILFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDaEQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbkMsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekIsT0FBTyxTQUFTLENBQUM7YUFDbEI7WUFDRCxNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDdkMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ2pFLENBQUM7S0FBQTs7Ozs7SUFDRCxlQUFlLENBQUMsR0FBUTtRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE9BQU87Ozs7UUFBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtnQkFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQzthQUM5QjtRQUNILENBQUMsQ0FBQSxDQUFBO1FBQ0QsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBRyxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLEdBQW1CO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDbkMsT0FBTywwR0FBMEcsQ0FBQztTQUNuSDtRQUNELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7OztJQUVLLFdBQVc7O1lBQ2YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQztLQUFBOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBYlEsY0FBYzs7O3NCQXVCcEIsS0FBSzt1QkFDTCxNQUFNO29CQUNOLE1BQU07MEJBbUNOLFlBQVksU0FBQyxPQUFPOzs7O0lBckNyQix5Q0FBc0I7O0lBQ3RCLDBDQUFnRTs7SUFDaEUsdUNBQTZEOzs7OztJQUM3RCwwQ0FBaUQ7O0lBQ2pELHlDQUFZOztJQUFDLDRDQUFlOzs7OztJQUNoQixnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWVyYml0U2VydmljZSB9IGZyb20gJy4vc2VlcmJpdC1zZXJ2aWNlJztcbmltcG9ydCB7IFNlZXJCaXRPcHRpb25zLCBQcml2YXRlU2VlckJpdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9TZWVyQml0T3B0aW9ucyc7XG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBTZWVyYml0UGF5OlxuICB7XG4gICAgKG9wdGlvbnM6IGFueSxcbiAgICAgIGNsb3NlOiBhbnksXG4gICAgICBjYWxsYmFjazogYW55KVxuICB9O1xufVxuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzZWVyLWJpdF0nXG59KVxuZXhwb3J0IGNsYXNzIFNlZXJCaXRCdXR0b25EaXJlY3RpdmUge1xuXG4gIC8vIEBJbnB1dCgpIHRyYW5yZWY6IHN0cmluZztcbiAgLy8gQElucHV0KCkgY3VycmVuY3k6IHN0cmluZztcbiAgLy8gQElucHV0KCkgZGVzY3JpcHRpb246IHN0cmluZztcbiAgLy8gQElucHV0KCkgY291bnRyeTogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBhbW91bnQ6IHN0cmluZztcbiAgLy8gQElucHV0KCkgY2FsbGJhY2t1cmw6IHN0cmluZztcbiAgLy8gQElucHV0KCkgcHVibGljX2tleTogc3RyaW5nO1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVTZWVyQml0T3B0aW9ucz47XG4gIGNsb3NlRm46YW55OyBjYWxsYmFja0ZuOmFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWVyQml0U2VydmljZTogU2VlcmJpdFNlcnZpY2UpIHtcblxuICB9XG5cbiAgYXN5bmMgcGF5KCkge1xuICAgIGxldCBlcnJvclRleHQgPSB0aGlzLnZhbGlkYXRlSW5wdXQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xuXG4gICAgaWYgKGVycm9yVGV4dCkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvclRleHQpO1xuICAgICAgcmV0dXJuIGVycm9yVGV4dDtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5zZWVyQml0U2VydmljZS5sb2FkU2NyaXB0KCk7XG4gICAgd2luZG93LlNlZXJiaXRQYXkodGhpcy5fb3B0aW9ucywgdGhpcy5jbG9zZUZuLCB0aGlzLmNhbGxiYWNrRm4pXG4gIH1cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuc2VlckJpdFNlcnZpY2UuZ2V0U2VlckJpdE9wdGlvbnMob2JqKTtcbiAgICB0aGlzLmNsb3NlRm4gPSAoLi4ucmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghdGhpcy5jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCguLi5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FsbGJhY2tGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICB9O1xuICB9XG4gIHZhbGlkYXRlSW5wdXQob2JqOiBTZWVyQml0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IEluc2VydCBhIGNhbGxiYWNrIG91dHB1dCBsaWtlIHNvIChjYWxsYmFjayk9XFwnUGF5bWVudENvbXBsZXRlKCRldmVudClcXCcgdG8gY2hlY2sgcGF5bWVudCBzdGF0dXMnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWVyQml0U2VydmljZS5jaGVja0lucHV0KG9iaik7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhc3luYyBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLnBheSgpO1xuICB9XG59XG4iXX0=