import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const ADD_POST = "dialog-reducer/ADD-POST";
const LIKE_POST = "dialog-reducer/LIKE_POST";
const DELETE_POST = "dialog-reducer/DELETE_POST";


type PostsActionCreatorsTypes = {
    type: typeof ADD_POST
    post: string
}
export const addPostActionCreator = (post: string): PostsActionCreatorsTypes => {
    return {type: ADD_POST, post: post}
}

type PostLikeACType = {
    type: typeof LIKE_POST
    postID: number
}
export const postLikeAC = (postID: number): PostLikeACType => {
    return {type: LIKE_POST, postID}
}

type DeletePostACType = {
    type: typeof DELETE_POST
    postID:number
}
export const deletePostAC = (postID: number): DeletePostACType => {
    return {type: DELETE_POST, postID}
}


export type PostType = {
    id: number
    postText: string
    postLike: number
    postAvatar: string
}
type InitialStateType = {
    postData: Array<PostType>
    newPostText: string
}

let initialState: InitialStateType = {
    postData: [
        {
            id: 1,
            postText: "So, you want to have a really long race that eventually will attract the best runners from around the world. Unlike other races wute totaling somewhere around 24 to 26 miles",
            postLike: 2,
            postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
        },
        {
            id: 2,
            postText: "In a nod to Greek history, the first marathon commemorated the run of the soldier Pheidippides from a battlefield near the town of Marathon, Greece, to Athens in 490 B.C.",
            postLike: 3,
            postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
        },
        {
            id: 3,
            postText: "Despite the success of that first race, it took 13 more years of arguing before the International Amateur Athletic Federatio Olympics, there were six different distances.",
            postLike: 6,
            postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
        },

    ],
    newPostText: " "
};

type ActionTypes = PostsActionCreatorsTypes | PostLikeACType | DeletePostACType

const postsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: state.postData.length + 1,
                postText: action.post,
                postLike: 0,
                postAvatar: "https://www.shareicon.net/data/512x512/2016/06/27/787163_people_512x512.png"
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: " "
            };
        case LIKE_POST:
            return {
                ...state,
                postData: state.postData.map(p => {
                    if (p.id === action.postID) {
                        return {...p, postLike: (p.postLike + 1)}
                    }
                    return p
                }),
            };
        case DELETE_POST:
            debugger
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postID)
            };
        default:
            return state
    }
}
export default postsReducer;

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>


export const addPostThunk = (post: string):ThunkType => (dispatch) => {
    dispatch(addPostActionCreator(post))
}
export const postLikeThunk = (userID: number):ThunkType => (dispatch) => {
    dispatch(postLikeAC(userID))
}
export const deletePost = (userID: number):ThunkType => (dispatch) => {
    dispatch(deletePostAC(userID))
}