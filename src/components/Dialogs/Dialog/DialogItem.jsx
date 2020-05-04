import React from 'react';
import s from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

const Dialog = ({name, id}) => {
    let path = "/dialogs/" + id;
    return (<div className={s.dialog + " " + s.active}>
        <NavLink to={path}> {name} </NavLink>
    </div>)
};

const DialogItem = ({dialogsData}) => {
    let dialogElement = dialogsData.map(
        dialog => <Dialog name={dialog.name} id={dialog.id}/>
    );
    return (

        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement}
            </div>
        </div>)
}
export default DialogItem;