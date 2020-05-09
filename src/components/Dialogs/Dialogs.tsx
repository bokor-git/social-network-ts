import React from 'react';
import s from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MassageItem from "./Massage/MassageItem";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utilits/validators/validators";
import {DialogsPropsType} from "./DialogsContainer";

const maxLength100 =maxLengthCreator(100);

const MessageForm =({handleSubmit}:any)=>{
    return <form onSubmit={handleSubmit}>
        <Field component={Textarea}
                     name={"newMassageBody"}
                     placeholder={"Your massage"}
               validate={[required, maxLength100]}/>
        <button> Send massage</button>
    </form>
};

const MessageFormRedux = reduxForm({
    form: 'massage'
})(MessageForm);

type DataType = {
    newMassageBody: string
}

const Dialogs = ({dialogsData,massageData,sendMassageCreator}:DialogsPropsType) => {

    let onSubmit= (data:DataType)=>{
        sendMassageCreator(data.newMassageBody);
    };


    return (
        <div className={s.dialogs}>
            <div><DialogItem dialogsData={dialogsData}/></div>
            <div><MassageItem massageData={massageData}/></div>
            // @ts-ignore
           <MessageFormRedux onSubmit={onSubmit}/>
        </div>)
}
export default Dialogs;

