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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vlci1iaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyLWJpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7O0FBQ25ELHVCQUtDOzs7SUFKQyw4QkFHRTs7QUFPSixNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBUTNCLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUp4QyxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBSzdELENBQUM7Ozs7O0lBQ0QsZUFBZSxDQUFDLEdBQVE7UUFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPOzs7O1FBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDOUI7UUFDSCxDQUFDLENBQUEsQ0FBQTtRQUNELElBQUksQ0FBQyxVQUFVOzs7O1FBQUcsQ0FBQyxHQUFHLFFBQVEsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOzs7OztJQUNELGFBQWEsQ0FBQyxHQUFtQjtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ25DLE9BQU8sMEdBQTBHLENBQUM7U0FDbkg7UUFDRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7SUFFSyxXQUFXOztZQUNmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7S0FBQTs7OztJQUNPLEdBQUc7OztnQkFDTCxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ2hELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25DLElBQUksU0FBUyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sU0FBUyxDQUFDO2FBQ2xCO1lBQ0QsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNqRSxDQUFDO0tBQUE7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxnRkFBZ0Y7YUFDM0Y7Ozs7WUFYUSxjQUFjOzs7b0JBYXBCLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLE1BQU07b0JBQ04sTUFBTTswQkF1Qk4sWUFBWSxTQUFDLE9BQU87Ozs7SUEzQnJCLGlDQUF1Qjs7SUFDdkIsaUNBQXVCOztJQUN2QixtQ0FBc0I7O0lBQ3RCLG9DQUFnRTs7SUFDaEUsaUNBQTZEOzs7OztJQUM3RCxvQ0FBaUQ7O0lBQ2pELG1DQUFhOztJQUFDLHNDQUFnQjs7Ozs7SUFDbEIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcml2YXRlU2VlckJpdE9wdGlvbnMsIFNlZXJCaXRPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvU2VlckJpdE9wdGlvbnMnO1xuaW1wb3J0IHsgU2VlcmJpdFNlcnZpY2UgfSBmcm9tICcuL3NlZXJiaXQtc2VydmljZSc7XG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBTZWVyYml0UGF5OlxuICB7XG4gICAgKG9wdGlvbnM6IGFueSwgY2xvc2U6IGFueSwgY2FsbGJhY2s6IGFueSlcbiAgfTtcbn1cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWVyLWJpdCcsXG4gIHRlbXBsYXRlOiBgPGJ1dHRvbiBbbmdDbGFzc109XCJjbGFzc1wiIFtuZ1N0eWxlXT1cInN0eWxlXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPmAsXG59KVxuZXhwb3J0IGNsYXNzIFNlZXJCaXRDb21wb25lbnQge1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogb2JqZWN0O1xuICBASW5wdXQoKSBvcHRpb25zOiBhbnk7XG4gIEBPdXRwdXQoKSBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwcml2YXRlIF9vcHRpb25zOiBQYXJ0aWFsPFByaXZhdGVTZWVyQml0T3B0aW9ucz47XG4gIGNsb3NlRm46IGFueTsgY2FsbGJhY2tGbjogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlZXJCaXRTZXJ2aWNlOiBTZWVyYml0U2VydmljZSkge1xuXG4gIH1cbiAgZ2VuZXJhdGVPcHRpb25zKG9iajogYW55KSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuc2VlckJpdFNlcnZpY2UuZ2V0U2VlckJpdE9wdGlvbnMob2JqKTtcbiAgICB0aGlzLmNsb3NlRm4gPSAoLi4ucmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghdGhpcy5jbG9zZS5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UuZW1pdCguLi5yZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2FsbGJhY2tGbiA9ICguLi5yZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5jYWxsYmFjay5lbWl0KC4uLnJlc3BvbnNlKTtcbiAgICB9O1xuICB9XG4gIHZhbGlkYXRlSW5wdXQob2JqOiBTZWVyQml0T3B0aW9ucykge1xuICAgIGlmICghdGhpcy5jYWxsYmFjay5vYnNlcnZlcnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IEluc2VydCBhIGNhbGxiYWNrIG91dHB1dCBsaWtlIHNvIChjYWxsYmFjayk9XFwnUGF5bWVudENvbXBsZXRlKCRldmVudClcXCcgdG8gY2hlY2sgcGF5bWVudCBzdGF0dXMnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZWVyQml0U2VydmljZS5jaGVja0lucHV0KG9iaik7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBhc3luYyBidXR0b25DbGljaygpIHtcbiAgICB0aGlzLnBheSgpO1xuICB9XG4gICAgYXN5bmMgcGF5KCkge1xuICAgIGxldCBlcnJvclRleHQgPSB0aGlzLnZhbGlkYXRlSW5wdXQodGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmdlbmVyYXRlT3B0aW9ucyh0aGlzLm9wdGlvbnMpO1xuICAgIGlmIChlcnJvclRleHQpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JUZXh0KTtcbiAgICAgIHJldHVybiBlcnJvclRleHQ7XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuc2VlckJpdFNlcnZpY2UubG9hZFNjcmlwdCgpO1xuICAgIHdpbmRvdy5TZWVyYml0UGF5KHRoaXMuX29wdGlvbnMsIHRoaXMuY2xvc2VGbiwgdGhpcy5jYWxsYmFja0ZuKVxuICB9XG59XG4iXX0=