import React from 'react';
import {
    AllEventsItems,
    FullMarathonsItems,
    HalfMarathonsItems,
    Marathons10kmItems,
    Marathons5kmItems,
} from "./Event/EventsItems";
import {connect} from "react-redux";
import {addEvent} from "../../Redux/events-reducer";
import s from "./Events.module.css";
import EventHeader from "./Event/EventHeader";
import EventFilter from "./Event/EventFilter";
import {Route, Switch} from "react-router-dom";
import {AppStateType} from "../../Redux/redux-store";

export type EventDataType = Array<{
    id: number
    text: string
    poster: string
    type: string
}>

type MapStateToPropsType= {
    eventData: EventDataType
    myEvents: Array<{}>
}

export type AddEventType ={
    addEvent: (eventID:number, evText:string)=>void
}
type MapDispatchToPropsType=AddEventType

class EventItemContainerAPI extends React.Component<MapStateToPropsType&MapDispatchToPropsType> {
    render() {
        return <div className={s.eventContent}>
            <EventFilter/>
            <EventHeader/>
            <div className="events-content">
                <Switch>
                    <Route exact path="/Events" render={() => (<AllEventsItems {...this.props}/>)}/>
                    <Route exact path="/Events/Half-Marathons" render={() => (<HalfMarathonsItems {...this.props}/>)}/>
                    <Route exact path="/Events/Full-Marathons" render={() => (<FullMarathonsItems {...this.props}/>)}/>
                    <Route exact path="/Events/10km-Marathons" render={() => (<Marathons10kmItems {...this.props}/>)}/>
                    <Route exact path="/Events/5km-Marathons" render={() => (<Marathons5kmItems {...this.props}/>)}/>
                </Switch>
            </div>
        </div>
    }
}


let mapStateToProps = (state:AppStateType) => {
    return {
        eventData: state.eventPage.eventData,
        myEvents: state.eventPage.myEvents,
    }
};

//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
const EventContainer = connect<MapStateToPropsType, MapDispatchToPropsType,{},AppStateType>(mapStateToProps, {addEvent})(EventItemContainerAPI);
export default EventContainer;

