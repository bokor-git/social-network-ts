import React from "react";
import PostItemContainer from "./PostsItem/PostItemContainer";


function Posts(props) {
    return (
        <div>
            <h1>My posts</h1>
            <PostItemContainer store={props.store}
                               newPostText={props.newPostText}
                               dispatch={props.dispatch}
                               postData={props.postData}/>
        </div>
    )
}


export default Posts