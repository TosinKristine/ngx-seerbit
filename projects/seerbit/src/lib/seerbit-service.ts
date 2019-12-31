import { Injectable } from '@angular/core';
import { SeerBitOptions } from './models/SeerBitOptions';
@Injectable({
  providedIn: 'root'
})
export class SeerbitService {
  constructor() { }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://checkout.seerbitapi.com/api/v1/seerbit.js');
    });
  }
  getSeerBitOptions(obj: SeerBitOptions): SeerBitOptions {
    const seerBitOptions: SeerBitOptions =
    {
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
  checkInput(obj: Partial<SeerBitOptions>): string {
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
