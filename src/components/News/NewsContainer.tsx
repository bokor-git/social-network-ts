import {connect} from "react-redux";
import News from "./News";
import React from "react";
import {AppStateType} from "../../Redux/redux-store";

type MapStateToPropsType = {
    newsData: Array<{
        title: string
    }>
}

function NewsContainerAPI(props: MapStateToPropsType) {
    return <News newsData={props.newsData}/>
}


let mapStateToProps = (state: AppStateType) => {
    return {
        newsData: state.newsPage.newsData,
    }
};


let NewsContainer = connect<MapStateToPropsType, {}, {}, AppStateType>
(mapStateToProps, {})(NewsContainerAPI);


export default NewsContainer;
