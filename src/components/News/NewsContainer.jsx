import {connect} from "react-redux";
import News from "./News";
import React from "react";



class NewsContainerAPI extends React.Component{
    constructor() {
        super();
    }
    render() {
        return <News newsData = {this.props.newsData}/>

    }

}



let mapStateToProps = (state)=>{
    return {
        newsData: state.newsPage.newsData,

    }
};

let mapDispatchToProps = (dispatch) => {

}

let NewsContainer = connect(mapStateToProps, mapDispatchToProps)(NewsContainerAPI);


export default NewsContainer;
