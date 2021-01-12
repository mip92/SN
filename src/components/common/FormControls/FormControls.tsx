import React from "react";
import s from './FormControls.module.css';
import {FieldValidatorType, requiredField} from "../../../utils/validators/validators";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {ftruncate} from "fs";

const Textarea: React.FC<FormControlPropsType> =(props)=>{
    const {input, meta: {touched, error}, hasError= touched && error}=props;
   // hasError = touched && error
    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError ? s.formControlError : ""}/>
            </div>
            {hasError && <span className={s.error}>{error}</span>}
        </div>
    )
}
type FormControlPropsType={
    meta: WrappedFieldMetaProps
    input: any;
    hasError:boolean;
}
const Input: React.FC<FormControlPropsType> =(props)=>{
    const {input, meta: {touched, error}, hasError= touched && error}=props;

        return (
            <div>
                <div>
                    <input {...input} {...props} className={hasError ? s.formControlError : ""}/>
                </div>
                {hasError && <span className={s.error}>{error}</span>}
            </div>
        )

    }

function CreateField<LoginFormPropertiesType extends string> (placeholder: string | null,
                     name: LoginFormPropertiesType,
                     validate: Array<FieldValidatorType> | null,
                     component: React.Component | string | React.FC<FormControlPropsType>,
                     props: string,
                     type?: string,
                     text = ""){
    return (
        <div>
            <Field placeholder={placeholder ? placeholder : ''}
                   component={component}
                   name={name}
                   validate={validate}
                   type={type}
            />{text}
        </div>
    )
}
const CreateFieldForProfile = (placeholder: string | null,
                               name: string,
                               validate: Array<string>,
                               component: () => void,
                               type?: string,
                               text = "",
                               ) => {
    return (
        <span>
            <Field placeholder={placeholder ? placeholder : ''}
                   component={component}
                   name={name}
                   validate={validate}
                   type={type}
                  //value={value}
            />{text}
        </span>
    )
}

export {Textarea, Input, CreateField, CreateFieldForProfile}

