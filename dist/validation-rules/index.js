"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exactLength = exports.required = void 0;
const required = (value) => value && value.length > 0 ? true : "This is required";
exports.required = required;
const exactLength = (value) => value && value.length == 3 ? true : "min length 3 is reuired";
exports.exactLength = exactLength;
