
function hasValue(value:any): boolean{
    return (!!value || value == 0)
    }
    
    // exported rules
    export const required = (value: any) => {
        return hasValue(value) && value.toString().length > 0 ? true : `This field is required`
    }
    
    export const min = (minValue: number) => {
        return (value: number) => {
            return !hasValue(value) ? true : value >= minValue ? true : `Value must be equal to or greater than ${minValue}`
        }
    }
    export const max = (maxValue: number) => {
        return (value: number) => {
            return !hasValue(value) ? true : value <= maxValue ? true : `Value must be equal to or smaller than ${maxValue}`
        }
    }
    
    export const length = (length: number) => {
        return (value: string) => {
            return !hasValue(value) ? true : value.length == length ? true : `Value must have ${length} charactors`
        }
    }