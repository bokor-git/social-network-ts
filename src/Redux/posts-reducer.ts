import { BaseThunkType, InferActionTypes} from "./redux-store";



const actions = {
    addPostActionCreator: (post: string) => ({type: "ADD_POST", post: post} as const),
    postLikeAC: (postID: number) => ({type: "LIKE_POST", postID} as const),
    deletePostAC: (postID: number) => ({type: "DELETE_POST", postID} as const)
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

type ActionsTypes = InferActionTypes<typeof actions>

const postsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "ADD_POST":
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
        case "LIKE_POST":
            return {
                ...state,
                postData: state.postData.map(p => {
                    if (p.id === action.postID) {
                        return {...p, postLike: (p.postLike + 1)}
                    }
                    return p
                }),
            };
        case "DELETE_POST":
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

type ThunkType = BaseThunkType<ActionsTypes, void>


export const addPostThunk = (post: string):ThunkType => (dispatch) => {
    dispatch(actions.addPostActionCreator(post))
}
export const postLikeThunk = (userID: number):ThunkType => (dispatch) => {
    dispatch(actions.postLikeAC(userID))
}
export const deletePost = (userID: number):ThunkType => (dispatch) => {
    dispatch(actions.deletePostAC(userID))
}