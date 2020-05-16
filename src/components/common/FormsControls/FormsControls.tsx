import React from "react";
import styles from "./FormsControls.module.css";
import {Field, WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";
import {FieldValidatorType} from "../../../utilits/validators/validators";


type FormsControlsPropsType = {
    meta: WrappedFieldMetaProps,
    children: React.ReactNode
}

export const FormControl:React.FC<FormsControlsPropsType> = ({meta:{touched, error}, children}:FormsControlsPropsType) => {
    const hasError = touched && error
    return <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
        <div>{children}</div>
        {hasError && <span>{error}</span>}

    </div>
};

export const Textarea: React.FC<WrappedFieldProps> = (props)=>{
const {input, meta, children, ...restProps} = props
    return <FormControl {...props}  > <textarea{...input} {...restProps}/> </FormControl>
}

export const Input: React.FC<WrappedFieldProps> = (props)=>{
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props}  > <input{...input} {...restProps}/> </FormControl>
}

export const myCreateField = (placeholder: string | undefined,
                              name:string,
                              validators:Array<FieldValidatorType>,
                              component:string | React.Component | React.FC,
                              props={},
                              text=" ") => (
    <div>
        <Field placeholder={placeholder} name={name}
               validate={validators}
               component={component}
            {...props}
            />{text}
    </div>
)