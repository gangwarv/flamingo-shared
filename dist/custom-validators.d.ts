interface Validators {
    [key: string]: Array<(value: any) => boolean | string> | Validators;
}
declare const required: (value: any) => true | "This is required";
declare const exactLength: (value: any) => true | "min length 3 is reuired";
declare class ValidationResult {
    private obj;
    hasError: boolean;
    constructor(obj: any);
    RaiseError(): void;
}
declare const obj: any;
declare function Validate(obj: any, schema: Validators): void;
