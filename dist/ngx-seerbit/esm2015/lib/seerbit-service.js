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
            // script.setAttribute('src', '/assets/js/seerbit.js');
            script.setAttribute('src', 'https://checkout.seerbitapi.com/api/v1/seerbit.js');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlcmJpdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyYml0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQyx1QkFFQzs7O0lBREMsOEJBQStFOztBQU9qRixNQUFNLE9BQU8sY0FBYztJQUN6QixnQkFBZ0IsQ0FBQzs7OztJQUVqQixVQUFVO1FBQ1IsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUMzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQ3RFLE9BQU8sRUFBRSxDQUFDO2dCQUNWLE9BQU87YUFDUjs7a0JBQ0ssTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O2tCQUNuQyxVQUFVOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3RCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1QywwRUFBMEU7WUFDMUUsdURBQXVEO1lBQ3ZELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7WUFDaEYsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLFVBQVUsQ0FBQztZQUNiLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFDRCxpQkFBaUIsQ0FBQyxHQUFtQjs7O2NBRTdCLGNBQWMsR0FBbUI7WUFDckMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSztZQUMvQixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7U0FDN0I7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxHQUE0QjtRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPLDBDQUEwQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLDZDQUE2QyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTywwQ0FBMEMsQ0FBQztTQUNuRDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7O1lBbkRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlZXJCaXRPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvU2VlckJpdE9wdGlvbnMnO1xuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgU2VlckJpdFBvcDogeyBzZXR1cChvcHRpb25zOiBQYXJ0aWFsPFNlZXJCaXRPcHRpb25zPik6IHsgb3BlbklmcmFtZSgpOiBhbnkgfSB9O1xufVxuZGVjbGFyZSB2YXIgU2VlcmJpdFBheTtcbmRlY2xhcmUgdmFyIHdpbmRvdzogTXlXaW5kb3c7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBTZWVyYml0U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbG9hZFNjcmlwdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAod2luZG93LlNlZXJCaXRQb3AgJiYgdHlwZW9mIHdpbmRvdy5TZWVyQml0UG9wLnNldHVwID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3Qgc2NyaXB0ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgd2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIGNvbnN0IG9uTG9hZEZ1bmMgPSAoKSA9PiB7XG4gICAgICAgIHNjcmlwdC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgb25Mb2FkRnVuYyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH07XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgLy8gIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwOi8vcnViaWMuc3VyZ2Uuc2gvYXBpL3YxL3NlZXJiaXQuanMnKTtcbiAgICAgIC8vIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICcvYXNzZXRzL2pzL3NlZXJiaXQuanMnKTtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3NyYycsICdodHRwczovL2NoZWNrb3V0LnNlZXJiaXRhcGkuY29tL2FwaS92MS9zZWVyYml0LmpzJyk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgU2VlcmJpdFBheTtcbiAgICAgIH0sIDMwMDApO1xuICAgIH0pO1xuICB9XG4gIGdldFNlZXJCaXRPcHRpb25zKG9iajogU2VlckJpdE9wdGlvbnMpOiBTZWVyQml0T3B0aW9ucyB7XG4gICAgLy9jb25zdCBzZWVyQml0T3B0aW9uczogYW55ID0ge307XG4gICAgY29uc3Qgc2VlckJpdE9wdGlvbnM6IFNlZXJCaXRPcHRpb25zID0ge1xuICAgICAgYW1vdW50OiBvYmouYW1vdW50LFxuICAgICAgdHJhbnJlZjogb2JqLnRyYW5yZWYsXG4gICAgICBwdWJsaWNfa2V5OiBvYmoucHVibGljX2tleSxcbiAgICAgIGN1cnJlbmN5OiBvYmouY3VycmVuY3kgfHwgJ05HTicsXG4gICAgICBjYWxsYmFja3VybDogb2JqLmNhbGxiYWNrdXJsIHx8ICcnLFxuICAgICAgY291bnRyeTogb2JqLmNvdW50cnksXG4gICAgICBkZXNjcmlwdGlvbjogb2JqLmRlc2NyaXB0aW9uXG4gICAgfTtcbiAgICByZXR1cm4gc2VlckJpdE9wdGlvbnM7XG4gIH1cbiAgY2hlY2tJbnB1dChvYmo6IFBhcnRpYWw8U2VlckJpdE9wdGlvbnM+KTogc3RyaW5nIHtcbiAgICBpZiAoIW9iai5wdWJsaWNfa2V5KSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IFBsZWFzZSBpbnNlcnQgYSB5b3VyIHB1YmxpYyBrZXknO1xuICAgIH1cbiAgICBpZiAoIW9iai5hbW91bnQpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogVHJhbnNhY3Rpb24gYW1vdW50IGNhbm5vdCBiZSBlbXB0eSc7XG4gICAgfVxuICAgIGlmICghb2JqLnRyYW5yZWYpIHtcbiAgICAgIHJldHVybiAnU2VlcmJpdDogVHJhbnNhY3Rpb24gcmVmIGNhbm5vdCBiZSBlbXB0eSc7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuIl19