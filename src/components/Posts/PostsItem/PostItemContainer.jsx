
import { addPostThunk,  postLikeThunk} from "../../../Redux/dialogs-reducer";
import {connect} from "react-redux";
import PostItem from "./PostItem";
import React from "react";
import withAuthRedirect from "../../../hoc/AuthRedirect";
import {compose} from "redux";


class PostContainerAPI extends React.Component {
    render() {
        return <PostItem {...this.props}/>
    }
}


let mapStateToProps = (state) => {
    return {
        postData: state.postPage.postData,
        newPostText: state.postPage.newPostText,
    };
};



export default compose(
    connect(mapStateToProps, {addPostThunk, postLikeThunk}),
    withAuthRedirect)
(PostContainerAPI)
