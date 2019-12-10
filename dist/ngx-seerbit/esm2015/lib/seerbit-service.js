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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlcmJpdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXNlZXJiaXQvIiwic291cmNlcyI6WyJsaWIvc2VlcmJpdC1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFFM0MsdUJBRUM7OztJQURDLDhCQUErRTs7QUFPakYsTUFBTSxPQUFPLGNBQWM7SUFDekIsZ0JBQWdCLENBQUM7Ozs7SUFFakIsVUFBVTtRQUNSLE9BQU8sSUFBSSxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUN0RSxPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7O2tCQUNLLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztrQkFDbkMsVUFBVTs7O1lBQUcsR0FBRyxFQUFFO2dCQUN0QixNQUFNLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUMvQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQTtZQUNELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDNUMsMEVBQTBFO1lBQzFFLHVEQUF1RDtZQUN2RCxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxtREFBbUQsQ0FBQyxDQUFDO1lBQ2hGLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxVQUFVLENBQUM7WUFDYixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBQ0QsaUJBQWlCLENBQUMsR0FBbUI7OztjQUU3QixjQUFjLEdBQW1CO1lBQ3JDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtZQUNsQixPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO1lBQzFCLFFBQVEsRUFBRSxHQUFHLENBQUMsUUFBUSxJQUFJLEtBQUs7WUFDL0IsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXLElBQUksRUFBRTtZQUNsQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87WUFDcEIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXO1NBQzdCO1FBQ0QsT0FBTyxjQUFjLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFDRCxVQUFVLENBQUMsR0FBNEI7UUFDckMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTywwQ0FBMEMsQ0FBQztTQUNuRDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyw2Q0FBNkMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFO1lBQ2hCLE9BQU8sMENBQTBDLENBQUM7U0FDbkQ7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7OztZQW5ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWVyQml0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL1NlZXJCaXRPcHRpb25zJztcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIFNlZXJCaXRQb3A6IHsgc2V0dXAob3B0aW9uczogUGFydGlhbDxTZWVyQml0T3B0aW9ucz4pOiB7IG9wZW5JZnJhbWUoKTogYW55IH0gfTtcbn1cbmRlY2xhcmUgdmFyIFNlZXJiaXRQYXk7XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VlcmJpdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5TZWVyQml0UG9wICYmIHR5cGVvZiB3aW5kb3cuU2VlckJpdFBvcC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICBjb25zdCBvbkxvYWRGdW5jID0gKCkgPT4ge1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcbiAgICAgIC8vICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cDovL3J1YmljLnN1cmdlLnNoL2FwaS92MS9zZWVyYml0LmpzJyk7XG4gICAgICAvLyBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnL2Fzc2V0cy9qcy9zZWVyYml0LmpzJyk7XG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9jaGVja291dC5zZWVyYml0YXBpLmNvbS9hcGkvdjEvc2VlcmJpdC5qcycpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFNlZXJiaXRQYXk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9KTtcbiAgfVxuICBnZXRTZWVyQml0T3B0aW9ucyhvYmo6IFNlZXJCaXRPcHRpb25zKTogU2VlckJpdE9wdGlvbnMge1xuICAgIC8vY29uc3Qgc2VlckJpdE9wdGlvbnM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHNlZXJCaXRPcHRpb25zOiBTZWVyQml0T3B0aW9ucyA9IHtcbiAgICAgIGFtb3VudDogb2JqLmFtb3VudCxcbiAgICAgIHRyYW5yZWY6IG9iai50cmFucmVmLFxuICAgICAgcHVibGljX2tleTogb2JqLnB1YmxpY19rZXksXG4gICAgICBjdXJyZW5jeTogb2JqLmN1cnJlbmN5IHx8ICdOR04nLFxuICAgICAgY2FsbGJhY2t1cmw6IG9iai5jYWxsYmFja3VybCB8fCAnJyxcbiAgICAgIGNvdW50cnk6IG9iai5jb3VudHJ5LFxuICAgICAgZGVzY3JpcHRpb246IG9iai5kZXNjcmlwdGlvblxuICAgIH07XG4gICAgcmV0dXJuIHNlZXJCaXRPcHRpb25zO1xuICB9XG4gIGNoZWNrSW5wdXQob2JqOiBQYXJ0aWFsPFNlZXJCaXRPcHRpb25zPik6IHN0cmluZyB7XG4gICAgaWYgKCFvYmoucHVibGljX2tleSkge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBQbGVhc2UgaW5zZXJ0IGEgeW91ciBwdWJsaWMga2V5JztcbiAgICB9XG4gICAgaWYgKCFvYmouYW1vdW50KSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IFRyYW5zYWN0aW9uIGFtb3VudCBjYW5ub3QgYmUgZW1wdHknO1xuICAgIH1cbiAgICBpZiAoIW9iai50cmFucmVmKSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IFRyYW5zYWN0aW9uIHJlZiBjYW5ub3QgYmUgZW1wdHknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==