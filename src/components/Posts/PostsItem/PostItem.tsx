import React from "react";
import style from "./PostItem.module.css"
import {Redirect} from "react-router-dom";
import {InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utilits/validators/validators";
import {myCreateField, Textarea} from "../../common/FormsControls/FormsControls";
import {PostType} from "../../../Redux/posts-reducer";


const maxLength10 =maxLengthCreator(15)
type PostFormTypeKeys = Extract<keyof PostFormType, string>

const PostForm:React.FC<InjectedFormProps<PostFormType>> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            {myCreateField<PostFormTypeKeys>("Post", "Post", [required, maxLength10], "Textarea",)}
        </div>
        <button> Add post</button>
    </form>
}
type PostFormType = {
    Post:string
}

const ReduxPostForm = reduxForm  <PostFormType>({
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

function PostItem(props: PostItemPropsType) {
    let {isAuth, postData, postLikeThunk, addPostThunk, deletePost} = props;
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

    let onSubmit = (formData: PostFormType) => {
        addPostThunk((formData.Post))
    };

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
}


export default PostItem
