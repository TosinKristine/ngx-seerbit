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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VlcmJpdC1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9zZWVyYml0LXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUUzQyx1QkFFQzs7O0lBREMsOEJBQStFOztBQUlqRjtJQUlFO0lBQWdCLENBQUM7Ozs7SUFFakIsbUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDeEIsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFO2dCQUN0RSxPQUFPLEVBQUUsQ0FBQztnQkFDVixPQUFPO2FBQ1I7O2dCQUNLLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUM7WUFDdEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztnQkFDbkMsVUFBVTs7O1lBQUc7Z0JBQ2pCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQy9DLE9BQU8sRUFBRSxDQUFDO1lBQ1osQ0FBQyxDQUFBO1lBQ0QsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUM1QywwRUFBMEU7WUFDMUUsdURBQXVEO1lBQ3ZELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLG1EQUFtRCxDQUFDLENBQUM7WUFDaEYsVUFBVTs7O1lBQUM7Z0JBQ1QsVUFBVSxDQUFDO1lBQ2IsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUNELDBDQUFpQjs7OztJQUFqQixVQUFrQixHQUFtQjs7O1lBRTdCLGNBQWMsR0FBbUI7WUFDckMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO1lBQ2xCLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixVQUFVLEVBQUUsR0FBRyxDQUFDLFVBQVU7WUFDMUIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLElBQUksS0FBSztZQUMvQixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQ2xDLE9BQU8sRUFBRSxHQUFHLENBQUMsT0FBTztZQUNwQixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7U0FDN0I7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUN4QixDQUFDOzs7OztJQUNELG1DQUFVOzs7O0lBQVYsVUFBVyxHQUE0QjtRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPLDBDQUEwQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPLDZDQUE2QyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDaEIsT0FBTywwQ0FBMEMsQ0FBQztTQUNuRDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Z0JBbkRGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O3lCQVREO0NBMkRDLEFBcERELElBb0RDO1NBakRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWVyQml0T3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzL1NlZXJCaXRPcHRpb25zJztcbmludGVyZmFjZSBNeVdpbmRvdyBleHRlbmRzIFdpbmRvdyB7XG4gIFNlZXJCaXRQb3A6IHsgc2V0dXAob3B0aW9uczogUGFydGlhbDxTZWVyQml0T3B0aW9ucz4pOiB7IG9wZW5JZnJhbWUoKTogYW55IH0gfTtcbn1cbmRlY2xhcmUgdmFyIFNlZXJiaXRQYXk7XG5kZWNsYXJlIHZhciB3aW5kb3c6IE15V2luZG93O1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU2VlcmJpdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGxvYWRTY3JpcHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5TZWVyQml0UG9wICYmIHR5cGVvZiB3aW5kb3cuU2VlckJpdFBvcC5zZXR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHNjcmlwdCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHdpbmRvdy5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICBjb25zdCBvbkxvYWRGdW5jID0gKCkgPT4ge1xuICAgICAgICBzY3JpcHQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uTG9hZEZ1bmMpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbkxvYWRGdW5jKTtcbiAgICAgIC8vICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cDovL3J1YmljLnN1cmdlLnNoL2FwaS92MS9zZWVyYml0LmpzJyk7XG4gICAgICAvLyBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnL2Fzc2V0cy9qcy9zZWVyYml0LmpzJyk7XG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCAnaHR0cHM6Ly9jaGVja291dC5zZWVyYml0YXBpLmNvbS9hcGkvdjEvc2VlcmJpdC5qcycpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFNlZXJiaXRQYXk7XG4gICAgICB9LCAzMDAwKTtcbiAgICB9KTtcbiAgfVxuICBnZXRTZWVyQml0T3B0aW9ucyhvYmo6IFNlZXJCaXRPcHRpb25zKTogU2VlckJpdE9wdGlvbnMge1xuICAgIC8vY29uc3Qgc2VlckJpdE9wdGlvbnM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHNlZXJCaXRPcHRpb25zOiBTZWVyQml0T3B0aW9ucyA9IHtcbiAgICAgIGFtb3VudDogb2JqLmFtb3VudCxcbiAgICAgIHRyYW5yZWY6IG9iai50cmFucmVmLFxuICAgICAgcHVibGljX2tleTogb2JqLnB1YmxpY19rZXksXG4gICAgICBjdXJyZW5jeTogb2JqLmN1cnJlbmN5IHx8ICdOR04nLFxuICAgICAgY2FsbGJhY2t1cmw6IG9iai5jYWxsYmFja3VybCB8fCAnJyxcbiAgICAgIGNvdW50cnk6IG9iai5jb3VudHJ5LFxuICAgICAgZGVzY3JpcHRpb246IG9iai5kZXNjcmlwdGlvblxuICAgIH07XG4gICAgcmV0dXJuIHNlZXJCaXRPcHRpb25zO1xuICB9XG4gIGNoZWNrSW5wdXQob2JqOiBQYXJ0aWFsPFNlZXJCaXRPcHRpb25zPik6IHN0cmluZyB7XG4gICAgaWYgKCFvYmoucHVibGljX2tleSkge1xuICAgICAgcmV0dXJuICdTZWVyYml0OiBQbGVhc2UgaW5zZXJ0IGEgeW91ciBwdWJsaWMga2V5JztcbiAgICB9XG4gICAgaWYgKCFvYmouYW1vdW50KSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IFRyYW5zYWN0aW9uIGFtb3VudCBjYW5ub3QgYmUgZW1wdHknO1xuICAgIH1cbiAgICBpZiAoIW9iai50cmFucmVmKSB7XG4gICAgICByZXR1cm4gJ1NlZXJiaXQ6IFRyYW5zYWN0aW9uIHJlZiBjYW5ub3QgYmUgZW1wdHknO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbiJdfQ==