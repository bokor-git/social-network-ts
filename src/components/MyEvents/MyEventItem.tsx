import React from 'react';
import s from "./MyEvent.module.css"

type MyEventItemPropsType = {
    myEvents: Array<{}>
    cleanThunk: () => void
}

const MyEventItem = ({myEvents, cleanThunk}: MyEventItemPropsType) => {
    return <div className={s.event}>
        <h2>My Events:</h2>
        {myEvents.map((e) => (<li>{[e]} </li>))}
        {myEvents.length === 0 ? null : <button onClick={() => cleanThunk()}>Clean</button>}
    </div>
}


export default MyEventItem;