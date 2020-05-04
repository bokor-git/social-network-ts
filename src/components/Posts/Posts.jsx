import React from "react";
import PostItemContainer from "./PostsItem/PostItemContainer";

class Posts extends React.Component {

    render() {

        return (

            <div>
                <h1>My posts</h1>
                <PostItemContainer store={this.props.store}
                                   newPostText={this.props.newPostText}
                                   dispatch={this.props.dispatch}
                                   postData={this.props.postData}/>
            </div>
        )
    }
}


export default Posts