import { ValidationResult, ValidationSchema, ValidationOptions } from './types'

const test = (obj: any = {}, schema: ValidationSchema, options:ValidationOptions) => {
    const entries = Object.keys(schema).map(sk => [sk, schema[sk]])
    return entries.map(([k, fns]: [string, ValidationSchema]) => {
        let msgs: any = {};
        if (!Array.isArray(fns)) { // child object to test
            msgs[k as string] = test(obj[k as string], fns as ValidationSchema, options)

            if (Object.keys(msgs[k as string]).length == 0)
                return false
        }
        else {
            const value = obj[k];
            if (!value && options.skipUndefined) {
                return false
            }
            for (let i = 0; i < fns.length; i++) {
                const result = fns[i](value);
                if (result !== true) {
                    msgs[k] = result
                    break;
                }
            }
        }


        if (!msgs[k])
            return false;
        return msgs
    }).filter(r => r).reduce((prev, cur) => Object.assign(prev, cur), {});

}

export function Validate(obj: any, schema: ValidationSchema, options:ValidationOptions = {skipUndefined:false}) {
    // const _options = Object.assign({skipUndefined: false}, options)
    const res = test(obj, schema, options)
    const result = new ValidationResult(res);
    return result;
}