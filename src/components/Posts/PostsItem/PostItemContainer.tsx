import {addPostThunk, deletePost, postLikeThunk, PostType} from "../../../Redux/posts-reducer";
import {connect} from "react-redux";
import PostItem from "./PostItem";
import React from "react";
import withAuthRedirect from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../../Redux/redux-store";


type MapStateToPropsType = {
    postData: Array<PostType>
    newPostText: string
    isAuth: boolean

}
type MapDispatchToPropsType = {
    addPostThunk: (post: string) => void
    postLikeThunk: (userID: number) => void
    deletePost: (userID: number) => void

}


class PostContainerAPI extends React.Component<MapStateToPropsType & MapDispatchToPropsType> {
    render() {
        return <PostItem {...this.props}/>
    }
}


let mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.postPage.postData,
        newPostText: state.postPage.newPostText,
        isAuth: state.auth.isAuth
    };
};


export default compose (connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {addPostThunk, postLikeThunk, deletePost}),
    withAuthRedirect)
(PostContainerAPI)
