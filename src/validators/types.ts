export interface ValidationSchema {
    [key: string]: Array<(value: any) => boolean | string> | ValidationSchema;
}


export class ValidationResult {
    public hasError: boolean;
    constructor(private obj: any) {
        this.hasError = Object.keys(obj).length > 0;
    }

    raiseError() {
        if (this.hasError)
            throw new Error(JSON.stringify(this.obj))
    }
}

export interface ValidationOptions {
    skipUndefined: boolean;
}