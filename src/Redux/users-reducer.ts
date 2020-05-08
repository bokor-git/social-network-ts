import {userAPI} from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "users/SET_TOTAL_USERS";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const FOLLOFING_IN_PROGRESS = "users/FOLLOFING_IN_PROGRESS";

type UserType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}


type UsersActionTypes = {
    type: typeof FOLLOW | typeof UNFOLLOW | typeof SET_USERS | typeof SET_CURRENT_PAGE | typeof SET_TOTAL_USERS | typeof TOGGLE_IS_FETCHING | typeof FOLLOFING_IN_PROGRESS
    userID?: number
    users?: Array<UserType>
    currentPage?: number
    isFetching?: boolean
    totalCount?: number
}

export const followSuccess = (userID: number): UsersActionTypes => {
    return {type: FOLLOW, userID}
};
export const unfollowSuccess = (userID: number): UsersActionTypes => {
    return {type: UNFOLLOW, userID}
};
export const setUsers = (users: Array<UserType>): UsersActionTypes => {
    return {type: SET_USERS, users}
};
export const setCurrentPage = (currentPage: number): UsersActionTypes => {
    return {type: SET_CURRENT_PAGE, currentPage}
};
export const setTotalUsersCount = (totalCount: number): UsersActionTypes => {
    return {type: SET_TOTAL_USERS, totalCount: totalCount}
};
export const toggleFetching = (isFetching: boolean): UsersActionTypes => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
};
export const toggleFollowingProgress = (isFetching: boolean, userID: number): UsersActionTypes => {
    return {type: FOLLOFING_IN_PROGRESS, isFetching, userID}
};


let initialState = {
    users: [] as Array<UserType>,
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
};

export type InitialStateType = typeof initialState
const usersReducer = (state = initialState, action: any): InitialStateType => {
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

export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleFetching(true))
    const response = await userAPI.getUsers(currentPage, pageSize)
    dispatch(setTotalUsersCount(response.totalCount))
    dispatch(setUsers(response.items))
    dispatch(toggleFetching(false))
}
export const followUnfollowFlow = (userID: number, dispatchMethod: any, response: any, dispatch: any) => {
    dispatch(toggleFollowingProgress(true, userID))
    if (response.resultCode === 0) {
        dispatch(dispatchMethod(userID))
    }
    dispatch(toggleFollowingProgress(false, userID))
}

export const follow = (userID: number) => async (dispatch: any) => {
    const response = await userAPI.followAPI(userID)
    followUnfollowFlow(userID, followSuccess, response, dispatch)
}
export const unfollow = (userID: number) => async (dispatch: any) => {
    const response = await userAPI.unfollowAPI(userID)
    followUnfollowFlow(userID, unfollowSuccess, response, dispatch)

}

export default usersReducer;