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
export class SeerbitService {
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
/** @nocollapse */ SeerbitService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SeerbitService_Factory() { return new SeerbitService(); }, token: SeerbitService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlcmJpdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyYml0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQyx1QkFFQzs7O0lBREMsOEJBQStFOztBQU9qRixNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixVQUFVO1FBQ1IsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQ3RFLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU87YUFDUjs7a0JBQ0ssTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O2tCQUNuQyxVQUFVOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM5QywwRUFBMEU7WUFDeEUsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztZQUNwRCxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsVUFBVSxDQUFDO1lBQ2IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUNELGlCQUFpQixDQUFDLEdBQW1COzs7Y0FFN0IsY0FBYyxHQUFtQjtZQUNyQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07WUFDbEIsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVTtZQUMxQixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsSUFBSSxLQUFLO1lBQy9CLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVyxJQUFJLEVBQUU7WUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxPQUFPO1lBQ3BCLFdBQVcsRUFBRSxHQUFHLENBQUMsV0FBVztTQUM3QjtRQUNELE9BQU8sY0FBYyxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLEdBQTRCO1FBQ3JDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU8sMENBQTBDLENBQUM7U0FDbkQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU8sNkNBQTZDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPLDBDQUEwQyxDQUFDO1NBQ25EO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7WUFsREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VlckJpdE9wdGlvbnMgfSBmcm9tICcuL21vZGVscy9TZWVyQml0T3B0aW9ucyc7XG5pbnRlcmZhY2UgTXlXaW5kb3cgZXh0ZW5kcyBXaW5kb3cge1xuICBTZWVyQml0UG9wOiB7IHNldHVwKG9wdGlvbnM6IFBhcnRpYWw8U2VlckJpdE9wdGlvbnM+KTogeyBvcGVuSWZyYW1lKCk6IGFueSB9IH07XG59XG5kZWNsYXJlIHZhciBTZWVyYml0UGF5O1xuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNlZXJiaXRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBsb2FkU2NyaXB0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIGlmICh3aW5kb3cuU2VlckJpdFBvcCAmJiB0eXBlb2Ygd2luZG93LlNlZXJCaXRQb3Auc2V0dXAgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBzY3JpcHQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICB3aW5kb3cuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgY29uc3Qgb25Mb2FkRnVuYyA9ICgpID0+IHtcbiAgICAgICAgc2NyaXB0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgLy8gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwOi8vcnViaWMuc3VyZ2Uuc2gvYXBpL3YxL3NlZXJiaXQuanMnKTtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvYXNzZXRzL2pzL3NlZXJiaXQuanMnKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBTZWVyYml0UGF5O1xuICAgICAgfSwgMzAwMCk7XG4gICAgfSk7XG4gIH1cbiAgZ2V0U2VlckJpdE9wdGlvbnMob2JqOiBTZWVyQml0T3B0aW9ucyk6IFNlZXJCaXRPcHRpb25zIHtcbiAgICAvL2NvbnN0IHNlZXJCaXRPcHRpb25zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBzZWVyQml0T3B0aW9uczogU2VlckJpdE9wdGlvbnMgPSB7XG4gICAgICBhbW91bnQ6IG9iai5hbW91bnQsXG4gICAgICB0cmFucmVmOiBvYmoudHJhbnJlZixcbiAgICAgIHB1YmxpY19rZXk6IG9iai5wdWJsaWNfa2V5LFxuICAgICAgY3VycmVuY3k6IG9iai5jdXJyZW5jeSB8fCAnTkdOJyxcbiAgICAgIGNhbGxiYWNrdXJsOiBvYmouY2FsbGJhY2t1cmwgfHwgJycsXG4gICAgICBjb3VudHJ5OiBvYmouY291bnRyeSxcbiAgICAgIGRlc2NyaXB0aW9uOiBvYmouZGVzY3JpcHRpb25cbiAgICB9O1xuICAgIHJldHVybiBzZWVyQml0T3B0aW9ucztcbiAgfVxuICBjaGVja0lucHV0KG9iajogUGFydGlhbDxTZWVyQml0T3B0aW9ucz4pOiBzdHJpbmcge1xuICAgIGlmICghb2JqLnB1YmxpY19rZXkpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogUGxlYXNlIGluc2VydCBhIHlvdXIgcHVibGljIGtleSc7XG4gICAgfVxuICAgIGlmICghb2JqLmFtb3VudCkge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBUcmFuc2FjdGlvbiBhbW91bnQgY2Fubm90IGJlIGVtcHR5JztcbiAgICB9XG4gICAgaWYgKCFvYmoudHJhbnJlZikge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBUcmFuc2FjdGlvbiByZWYgY2Fubm90IGJlIGVtcHR5JztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4iXX0=