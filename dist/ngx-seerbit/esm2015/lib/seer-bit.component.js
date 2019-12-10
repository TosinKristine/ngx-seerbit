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
export class SeerBitComponent {
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.pay();
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlZXJiaXQvIiwic291cmNlcyI6WyJsaWIvc2Vlci1iaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUNuRCx1QkFLQzs7O0lBSkMsOEJBR0U7O0FBT0osTUFBTSxPQUFPLGdCQUFnQjs7OztJQVEzQixZQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFKeEMsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUs3RCxDQUFDOzs7OztJQUNELGVBQWUsQ0FBQyxHQUFRO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsT0FBTzs7OztRQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2FBQzlCO1FBQ0gsQ0FBQyxDQUFBLENBQUE7UUFDRCxJQUFJLENBQUMsVUFBVTs7OztRQUFHLENBQUMsR0FBRyxRQUFRLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQSxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCxhQUFhLENBQUMsR0FBbUI7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLDBHQUEwRyxDQUFDO1NBQ25IO1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O0lBRUssV0FBVzs7WUFDZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO0tBQUE7Ozs7SUFDTyxHQUFHOzs7Z0JBQ0wsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNoRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNuQyxJQUFJLFNBQVMsRUFBRTtnQkFDYixPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDakUsQ0FBQztLQUFBOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsZ0ZBQWdGO2FBQzNGOzs7O1lBWFEsY0FBYzs7O29CQWFwQixLQUFLO29CQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxNQUFNO29CQUNOLE1BQU07MEJBdUJOLFlBQVksU0FBQyxPQUFPOzs7O0lBM0JyQixpQ0FBdUI7O0lBQ3ZCLGlDQUF1Qjs7SUFDdkIsbUNBQXNCOztJQUN0QixvQ0FBZ0U7O0lBQ2hFLGlDQUE2RDs7Ozs7SUFDN0Qsb0NBQWlEOztJQUNqRCxtQ0FBYTs7SUFBQyxzQ0FBZ0I7Ozs7O0lBQ2xCLDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJpdmF0ZVNlZXJCaXRPcHRpb25zLCBTZWVyQml0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL1NlZXJCaXRPcHRpb25zJztcbmltcG9ydCB7IFNlZXJiaXRTZXJ2aWNlIH0gZnJvbSAnLi9zZWVyYml0LXNlcnZpY2UnO1xuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgU2VlcmJpdFBheTpcbiAge1xuICAgIChvcHRpb25zOiBhbnksIGNsb3NlOiBhbnksIGNhbGxiYWNrOiBhbnkpXG4gIH07XG59XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2Vlci1iaXQnLFxuICB0ZW1wbGF0ZTogYDxidXR0b24gW25nQ2xhc3NdPVwiY2xhc3NcIiBbbmdTdHlsZV09XCJzdHlsZVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2J1dHRvbj5gLFxufSlcbmV4cG9ydCBjbGFzcyBTZWVyQml0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgb3B0aW9uczogYW55O1xuICBAT3V0cHV0KCkgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogUGFydGlhbDxQcml2YXRlU2VlckJpdE9wdGlvbnM+O1xuICBjbG9zZUZuOiBhbnk7IGNhbGxiYWNrRm46IGFueTtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZWVyQml0U2VydmljZTogU2VlcmJpdFNlcnZpY2UpIHtcblxuICB9XG4gIGdlbmVyYXRlT3B0aW9ucyhvYmo6IGFueSkge1xuICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLnNlZXJCaXRTZXJ2aWNlLmdldFNlZXJCaXRPcHRpb25zKG9iaik7XG4gICAgdGhpcy5jbG9zZUZuID0gKC4uLnJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY2xvc2Uub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmNsb3NlLmVtaXQoLi4ucmVzcG9uc2UpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNhbGxiYWNrRm4gPSAoLi4ucmVzcG9uc2UpID0+IHtcbiAgICAgIHRoaXMuY2FsbGJhY2suZW1pdCguLi5yZXNwb25zZSk7XG4gICAgfTtcbiAgfVxuICB2YWxpZGF0ZUlucHV0KG9iajogU2VlckJpdE9wdGlvbnMpIHtcbiAgICBpZiAoIXRoaXMuY2FsbGJhY2sub2JzZXJ2ZXJzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBJbnNlcnQgYSBjYWxsYmFjayBvdXRwdXQgbGlrZSBzbyAoY2FsbGJhY2spPVxcJ1BheW1lbnRDb21wbGV0ZSgkZXZlbnQpXFwnIHRvIGNoZWNrIHBheW1lbnQgc3RhdHVzJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2VlckJpdFNlcnZpY2UuY2hlY2tJbnB1dChvYmopO1xuICB9XG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgYXN5bmMgYnV0dG9uQ2xpY2soKSB7XG4gICAgdGhpcy5wYXkoKTtcbiAgfVxuICAgIGFzeW5jIHBheSgpIHtcbiAgICBsZXQgZXJyb3JUZXh0ID0gdGhpcy52YWxpZGF0ZUlucHV0KHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5nZW5lcmF0ZU9wdGlvbnModGhpcy5vcHRpb25zKTtcbiAgICBpZiAoZXJyb3JUZXh0KSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yVGV4dCk7XG4gICAgICByZXR1cm4gZXJyb3JUZXh0O1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLnNlZXJCaXRTZXJ2aWNlLmxvYWRTY3JpcHQoKTtcbiAgICB3aW5kb3cuU2VlcmJpdFBheSh0aGlzLl9vcHRpb25zLCB0aGlzLmNsb3NlRm4sIHRoaXMuY2FsbGJhY2tGbilcbiAgfVxufVxuIl19