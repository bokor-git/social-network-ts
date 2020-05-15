import React from 'react';
import {connect, DefaultRootState} from "react-redux";
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

class MyEventItemContainerAPI extends React.Component<mapStateToPropsType & mapDispatchToPropsType> {

    render() {
        return <MyEventItem
            myEvents={this.props.myEvents}
            cleanThunk={this.props.cleanThunk}
        />
    }

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

