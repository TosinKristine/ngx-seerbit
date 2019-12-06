import { SeerBitOptions } from './models/SeerBitOptions';
export declare class SeerbitService {
    constructor();
    loadScript(): Promise<void>;
    getSeerBitOptions(obj: SeerBitOptions): SeerBitOptions;
    checkInput(obj: Partial<SeerBitOptions>): string;
}
