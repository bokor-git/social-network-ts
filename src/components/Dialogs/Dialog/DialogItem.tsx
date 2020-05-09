import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type DialogPropsType ={
    id: number
    name:string
}

const Dialog = ({name, id}:DialogPropsType) => {
    let path = "/dialogs/" + id;
    return (<div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {name} </NavLink>
    </div>)
};
type DialogItemPropsType = {
    dialogsData: Array<DialogPropsType>
}



const DialogItem = (props:DialogItemPropsType) => {
    let dialogElement = props.dialogsData.map(
        (dialog:DialogPropsType) => <Dialog name={dialog.name} id={dialog.id}/>
    );
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
        </div>)
}
export default DialogItem;