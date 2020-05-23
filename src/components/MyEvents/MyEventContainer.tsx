import React from 'react';
import {connect} from "react-redux";
import MyEventItem from "./MyEventItem";
import {cleanThunk, EventType} from "../../Redux/events-reducer";
import {AppStateType} from "../../Redux/redux-store";


type mapStateToPropsType = {
    eventData: Array<EventType>
    myEvents: Array<{}>
}
type mapDispatchToPropsType = {
    cleanThunk: ()=>void
}

function MyEventItemContainerAPI(props: mapStateToPropsType & mapDispatchToPropsType) {
    return <MyEventItem
        myEvents={props.myEvents}
        cleanThunk={props.cleanThunk}
    />
}

let mapStateToProps = (state: AppStateType) => {
    return {
        myEvents: state.eventPage.myEvents,
        eventData: state.eventPage.eventData
    }
};


const MyEventContainer = connect  <mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, {cleanThunk})(MyEventItemContainerAPI);
export default MyEventContainer;

