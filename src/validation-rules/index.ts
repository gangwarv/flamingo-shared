export const required = (value: any) => value && value.length > 0 ? true : "This is required";
export const exactLength = (value: any) => value && value.length == 3 ? true : "min length 3 is reuired";
