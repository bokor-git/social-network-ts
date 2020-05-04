import React from 'react';
import s from "./MyEvent.module.css"




const MyEventItem =(props)=> {
        return <div className={s.event} >
            <h2>My Events:</h2>
            {props.myEvents.map(e=>(<li>{[e]} </li>))}
            {props.myEvents.length === 0 ? null  : <button onClick={()=>props.cleanThunk()}>Clean</button>}
        </div>

    }




export default MyEventItem;