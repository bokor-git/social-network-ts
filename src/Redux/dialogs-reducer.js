const ADD_POST = "dialog-reducer/ADD-POST";
const LIKE_POST = "dialog-reducer/LIKE_POST";
const DELETE_POST = "dialog-reducer/DELETE_POST";

export const addPostActionCreator = (post) => {
    return {type: ADD_POST, post}
}

export const postLikeAC = (postID) => {
    return {type: LIKE_POST, postID}
}
export const deletePostActionCreator = (postID) => {
    return {type: DELETE_POST, postID}
}


let initialState = {
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
        }
    ],
};
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
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
            return {
                ...state,
                postData: state.postData.filter(p => p.id != action.postID)
            };
        default:
            return state
    }
}
export default dialogsReducer;

export const addPostThunk = (post) => (dispatch) => {
    dispatch(addPostActionCreator(post))
}
export const postLikeThunk = (userID) => (dispatch) => {
    dispatch(postLikeAC(userID))
}