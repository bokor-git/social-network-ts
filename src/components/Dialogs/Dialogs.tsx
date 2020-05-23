import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MassageItem from "./Massage/MassageItem";
import {reduxForm} from "redux-form";
import {DialogsPropsType} from "./DialogsContainer";
import {MessageForm} from "./MessageForm";


const MessageFormRedux = reduxForm<MassageFormDataType>({
    form: 'massage'
})(MessageForm);

export type MassageFormDataType = {
    newMassageBody: string
}

function Dialogs(props: DialogsPropsType) {
    let {dialogsData, massageData, sendMassageCreator} = props;
    let onSubmit = (data: MassageFormDataType) => {
        sendMassageCreator(data.newMassageBody);
    };
    return (
        <div className={s.dialogs}>
            <div><DialogItem dialogsData={dialogsData}/></div>
            <div><MassageItem massageData={massageData}/></div>
            <MessageFormRedux onSubmit={onSubmit}/>
        </div>)
}

export default Dialogs;

