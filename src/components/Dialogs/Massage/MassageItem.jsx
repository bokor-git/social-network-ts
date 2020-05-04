import React from 'react';

import s from "./../Dialogs.module.css";


const Message = ({text}) => {
    return (
        <div className={s.massages}>
            {text}
        </div>
    )
}

const MassageItem = ({massageData}) => {
    let massageElement = massageData.map(
        massage => <Message text={massage.text} id={massage.id}/>)
    return (<div className={s.massages}>
            {massageElement}
        </div>
    )
}
export default MassageItem;