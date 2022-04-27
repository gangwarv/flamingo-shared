"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const types_1 = require("./types");
const test = (obj = {}, schema, options) => {
    const entries = Object.keys(schema).map(sk => [sk, schema[sk]]);
    return entries.map(([k, fns]) => {
        let msgs = {};
        if (!Array.isArray(fns)) { // child object to test
            msgs[k] = test(obj[k], fns, options);
            if (Object.keys(msgs[k]).length == 0)
                return false;
        }
        else {
            const value = obj[k];
            if (!value && options.skipUndefined) {
                return false;
            }
            for (let i = 0; i < fns.length; i++) {
                const result = fns[i](value);
                if (result !== true) {
                    msgs[k] = result;
                    break;
                }
            }
        }
        if (!msgs[k])
            return false;
        return msgs;
    }).filter(r => r).reduce((prev, cur) => Object.assign(prev, cur), {});
};
function Validate(obj, schema, options = { skipUndefined: false }) {
    // const _options = Object.assign({skipUndefined: false}, options)
    const res = test(obj, schema, options);
    const result = new types_1.ValidationResult(res);
    return result;
}
exports.Validate = Validate;
