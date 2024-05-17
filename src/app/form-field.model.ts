export interface FormField {
    name:string,
    label:string,
    value:string,
    type:string,
    validators:any,
    options?:{label:string, value:string}[],
    image:any
}