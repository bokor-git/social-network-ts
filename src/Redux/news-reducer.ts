
let initialState = {
    newsData: [
        {title: "News will be here"}
    ]
}


type NewsReducerStateType = typeof initialState
const newsReducer = (state= initialState, action: any): NewsReducerStateType => {
    return state
};
export default newsReducer;