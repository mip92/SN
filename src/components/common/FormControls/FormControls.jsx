import React from "react";
import s from './FormControls.module.css';
import {requiredField} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const Textarea = ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div>
            <div>
                <textarea {...input} {...props} className={hasError ? s.formControlError : ""}/>
            </div>
            {hasError && <span className={s.error}>{error}</span>}
        </div>
    )
}
const Input = ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error
    return (
        <div>
            <div>
                <input {...input} {...props} className={hasError ? s.formControlError : ""}/>
            </div>
            {hasError && <span className={s.error}>{error}</span>}
        </div>
    )
}

const CreateField = (placeholder, name, validate, component, type, text="") => {
    return (
        <div>
            <Field placeholder={placeholder}
                   component={component}
                   name={name}
                   validate={validate}
                   type={type}
            />{text}
        </div>
    )
}
const CreateFieldForProfile = (placeholder, name, validate, component, type, text="", value) => {
    return (
        <span>
            <Field placeholder={placeholder}
                   component={component}
                   name={name}
                   validate={validate}
                   type={type}
                   value={value}
            />{text}
        </span>
    )
}

export {Textarea, Input, CreateField, CreateFieldForProfile}

