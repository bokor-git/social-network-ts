import React from 'react';

import s from "./../Dialogs.module.css";
import {MassageDataType} from "../DialogsContainer";

type MessagePropsType= {
    text:string
}

function Message(props: MessagePropsType) {
    let {text} = props;
    return (
        <div className={s.massages}>
            {text}
        </div>
    )
}

type MassageItemPropsType= {massageData:MassageDataType}

function MassageItem(props: MassageItemPropsType) {
    let {massageData} = props;
    let massageElement = massageData.map(
        massage => <Message key={massage.id} text={massage.text}/>)
    return (<div className={s.massages}>
            {massageElement}
        </div>
    )
}

export default MassageItem;