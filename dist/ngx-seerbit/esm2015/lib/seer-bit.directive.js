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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyLWJpdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBRW5ELHVCQU9DOzs7SUFOQyw4QkFLRTs7QUFNSixNQUFNLE9BQU8sc0JBQXNCOzs7O0lBY2pDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUp4QyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSzdELENBQUM7Ozs7SUFFSyxHQUFHOzs7Z0JBQ0gsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUVuQyxJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDakUsQ0FBQztLQUFBOzs7OztJQUNELGVBQWUsQ0FBQyxHQUFRO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTzs7OztRQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFBLENBQUE7UUFDRCxJQUFJLENBQUMsVUFBVTs7OztRQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsR0FBbUI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLDBHQUEwRyxDQUFDO1NBQ25IO1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUssV0FBVzs7WUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO0tBQUE7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFiUSxjQUFjOzs7c0JBdUJwQixLQUFLO3VCQUNMLE1BQU07b0JBQ04sTUFBTTswQkFtQ04sWUFBWSxTQUFDLE9BQU87Ozs7SUFyQ3JCLHlDQUFzQjs7SUFDdEIsMENBQWdFOztJQUNoRSx1Q0FBNkQ7Ozs7O0lBQzdELDBDQUFpRDs7SUFDakQseUNBQVk7O0lBQUMsNENBQWU7Ozs7O0lBQ2hCLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlZXJiaXRTZXJ2aWNlIH0gZnJvbSAnLi9zZWVyYml0LXNlcnZpY2UnO1xuaW1wb3J0IHsgU2VlckJpdE9wdGlvbnMsIFByaXZhdGVTZWVyQml0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL1NlZXJCaXRPcHRpb25zJztcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIFNlZXJiaXRQYXk6XG4gIHtcbiAgICAob3B0aW9uczogYW55LFxuICAgICAgY2xvc2U6IGFueSxcbiAgICAgIGNhbGxiYWNrOiBhbnkpXG4gIH07XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NlZXItYml0XSdcbn0pXG5leHBvcnQgY2xhc3MgU2VlckJpdEJ1dHRvbkRpcmVjdGl2ZSB7XG5cbiAgLy8gQElucHV0KCkgdHJhbnJlZjogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBjdXJyZW5jeTogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBjb3VudHJ5OiBzdHJpbmc7XG4gIC8vIEBJbnB1dCgpIGFtb3VudDogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBjYWxsYmFja3VybDogc3RyaW5nO1xuICAvLyBASW5wdXQoKSBwdWJsaWNfa2V5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueTtcbiAgQE91dHB1dCgpIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2xvc2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHByaXZhdGUgX29wdGlvbnM6IFBhcnRpYWw8UHJpdmF0ZVNlZXJCaXRPcHRpb25zPjtcbiAgY2xvc2VGbjphbnk7IGNhbGxiYWNrRm46YW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZXJCaXRTZXJ2aWNlOiBTZWVyYml0U2VydmljZSkge1xuXG4gIH1cblxuICBhc3luYyBwYXkoKSB7XG4gICAgbGV0IGVycm9yVGV4dCA9IHRoaXMudmFsaWRhdGVJbnB1dCh0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuZ2VuZXJhdGVPcHRpb25zKHRoaXMub3B0aW9ucyk7XG5cbiAgICBpZiAoZXJyb3JUZXh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yVGV4dCk7XG4gICAgICByZXR1cm4gZXJyb3JUZXh0O1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlZXJCaXRTZXJ2aWNlLmxvYWRTY3JpcHQoKTtcbiAgICB3aW5kb3cuU2VlcmJpdFBheSh0aGlzLl9vcHRpb25zLCB0aGlzLmNsb3NlRm4sIHRoaXMuY2FsbGJhY2tGbilcbiAgfVxuICBnZW5lcmF0ZU9wdGlvbnMob2JqOiBhbnkpIHtcbiAgICB0aGlzLl9vcHRpb25zID0gdGhpcy5zZWVyQml0U2VydmljZS5nZXRTZWVyQml0T3B0aW9ucyhvYmopO1xuICAgIHRoaXMuY2xvc2VGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmNsb3NlLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5jbG9zZS5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jYWxsYmFja0ZuID0gKC4uLnJlc3BvbnNlKSA9PiB7XG4gICAgICB0aGlzLmNhbGxiYWNrLmVtaXQoLi4ucmVzcG9uc2UpO1xuICAgIH07XG4gIH1cbiAgdmFsaWRhdGVJbnB1dChvYmo6IFNlZXJCaXRPcHRpb25zKSB7XG4gICAgaWYgKCF0aGlzLmNhbGxiYWNrLm9ic2VydmVycy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogSW5zZXJ0IGEgY2FsbGJhY2sgb3V0cHV0IGxpa2Ugc28gKGNhbGxiYWNrKT1cXCdQYXltZW50Q29tcGxldGUoJGV2ZW50KVxcJyB0byBjaGVjayBwYXltZW50IHN0YXR1cyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNlZXJCaXRTZXJ2aWNlLmNoZWNrSW5wdXQob2JqKTtcbiAgfVxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIGFzeW5jIGJ1dHRvbkNsaWNrKCkge1xuICAgIHRoaXMucGF5KCk7XG4gIH1cbn1cbiJdfQ==