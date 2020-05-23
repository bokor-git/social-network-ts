import React from 'react';
import s from "./../Events.module.css"
import {EventDataType} from "../EventContainer";


type ItemType = {
    id: number
    text: string
    poster: string
    type: string
    addEvent: (eventID:number, evText:string)=>void
}

function Item(props: ItemType) {
    let {poster, text, id, addEvent} = props;
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
}

export function FullMarathonsItems(props: EventsItemsType) {
    let {eventData, addEvent} = props;
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev => ev.type === "full").map(ev => <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
}

export function Marathons5kmItems(props: EventsItemsType) {
    let {eventData, addEvent} = props;
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev => ev.type === "5km").map(ev => <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
}

export function Marathons10kmItems(props: EventsItemsType) {
    let {eventData, addEvent} = props;
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev => ev.type === "10km").map(ev => <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
}

export function HalfMarathonsItems(props: EventsItemsType) {
    let {eventData, addEvent} = props;
    return <div>
        <div className={s.eventItem}>
            {eventData.filter(ev => ev.type === "half").map(ev => <Item {...ev} addEvent={addEvent}/>)
            }
        </div>
    </div>
}

type EventsItemsType = {
    eventData: EventDataType
    addEvent: (eventID:number, evText:string)=>void
}

export function AllEventsItems(props: EventsItemsType) {
    let {eventData, addEvent} = props;
    return <div className={s.eventItem}>
        {eventData.map(ev => <Item {...ev} addEvent={addEvent}/>)}
    </div>
}
