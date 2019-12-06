import { EventEmitter } from '@angular/core';
import { SeerbitService } from './seerbit-service';
import { SeerBitOptions } from './models/SeerBitOptions';
export declare class SeerBitButtonDirective {
    private seerBitService;
    options: any;
    callback: EventEmitter<any>;
    close: EventEmitter<any>;
    private _options;
    closeFn: any;
    callbackFn: any;
    constructor(seerBitService: SeerbitService);
    pay(): Promise<string>;
    generateOptions(obj: any): void;
    validateInput(obj: SeerBitOptions): string;
    buttonClick(): Promise<void>;
}
