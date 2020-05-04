import React from 'react';
import {connect} from "react-redux";
import MyEventItem from "./MyEventItem";
import {cleanThunk} from "../../Redux/events-reduser";


class MyEventItemContainerAPI extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <MyEventItem
            myEvents={this.props.myEvents}
            cleanThunk={this.props.cleanThunk}
        />

    }

}

let mapStateToProps = (state) => {
    return {
        myEvents: state.eventPage.myEvents,
    }
};


const
    MyEventContainer = connect(mapStateToProps, {cleanThunk})(MyEventItemContainerAPI);
export default MyEventContainer;

