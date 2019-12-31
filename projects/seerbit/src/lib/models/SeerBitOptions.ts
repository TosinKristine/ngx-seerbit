import { EventEmitter } from '@angular/core';

export interface SeerBitOptions {
 
  amount: string;

  tranref: number;
  
  public_key: string;
 
  currency: string;
 
  callbackurl?: string;

  country?: string;

  description?: string;

  additionals?: any[];
 
}

export interface PrivateSeerBitOptions extends SeerBitOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   * @param response?: The server response
   */
  callback: (response?: any) => void;
  /**
   * A function to be called when the pay modal is closed.
   */
  close: (response?: any) => void;
}

export interface PrivateSeerBitOptionsWithEmitters extends SeerBitOptions {
  /**
   * A function to be called on successful card charge. User’s can always be redirected to a successful or
   * failed page supplied by the merchant here based on response
   */
  callback: EventEmitter<any>;
  /**
   * A function to be called when the pay modal is closed.
   */
  close: EventEmitter<void>;
}
