import React from 'react';
import s from "./../Events.module.css"
import {EventDataType} from "../EventContainer";
import {Button} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";


type ItemType = {
    id: number
    text: string
    poster: string
    type: string
    addEvent: (eventID: number, evText: string) => void
}

function Item(props: ItemType) {
    let {poster, text, id, addEvent} = props;
    return <div>
        <Paper elevation={3} style={{margin:"10px", padding:"10px"}}>
            <img alt="0" src={poster}/>
            <div>{text}</div>
            <div>
                <Button id="addEvent" color="primary" onClick={() => addEvent(id, text)} variant="contained">Accept
                    Event</Button>
            </div>
        </Paper>
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
    addEvent: (eventID: number, evText: string) => void
}

export function AllEventsItems(props: EventsItemsType) {
    let {eventData, addEvent} = props;
    return <div className={s.eventItem}>
        {eventData.map(ev => <Item {...ev} addEvent={addEvent}/>)}
    </div>
}
