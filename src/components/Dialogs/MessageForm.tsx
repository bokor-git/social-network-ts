import React from "react";
import {InjectedFormProps} from "redux-form";
import {myCreateField} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {MassageFormDataType} from "./Dialogs";

const maxLength100 =maxLengthCreator(100);

type LoginFormDataTypeKeys = Extract<keyof MassageFormDataType, string>
export const MessageForm: React.FC<InjectedFormProps<MassageFormDataType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        {myCreateField<LoginFormDataTypeKeys>("Your massage", "newMassageBody", [required, maxLength100], "Textarea",)}
        <button> Send massage</button>
    </form>
};