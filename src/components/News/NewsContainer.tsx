import {connect, DefaultRootState} from "react-redux";
import News from "./News";
import React from "react";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    newsData: Array<{
        title: string
    }>
}

class NewsContainerAPI extends React.Component<MapStateToPropsType> {
    render() {
        return <News newsData={this.props.newsData}/>

    }

}


let mapStateToProps = (state: AppStateType) => {
    return {
        newsData: state.newsPage.newsData,
    }
};


let NewsContainer = connect<MapStateToPropsType, {}, {}, AppStateType>
(mapStateToProps, {})(NewsContainerAPI);


export default NewsContainer;
