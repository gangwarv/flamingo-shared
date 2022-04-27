
interface Validators {
    [key: string]: Array<(value: any) => boolean | string> | Validators;
}
const required = (value: any) => value && value.length > 0 ? true : "This is required";
const exactLength = (value: any) => value && value.length == 3 ? true : "min length 3 is reuired";


// const schema: Validators = {
//     id: [required],
//     name: [length],
//     child: {
//         cards: [length]
//     }
// }

class ValidationResult {
    public hasError: boolean;
    constructor(private obj: any) {
        this.hasError = Object.keys(obj).length > 0;
    }

    RaiseError() {
        if (this.hasError)
            throw new Error(JSON.stringify(this.obj))
    }
}
const obj: any = { id: undefined, name: 'vils', child: { cards: 'sas' } };
function Validate(obj: any, schema: Validators) {

    const test= (obj: any = {}, schema: Validators) =>{
        //if(!obj) return {};
        console.log(schema)
        return Object.entries(schema).map(([k, fns]) => {
            let msgs: any = {};
            if (!Array.isArray(fns)) {
                msgs[k] = test(obj[k], fns as Validators)
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

    const res = test(obj, schema)
    console.log(res)

}