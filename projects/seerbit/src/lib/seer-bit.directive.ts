import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { SeerbitService } from './seerbit-service';
import { SeerBitOptions, PrivateSeerBitOptions } from './models/SeerBitOptions';
interface MyWindow extends Window {
  SeerbitPay:
  {
    (options: any,
      close: any,
      callback: any)
  };
}
declare var window: MyWindow;
@Directive({
  selector: '[seer-bit]'
})
export class SeerBitButtonDirective {
  @Input() options: any;
  @Output() callback: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  private _options: Partial<PrivateSeerBitOptions>;
  closeFn: any; callbackFn: any;
  constructor(private seerBitService: SeerbitService) {

  }

  async pay() {
    let errorText = this.validateInput(this.options);
    this.generateOptions(this.options);

    if (errorText) {
      return errorText;
    }
    await this.seerBitService.loadScript();
    window.SeerbitPay(this._options, this.closeFn, this.callbackFn)
  }
  generateOptions(obj: any) {
    this._options = this.seerBitService.getSeerBitOptions(obj);
    this.closeFn = (...response:any) => {
      if (this.close.observers.length) {
        this.close.emit(...response);
      }
    }
    this.callbackFn = (...response:any) => {
      this.callback.emit(...response);
    };
  }
  validateInput(obj: SeerBitOptions) {
    if (!this.callback.observers.length) {
      return 'Seerbit: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
    }
    return this.seerBitService.checkInput(obj);
  }
  @HostListener('click')
  async buttonClick() {
    this.pay();
  }
}
