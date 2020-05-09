import React from 'react';
import s from "./../Events.module.css"
import { EventDataType} from "../EventContainer";


type ItemType = {
    id: number
    text: string
    poster: string
    type: string
    addEvent: (eventID:number, evText:string)=>void
}

const Item =({poster, text , id, addEvent}:ItemType)=>{
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
export const FullMarathonsItems = ({eventData, addEvent}:EventsItemsType) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="full").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};

export const Marathons5kmItems = ({eventData, addEvent}:EventsItemsType) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="5km").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};
export const Marathons10kmItems = ({eventData, addEvent}:EventsItemsType) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="10km").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};
export const HalfMarathonsItems = ({eventData, addEvent}:EventsItemsType) => {
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev=>ev.type==="half").map(ev =>  <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
};

type EventsItemsType = {
    eventData: EventDataType
    addEvent: (eventID:number, evText:string)=>void
}

export const AllEventsItems = ({eventData, addEvent}:EventsItemsType) => {
    return <div className={s.eventItem}>
        {eventData.map(ev =>  <Item {...ev} addEvent={addEvent}/>)}
    </div>
};
