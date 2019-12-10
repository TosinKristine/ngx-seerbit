/**
 * @fileoverview added by tsickle
 * Generated from: lib/seerbit-service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
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
            // script.setAttribute('src', '/assets/js/seerbit.js');
            script.setAttribute('src', 'https://checkout.seerbitapi.com/api/v1/seerbit.js');
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
    /** @nocollapse */ SeerbitService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SeerbitService_Factory() { return new SeerbitService(); }, token: SeerbitService, providedIn: "root" });
    return SeerbitService;
}());
export { SeerbitService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlcmJpdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlZXJiaXQvIiwic291cmNlcyI6WyJsaWIvc2VlcmJpdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFM0MsdUJBRUM7OztJQURDLDhCQUErRTs7QUFJakY7SUFJRTtJQUFnQixDQUFDOzs7O0lBRWpCLG1DQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ3hCLElBQUksTUFBTSxDQUFDLFVBQVUsSUFBSSxPQUFPLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBRTtnQkFDdEUsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTzthQUNSOztnQkFDSyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Z0JBQ25DLFVBQVU7OztZQUFHO2dCQUNqQixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsMEVBQTBFO1lBQzFFLHVEQUF1RDtZQUN2RCxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxtREFBbUQsQ0FBQyxDQUFDO1lBQ2hGLFVBQVU7OztZQUFDO2dCQUNULFVBQVUsQ0FBQztZQUNiLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFDRCwwQ0FBaUI7Ozs7SUFBakIsVUFBa0IsR0FBbUI7OztZQUU3QixjQUFjLEdBQW1CO1lBQ3JDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFDL0IsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRTtZQUNsQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXO1NBQzdCO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxtQ0FBVTs7OztJQUFWLFVBQVcsR0FBNEI7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTywwQ0FBMEMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyw2Q0FBNkMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sMENBQTBDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7O2dCQW5ERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozt5QkFURDtDQTJEQyxBQXBERCxJQW9EQztTQWpEWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VlckJpdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9TZWVyQml0T3B0aW9ucyc7XG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBTZWVyQml0UG9wOiB7IHNldHVwKG9wdGlvbnM6IFBhcnRpYWw8U2VlckJpdE9wdGlvbnM+KTogeyBvcGVuSWZyYW1lKCk6IGFueSB9IH07XG59XG5kZWNsYXJlIHZhciBTZWVyYml0UGF5O1xuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlZXJiaXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh3aW5kb3cuU2VlckJpdFBvcCAmJiB0eXBlb2Ygd2luZG93LlNlZXJCaXRQb3Auc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgICAvLyAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHA6Ly9ydWJpYy5zdXJnZS5zaC9hcGkvdjEvc2VlcmJpdC5qcycpO1xuICAgICAgLy8gc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJy9hc3NldHMvanMvc2VlcmJpdC5qcycpO1xuICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgJ2h0dHBzOi8vY2hlY2tvdXQuc2VlcmJpdGFwaS5jb20vYXBpL3YxL3NlZXJiaXQuanMnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBTZWVyYml0UGF5O1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0U2VlckJpdE9wdGlvbnMob2JqOiBTZWVyQml0T3B0aW9ucyk6IFNlZXJCaXRPcHRpb25zIHtcbiAgICAvL2NvbnN0IHNlZXJCaXRPcHRpb25zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBzZWVyQml0T3B0aW9uczogU2VlckJpdE9wdGlvbnMgPSB7XG4gICAgICBhbW91bnQ6IG9iai5hbW91bnQsXG4gICAgICB0cmFucmVmOiBvYmoudHJhbnJlZixcbiAgICAgIHB1YmxpY19rZXk6IG9iai5wdWJsaWNfa2V5LFxuICAgICAgY3VycmVuY3k6IG9iai5jdXJyZW5jeSB8fCAnTkdOJyxcbiAgICAgIGNhbGxiYWNrdXJsOiBvYmouY2FsbGJhY2t1cmwgfHwgJycsXG4gICAgICBjb3VudHJ5OiBvYmouY291bnRyeSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvYmouZGVzY3JpcHRpb25cbiAgICB9O1xuICAgIHJldHVybiBzZWVyQml0T3B0aW9ucztcbiAgfVxuICBjaGVja0lucHV0KG9iajogUGFydGlhbDxTZWVyQml0T3B0aW9ucz4pOiBzdHJpbmcge1xuICAgIGlmICghb2JqLnB1YmxpY19rZXkpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogUGxlYXNlIGluc2VydCBhIHlvdXIgcHVibGljIGtleSc7XG4gICAgfVxuICAgIGlmICghb2JqLmFtb3VudCkge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBUcmFuc2FjdGlvbiBhbW91bnQgY2Fubm90IGJlIGVtcHR5JztcbiAgICB9XG4gICAgaWYgKCFvYmoudHJhbnJlZikge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBUcmFuc2FjdGlvbiByZWYgY2Fubm90IGJlIGVtcHR5JztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=