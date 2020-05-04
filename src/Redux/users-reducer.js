import {userAPI} from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "users/SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOFING_IN_PROGRESS = "users/FOLLOFING_IN_PROGRESS";


export const followSuccess = (userID) => {
    return {type: FOLLOW, userID}
};
export const unfollowSuccess = (userID) => {
    return {type: UNFOLLOW, userID}
};
export const setUsers = (users) => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS, totalCount}
};
export const toggleFetching = (isFetching) => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const toggleFollowingProgress = (isFetching, userID) => {
    return {type: FOLLOFING_IN_PROGRESS, isFetching, userID}
};


let initialState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCount: action.totalCount
            };
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case FOLLOFING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            };
        default:
            return state
    }
};

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleFetching(true))
    const response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setTotalUsersCount(response.totalCount ))
    dispatch(setUsers(response.items))
    dispatch(toggleFetching(false))
}
export const followUnfollowFlow = (userID, dispatchMethod, response, dispatch) => {
    dispatch(toggleFollowingProgress(true, userID))
    if (response.resultCode === 0) {
        dispatch(dispatchMethod(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const follow = (userID) => async (dispatch) => {
    const response = await userAPI.followAPI(userID)
    followUnfollowFlow(userID, followSuccess, response, dispatch)
}
export const unfollow = (userID) => async (dispatch) => {
    const response = await userAPI.unfollowAPI(userID)
    followUnfollowFlow(userID, unfollowSuccess, response, dispatch)

}

export default usersReducer;