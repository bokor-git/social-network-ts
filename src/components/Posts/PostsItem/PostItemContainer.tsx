import {addPostThunk, deletePost, postLikeThunk, PostType} from "../../../Redux/posts-reducer";
import {connect} from "react-redux";
import PostItem from "./PostItem";
import React from "react";
import withAuthRedirect from "../../../hoc/AuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../../Redux/redux-store";
import {ProfileDataType} from "../../../types/types";


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


function PostContainerAPI(props: MapStateToPropsType & MapDispatchToPropsType) {
    return <PostItem {...props}/>
}


let mapStateToProps = (state: AppStateType) => {

    return {
        postData: state.postPage.postData,
        newPostText: state.postPage.newPostText,
        isAuth: state.auth.isAuth,
    };
};


const PostContainer = compose<React.ComponentType> (connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {addPostThunk, postLikeThunk, deletePost}),
    withAuthRedirect)
(PostContainerAPI)

export default PostContainer