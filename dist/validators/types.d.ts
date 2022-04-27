export interface ValidationSchema {
    [key: string]: Array<(value: any) => boolean | string> | ValidationSchema;
}
export declare class ValidationResult {
    private obj;
    hasError: boolean;
    constructor(obj: any);
    raiseError(): void;
}
export interface ValidationOptions {
    skipUndefined: boolean;
}
