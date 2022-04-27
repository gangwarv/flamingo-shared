const required = (value) => value && value.length > 0 ? true : "This is required";
const exactLength = (value) => value && value.length == 3 ? true : "min length 3 is reuired";
// const schema: Validators = {
//     id: [required],
//     name: [length],
//     child: {
//         cards: [length]
//     }
// }
class ValidationResult {
    constructor(obj) {
        this.obj = obj;
        this.hasError = Object.keys(obj).length > 0;
    }
    RaiseError() {
        if (this.hasError)
            throw new Error(JSON.stringify(this.obj));
    }
}
const obj = { id: undefined, name: 'vils', child: { cards: 'sas' } };
function Validate(obj, schema) {
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
    const res = test(obj, schema);
    console.log(res);
}
