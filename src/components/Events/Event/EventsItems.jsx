import React from 'react';
import s from "./../Events.module.css"

const Item =({poster, text , id, addEvent})=>{
    debugger
    return <div>
        <img alt="0" src={poster}/>
        <div>{text}</div>
        <div>
            <button id="addEvent" onClick={() => addEvent(id, text)}>
                Accept
                Event
            </button>
        </div>
    </div>
};
export const FullMarathonsItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="full").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};

export const Marathons5kmItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="5km").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};
export const Marathons10kmItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="10km").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};
export const HalfMarathonsItems = ({eventData, addEvent}) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="half").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};


export const AllEventsItems = ({eventData, addEvent}) => {
    return <div className={s.eventItem}>
        {eventData.map(ev =>  <Item {...ev} addEvent={addEvent}/>)
        }
    </div>
};
