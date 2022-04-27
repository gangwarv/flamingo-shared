"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const types_1 = require("./types");
const test = (obj = {}, schema) => {
    //if(!obj) return {};
    console.log(schema);
    return Object.entries(schema).map(([k, fns]) => {
        let msgs = {};
        if (!Array.isArray(fns)) {
            msgs[k] = test(obj[k], fns);
            if (Object.keys(msgs[k]).length == 0)
                return false;
        }
        else
            msgs[k] = fns.map(fn => {
                return fn(obj[k]);
            }).filter(r => r !== true).join('. ');
        if (!msgs[k])
            return false;
        return msgs;
    }).filter(r => r).reduce((prev, cur) => Object.assign(prev, cur), {});
};
function Validate(obj, schema) {
    const res = test(obj, schema);
    const result = new types_1.ValidationResult(res);
    return result;
}
exports.Validate = Validate;
