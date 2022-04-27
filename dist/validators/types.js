"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationResult = void 0;
class ValidationResult {
    constructor(obj) {
        this.obj = obj;
        this.hasError = Object.keys(obj).length > 0;
    }
    raiseError() {
        if (this.hasError)
            throw new Error(JSON.stringify(this.obj));
    }
}
exports.ValidationResult = ValidationResult;
