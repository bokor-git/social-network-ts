import React from "react";
import style from "./PostItem.module.css"
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {deletePost, PostType} from "../../../Redux/posts-reducer";


const maxLength10 =maxLengthCreator(15)



// @ts-ignore
const PostForm = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field placeholder={"Post"} name={"Post"} component={Textarea}
                    validate={[required, maxLength10]}/></div>
        <button> Add post</button>
    </form>
}
type formData = {
    Post:string
}
type ErrorType = string
const ReduxPostForm = reduxForm  <formData, {}, ErrorType>({
    form: 'post'
})(PostForm);

type PostItemPropsType = {
    postData: Array<PostType>
    newPostText: string
    isAuth: boolean
    addPostThunk: (post: string) => void
    postLikeThunk: (userID: number) => void
    deletePost: (userID: number) => void
}

const PostItem =  ({isAuth, postData, postLikeThunk, addPostThunk, deletePost}:PostItemPropsType) => {
    if (isAuth === false) return <Redirect to={"/Login"}/>
    let postElement = postData.map
    (p => <div className={style.post}>
        <div><img alt="no" src={p.postAvatar}/></div>
        <div>{p.postText}</div>
        <div>Like: {p.postLike}</div>
        <button onClick={() => {
            postLikeThunk(p.id)
        }}>
            like
        </button>
        <button onClick={() => {
            deletePost(p.id)
        }}>
            delete
        </button>
    </div>);

    let onSubmit = (formData:formData) => {
        addPostThunk((formData.Post))};

    return (
        <div>
            <div className={style.post}>
                <img alt="o" src="https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"/>
                <ReduxPostForm onSubmit={onSubmit}/>
            </div>
            <div>
                {postElement}
            </div>
        </div>)
};


export default PostItem
