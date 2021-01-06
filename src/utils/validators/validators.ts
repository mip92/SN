export type FieldValidatorType=(value:string)=>undefined| string;
//export type fieldMaxLengthCreator=(maxLength: number)=>(value: string)=>undefined| string;

export const requiredField: FieldValidatorType = (value) => {
    if (value) return undefined;
    return 'Field is required';
};

export const maxLengthCreator=(maxLength: number):FieldValidatorType=>(value)=>{
    if (value.length>maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
};