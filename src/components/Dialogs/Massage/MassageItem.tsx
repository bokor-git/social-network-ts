import React from 'react';

import s from "./../Dialogs.module.css";
import {MassageDataType} from "../DialogsContainer";

type MessagePropsType= {
    text:string
}
const Message = ({text}:MessagePropsType) => {
    return (
        <div className={s.massages}>
            {text}
        </div>
    )
}

type MassageItemPropsType= {massageData:MassageDataType}

const MassageItem = ({massageData}:MassageItemPropsType) => {
    let massageElement = massageData.map(
        massage => <Message key={massage.id} text={massage.text}/>)
    return (<div className={s.massages}>
            {massageElement}
        </div>
    )
}
export default MassageItem;