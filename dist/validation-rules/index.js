"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.length = exports.max = exports.min = exports.required = void 0;
function hasValue(value) {
    return (!!value || value == 0);
}
// exported rules
const required = (value) => {
    return hasValue(value) && value.toString().length > 0 ? true : `This field is required`;
};
exports.required = required;
const min = (minValue) => {
    return (value) => {
        return !hasValue(value) ? true : value >= minValue ? true : `Value must be equal to or greater than ${minValue}`;
    };
};
exports.min = min;
const max = (maxValue) => {
    return (value) => {
        return !hasValue(value) ? true : value <= maxValue ? true : `Value must be equal to or smaller than ${maxValue}`;
    };
};
exports.max = max;
const length = (length) => {
    return (value) => {
        return !hasValue(value) ? true : value.length == length ? true : `Value must have ${length} charactors`;
    };
};
exports.length = length;
