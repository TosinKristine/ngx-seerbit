import { EventEmitter } from '@angular/core';
import { SeerBitOptions } from './models/SeerBitOptions';
import { SeerbitService } from './seerbit-service';
export declare class SeerBitComponent {
    private seerBitService;
    class: string;
    style: object;
    options: any;
    callback: EventEmitter<any>;
    close: EventEmitter<any>;
    private _options;
    closeFn: any;
    callbackFn: any;
    constructor(seerBitService: SeerbitService);
    generateOptions(obj: any): void;
    validateInput(obj: SeerBitOptions): string;
    buttonClick(): Promise<void>;
    pay(): Promise<string>;
}
