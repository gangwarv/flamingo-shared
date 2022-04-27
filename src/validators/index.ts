import { ValidationResult, ValidationSchema } from './types'

const test = (obj: any = {}, schema: ValidationSchema) => {
    //if(!obj) return {};
    console.log(schema)
    return Object.entries(schema).map(([k, fns]) => {
        let msgs: any = {};
        if (!Array.isArray(fns)) {
            msgs[k] = test(obj[k], fns as ValidationSchema)
            if (Object.keys(msgs[k]).length == 0)
                return false
        }
        else

            msgs[k] = (fns as Array<any>).map(fn => {

                return fn(obj[k])
            }).filter(r => r !== true).join('. ');
        if (!msgs[k])
            return false;
        return msgs
    }).filter(r => r).reduce((prev, cur) => Object.assign(prev, cur), {});

}

export function Validate(obj: any, schema: ValidationSchema) {
    const res = test(obj, schema)
    const result = new ValidationResult(res);
    return result;
}