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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VlckJpdE9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZWVyYml0LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9TZWVyQml0T3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLG9DQThCQzs7Ozs7O0lBMUJDLGdDQUFlOzs7OztJQUlmLGlDQUFnQjs7SUFFaEIsb0NBQW1COzs7OztJQUluQixrQ0FBaUI7Ozs7O0lBSWpCLHFDQUFxQjs7Ozs7SUFJckIsaUNBQWlCOzs7OztJQUlqQixxQ0FBcUI7Ozs7O0FBTXZCLDJDQVdDOzs7Ozs7OztJQUxDLHlDQUFtQzs7Ozs7SUFJbkMsc0NBQWdDOzs7OztBQUdsQyx1REFVQzs7Ozs7OztJQUxDLHFEQUE0Qjs7Ozs7SUFJNUIsa0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VlckJpdE9wdGlvbnMge1xuICAvKipcbiAgICogQW1vdW50IHRvIHdpdGhkcmF3IChpbiBrb2JvIGZvciBOR04pXG4gICAqL1xuICBhbW91bnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgZmxhdCBmZWUgdG8gY2hhcmdlIHRoZSBzdWJhY2NvdW50IGZvciB0aGlzIHRyYW5zYWN0aW9uLCBpbiBrb2JvLlxuICAgKi9cbiAgdHJhbnJlZjogbnVtYmVyO1xuICBcbiAgcHVibGljX2tleTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGN1c3RvbWVyJ3MgZW1haWwgYWRkcmVzc1xuICAgKi9cbiAgY3VycmVuY3k6IHN0cmluZztcbiAgLyoqXG4gICAqIFVuaXF1ZSBjYXNlIHNlbnNpdGl2ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UuIE9ubHkgLSwuLCA9IGFuZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbGxvd2VkLlxuICAgKi9cbiAgY2FsbGJhY2t1cmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgY2FzZSBzZW5zaXRpdmUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlLiBPbmx5IC0sLiwgPSBhbmQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZC5cbiAgICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgY2FzZSBzZW5zaXRpdmUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlLiBPbmx5IC0sLiwgPSBhbmQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZC5cbiAgICovXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAvKipcbiAgICogVW5pcXVlIGNhc2Ugc2Vuc2l0aXZlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZS4gT25seSAtLC4sID0gYW5kIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFsbG93ZWQuXG4gICAqL1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaXZhdGVTZWVyQml0T3B0aW9ucyBleHRlbmRzIFNlZXJCaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLigJlzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcbiAgICogZmFpbGVkIHBhZ2Ugc3VwcGxpZWQgYnkgdGhlIG1lcmNoYW50IGhlcmUgYmFzZWQgb24gcmVzcG9uc2VcbiAgICogQHBhcmFtIHJlc3BvbnNlPzogVGhlIHNlcnZlciByZXNwb25zZVxuICAgKi9cbiAgY2FsbGJhY2s6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZDtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXG4gICAqL1xuICBjbG9zZTogKHJlc3BvbnNlPzogYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByaXZhdGVTZWVyQml0T3B0aW9uc1dpdGhFbWl0dGVycyBleHRlbmRzIFNlZXJCaXRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIHN1Y2Nlc3NmdWwgY2FyZCBjaGFyZ2UuIFVzZXLigJlzIGNhbiBhbHdheXMgYmUgcmVkaXJlY3RlZCB0byBhIHN1Y2Nlc3NmdWwgb3JcbiAgICogZmFpbGVkIHBhZ2Ugc3VwcGxpZWQgYnkgdGhlIG1lcmNoYW50IGhlcmUgYmFzZWQgb24gcmVzcG9uc2VcbiAgICovXG4gIGNhbGxiYWNrOiBFdmVudEVtaXR0ZXI8YW55PjtcbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIHBheSBtb2RhbCBpcyBjbG9zZWQuXG4gICAqL1xuICBjbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+O1xufVxuIl19