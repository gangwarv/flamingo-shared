export declare const required: (value: any) => true | "This field is required";
export declare const min: (minValue: number) => (value: number) => string | true;
export declare const max: (maxValue: number) => (value: number) => string | true;
export declare const length: (length: number) => (value: string) => string | true;
