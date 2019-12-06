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
    /**
     * Your pubic Key from Paystack. Use test key for test mode and live key for live mode
     * @type {?}
     */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VlckJpdE9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9zZWVyYml0LyIsInNvdXJjZXMiOlsibGliL21vZGVscy9TZWVyQml0T3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLG9DQWdDQzs7Ozs7O0lBNUJDLGdDQUFlOzs7OztJQUlmLGlDQUFnQjs7Ozs7SUFJaEIsb0NBQW1COzs7OztJQUluQixrQ0FBaUI7Ozs7O0lBSWpCLHFDQUFxQjs7Ozs7SUFJckIsaUNBQWlCOzs7OztJQUlqQixxQ0FBcUI7Ozs7O0FBTXZCLDJDQVdDOzs7Ozs7OztJQUxDLHlDQUFtQzs7Ozs7SUFJbkMsc0NBQWdDOzs7OztBQUdsQyx1REFVQzs7Ozs7OztJQUxDLHFEQUE0Qjs7Ozs7SUFJNUIsa0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VlckJpdE9wdGlvbnMge1xuICAvKipcbiAgICogQW1vdW50IHRvIHdpdGhkcmF3IChpbiBrb2JvIGZvciBOR04pXG4gICAqL1xuICBhbW91bnQ6IHN0cmluZztcbiAgLyoqXG4gICAqIEEgZmxhdCBmZWUgdG8gY2hhcmdlIHRoZSBzdWJhY2NvdW50IGZvciB0aGlzIHRyYW5zYWN0aW9uLCBpbiBrb2JvLlxuICAgKi9cbiAgdHJhbnJlZjogbnVtYmVyO1xuICAvKipcbiAgICogWW91ciBwdWJpYyBLZXkgZnJvbSBQYXlzdGFjay4gVXNlIHRlc3Qga2V5IGZvciB0ZXN0IG1vZGUgYW5kIGxpdmUga2V5IGZvciBsaXZlIG1vZGVcbiAgICovXG4gIHB1YmxpY19rZXk6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBjdXN0b21lcidzIGVtYWlsIGFkZHJlc3NcbiAgICovXG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBVbmlxdWUgY2FzZSBzZW5zaXRpdmUgdHJhbnNhY3Rpb24gcmVmZXJlbmNlLiBPbmx5IC0sLiwgPSBhbmQgYWxwaGFudW1lcmljIGNoYXJhY3RlcnMgYWxsb3dlZC5cbiAgICovXG4gIGNhbGxiYWNrdXJsPzogc3RyaW5nO1xuICAvKipcbiAgICogVW5pcXVlIGNhc2Ugc2Vuc2l0aXZlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZS4gT25seSAtLC4sID0gYW5kIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFsbG93ZWQuXG4gICAqL1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuICAvKipcbiAgICogVW5pcXVlIGNhc2Ugc2Vuc2l0aXZlIHRyYW5zYWN0aW9uIHJlZmVyZW5jZS4gT25seSAtLC4sID0gYW5kIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzIGFsbG93ZWQuXG4gICAqL1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgLyoqXG4gICAqIFVuaXF1ZSBjYXNlIHNlbnNpdGl2ZSB0cmFuc2FjdGlvbiByZWZlcmVuY2UuIE9ubHkgLSwuLCA9IGFuZCBhbHBoYW51bWVyaWMgY2hhcmFjdGVycyBhbGxvd2VkLlxuICAgKi9cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcml2YXRlU2VlckJpdE9wdGlvbnMgZXh0ZW5kcyBTZWVyQml0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzZnVsIGNhcmQgY2hhcmdlLiBVc2Vy4oCZcyBjYW4gYWx3YXlzIGJlIHJlZGlyZWN0ZWQgdG8gYSBzdWNjZXNzZnVsIG9yXG4gICAqIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXG4gICAqIEBwYXJhbSByZXNwb25zZT86IFRoZSBzZXJ2ZXIgcmVzcG9uc2VcbiAgICovXG4gIGNhbGxiYWNrOiAocmVzcG9uc2U/OiBhbnkpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxuICAgKi9cbiAgY2xvc2U6IChyZXNwb25zZT86IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcml2YXRlU2VlckJpdE9wdGlvbnNXaXRoRW1pdHRlcnMgZXh0ZW5kcyBTZWVyQml0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBzdWNjZXNzZnVsIGNhcmQgY2hhcmdlLiBVc2Vy4oCZcyBjYW4gYWx3YXlzIGJlIHJlZGlyZWN0ZWQgdG8gYSBzdWNjZXNzZnVsIG9yXG4gICAqIGZhaWxlZCBwYWdlIHN1cHBsaWVkIGJ5IHRoZSBtZXJjaGFudCBoZXJlIGJhc2VkIG9uIHJlc3BvbnNlXG4gICAqL1xuICBjYWxsYmFjazogRXZlbnRFbWl0dGVyPGFueT47XG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBwYXkgbW9kYWwgaXMgY2xvc2VkLlxuICAgKi9cbiAgY2xvc2U6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbn1cbiJdfQ==