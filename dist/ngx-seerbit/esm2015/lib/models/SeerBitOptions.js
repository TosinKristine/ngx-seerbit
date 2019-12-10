/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/SeerBitOptions.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SeerBitOptions() { }
if (false) {
    /**
     * Amount to withdraw (in kobo for NGN)
     * @type {?}
     */
    SeerBitOptions.prototype.amount;
    /**
     * A flat fee to charge the subaccount for this transaction, in kobo.
     * @type {?}
     */
    SeerBitOptions.prototype.tranref;
    /** @type {?} */
    SeerBitOptions.prototype.public_key;
    /**
     * The customer's email address
     * @type {?}
     */
    SeerBitOptions.prototype.currency;
    /**
     * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
     * @type {?|undefined}
     */
    SeerBitOptions.prototype.callbackurl;
    /**
     * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
     * @type {?|undefined}
     */
    SeerBitOptions.prototype.country;
    /**
     * Unique case sensitive transaction reference. Only -,., = and alphanumeric characters allowed.
     * @type {?|undefined}
     */
    SeerBitOptions.prototype.description;
    /** @type {?|undefined} */
    SeerBitOptions.prototype.additionals;
}
/**
 * @record
 */
export function PrivateSeerBitOptions() { }
if (false) {
    /**
     * A function to be called on successful card charge. User’s can always be redirected to a successful or
     * failed page supplied by the merchant here based on response
     * \@param response?: The server response
     * @type {?}
     */
    PrivateSeerBitOptions.prototype.callback;
    /**
     * A function to be called when the pay modal is closed.
     * @type {?}
     */
    PrivateSeerBitOptions.prototype.close;
}
/**
 * @record
 */
export function PrivateSeerBitOptionsWithEmitters() { }
if (false) {
    /**
     * A function to be called on successful card charge. User’s can always be redirected to a successful or
     * failed page supplied by the merchant here based on response
     * @type {?}
     */
    PrivateSeerBitOptionsWithEmitters.prototype.callback;
    /**
     * A function to be called when the pay modal is closed.
     * @type {?}
     */
    PrivateSeerBitOptionsWithEmitters.prototype.close;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VlckJpdE9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtc2VlcmJpdC8iLCJzb3VyY2VzIjpbImxpYi9tb2RlbHMvU2VlckJpdE9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxvQ0FnQ0M7Ozs7OztJQTVCQyxnQ0FBZTs7Ozs7SUFJZixpQ0FBZ0I7O0lBRWhCLG9DQUFtQjs7Ozs7SUFJbkIsa0NBQWlCOzs7OztJQUlqQixxQ0FBcUI7Ozs7O0lBSXJCLGlDQUFpQjs7Ozs7SUFJakIscUNBQXFCOztJQUVyQixxQ0FBb0I7Ozs7O0FBTXRCLDJDQVdDOzs7Ozs7OztJQUxDLHlDQUFtQzs7Ozs7SUFJbkMsc0NBQWdDOzs7OztBQUdsQyx1REFVQzs7Ozs7OztJQUxDLHFEQUE0Qjs7Ozs7SUFJNUIsa0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VlckJpdE9wdGlvbnMge1xuICAvKipcbiAgICogQW1vdW50IHRvIHdpdGhkcmF3IChpbiBrb2JvIGZvciBOR04pXG4gICAqL1xuICBhbW91bnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgZmxhdCBmZWUgdG8gY2hhcmdlIHRoZSBzdWJhY2NvdW50IGZvciB0aGlzIHRyYW5zYWN0aW9uLCBpbiBrb2JvLlxuICAgKi9cbiAgdHJhbnJlZjogbnVtYmVyO1xuICBcbiAgcHVibGljX2tleTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGN1c3RvbWVyJ3MgZW1haWwgYWRkcmVzc1xuICAgKi9cbiAgY3VycmVuY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIFVuaXF1ZSBjYXNlIHNlbnNpdGl2ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UuIE9ubHkgLSwuLCA9IGFuZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbGxvd2VkLlxuICAgKi9cbiAgY2FsbGJhY2t1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgY2FzZSBzZW5zaXRpdmUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlLiBPbmx5IC0sLiwgPSBhbmQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZC5cbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgY2FzZSBzZW5zaXRpdmUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlLiBPbmx5IC0sLiwgPSBhbmQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZC5cbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuXG4gIGFkZGl0aW9uYWxzPzogYW55W107XG4gIC8qKlxuICAgKiBVbmlxdWUgY2FzZSBzZW5zaXRpdmUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlLiBPbmx5IC0sLiwgPSBhbmQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZC5cbiAgICovXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpdmF0ZVNlZXJCaXRPcHRpb25zIGV4dGVuZHMgU2VlckJpdE9wdGlvbnMge1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzc2Z1bCBjYXJkIGNoYXJnZS4gVXNlcuKAmXMgY2FuIGFsd2F5cyBiZSByZWRpcmVjdGVkIHRvIGEgc3VjY2Vzc2Z1bCBvclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxuICAgKiBAcGFyYW0gcmVzcG9uc2U/OiBUaGUgc2VydmVyIHJlc3BvbnNlXG4gICAqL1xuICBjYWxsYmFjazogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkO1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgcGF5IG1vZGFsIGlzIGNsb3NlZC5cbiAgICovXG4gIGNsb3NlOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJpdmF0ZVNlZXJCaXRPcHRpb25zV2l0aEVtaXR0ZXJzIGV4dGVuZHMgU2VlckJpdE9wdGlvbnMge1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gc3VjY2Vzc2Z1bCBjYXJkIGNoYXJnZS4gVXNlcuKAmXMgY2FuIGFsd2F5cyBiZSByZWRpcmVjdGVkIHRvIGEgc3VjY2Vzc2Z1bCBvclxuICAgKiBmYWlsZWQgcGFnZSBzdXBwbGllZCBieSB0aGUgbWVyY2hhbnQgaGVyZSBiYXNlZCBvbiByZXNwb25zZVxuICAgKi9cbiAgY2FsbGJhY2s6IEV2ZW50RW1pdHRlcjxhbnk+O1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgcGF5IG1vZGFsIGlzIGNsb3NlZC5cbiAgICovXG4gIGNsb3NlOiBFdmVudEVtaXR0ZXI8dm9pZD47XG59XG4iXX0=